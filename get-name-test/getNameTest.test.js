function getName(name) {
  if (typeof name === 'string') return `You entered: ${name}`;
  throw new Error('name should be of type string');
}


describe('throwError test', () => {
  test('should return string with given name', () => {
    const name = 'Martin Garrix'
    const actual = getName(name);
    const expected = name;
    expect(actual).toMatch(expected);
  });

  test('should throw error if argument is not a string', () => {
    const expected = 'name should be of type string';
    expect(() => getName(123)).toThrow(expected);
  });
});
