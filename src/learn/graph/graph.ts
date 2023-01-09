class GraphNode {
  public value: number;
  public in: number;
  public out: number;
  public nexts: GraphNode[];
  public edges;

  constructor(value) {
    this.value = value;
    this.in = 0;
    this.out = 0;
    this.nexts = [];
    this.edges = [];
  }
}

class GraphEdge {
  public value: number;
  public from: GraphNode;
  public to: GraphNode;
  constructor(weight: number, from: GraphNode, to: GraphNode) {
    this.value = weight;
    this.from = from;
    this.to = to;
  }
}

class Graph {
  public nodes: Map<number, GraphNode> = new Map()
  public edges: Set<GraphEdge> = new Set()
}

//转换接口例子：用一个二维数组来表示图，格式为: 权值 = matrix[0][0]  from点 = matrix[0][1]  to点 = matrix[0][2]

function createGraph(matrix) {
  const graph = new Graph()
  for (let i = 0; i < matrix.length; i++) {
    const [weight, from, to] = matrix[i]

    if (!graph.nodes.has(from)) {
      graph.nodes.set(from, new GraphNode(to))
    }

    if (!graph.nodes.has(to)) {
      graph.nodes.set(to, new GraphNode(to))
    }

    //获取from点和to点
    const fromNode = graph.nodes.get(from)
    const toNode = graph.nodes.get(to)

    //form点、to点和权重组成一条边
    const newEdge = new GraphEdge(weight, fromNode, toNode);

    // from点的邻接点集加入to点
    fromNode.nexts.push(toNode);

    //from点出度加一
    fromNode.out++;
    //to点出度加一
    toNode.in++;
    //将这条边加入form点属于的边集里
    fromNode.edges.add(newEdge);
    //将这条边加入图的边集里
    graph.edges.add(newEdge);
  }

  return graph
}


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
      console.log(node)
      while (stack.length !== 0) {
        const n = stack.pop()
        set.add(n)

        const edges = m.get(n)
        for (let i = 0; i < edges.length; i++) {
          if (!set.has(edges[i])) {
            stack.push(n)
            stack.push(edges[i])
            console.log(edges[i])
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


// bfs1(m) // a,b,c,d,e,f
dfs1(m) // a,b,c,d,f,e
// dfs2(m) // a,b,c,d,f,e
