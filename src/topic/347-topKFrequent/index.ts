/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {}
  nums.forEach(element => {
    map[element] = map[element] ? map[element] + 1 : 1
  })


  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.size === k) {
      break
    }
    set.add(nums[i])
  }
  return [...set]
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([1, 2], 2))
