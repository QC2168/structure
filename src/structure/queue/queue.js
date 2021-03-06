export class Queue {
  constructor() {
    this.items = [];
  }
  //     - enqueue（element）向队列尾部添加一个（或多个）新的项
  enqueue(element) {
    this.items.push(element);
  }

  // - dequeue（）移除队列的第一项，并返回被移除的元素
  dequeue() {
    return this.items.shift();
  }
  // - front（）返回队列中第一个元素，队列不做任何变动
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }
  // - isEmpty（）判断队列是否有数据
  isEmpty() {
    return this.items.length === 0;
  }
  // - size（） 返回队列包含的元素个数，与数组的length属性类似
  size() {
    return this.items.length;
  }
}

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
export class PriorityQueue extends Queue {
  enqueue(element, priority) {
    // 1. 创建QueueElement 对象
    const queueElement = new QueueElement(element, priority);
    // 2. 插入新的元素
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }
}
export function passGame(nameList, num) {
  // 1. 创建队列
  const queue = new Queue();
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }
  // 2。 循环让这些人进入队列中
  while (queue.size() > 1) {
    //
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  return queue.front();
}
