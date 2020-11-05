// https://leetcode.com/problems/last-stone-weight/

let lastStoneWeight = function (stones) {
    stones.sort((prev, next) => next - prev)
    for (let i = 0; i <= stones.length; i++) {
        if (stones[0] === stones[1]) {
            stones.splice(0, 2)
        } else {
            stones.push(Math.abs(stones[0] - stones[1]))
            stones.splice(0, 2)
            stones.sort((prev, next) => next - prev)
        }
    }
    return stones[0]
}