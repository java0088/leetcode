/**
 * 75. 颜色分类
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 必须在不使用库的sort函数的情况下解决这个问题。
 */
var sortColors = function (nums) {
  if (nums.length === 0 || nums.length === 1) return nums
  for (let i = 1; i < nums.length; i++) {
    let j = i
    let start = nums[i]
    while (j > 0 && start < nums[j - 1]) {
      nums[j] = nums[j - 1]
      j--
    }

    nums[j] = start
  }

  return nums
};
var sortColors = function (nums) {
  let p0 = 0 //指向0
  let p1 = 0 //指向0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {//如果当前i指向的元素等于1，则交换当前元素和p1指向的元素
      swap(nums, i, p1)
      p1++
    } else if (nums[i] === 0) {//如果当前i指向的元素等于0，则交换当前元素和p0指向的元素
      swap(nums, i, p0)
      //如果p0小于p1 则此时p0指向的元素是1，与i位置元素交换之后 这个交换过去的1位置就不对了 所以交换过去的1需要在和p1交换一下
      if (p0 < p1) {
        swap(nums, i, p1)
      }
      //每次交换0之后都要移动p0和p1，如果p0===p1，则前面都是0，如果p0<p1,前面的代码已经交换了两次
      p0++
      p1++
    }
  }
  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return nums
};

var sortColors = function (nums) {
  let n0 = 0, n1 = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      swap(nums, i, n1)
      n1++
    } else if (nums[i] === 0) {
      swap(nums, i, n0)

      if (n0 < n1) {
        swap(nums, i, n1)
      }

      n0++
      n1++
    }
  }
  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return nums
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([1, 2]));
console.log(sortColors([0, 1, 0]));
