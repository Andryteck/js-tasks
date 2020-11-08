// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

let deleteDuplicates = function (head) {

    let current = head
    let currentVal = head.val
    while (true) {
        if (current.next === null) {
            break
        }
        if (current.next.val === current.val) {
            current.next = current.next.next
        } else if (current.next.val > currentVal) {
            currentVal = current.next.val;
            current = current.next
        }
    }
    return head
}
