/**
 * 61. Rotate List
 * Medium
 * Topics
 * Companies
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 * Example 2:
 *
 *
 * Input: head = [0,1,2], k = 4
 * Output: [2,0,1]
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 500].
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 109
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if(k === 0) {
        return head
    }

    if(!head || !head.next) {
        return head
    }

    const depth = getDepth(head)
    k = k % depth

    /**
     * @param {ListNode} headLast
     * @return {ListNode}
     */
    function popLast(headLast) {
        if(headLast.next.next === null) {
            const temp = headLast.next
            headLast.next = null

            return temp
        } else {
            return popLast(headLast.next)
        }
    }

    /**
     * @param {ListNode} headLast
     * @param {number} c
     * @return {ListNode}
     */
    function getDepth(headLast, c = 1) {
        if(headLast.next) {
            c++
            return getDepth(headLast.next, c)
        }

        return c
    }

    for(let i = 0; i < k; i++) {
        const last = popLast(head)
        head = new ListNode(last.val, head)
    }

    return head
}

/**
 * @param {number} val
 * @param {ListNode} next
 * @constructor
 */
function ListNode(val, next) {
    /** @type {number} */
    this.val = (val === undefined ? 0 : val)

    /** @type {ListNode} */
    this.next = (next === undefined ? null : next)
}

/**
 * @return {ListNode}
 * @param {number[]} arr
 */
function arrayToNodesList(arr) {
    let curr = new ListNode(arr.pop())

    while(arr.length) {
        curr = new ListNode(arr.pop(), curr)
    }

    return curr
}

console.log(rotateRight(arrayToNodesList([ 1, 2, 3, 4, 5 ]), 2000002)) // [4,5,1,2,3]
// console.log(arrayToNodesList([ 1, 2, 3, 4, 5 ]))

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRightQuick = function (head, k) {
    if(!head) {
        return head
    }

    let size = 0
    let current = head
    let prev
    while(current) {
        size++
        prev = current
        current = current.next
    }
    k %= size
    current = head
    prev.next = head

    let shifts = (size - k) % size

    while(shifts) {
        shifts--
        prev = current
        current = current.next
    }
    prev.next = null

    return current
}