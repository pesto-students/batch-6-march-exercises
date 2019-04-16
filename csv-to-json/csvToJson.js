const fs = require('fs');

function csvToJson(csvFile) {
  const stream = fs.createReadStream(csvFile, { encoding: 'utf8' });
  let csvData;
  let jsonData;
  return new Promise((resolve) => {
    stream.on('data', (data) => {
      csvData = data.split('\n');
      const rows = csvData.map(row => row.split(','));
      const shData = rows.slice(1);
      jsonData = shData.reduce((acc, elm) => {
        const [name, superheroname, power] = elm;
        acc.push({
          name,
          superheroname,
          power,
        });
        return acc;
      }, []);
    });
    stream.on('close', () => {
      resolve(jsonData);
    });
  });
}


export { csvToJson };
