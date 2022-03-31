// 节点 pass 
// pass 当前有多少个值通过了这个节点
// end 当前节点是否有以这个节点结尾的单词
// next 使用Map标记后续的节点，
class TNode {
  pass: number;
  end: number;
  next: Map<string, TNode>;
  constructor() {
    this.pass = 0;
    this.end = 0;
    this.next = new Map();
  }
}

export default class Trie {
  root: TNode;
  constructor() {
    this.root = new TNode();
  }

  // 插入
  insert(word: string): void {
    if (word.length === 0) {
      return;
    }
    let cur: TNode = this.root
    for (let i: number = 0; i < word.length; i++) {
      // 判断当前节点是否有 word i的路
      if (!cur.next.has(word[i])) {
        cur.next.set(word[i], new TNode())
      }
      let node = cur.next.get(word[i]) as TNode
      node.pass++
      if (i === word.length - 1) node.end++
      cur = node
    }
  }

  // 查找
  search(word: string): boolean {
    let cur: TNode = this.root
    for (let i: number = 0; i < word.length; i++) {
      if (cur.next.get(word[i])) {
        cur = cur.next.get(word[i]) as TNode
        if (i === word.length - 1 && cur.end > 0) return true
      }
    }
    return false

  }

  // 查找是否有指定字符串开头的
  startsWith(word: string): boolean {
    let cur: TNode = this.root
    for (let i: number = 0; i < word.length; i++) {
      if (!cur.next.get(word[i])) return false
      cur = cur.next.get(word[i]) as TNode
    }
    return true
  }
}
