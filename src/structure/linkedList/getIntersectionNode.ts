import { LinkedList,ListNode } from "./linkedList"



let like1 = new LinkedList()
let like2 = new LinkedList()
like1.append(1)
like1.append(2)
like1.append(3)
like1.append(2)
like1.append(4)
like1.append(5)
like1.append(6)
like1.append(7)
like1.append(8)

like2.append(1)
like2.append(2)
like2.append(3)
like2.append(3)
like2.append(2)
like2.append(4)
like2.append(5)
like2.append(6)
like2.append(7)
like2.append(8)


// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/xiang-jiao-lian-biao-by-leetcode-solutio-a8jn/
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA == null || headB == null) {
        return null;
    }
    // 指针
    let n1: ListNode | null = headA
    let n2: ListNode | null = headB
    while (n1 !== n2) {
        n1 = n1 === null ? n2 : n1.next
        n2 = n2 === null ? n1 : n2.next
    }
    console.log(n1);
    return n1;
};
getIntersectionNode(like1.head, like2.head)