const fs = require('fs');

const fsPromises = fs.promises;
const path = require('path');

const directory = path.join(__dirname, '/fixtures');

const checkForFile = (files, filePath, sync = false) => {
  const [dir, fileName] = filePath.split('/');

  if (files.indexOf(fileName) > -1) {
    const sortedFiles = files.sort();
    const fileIndex = sortedFiles.length;
    const fileNameParts = fileName.split('.');
    fileNameParts[0] = `${fileNameParts[0]}(${fileIndex})`;
    const newFile = `${dir}/${fileNameParts.join('')}`;
    if (sync) {
      return fs.writeFileSync(newFile, 'hello', { encoding: 'utf8' });
    }
    return fsPromises.writeFile(newFile).then(() => fileName);
  }
  return filePath;
};

function unusedFilename(filePath) {
  return fsPromises.readdir(directory).then(files => checkForFile(files, filePath));
}

unusedFilename.sync = (filePath) => {
  const files = fs.readdirSync(directory);
  return checkForFile(files, filePath, true);
};

export { unusedFilename };
