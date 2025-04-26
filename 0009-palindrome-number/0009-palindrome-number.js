/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const changeArray = [...x.toString()].reverse();
    const reChangeString = changeArray.join("");
    if(x.toString() === reChangeString) {
      console.log("dd");
      return true;
    } else {
      return false;
    }
};