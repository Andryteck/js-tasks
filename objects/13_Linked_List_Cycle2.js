//https://leetcode.com/problems/linked-list-cycle-ii/

let detectCycle = function (head) {
    let map = {}
    while (head) {
        if (map[head.val]) {
            for (let i = 0; i < map[head.val].length; i++) {
                if (head === map[head.val][i]) {
                    return map[head.val][i]
                }
            }
            map[head.val].push(head)
        } else {
            map[head.val] = [head]
        }
        head = head.next
    }
    return null
}

