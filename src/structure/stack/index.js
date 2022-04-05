import { MinStack } from './minStack';
import {Stack,dec2binary} from './stack';
import { TowStackQueue } from './TowStackQueue';
const stack =new Stack();

stack.push("abc");
stack.push("cba");
stack.push("npc");
stack.push("mba");
// stack.push(3)
// stack.push(4)
// stack.push(2)
// stack.push(7)
// stack.push(8)
// stack.push(8)
console.log(stack); // Stack items: (3) ['abc', 'cba', 'npc']
console.log(stack.items); // ['abc', 'cba', 'npc', 'mba']
console.log(stack.pop()); // mba
console.log(stack.items); // ['abc', 'cba', 'npc']
console.log(stack.peek()); // npc
console.log(stack.isEmpty()); // false
console.log(stack.size()); // 3

// console.log(dec2binary(10))
// console.log(dec2binary(100))
// console.log(dec2binary(1000))

// const stack=new TowStackQueue()

// stack.enqueue('1')
// console.log(stack);
// stack.enqueue('2')
// console.log(stack);
// stack.enqueue('3')
// console.log(stack);
// stack.dequeue()