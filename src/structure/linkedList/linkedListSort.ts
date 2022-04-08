import { ListNode, LinkedList } from "./linkedList";
import Sort from "../../baseSort/Sort";
let like = new LinkedList();
like.append(7);
like.append(8);
like.append(4);
like.append(3);
like.append(2);
like.append(5);
like.append(1);
like.append(2);
like.append(6);

export const linkedListSort = (head: ListNode | null) => {
  // 将链表的数据取出来
  let cur: ListNode | null = head;
  let bucket: number[] = [];
  while (cur !== null) {
    bucket.push(cur.element as number);
    cur = cur.next;
  }
  bucket = Sort.mergeSort<number>(bucket);
  console.log(bucket);

  // 添加链表
  head = new ListNode(bucket.shift() as number);
  cur = head;
  while (bucket.length !== 0) {
    let newNode = new ListNode(bucket.shift() as number);
    cur.next=newNode;
    cur=cur.next
  }
  console.log(head);
};
linkedListSort(like.head);
