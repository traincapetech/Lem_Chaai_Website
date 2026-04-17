const fs = require('fs');
let js = fs.readFileSync('d:/lem_chai/script.js', 'utf8');

// Replace unsafe event listener bindings
js = js.replace("mobileMenuBtn.addEventListener('click', () => {", `if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {`);
js = js.replace("});\n\n// Close Mobile Menu", "});\n}\n\n// Close Mobile Menu");


fs.writeFileSync('d:/lem_chai/script.js', js, 'utf8');
console.log('Fixed script.js');
