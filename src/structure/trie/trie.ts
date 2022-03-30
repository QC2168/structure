class TNode {
  pass: number;
  end: number;
  val: string;
  constructor(val: string) {
    this.pass = 0;
    this.end = 0;
    this.val = val;
  }
}

class Trie {
  root: TNode | null;
  constructor() {
    this.root = null;
  }

  // 创建一个头
  insert(word: string) {
    let words = word.split("");
    for (let i: number = 0; i < words.length - 1; i++) {
      // 判断当前节点是否有 word i的路
      if (this.root === null) {
        this.root = new TNode(words[i]);
        this.root.pass++;
        if (i === words.length - 1) this.root.end++;
      } else {
        // 判断当前节点是否有 word i的路
        if (words[0] === this.root.val) {
            
        }
      }
    }
  }
}

const rr: string[] = ["abc", "abd"];
const t = new Trie();
t.insert("abc");
