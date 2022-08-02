/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let output = [...nums];

  let n = nums.length;
  backtrack(n, output, res, 0);
  return res;


  function backtrack(n, output, res, first) {
    if (first === n) {
      res.push([...output])
    }

    for (let i = first; i < n; i++) {
      // 动态维护数组
      swap(output, first, i);
      // 继续递归填下一个数
      backtrack(n, output, res, first + 1);
      // 撤销操作
      swap(output, first, i);
    }
  }

  function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
};
console.log(permute([1, 2, 3]))