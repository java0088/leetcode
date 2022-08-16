# 350. 两个数组的交集 II

## 描述

给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。


**示例 1：**

```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```

**示例 2：**

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

**提示**

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

**提示**

- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果 nums1 的大小比 nums2 小，哪种方法更优？
- 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

## 思路

定义一个结果集result和一个map，循环nums1数组和nums2数组，
如果nums1中遇到nums2中相同的元素，就使用map记录这一次该元素的索引，
当在遇到相同元素的时候，就从上一次遇到的下一个索引去找

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = [], map = {}
  for (let i = 0; i < nums1.length; i++) {
    let n = map[nums1[i]] + 1 || 0
    for (let j = n; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        map[nums1[i]] = j
        result.push(nums1[i])
        break
      }
    }
  }

  return result
};
```