// https://leetcode.com/problems/length-of-last-word/

let lengthOfLastWord = function (s) {
    let resultArr = s.trim().split(' ');
    if (resultArr.length === 0) {
        return 0;
    } else {
        return resultArr[resultArr.length - 1].length;
    }
};