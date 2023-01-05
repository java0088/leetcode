class Node1 {
  public pass: number
  public end: number
  public nexts: Node1[]
  constructor() {
    this.pass = 0
    this.end = 0

    this.nexts = []
  }
}
class Trie {
  root = new Node1()

  insert(value) {
    if (!value) return
    // 'abc'
    let node = this.root
    for (let i = 0; i < value.length; i++) {
      node.pass++
      const index = this.getNum(value[i])
      let exists = node.nexts[index]
      if (!exists) {
        node = node.nexts[index] = new Node1()
        node.pass++
      } else {
        node = exists
      }
    }

    node.end++
  }

  search(value) {
    if (!value) return 0
    let node = this.root

    for (let i = 0; i < value.length; i++) {
      const index = this.getNum(value[i])
      const exists = node.nexts[index]
      if (!exists) {
        return 0
      }

      node = exists
    }

    return node.end
  }

  getPrefixNum(value) {
    if (!value) return 0

    let node = this.root

    for (let i = 0; i < value.length; i++) {
      const index = this.getNum(value[i])
      const exists = node.nexts[index]
      if (!exists) {
        return 0
      }

      node = exists
    }

    return node.pass
  }

  delete(value) {
    if (!value) return 0
    if (this.search(value) > 0) {
      let node = this.root
      for (let i = 0; i < value.length; i++) {
        const index = this.getNum(value[i])
        const exists = node.nexts[index]
        node.pass--
        if (node.pass === 0) {
          node.nexts = []
        }
        node = exists
      }
      node.end--
    }
  }

  getNum(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
  }
}

const t = new Trie()

t.insert('abc')
t.insert('ab')
t.insert('a')
console.log(t.search('ab'))
t.delete('ab')
t.delete('abc')
t.delete('a')
console.log(t.search('ab'))
console.log(t.search('abc'))
console.log(t.search('a'))

// console.log(t.root)
// console.log(t.search('b'))
// console.log(t.search('a'))
// console.log(t.search('abc'))
// console.log(t.search('ab'))
// console.log(t.search('abd'))

// console.log(t.root)
// console.log(t.getPrefixNum('b'))
// console.log(t.getPrefixNum('a'))
// console.log(t.getPrefixNum('abc'))
// console.log(t.getPrefixNum('ab'))
// console.log(t.getPrefixNum('abd'))