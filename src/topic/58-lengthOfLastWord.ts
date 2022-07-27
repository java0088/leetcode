/**
 * 58. 最后一个单词的长度
 * @param {string} s
 * @return {number}
 * 
 */

var lengthOfLastWord = function (s) {
  let str = ''
  // 从字符串末尾遍历
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i]
    if (char === ' ') {
      // 如果遇到空格并且已经有单词了，结束循环
      if (str.length !== 0) break
    } else {
      str = char + str
    }
  }

  return str.length
};

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
console.log(lengthOfLastWord('luffy is still joyboy'))