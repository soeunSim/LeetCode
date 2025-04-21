/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const ROMANTABLE = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
  }
  const changeArray = [...s];
  let box = 0;
  
  for(let i =0; i<changeArray.length; i++) {
    
    if(changeArray[i] === "V") {
      // 받아온 문자열로마자가 5이고 내 앞에 1이 있다면 빼서 계산.
      if (changeArray[i - 1] === "I") {
        let two = ROMANTABLE[changeArray[i - 1 ]] + ROMANTABLE[changeArray[i - 1]];
        box = box + (ROMANTABLE[changeArray[i]] - two);
      } else {
        box = box + ROMANTABLE[changeArray[i]];
      }
    } else if (changeArray[i] === "X") {
      // 받아온 문자열로마자가 10이고 내 앞에 1이 있다면 빼서 계산.
      if (changeArray[i - 1] === "I") {
        let two = ROMANTABLE[changeArray[i - 1 ]] + ROMANTABLE[changeArray[i - 1]];
        box = box + (ROMANTABLE[changeArray[i]] - two);
      } else {
        box = box + ROMANTABLE[changeArray[i]];
      }     
    } else if (changeArray[i] === "L") {
      // 받아온 문자열로마자가 50이고 내 앞에 10이 있다면 빼서 계산.
      if (changeArray[i - 1] === "X") {
        let two = ROMANTABLE[changeArray[i - 1 ]] + ROMANTABLE[changeArray[i - 1]];
        box = box + (ROMANTABLE[changeArray[i]] - two);
      } else {
        box = box + ROMANTABLE[changeArray[i]];
      }       
    } else if (changeArray[i] === "C") {
      // 받아온 문자열로마자가 100이고 내 앞에 10이 있다면 빼서 계산.
      if (changeArray[i - 1] === "X") {
        let two = ROMANTABLE[changeArray[i - 1 ]] + ROMANTABLE[changeArray[i - 1]];
        box = box + (ROMANTABLE[changeArray[i]] - two);
      } else {
        box = box + ROMANTABLE[changeArray[i]];
      }      
    } else if (changeArray[i] === "D") {
      // 받아온 문자열로마자가 500이고 내 앞에 100이 있다면 빼서 계산.
      if (changeArray[i - 1] === "C") {
        let two = ROMANTABLE[changeArray[i - 1 ]] + ROMANTABLE[changeArray[i - 1]];
        box = box + (ROMANTABLE[changeArray[i]] - two);
      } else {
        box = box + ROMANTABLE[changeArray[i]];
      }      
    } else if (changeArray[i] === "M") {
      // 받아온 문자열로마자가 1000이고 내 앞에 100이 있다면 빼서 계산.
      if (changeArray[i - 1] === "C") {
        let two = ROMANTABLE[changeArray[i - 1 ]] + ROMANTABLE[changeArray[i - 1]];
        box = box + (ROMANTABLE[changeArray[i]] - two);
      } else {
        box = box + ROMANTABLE[changeArray[i]];
      }    
    } else {
      box = box + ROMANTABLE[changeArray[i]];
    }
  }
  
 return box;
};
