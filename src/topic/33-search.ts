/**
 * 33. 搜索旋转排序数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1

  while (l <= r) {
    if (nums[l] === target) {
      return l
    } else if (nums[r] === target) {
      return r
    } else {
      l++
      r--
    }
  }
  return -1
};

var search = function (nums, target) {
  let n = nums.length
  if (!n) {
    return -1;
  }
  if (n == 1) {
    return nums[0] == target ? 0 : -1;
  }
  let l = 0, r = n - 1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] == target) return mid
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([2, 3, 4, 5, 6, 7, 0, 1], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));