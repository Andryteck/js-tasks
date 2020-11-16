// https://leetcode.com/problems/reverse-vowels-of-a-string/

var reverseVowels = function (s) {
    let vowels = 'aeiouAEIOU'
    let resultArr = []
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            resultArr.push(i)
        }
    }
    let arr = s.split('');
    for (let j = 0; j < (resultArr.length) / 2; j++) {
        [arr[resultArr[j]], arr[resultArr[resultArr.length - j - 1]]] = [arr[resultArr[resultArr.length - j - 1]], arr[resultArr[j]]]
    }
    return arr.join('')
}