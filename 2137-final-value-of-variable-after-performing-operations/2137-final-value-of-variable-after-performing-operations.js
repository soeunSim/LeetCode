/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let box = 0;
    for(let item of operations) {
        if(item === "--X") {
            box += -1;
        } else if (item === "X--") {
            box += -1;
        } else if (item === "++X") {
            box += 1;
        } else if (item === "X++") {
            box += 1;
        }
    }
    return box;
};