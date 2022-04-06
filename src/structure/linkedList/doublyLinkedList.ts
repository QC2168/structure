import { LinkedList,  ListNode} from "./linkedList";
class DoublyNode extends ListNode {
  prev:DoublyNode|null
  constructor(element:string) {
    super(element);
    this.prev = null;
  }
}

export class DoublyLinkedList extends LinkedList {
  tail:DoublyNode|null
  constructor() {
    super();
    this.tail = null;
  }

  // - append（element） 向列表尾部添加一个新的项
  append(element:string) {
    // 1.创建元素
    const newNode = new DoublyNode(element);
    // 2.追加元素
    if (this.length === 0 && this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  // - insert（position，element）向列表的特定位置插入一个新的项
  insert(position:number, element:string) {
    // 1.判断越界
    if (position < 0 || position > this.length) return false;

    // 2.创建node
    const newNode = new DoublyNode(element);

    // 3 判断插入多种情况
    if (position === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        // 原来有元素
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position === this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      // position 不等于0 和最大
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      // 交换节点信息
      previous.next = newNode;
      newNode.prev = previous;
      newNode.next = current;
      current.prev = newNode;
    }
    this.length++;
    return true;
  }
  // - get（position）获取对应位置的元素
  // - indexOf（element）返回元素在列表中的索引。如果列表中没有该元素返回-1
  // - update（position，element）修改某个位置的元素
  // - removeAt（position）从列表的特定位置移除一项
  removeAt(position:number) {
    //
    if (position < 0 || position === this.length - 1) return null;
    // 不同情况
    let current = this.head;
    if (position === 0) {
      if (this.length === 1) {
        // 只有一个元素
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      // 中间
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      current.next.prev = previous;
    }
    return current.element;
  }
  // - remove（element）从列表中移除一项
  // - isEmpty（）判断是否为空
  // - size（） 返回链表包含的元素个数，与数组的length属性类似
  // - toString 由于列表项使用node类，就需要重写继承JavaScript对象默认的toString方法，让其输出数据的值
}
