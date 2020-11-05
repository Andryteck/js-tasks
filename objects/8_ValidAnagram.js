// https://leetcode.com/problems/valid-anagram/

const isAnagram = function (s, t) {
    let obj = {}

    if (s.length !== t.length) return false
    for (let substr of s) {
        obj[substr] ? obj[substr] = obj[substr] + 1 : obj[substr] = 1
    }
    for (let substr of t) {
        if (!obj[substr]) return false
        obj[substr]--
    }

    return true

}