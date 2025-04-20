var isValid = function(s) {
    const changeArray = [...s];
    const box = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (let i =0; i<changeArray.length; i++) {
	    if (changeArray[i] === "(" || changeArray[i] === "{" || changeArray[i] === "[") {
		    box.push(changeArray[i]);
	    }
        if (changeArray[i] === ")") {
          if (box.length === 0) return false;
          let popbox = box.pop();
          if (popbox !== pairs[changeArray[i]]) return false;
        } else if (changeArray[i] === "]") {
          if (box.length === 0) return false;
          let popbox = box.pop();
          if (popbox !== pairs[changeArray[i]]) return false;          
        }else if (changeArray[i] === "}") {
          if (box.length === 0) return false;
          let popbox = box.pop();
          if (popbox !== pairs[changeArray[i]]) return false;            
        }
    }
    console.log(box);
    if(box.length === 0) {
      return true;
    } else {
      return false;
    }
};