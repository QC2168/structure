class TNode {
  constructor() {
    this.pass = 0;
    this.end = 0;
    this.node = new Map();
  }
}


var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  // 字典树
  let root = new TNode();
  let res = "";
  for (let i = 0; i < strs.length; i++) {
    let cur = root;
    let word = strs[i];
    for (let j = 0; j < word.length; j++) {
      if (!cur.node.has(word[j])) {
        cur.node.set(word[j], new TNode());
      }
      let node = cur.node.get(word[j]);
      node.pass++;
      if (word[j] === word.length - 1) node.end++;
      cur = node;
    }
  }


};
strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);
