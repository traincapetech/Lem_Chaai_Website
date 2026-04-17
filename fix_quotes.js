const fs = require('fs');
let html = fs.readFileSync('d:/lem_chai/menu.html', 'utf8');
html = html.replace(/text-right""/g, 'text-right"');
fs.writeFileSync('d:/lem_chai/menu.html', html, 'utf8');
console.log('Fixed quotes.');
