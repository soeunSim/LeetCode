/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let box = 0;
    for (let i = 0; i<nums.length; i++) {
        if(nums[i] !== 0) {
            nums[box] = nums[i];
            box++
        }
    }

    while(box < nums.length) {
        nums[box] = 0;
        box++;
    }
    return nums
};