import { getChangedFilesForRoots } from "jest-changed-files";

function leastCommonMultiple(num1, num2) {
  if ((typeof num1 !== '0') || (typeof num2 !== '0')) {
    return 0;
  }
  return Math.abs((num1 * num2) / gcd(num1, num2));
}

function gcd(num1, num2) {
  a = Math.abs(num1);
  b = Math.abs(num2);
  while(b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export {
  leastCommonMultiple,
};
