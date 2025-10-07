/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i-= 1) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
    // let number = Number(digits.join(""));

    // number += 1;
    // const changeString = String(number);

    // const resultBox = [];

    // for (let num of changeString) {
    //     resultBox.push(Number(num));
    // }

    // return resultBox;
