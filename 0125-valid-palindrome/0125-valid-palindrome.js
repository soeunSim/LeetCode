/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const changeLower = s.toLowerCase();
    const changeLatterAndNumber = changeLower.replace(/[^a-zA-Z0-9]/g, "");
    
    let left = 0;
    let right = changeLatterAndNumber.length - 1;
    
    while (left < right) {
	    if (changeLatterAndNumber[left] === changeLatterAndNumber[right]) {
		    left++;
		    right--;
	    } else {
		    return false;
	    }
    }
    return true;
};