const fs = require('fs');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const md = require('markdown').markdown;
const yaml = require('node-yaml').parse;
const CleanCSS = require('clean-css');

// webpack: babel + uglify the scripts
//compiler.run( (err, stats) => {console.log(stats);} );

// opening the source file
const sourceParts = fs.readFileSync('./article.md', 'utf8').split('---');

// loading the header
console.log(yaml(sourceParts[0]));

//compressing CSS
let input = "";
fs.readdirSync("./css/").forEach(file => {
  input += fs.readFileSync("./css/"+ file, 'utf8');
});
const output = new CleanCSS().minify(input);
console.log(output.styles);