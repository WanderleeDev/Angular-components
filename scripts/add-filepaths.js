const fs = require('fs');
const path = require('path');

const loaderDir = path.join(__dirname, '../src/app/modules/components/loader');
const registryDir = path.join(__dirname, '../src/assets/registry');
const files = fs.readdirSync(loaderDir).filter(f => f.endsWith('.loader.ts'));

files.forEach(fileName => {
  const filePath = path.join(loaderDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find all components defined via dynamic imports
  const importRegex = /import\('app\/modules\/components\/(.+?)\/(.+?)\/(.+?)'\)/g;
  let match;
  const components = [];
  
  while ((match = importRegex.exec(content)) !== null) {
    components.push({
      section: match[1],
      folder: match[2],
      name: match[3]
    });
  }

  if (components.length === 0) return;

  let filePathsObj = '  filePaths: {\n';
  
  components.forEach(comp => {
    filePathsObj += `    '${comp.name}': {\n`;
    
    const compDir = path.join(registryDir, comp.section, comp.folder);
    if (!fs.existsSync(compDir)) return;
    
    // Check for CSS version
    if (fs.existsSync(path.join(compDir, `${comp.name}.ts`))) {
      filePathsObj += `      css: {\n`;
      filePathsObj += `        ts: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.ts',\n`;
      if (fs.existsSync(path.join(compDir, `${comp.name}.html`))) {
        filePathsObj += `        html: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.html',\n`;
      }
      if (fs.existsSync(path.join(compDir, `${comp.name}.css`))) {
        filePathsObj += `        css: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.css',\n`;
      }
      filePathsObj += `      },\n`;
    }
    
    // Check for Tailwind version
    if (fs.existsSync(path.join(compDir, `${comp.name}.tailwind.ts`))) {
      filePathsObj += `      tailwind: {\n`;
      filePathsObj += `        ts: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.tailwind.ts',\n`;
      if (fs.existsSync(path.join(compDir, `${comp.name}.tailwind.html`))) {
        filePathsObj += `        html: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.tailwind.html',\n`;
      }
      filePathsObj += `      },\n`;
    }
    
    filePathsObj += `    },\n`;
  });
  
  filePathsObj += '  },';

  // If filePaths already exists in the metadata, replace it
  const hasFilePaths = /filePaths:\s*{[\s\S]*?},?\n};/m.test(content);
  
  if (hasFilePaths) {
    content = content.replace(/filePaths:\s*{[\s\S]*?}(,?)(\s*)\n};/m, `${filePathsObj}\n};`);
  } else {
    // Inject at the end of the metadata object
    content = content.replace(/};?\s*$/m, `,\n${filePathsObj}\n};\n`);
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated ${fileName}`);
});
