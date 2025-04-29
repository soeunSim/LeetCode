/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const checkString = haystack.includes(needle);
  if(checkString) {
    const result = haystack.indexOf(needle);
    return result;
  } else {
    return -1;
  }
};