// 逆序栈
function reverseStask1(stack) {
    if (stack.length === 0) return
    console.log([...stack])
    const i = process(stack)
    reverseStask1(stack)
    stack.push(i)
    function process(stack) {
       const p = stack.pop()
        if (stack.length === 0) {
            return p
        } else {
            const last = process(stack)
            stack.push(p)
            return last
        }
    }
}

// const stack = [1, 2, 3]
// reverseStask1(stack)
// console.log(stack)

// 字符串全排列
function subStrs1(str) {
    let arr = []
    process(str, 0, arr, '')
    return arr
    function process(str, index, ans, path) {
        if (index === str.length ) {
            path && ans.push(path)
            return
        }
        const no = path
        process(str, index + 1, ans, no)
        const yes = path + str[index]
        process(str, index + 1, ans, yes)
    }
}
// console.log(subStrs1('abc'))

// 最大价值
function maxValue1(w, v, bag) {

    return process(w, v, 0, bag)
    function process(w, v, i, rest) {
        if (rest < 0) return -1
        if (i === w.length) return 0

        const p1 = process(w, v, i + 1, rest)
        let p2 = -1
        const pNext = process(w, v, i + 1, rest - w[i])

        if (pNext !== -1) {
            p2 = v[i] + pNext
        }

        return Math.max(p1, p2)
    }
}

// 最大价值
function maxValue2(w, v, bag) {

    return process(w, v, 0, 0, bag)
    function process(w, v, i, alreadyW, bag) {
        if (alreadyW > bag) return -1
        if (i === w.length) return 0
        const p1 = process(w, v, i + 1, alreadyW, bag)
        const pNext = process(w, v, i + 1, alreadyW + w[i], bag)
        let p2 = -1

        if (pNext !== -1) {
            p2 = pNext + v[i]
        }

        return Math.max(p1, p2)
    }
}

const weight = [3, 2, 5], values = [6, 4, 10]

console.log(maxValue2(weight, values, 6))