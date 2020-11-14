// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript

Object.prototype.hash = function (string) {
    let obj = this
    string.split(".").forEach(function (item) {
        try {
            obj = obj[item]
        } catch (e) {
            obj = undefined;
        }
    })
    return obj
}