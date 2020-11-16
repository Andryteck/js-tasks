// https://leetcode.com/problems/relative-sort-array/

var relativeSortArray = function (arr1, arr2) {
    let resultArr = []
    let tail = []
    let hash = {}

    for (let i = 0; i < arr1.length; i++) {
        let current = arr1[i];
        if (hash[current]) {
            hash[current] += 1;
        } else {
            hash[current] = 1;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let current = arr2[i];
        if (hash[current]) {
            resultArr.push(...new Array(hash[current]).fill(current));
            delete hash[current];
        }
    }
    for (let i in hash) {
        tail.push(...new Array(hash[i]).fill(i))
    }
    resultArr.push(...tail.sort((a, b) => a - b));
    return resultArr
}
