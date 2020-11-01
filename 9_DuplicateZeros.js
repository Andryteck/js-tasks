// https://leetcode.com/problems/duplicate-zeros/

var duplicateZeros = function (arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === 0) {
            arr.pop();
            arr.splice(i, 0, 0)
            i = i + 1
        }
    }
};