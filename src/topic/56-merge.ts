/**
 * 56. 合并区间
 * @param {number[][]} intervals
 * @return {number[][]}
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */
var merge = function (intervals) {
  if (intervals.length === 0) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  let result = [[...intervals[0]]]
  for (let i = 1; i < intervals.length; i++) {
    const l = result.length - 1
    if (result[l][1] >= intervals[i][1]) continue
    if (result[l][1] >= intervals[i][0]) {
      result[l][1] = intervals[i][1]
    } else {
      result.push([...intervals[i]])
    }
  }

  return result
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 4], [4, 5]]))
console.log(merge([[1, 4], [2, 3]]))
