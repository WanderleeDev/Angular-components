const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../src/app/modules/components');
const targetDir = path.join(__dirname, '../src/assets/registry');
const excludeFolders = ['loader'];

// 1. Limpiar la carpeta de destino para no dejar archivos viejos
if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}

// 2. Función recursiva para copiar
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    // Ignorar carpetas excluidas (como 'loader') si estamos en la raíz del origen
    if (entry.isDirectory() && excludeFolders.includes(entry.name) && src === sourceDir) {
      console.log(`⏭️  Skipping directory: ${entry.name}`);
      continue;
    }

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 3. Ejecutar
console.log('🏗️  Building component registry...');
copyDirectory(sourceDir, targetDir);
console.log('✅ Registry built successfully at src/assets/registry!');
