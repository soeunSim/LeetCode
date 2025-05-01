/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let countBox = 0;
  for(let i = 0; i<nums.length; i++) {
    
    if(String(nums[i]).length % 2 === 0) {
      countBox += 1;
    }
  }
  
  return countBox;
};