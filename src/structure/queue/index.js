import { Queue, passGame, PriorityQueue } from "./queue";
const queue = new Queue();
queue.enqueue("abc");
queue.enqueue("ccb");
queue.enqueue("def");
queue.enqueue("666");
console.log(queue.items); // ['abc', 'ccb', 'def', '666']
console.log(queue.dequeue()); // abc
console.log(queue.items); // ['ccb', 'def', '666']
console.log(queue.front()); // ccb

// console.log(passGame(['hxh','tom','lilet','lucy'],3))

// const queue = new PriorityQueue();

// queue.enqueue('aaa',1010)
// queue.enqueue('bbb',10)
// queue.enqueue('ccc',1150)
// queue.enqueue('ddd',110)
// queue.enqueue('eee',90)

// queue.items.forEach(item=>{
//     console.log(item.element,item.priority)
// })
