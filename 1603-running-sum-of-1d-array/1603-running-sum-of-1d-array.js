/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let boxCount = 0;
  const creativeArray = [];
  
  for(let number of nums) {
    let plusNumber = boxCount + number;
    creativeArray.push(plusNumber);
    boxCount += number;
  }
  return creativeArray;
};