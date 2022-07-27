/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0]
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
  return nums[nums.length - 1]
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
