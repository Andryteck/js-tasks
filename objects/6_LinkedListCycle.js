// https://leetcode.com/problems/linked-list-cycle/

let hasCycle = function (head) {
    let map = new Map()
    let arr = head

    while (arr) {
        if (map.has(arr)) {
            return true
        } else {
            map.set(arr)
        }
        arr = arr.next
    }

    return false
}