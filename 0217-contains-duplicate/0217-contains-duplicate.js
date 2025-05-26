/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	const checkNums = {};
	
	for (let num of nums) {
		if (num === checkNums[num]) {
			return true;
		} else {
			checkNums[num] = num;
		}
	}
	return false;
};