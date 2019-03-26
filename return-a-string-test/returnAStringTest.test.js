const returnAString = () => 'helloworld';

describe('returnAString', () => {
  test('should contain a string', () => {
    expect(returnAString()).toContain('world');
  });
});
