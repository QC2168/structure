export const reverseList = (head) => {
  let next = null;
  let pre = null;
  while (head !== null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};

export const reverseDoubleList = (head) => {
  let next = null;
  let pre = null;
  while (head !== null) {
    next = head.next;
    head.next = pre;
    head.last = next;
    pre = head;
    head = next;
  }
  return pre;
};
