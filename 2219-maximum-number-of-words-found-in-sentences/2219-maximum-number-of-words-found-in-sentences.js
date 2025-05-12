/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let checkLength = 0;
    for(let item of sentences) {
        let box = item.split(" ");
        if (checkLength < box.length) {
            checkLength = box.length;
        }
    }
    return checkLength;
};