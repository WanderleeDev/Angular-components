const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/modules/components/loader/sliders.loader.ts',
  'src/app/modules/components/loader/lists.loader.ts',
  'src/app/modules/components/loader/cards.loader.ts',
  'src/app/modules/components/loader/others.loader.ts',
];

filesToUpdate.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/isResponsiveDoubleColumn/g, 'isResponsiveColumn');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
