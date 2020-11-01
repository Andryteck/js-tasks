// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
    let substring = ""
    if (strs === null || strs.length === 0) return substring
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) return substring
        }
        substring = substring + char
    }

    return substring
}