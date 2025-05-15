/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = new Array(s.length);
    
    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = s[i];
    }

    return result.join('');
};
