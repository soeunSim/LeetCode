/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const changeArray = s.split(" ").reverse();
    let  resultBox = [];
  
    for (let i = 0; i<changeArray.length; i++) {
      console.log(changeArray);
      if(changeArray[i] !== "") {
        resultBox.push(changeArray[i]);
        break;
       
      }
    }
    return resultBox[0].length;
};