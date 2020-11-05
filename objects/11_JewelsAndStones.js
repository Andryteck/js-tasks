// https://leetcode.com/problems/jewels-and-stones/

let numJewelsInStones = function (J, S) {
    let count = 0

    const obj = {}
    for (const jewel of J) {
        obj[jewel] = true
    }
    for (const stone of S) {
        if (stone in obj) {
            count = count + 1
        }
    }
    return count
}