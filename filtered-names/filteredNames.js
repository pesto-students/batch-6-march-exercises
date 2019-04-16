
const fs = require('fs');

const hasExtn = extn => fileName => fileName.endsWith(`.${extn}`);

function filteredNames(directoryPath, fileExtn) {
  const extnValidator = hasExtn(fileExtn);
  const fileNames = fs.readdirSync(directoryPath);
  return fileNames.filter(extnValidator);
}

export {
  filteredNames,
};
