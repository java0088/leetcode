/**
 * 57. 插入区间
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval]

  const index = intervals.findIndex(v => v[0] > newInterval[0])
  if (index === -1) {
    intervals.push(newInterval)
  } else {
    intervals.splice(index, 0, newInterval)
  }

  let result = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let k = result.length - 1
    if (result[k][1] < intervals[i][0]) {
      result[k + 1] = intervals[i]
    } else if (result[k][1] < intervals[i][1]) {
      result[k][1] = intervals[i][1]
    }
  }

  return result
};
console.log(insert([[1, 3], [6, 9]], [2, 5]));
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
console.log(insert([], [5, 7]));
console.log(insert([[1, 5]], [2, 3]));
console.log(insert([[1, 5]], [2, 7]));
