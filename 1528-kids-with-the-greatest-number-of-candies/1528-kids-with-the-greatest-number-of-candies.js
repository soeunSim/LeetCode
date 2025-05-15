/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let box = [];
    let candyNumber = Math.max(...candies);

    for(let candy of candies) {
        if(candy + extraCandies < candyNumber ) {
            box.push(false);
        } else {
            box.push(true);
        }
    }
    return box;
};
