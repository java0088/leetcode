/**
 * 150. 逆波兰表达式求值
 * @param {string[]} tokens
 * @return {number}
 * 根据 逆波兰表示法，求表达式的值。
 * 有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 注意 两个整数之间的除法只保留整数部分。
 * 可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 */
var evalRPN = function (tokens) {
  let operateArr = ['+', '-', '*', '/']
  let stack: any = []
  for (let i = 0; i < tokens.length; i++) {
    if (!operateArr.includes(tokens[i])) {
      stack.push(tokens[i])
    } else {
      let n1 = stack.pop()
      let n2 = stack.pop()
      stack.push(calc(n1, n2, tokens[i]))
    }
  }
  return stack[0]
  function calc(n1, n2, operate) {
    n1 = +n1
    n2 = +n2
    switch (operate) {
      case '+':
        return n2 + n1
      case '-':
        return n2 - n1
      case '*':
        return n2 * n1
      case '/':
        return parseInt(n2 / n1)
    }
    return 0
  }
};

console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
