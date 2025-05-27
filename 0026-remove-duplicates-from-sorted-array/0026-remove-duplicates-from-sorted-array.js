/**
 * @param {number[]} nums
 * @return {number}
 */
 // 문제이해
 // 파라미터로 중복이 포함된 정수를 배열로 받아옵니다.
 // 해당 배열 내(in-place)에서 중복 된 정수를 제거해야합니다.
 // 단, 비내림차순의 순서는 지켜야 합니다.
 // 최종으로 중복 된 정수를 제거한 배열 안의 고유 요소의 갯수 k를 반환해야합니다.
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let k = 1;  

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
