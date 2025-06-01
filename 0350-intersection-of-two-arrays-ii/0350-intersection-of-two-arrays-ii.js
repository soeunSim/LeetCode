/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let [shortArr, longArr] =
    nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1];

  const countMap = new Map();
  for (const x of shortArr) {
    countMap.set(x, (countMap.get(x) || 0) + 1);
  }

  const result = [];
  for (const x of longArr) {
    if (countMap.has(x)) {
      result.push(x);
      const remaining = countMap.get(x) - 1;
      if (remaining === 0) countMap.delete(x);
      else countMap.set(x, remaining);
    }
  }

  return result;
};