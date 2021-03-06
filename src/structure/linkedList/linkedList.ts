export class ListNode {
  element: string|number;
  next: ListNode | null;
  constructor(el: string|number) {
    // 保存元素
    this.element = el;
    // 指向下一个节点
    this.next = null;
  }
}

export class LinkedList {
  head: ListNode|null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // - append（element） 向列表尾部添加一个新的项
  append(el:string|number) {
    // 根据element创建node对象
    const newNode = new ListNode(el);
    // 追加到最后
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
  // - insert（position，element）向列表的特定位置插入一个新的项
  insert(position:number, el:string|number) {
    //判断越界问题
    if (position < 0 || position > this.length) return false;
    // 根据element创建node对象
    const newNode = new ListNode(el);
    // 插入元素
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      // 当前
      let current:ListNode|null= this.head;
      // 上一个元素
      let pervious :ListNode;
      while (index++ < position&&current != null&& current.next!==null) {
        pervious = current;
        current = current.next;
      }
      pervious!.next = newNode;
      newNode.next = current;
    }
    this.length++;
    return true;
  }
  // - get（position）获取对应位置的元素
  get(position:number) {
    //判断越界问题
    if (position < 0 || position > this.length - 1) return null;
    // 查询该位置的元素
    let current = this.head;
    let index = 0;
    while (index++ < position && current!==null) {
      current = current.next;
    }
    return current!.element;
  }
  // - indexOf（element）返回元素在列表中的索引。如果列表中没有该元素返回-1
  indexOf(element:string) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  // - update（position，element）修改某个位置的元素
  update(position:number, element:string) {
    // 1.删除position的元素
    const result = this.removeAt(position);
    // 2.插入
    this.insert(position,element);
    return result;
  }
  // - removeAt（position）从列表的特定位置移除一项
  removeAt(position:number) {
    // 1 判断越界问题
    if (position < 0 || position > this.length - 1) return null;
    // 2 删除元素
    let current = this.head;
    // 3 上一个
    let pervious: ListNode|null= null;
    let index = 0;
    if (position === 0 && current!==null&& current.next!==null) {
      this.head = current.next;
    } else {
      while (index++ < position&& current!==null&& current.next!==null) {
        pervious = current;
        current = current.next;
      }
      pervious!.next = current!.next;
    }
    this.length--;
    return current!.element;
  }
  // - remove（element）从列表中移除一项
  remove(element:string) {
    // 1.获取元素
    const index = this.indexOf(element);
    if (index === -1) return;

    // 2 删除该元素位置
    this.removeAt(index);
  }
  // - isEmpty（）判断是否为空
  isEmpty() {
    return this.length === 0;
  }
  // - size（） 返回链表包含的元素个数，与数组的length属性类似
  size() {
    return this.length;
  }
  // - toString 由于列表项使用node类，就需要重写继承JavaScript对象默认的toString方法，让其输出数据的值
}
