// Symbol       Value
// I             1
// IV            4
// V             5
// IX            9
// X             10
// XL            40
// L             50
// XC            90
// C             100
// CD            400
// D             500
// CM            900
// M             1000

function convertToRoman(integer) {
  const romanToIntegerMapping = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  const romans = Object.keys(romanToIntegerMapping);
  const ints = Object.values(romanToIntegerMapping);
  let num = integer;
  let numInRoman = '';
  for (let index = 0; index < ints.length; index += 1) {
    while (num - ints[index] >= 0) {
      numInRoman += romans[index];
      num -= ints[index];
    }
  }
  return numInRoman;
}

// console.log(convertToRoman(4));
export { convertToRoman };
