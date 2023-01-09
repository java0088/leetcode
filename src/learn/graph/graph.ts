// 深度优先，处理一个节点，再处理这个节点的其中一个子节点，一直沿着这条路径遍历，直到没有可走的边为止








function bfs1(m: Map<string, string[]>) {
  const set = new Set()
  for (const [node] of m) {
    if (!set.has(node)) {
      console.log(node)
      set.add(node)
      const edges = m.get(node)
      for (let i = 0; i < edges.length; i++) {
        if (!set.has(edges[i])) {
          console.log(edges[i])
          set.add(edges[i])
        }
      }
    }
  }
}

function dfs1(m: Map<string, string[]>) {
  const set = new Set()

  for (const [node] of m) {
    if (!set.has(node)) {
      let stack = [node]

      while (stack.length !== 0) {
        const n = stack.pop()
        set.add(n)
        console.log(n)
        const edges = m.get(n)
        for (let i = 0; i < edges.length; i++) {
          if (!set.has(edges[i])) {
            stack.push(edges[i])
            break
          }
        }
      }
    }
  }
}
function dfs2(m: Map<string, string[]>) {
  const set = new Set()
  for (const [node] of m) {
    process(node, m, set)
  }

  function process(node, m, set) {
    if (!set.has(node)) {
      console.log(node)
      set.add(node)
      const edges = m.get(node)

      for (let i = 0; i < edges.length; i++) {
        if (!set.has(edges[i])) {
          process(edges[i], m, set)
        }
      }
    }
  }
}

const m = new Map()
m.set('a', ['b', 'c', 'd'])
m.set('b', ['a', 'c', 'e'])
m.set('c', ['b', 'd', 'e'])
m.set('d', ['a', 'c', 'f'])
m.set('e', ['b', 'c', 'f'])
m.set('f', ['e', 'd'])

// m.set('h', ['l'])
// m.set('l', [])


bfs1(m) // a,b,c,d,e,f
// dfs1(m) // a,b,c,d,f,e
// dfs2(m) // a,b,c,d,f,e
