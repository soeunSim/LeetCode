/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	const checkCenterIndex =  Math.round(nums.length % 2);
	const arrReverseOrNot = checkCenterIndex < target ? nums.reverse() : nums;
	
	for (let i = 0; i < nums.length; i++) {
		if (checkCenterIndex < target) {
			if (nums[i] === target) {
				return (nums.length -1) - i;
			}
		} else {
			if (nums[i] === target) {
				return i;
			}			
		}
	}
	return -1;
};