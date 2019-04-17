const https = require('https');
const { URL } = require('url');

function bitcoinTicker({ limit }) {
  const baseUrl = 'https://api.coinmarketcap.com/v2/ticker/';
  const myUrl = new URL(baseUrl);
  myUrl.searchParams.append('limit', limit);
  return new Promise((resolve) => {
    https.get(myUrl, (res) => {
      let data = '';
      res.setEncoding('utf-8');

      res.on('data', (d) => {
        data += d;
      });
      res.on('end', () => {
        const parsedData = JSON.parse(data);
        resolve(parsedData);
      });
    });
  });
}

export {
  bitcoinTicker,
};
