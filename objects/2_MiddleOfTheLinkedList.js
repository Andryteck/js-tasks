// https://leetcode.com/problems/middle-of-the-linked-list/

let middleNode = function (head) {
    let arr = [head]
    while (arr[arr.length - 1].next !== null)
        arr.push(arr[arr.length - 1].next)
    return arr[Math.trunc(arr.length / 2)]
}