class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // - insert（key）向树种插入一个新的键
  insert(key) {
    // 1.根据key创建node节点
    const newNode = new Node(key);

    // 2.如果树的空的，
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  }
  // - search（key）在树中查找一个键，如果节点存在，则返回true，否则false
  search(key) {
    return this.searchNode(this.root, key);
  }
  search2(key) {
    let node = this.root;
    while (node !== null) {
      if (node.key > key) {
        node = node.left;
      } else if (node.key < key) {
        node = node.right;
      } else if (node.key === key) {
        return true;
      }
    }
    return false;
  }
  searchNode(node, key) {
    if (node === null) return false;
    if (node.key > key) {
      this.searchNode(node.left, key);
    } else if (node.key < key) {
      this.searchNode(node.right, key);
    } else if (node.key === key) {
      return true;
    }
  }

  // - preOrderTraverse 通过先序遍历方式遍历所有节点
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  preOrderTraverseNode(node) {
    if (node === null) return;
    console.log(node);
    this.preOrderTraverseNode(node.left);
    this.preOrderTraverseNode(node.right);
  }
  // - inOrderTraverse 通过中序遍历方式遍历所有节点
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  inOrderTraverseNode(node) {
    if (node === null) return;
    this.inOrderTraverseNode(node.left);
    console.log(node);
    this.inOrderTraverseNode(node.right);
  }

  // - postOrderTraverse 通过后序遍历方式遍历所有节点
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  postOrderTraverseNode(node) {
    if (node === null) return;
    this.postOrderTraverseNode(node.left);
    this.postOrderTraverseNode(node.right);
    console.log(node);
  }
  // - min 返回树中最小的值、键
  min() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  // - max 返回树中最大的值、键
  max() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }
  // - remove（key）从树中移除某个键
  // 最复杂的
  remove(key) {
    //  找到要删除的节点
    //  记录状态
    // 当前
    let current = this.root;
    // 上一个
    let parent = null;
    // 是否左子节点
    let isLeftChild = true;

    // 2. 开始查找要删除的节点
    // 如果当前的key的值不等于目标值 继续循环
    // debugger;
    while (current.key !== key) {
      
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      // 没有找到
      if (current === null) return false;
    }

    // 3.找到节点 current
    // 情况一  删除的节点是叶子节点 没有子节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    // 情况二 删除节点只有一个子节点
    // 只有左子节点
    else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.right;
      }
      // 只有右子节点
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.right;
      }
    }else{
      // 两个节点
      // 获取后继节点
      let successor = this.getSuccessor(current);

      // 2 判断是否根节点
      if(this.root === current){
        this.root=successor;

      }else if(isLeftChild){
        parent.left=successor;
      }else{
        parent.right=successor
      }

      successor.left=current.left;
    }

    return true;
  }

  getSuccessor(delNode){
    // sign data
    let successerParent=delNode;
    let successer=delNode;
    let current=delNode.right;


    // 2 seek node
    while(current!==null){
      successerParent=successer;
      successer=current;
      current=current.left;
    }


    // 3.如果后继节点不是删除节点的右节点
    if(successer!=delNode.right){
      successerParent.left=successer.right;
      successer.right=delNode.right
    }
    return successer;
  }
}
