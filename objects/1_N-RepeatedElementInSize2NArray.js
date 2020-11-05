// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

let repeatedNTimes = function(A) {
    let result = A.find((item, index) => A.indexOf(item) !== index)
    return result
};