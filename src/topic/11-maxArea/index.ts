/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length === 2) {
    return height[0] > height[1] ? height[1] : height[0]
  }

  let result = 0

  return result
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))
