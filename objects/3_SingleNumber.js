// https://leetcode.com/problems/single-number/

let singleNumber = function (nums) {
    let map = {}

    for (let number of nums) {
        if (map[number] === undefined) {
            map[number] = 1
        } else {
            map[number]++
        }
    }

    let entries = Object.entries(map)

    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] === 1) {
            return entries[i][0]
        }
    }
}