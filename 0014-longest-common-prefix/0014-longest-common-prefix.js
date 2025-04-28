/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let box = strs[0];

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < box.length; j++) {
      if (box[j] !== strs[i][j]) {
        box = box.slice(0, j);
        break;
      }
    }
  }
  
  return box;
};