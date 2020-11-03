// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

function prefill(n, v) {
    const lengthInt = parseInt(n)

    if (Number.isNaN(lengthInt) || n % 1 !== 0 || lengthInt < 0) {
        throw new TypeError(`${n} is invalid`)
    }
    if (lengthInt === 0) {
        return []
    }
    return new Array(n).fill(v)

}