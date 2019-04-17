const URL = require('url');

function convertToFileUrl(filePath) {
  let url = URL.pathToFileURL(filePath);
  url = URL.parse(url.href, false);
  return url.href;
}

export {
  convertToFileUrl,
};
