// 会议问题
function maxMeeting1(meetings) {
    
    return process(meetings, 0, 0)
     
    function process(meetings, done, timeLine) {
        let max = done
        for (let i = 0; i < meetings.length; i++) {
            if (meetings[i].start >= timeLine) {
                const nexts = meetings.filter((item, index) => index !== i)
                max = Math.max(max, process(nexts, done + 1, meetings[i].end))
            }
        }
        return max
    }
}

function maxMeeting2(meetings) {
    // 先将数组按start从小到大排序，如果start相等，就按end排
    meetings.sort((a, b) => a.start - b.start || a.end - b.end)
    let max = 0
    let timeEnd = 0
    for (let i = 0; i < meetings.length; i++) {
        if (meetings[i].start >= timeEnd) {
            max++
            timeEnd = meetings[i].end
        }
    }

    return max
}

let meetings = [
    { start: 8, end: 10 },
    { start: 9, end: 11 },
    { start: 12, end: 13 },
    { start: 12, end: 15 },
    { start: 16, end: 18 },
    { start: 16, end: 17 },
    { start: 17, end: 18 },
]

// console.log(maxMeeting1(meetings))
// console.log(maxMeeting2(meetings))

// 最大利润，给启动资金为 startMoney，最多做 maxProjectNum 项目
function maxProfit1(projects, startMoney, maxProjectNum) {
    return process(projects, startMoney, maxProjectNum)

    function process(projects, startMoney, maxProjectNum) {
        if (maxProjectNum <= 0) return startMoney
        
        let max = startMoney
        for (let i = 0; i < projects.length; i++) {
            const cur = projects[i]
            if (startMoney >= cur.spend) {
                let nexts = projects.filter((item, index) => index !== i)
                max = Math.max(max, process(nexts, startMoney + cur.profit, maxProjectNum - 1))
            }
        }

        return max
    }
}
// 最大利润，给启动资金为 startMoney，最多做 maxProjectNum 项目
function maxProfit2(projects, startMoney, maxProjectNum) {
    projects.sort((a, b) => a.spend - b.spend || b.profit - a.profit)

    console.log(projects, 'projectsprojects')
    let sum = startMoney
    let lastSpend = -1
    for (let i = 0; i < projects.length; i++) {
        const cur = projects[i]
        if (lastSpend !== cur.spend && cur.spend <= sum) {
            sum += projects[i].profit
            lastSpend = cur.spend
            maxProjectNum--
            if (maxProjectNum === 0) break
        }
    }

    return sum
}

const projects = [
    { spend: 1, profit: 3 },
    { spend: 1, profit: 1 },
    { spend: 4, profit: 3 },
    { spend: 5, profit: 100 },
    { spend: 5, profit: 2 }
]

console.log(maxProfit1(projects, 1, 2))
console.log(maxProfit2(projects, 1, 2))