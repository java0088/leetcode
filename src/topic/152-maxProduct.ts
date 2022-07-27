/**
 * 152. 乘积最大子数组
 * @param {number[]} nums
 * @return {number}
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 测试用例的答案是一个 32-位 整数。
 * 子数组 是数组的连续子序列。
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0]
  let max = 0, min = 0
  let result = max
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      let temp = max
      max = min
      min = temp
    }
    max = Math.max(max * nums[i], nums[i])
    min = Math.min(min * nums[i], nums[i])
    result = Math.max(result, max)
  }
  return result
};

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-2, 3, -4]));
