const fs = require('fs');

let html = fs.readFileSync('d:/lem_chai/menu.html', 'utf8');

// Replace w-16 text-right with whitespace-nowrap min-w-[75px] text-right
html = html.replace(/w-16 text-right/g, 'min-w-[80px] text-right whitespace-nowrap');

fs.writeFileSync('d:/lem_chai/menu.html', html, 'utf8');
console.log('Fixed wrap issues');
