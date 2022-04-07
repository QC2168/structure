import { ListNode } from "./linkedList";

export const reverseList = (head:ListNode) => {
  let next = null;
  let pre = null;
  while (head !== null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next as ListNode;
  }
  return pre;
};

export const reverseDoubleList = (head:ListNode) => {
  let next = null;
  let pre = null;
  while (head !== null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next as ListNode;
  }
  return pre;
};
