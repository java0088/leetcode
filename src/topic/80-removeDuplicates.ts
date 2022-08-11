/**
 * 80. 删除有序数组中的重复项 II
 * @param {number[]} nums
 * @return {number}
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0 || nums.length === 1) return nums.length
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      nums.splice(i + 2, 1)
      i--
    }
  }
  return nums.length
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))
