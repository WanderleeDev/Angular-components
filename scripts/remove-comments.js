const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(fullPath));
        } else {
            results.push(fullPath);
        }
    });
    return results;
}

const files = walkDir('src/app/modules/components');

files.forEach(file => {
  if (file.endsWith('.html')) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove HTML comments
    content = content.replace(/[ \t]*<!--[\s\S]*?-->[ \t]*\n?/g, '');
    fs.writeFileSync(file, content);
  } else if (file.endsWith('.ts')) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove TS block comments
    content = content.replace(/[ \t]*\/\*[\s\S]*?\*\/[ \t]*\n?/g, '');
    // Remove TS line comments safely (not preceded by :)
    // This avoids matching http:// or https://
    content = content.replace(/(?<!:)[ \t]*\/\/.*$/gm, '');
    fs.writeFileSync(file, content);
  } else if (file.endsWith('.css')) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove CSS block comments
    content = content.replace(/[ \t]*\/\*[\s\S]*?\*\/[ \t]*\n?/g, '');
    fs.writeFileSync(file, content);
  }
});

console.log('✅ All comments removed from components.');
