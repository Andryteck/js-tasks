// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript

Object.prototype.hash = function (string) {
    try {
        return eval(`this.${string}`)
    } catch (e) {
        return undefined
    }
}