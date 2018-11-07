
# fill template
for variable in re.findall(r"\{(\w+)\}", template):
    template = template.replace('{' + variable + '}', str(art[variable]))

# pack JSscripts
temp = ''
for script in sorted(os.listdir('./js/')):
    if script[-2:] == "js":
        with open('./js/' + script, encoding='utf-8') as js_file:
            jmin = jsmin(js_file.read())
            temp += '\n' + jmin

template = template + '<script>' + temp + '</script>\n' 

# write template
with open('./output.html', 'w', encoding='utf-8') as f:
    f.write(template)

# write wrapped content into dummy index
with open('./templates/wrapper.html', encoding='utf-8') as t:
    wrapper = t.read()
    
wrapper = wrapper.replace('{content}', template)

with open('./index.html', 'w', encoding='utf-8') as f:
    f.write(wrapper)
