const fs = require('fs');
const md = require('marked');
const yaml = require('node-yaml').parse;
const CleanCSS = require('clean-css');
const babel = require("@babel/core");
const UglifyJS = require("uglify-js");

// opening the source file
const sourceParts = fs.readFileSync('./article.md', 'utf8').split('---');
const header = yaml(sourceParts[0]);
let body = sourceParts[1];

// setting up external libraries and styles set in the header
let libLinks = '';
let styleLinks = '';

const libraryPresets = {'jquery': 'https://code.jquery.com/jquery-3.3.1.min.js',
             'highcharts': 'https://code.highcharts.com/highcharts.js',
             'd3': 'https://d3js.org/d3.v3.min.js'}

for (library of header.libraries) {
    if (library === "datatables") {
        libLinks += '<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>\n'
        libLinks += '<script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>\n'
        styleLinks += '<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">\n'
        styleLinks += '<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css">\n'
    }
    else if (library in libraryPresets) {
        libLinks += '<script src="' + libraryPresets[library] + '"></script>\n'
    } else {
        libLinks += '<script src="' + library + '"></script>\n'
    }
}

for (style of header.styles) {
    styleLinks += '<link rel="stylesheet" type="text/css" href="' + style + '">'
}

header.libraries = libLinks;
header.styles = styleLinks;

// compressing and inlining local CSS
let styleInput = '';
fs.readdirSync('./css/').forEach(file => {
  styleInput += fs.readFileSync('./css/' + file, 'utf8');
});
header.styles += '<style>' + new CleanCSS().minify(styleInput).styles + '</style>';

// babelfying + uglifying and inlining local JS
let scriptInput = '';
fs.readdirSync('./js/').forEach(file => {
  scriptInput += fs.readFileSync('./js/' + file, 'utf8');
});

if (process.argv[2] !== "test") {
    scriptInput = babel.transformSync(scriptInput,{'presets': ['@babel/preset-env']}).code;
    scriptInput = UglifyJS.minify(scriptInput).code;
}
scriptInput = '<script>' + scriptInput + '</script>';

// applying markdown to the body
body = md(body);

// replacing pseudotags in the body
body = body.replace(new RegExp('<wide>', 'g'), '</div><div class="row-main row-main--article">');
body = body.replace(new RegExp('</wide>', 'g'), '</div><div class="row-main row-main--narrow">');

body = body.replace(new RegExp('<left>', 'g'),'<div class="b-inline b-inline--left"><div class="b-inline__wrap"><div class="b-inline__content"><div class="text-sm">');
body = body.replace(new RegExp('</left>', 'g'),'</div></div></div></div>');

body = body.replace(new RegExp('<right>', 'g'),'<div class="b-inline b-inline--right"><div class="b-inline__wrap"><div class="b-inline__content"><div class="text-sm">');
body = body.replace(new RegExp('</right>', 'g'),'</div></div></div></div>');

header.content = body;
    
// reading the snowfall template
let template_file = '';

if (header.options.includes('noheader')) {
    template_file = './templates/snowfall_noheader.html';
    if (header.options.includes('nopic')) {
        header.mainphoto = '';
    } else {
        header.mainphoto = '<figure class="b-detail__img"><img src="' + header['coverimg'] + '" width="100%" /><figcaption>' + header['coverimg_note'] + '</figcaption></figure>';
    }
} else {
    template_file = './templates/snowfall.html';
}

let template = fs.readFileSync(template_file, 'utf8');

// the wide option
if (header.options.includes('wide')) {
    header.column = '<div class="row-main row-main--article">'
} else {
    header.column = '<div class="row-main row-main--narrow">'
}

// filling the template
for (variable of template.match(/{(.*?)}/g)) {
    template = template.replace(variable, header[variable.substring(1,variable.length-1)])
}

// injecting the JS and finishing up
template = template + scriptInput;

fs.writeFileSync('./output.html', template);

// writing a dummy index
let wrapper = fs.readFileSync('./templates/wrapper.html','utf8');
wrapper = wrapper.replace('{content}', template);
fs.writeFileSync('./index.html', wrapper);