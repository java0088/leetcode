/**
 * 53. 最大子数组和
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let max = nums[0]
  let result = max
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i] + max, nums[i])
    result = Math.max(result, max)
  }

  return result
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5, 4, -1, 7, 8]))