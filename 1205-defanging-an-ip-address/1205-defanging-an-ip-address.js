/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let result = "";
  
  for(let item of address) {
    if(item === ".") {
      result += "[.]";
    } else {
      result += item;
    }
  }
  return result;
};