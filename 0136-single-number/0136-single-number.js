/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const checkValue = {};

    for (let num of nums) {
        if (Object.hasOwn(checkValue, num)) {
            checkValue[num] += 1;
        } else {
            checkValue[num] = 1;
        }
    }

    for (let item of Object.keys(checkValue)) {
        let itemValue = checkValue[item];
        if (itemValue === 1) {
            return Number(item);
        }
    }
};