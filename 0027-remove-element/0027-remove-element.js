/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let w = 0; // write pointer index
    for (let r = 0; r < nums.length; r += 1) {
        if (nums[r] !== val) {
        // n번째 index = r 값 할당.
        nums[w] = nums[r];
        w += 1;
        }
  }
    nums.length = w; // 자르기
    return nums.length;
};