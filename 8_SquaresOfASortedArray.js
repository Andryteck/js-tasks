// https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function (A) {
    let resultArr = []
    for (let i = 0; i <= A.length - 1; i++) {
        resultArr.push(Math.pow(A[i], 2))
    }
    return resultArr.sort((prew, next) => prew < next ? -1 : 1)
};