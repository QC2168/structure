// 删除链表中某一个数组
export const removeVal = (head, val) => {
  // 判断是不是头部删除
  while (head !== null) {
    if (head.element !== val) {
      break;
    }
    head = head.next;
  }
  let pre = head;
  let cur = head;
  while (cur !== null) {
    if (cur.element === val) {
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }
  return head;
};
