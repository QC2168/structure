import { Stack } from "./stack";

export class MinStack extends Stack {
  constructor() {
    super();
    this.minItem = [];
  }
  getMinPop() {
    return this.minItem[this.minItem.length - 1];
  }
  push(element) {
    this.items.push(element);
    if (this.minItem.length === 0) {
      this.minItem.push(element);
    } else if (element > this.getMinPop()) {
      this.minItem.push(this.getMinPop());
    } else {
      let min = this.peek();
      this.minItem.push(min);
    }
  }
  pop() {
    this.minItem.pop();
    return this.items.pop();
  }
}
