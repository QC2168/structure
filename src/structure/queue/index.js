import {Queue,passGame,PriorityQueue} from './queue'
// const queue  = new Queue();
// queue.enqueue('abc')
// queue.enqueue('abc')
// queue.enqueue('abc')
// queue.enqueue('abc')
// console.log(queue.items)
// console.log(queue.dequeue())
// console.log(queue.items)
// console.log(queue.front())


// console.log(passGame(['hxh','tom','lilet','lucy'],3))


const queue = new PriorityQueue();

queue.enqueue('aaa',1010)
queue.enqueue('bbb',10)
queue.enqueue('ccc',1150)
queue.enqueue('ddd',110)
queue.enqueue('eee',90)

queue.items.forEach(item=>{
    console.log(item.element,item.priority)
})

