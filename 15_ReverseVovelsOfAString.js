// https://leetcode.com/problems/reverse-vowels-of-a-string/

var reverseVowels = function (s) {
    let vowels = 'aeiouAEIOU'
    let stringInArray = s.split('')
    let resultArr = []

    for (let i = 0; i <= s.length - 1; i++) {
        if (vowels.indexOf(s[i]) !== -1) {
            resultArr.push(s[i])
        }
    }

    let lastIndex = resultArr.length - 1

    for (let i = 0; i <= stringInArray.length - 1; i++) {
        if (vowels.indexOf(stringInArray[i]) !== -1) {
            stringInArray[i] = resultArr[lastIndex]
            lastIndex--
        }
    }
    if (s !== stringInArray.join('')) return stringInArray.join('')

};