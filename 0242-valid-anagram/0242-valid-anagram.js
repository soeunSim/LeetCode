/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
	    return false;
    }
    
    const memoLetters = {};
    for (sItem of s) {
	    if (Object.hasOwn(memoLetters, sItem)) {
		    memoLetters[sItem] += 1
	    } else {
		    memoLetters[sItem] = 1;
	    }
    }
    
    for (tItem of t) {
	    if (Object.hasOwn(memoLetters, tItem)) {
		    if (memoLetters[tItem] > 0) {
			    memoLetters[tItem] = memoLetters[tItem]- 1;
		    } else {
			    return false;
		    }
	    } else {
		    return false;
	    }
    }
    
    return true;
};