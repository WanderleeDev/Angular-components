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
    
    const hasCss = fs.existsSync(path.join(compDir, `${comp.name}.css`));
    const hasBaseTs = fs.existsSync(path.join(compDir, `${comp.name}.ts`));
    const hasBaseHtml = fs.existsSync(path.join(compDir, `${comp.name}.html`));
    
    const hasTailwindTs = fs.existsSync(path.join(compDir, `${comp.name}.tailwind.ts`));
    
    // If it has a CSS file, the base component is the CSS version
    if (hasCss && hasBaseTs) {
      filePathsObj += `      css: {\n`;
      filePathsObj += `        ts: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.ts',\n`;
      if (hasBaseHtml) {
        filePathsObj += `        html: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.html',\n`;
      }
      filePathsObj += `        css: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.css',\n`;
      filePathsObj += `      },\n`;
      
      // And check for a separate tailwind version
      if (hasTailwindTs) {
        filePathsObj += `      tailwind: {\n`;
        filePathsObj += `        ts: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.tailwind.ts',\n`;
        if (fs.existsSync(path.join(compDir, `${comp.name}.tailwind.html`))) {
          filePathsObj += `        html: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.tailwind.html',\n`;
        }
        filePathsObj += `      },\n`;
      }
    } else if (hasBaseTs) {
      // It DOES NOT have a CSS file. The base component is Tailwind-only!
      filePathsObj += `      tailwind: {\n`;
      filePathsObj += `        ts: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.ts',\n`;
      if (hasBaseHtml) {
        filePathsObj += `        html: 'assets/registry/${comp.section}/${comp.folder}/${comp.name}.html',\n`;
      }
      filePathsObj += `      },\n`;
    }
    
    filePathsObj += `    },\n`;
  });
  
  filePathsObj += '  }';

  // First, remove existing filePaths if present inside the metadata object
  if (content.includes('filePaths:')) {
      content = content.replace(/,\s*filePaths:\s*{[\s\S]*?}(?=\s*};)/, '');
      content = content.replace(/filePaths:\s*{[\s\S]*?},?(?=\s*};)/, '');
  }
  
  // Find the METADATA object and append filePaths to it
  const metadataRegex = /(export const \w+_METADATA: SectionMetadata = {[\s\S]*?)(};)/;
  content = content.replace(metadataRegex, `$1,\n${filePathsObj}\n$2`);

  // Clean up any double commas
  content = content.replace(/,\s*,/g, ',');

  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated ${fileName}`);
});
