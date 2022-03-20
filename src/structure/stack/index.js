import { MinStack } from './minStack';
import {Stack,dec2binary} from './stack';
import { TowStackQueue } from './TowStackQueue';
// const stack =new MinStack();

// stack.push("abc")
// stack.push("cba")
// stack.push("npc")
// stack.push("mba")
// stack.push(3)
// stack.push(4)
// stack.push(2)
// stack.push(7)
// stack.push(8)
// stack.push(8)
// console.log(stack);
// console.log(stack.items)
// console.log(stack.pop())
// console.log(stack.items)
// console.log(stack.peek())
// console.log(stack.isEmpty())
// console.log(stack.size())

// console.log(dec2binary(10))
// console.log(dec2binary(100))
// console.log(dec2binary(1000))

const stack=new TowStackQueue()

stack.enqueue('1')
console.log(stack);
stack.enqueue('2')
console.log(stack);
stack.enqueue('3')
console.log(stack);
stack.dequeue()