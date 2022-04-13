class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
let head=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,)))))

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast: ListNode | null = head;
  while (fast&&fast.next !== null) {
    slow = slow!.next;
    fast = fast.next&&fast.next.next;
  }
  return slow;
}
console.log(middleNode(head));


console.log(123);
