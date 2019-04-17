const fs = require('fs');

const csvToJson = fileName => new Promise((res, reject) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    const lines = data.split('\n');
    const firstLine = lines[0];
    const restLines = lines.splice(1);
    const keys = firstLine.split(',');
    const objects = [];
    for (const line of restLines) {
      const values = line.split(',');
      const object = values.reduce((acc, value, index) => {
        acc[keys[index]] = value;
        return acc;
      }, {});
      objects.push(object);
    }
    res(objects);
  });
});

export {
  csvToJson,
};
