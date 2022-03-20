import { Stack } from "./stack";

export class TowStackQueue {
  constructor() {
    this.stack = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(item) {
    this.stack.push(item);
  }
  dequeue() {
    while (!this.stack.isEmpty()) {
      this.stack2.push(this.stack.pop());
    }
    this.stack2.pop();
  }
}
