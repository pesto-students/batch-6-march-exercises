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
    fileNameParts[0] = `${fileNameParts[0]} (${fileIndex})`;
    const newFileName = `${dir}/${fileNameParts[0]}`;
    const newFilePath = `${directory}/${fileNameParts.join('.')}`;
    if (sync) {
      fs.writeFileSync(newFilePath, 'hello', { encoding: 'utf8' });
      return newFileName;
    }
    return fsPromises.writeFile(newFilePath).then(() => newFileName);
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
