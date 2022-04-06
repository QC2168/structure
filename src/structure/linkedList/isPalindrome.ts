import { LinkedList } from "./linkedList"
import { reverseList } from "./reverseList"

class ListNode {
    element: number|string
    next: ListNode | null
    constructor(element?: number, next?: ListNode | null) {
        this.element = (element === undefined ? 0 : element)
        this.next = (next === undefined ? null : next)
    }
}

let like = new LinkedList()
like.append(1)
like.append(2)
like.append(2)
like.append(3)
like.append(3)
like.append(2)
like.append(2)
like.append(1)


export default function isPalindrome(head: ListNode | null) {
    if (head === null) return true
    // 获取链表中心位置
    let slow: ListNode = head
    let fast: ListNode | null = head
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next
        slow = (slow.next) as ListNode
    }
    // 找到前半部分链表的尾节点。
    let mid = slow
    // 反转后面的链表
    let reList = reverseList(mid.next)
    let n1 = head
    let n2 = reList
    while (n2 !== null) {
        if (n1.element !== n2.element) {
            return false
        }
        n1 = n1.next as ListNode
        n2 = n2.next
    }

    // 恢复链表
    mid.next = reverseList(reList)
    console.log(head);
    return true
};
console.log(isPalindrome(like.head));