
const request = require('supertest');
const app = require('./src/index.js');

describe('/', () => {
  test('should return correct status code', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('should return correct response', (done) => {
    request(app).get('/movie/godfather').then((response) => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('My favorite movie is godfather');
      done();
    });
  });
});
