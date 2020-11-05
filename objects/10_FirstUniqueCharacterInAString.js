// https://leetcode.com/problems/first-unique-character-in-a-string/

let firstUniqChar = function (s) {
    for (let i = 0; i <= s.length - 1; i++) {
        let j = s.charAt(i)
        if (s.indexOf(j) === s.lastIndexOf(j)) {
            return i
        }
    }
    return -1
}