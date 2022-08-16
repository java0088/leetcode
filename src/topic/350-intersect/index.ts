/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = [], map = {}
  for (let i = 0; i < nums1.length; i++) {
    let n = map[nums1[i]] + 1 || 0
    for (let j = n; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        map[nums1[i]] = j
        result.push(nums1[i])
        break
      }
    }
  }
  return result
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2, 2, 1], [2]));
