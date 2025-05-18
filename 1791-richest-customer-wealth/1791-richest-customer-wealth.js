/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const arrayBox = [];
    for(let item of accounts) {
        let box = 0;
        for (let num of item) {
            box += num;
        }
        arrayBox.push(box);
    }
    return Math.max(...arrayBox);
};