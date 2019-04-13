/* eslint-disable no-undef */
function addBigIntegers(string) {
  const [length, ...stringNums] = string.split('\n');
  let bigInt = BigInt(0);
  for (let i = 0; i < length; i += 1) {
    bigInt += BigInt(stringNums[i]);
  }
  return bigInt.toString();
}
export { addBigIntegers };
