const request = require('supertest');
const app = require('./');

describe('/', () => {
  test('default route should send hello with status code of 200', async (done) => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello');
    done();
  });
});

describe('/languages', () => {
  test('languages route should send correct middleware header and data', async (done) => {
    const response = await request(app).get('/languages');
    const responseObj = JSON.parse(response.text);
    expect(response.headers['middleware-header']).toBe('languages');
    expect(responseObj).toEqual(['Javascript', 'Ruby', 'C++', 'Java', 'Python']);
    done();
  });
});

describe('/packages', () => {
  test('packages route shuold send correct middleware header and data', async (done) => {
    const response = await request(app).get('/packages');
    const responseObj = JSON.parse(response.text);
    expect(response.headers['middleware-header']).toBe('packages');
    expect(responseObj).toEqual(['express', 'body-parser', 'react', 'chartjs', 'enquirer']);
    done();
  });
});
