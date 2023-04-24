const fs = require('fs');
let text = fs.readFileSync('./assets/read_file.txt','utf-8');
console.log(text);
let newText = text.replace('default','new');
fs.writeFileSync('./assets/newfile.txt',newText);
