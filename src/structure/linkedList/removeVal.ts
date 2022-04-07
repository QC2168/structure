// import { ListNode } from "./linkedList";

// // 删除链表中某一个数组
// export const removeVal = (head:ListNode, val:string) => {
//   // 判断是不是头部删除
//   while (head !== null) {
//     if (head.element !== val) {
//       break;
//     }
//     head = head.next as ListNode;
//   }
//   let pre:ListNode = head;
//   let cur:ListNode = head;
//   while (cur !== null) {
//     if (cur.element === val) {
//       pre.next = cur.next;
//     } else {
//       pre = cur;
//     }
//     cur = cur.next as ListNode;
//   }
//   return head;
// };
