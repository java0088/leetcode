/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 如果数组为空直接返回
  if (nums.length === 0) return [-1, -1]
  // 如果数组只有一个元素并且这个元素等于target 返回
  if (nums.length === 1 && target === nums[0]) return [0, 0]

  // 定义两个指针，一个从左遍历，一个从右遍历
  let l = 0, r = nums.length - 1

  while (l <= r) {
    // 如果左右都等于target说明都找到了，返回结果
    if (nums[l] === target && nums[r] === target) {
      return [l, r]
    }
    // 如果左边没有找到，就继续找，找到了指针不动
    if (nums[l] !== target) {
      l++
    }

    // 如果右边没有找到，就继续找，找到了指针不动
    if (nums[r] !== target) {
      r--
    }
  }

  return [-1, -1]
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([], 0))