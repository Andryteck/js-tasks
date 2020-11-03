// https://leetcode.com/problems/relative-sort-array/

var relativeSortArray = function (arr1, arr2) {
    let resultArr = []
    for (let j = 0; j <= arr2.length - 1; j++) {
        for (let i = 0; i <= arr1.length - 1; i++) {
            if (arr1[i] === arr2[j]) {
                resultArr.push(arr1[i])
            }
        }
    }
    for (let k = 0; k <= arr1.length - 1; k++) {
        if (resultArr.indexOf(arr1[k]) === -1) {
            resultArr.push(arr1[k])
        }
    }
    return resultArr
};
