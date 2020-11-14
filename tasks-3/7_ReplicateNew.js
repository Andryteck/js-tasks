// https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript

function nouveau(Constructor, ...arg) {
    let obj = Object.create(Constructor.prototype)
    let res = Constructor.apply(obj, [...arg])

    if (typeof res === 'undefined') {
        return obj
    } else if (typeof res === 'string') {
        return obj
    } else if (typeof res === 'boolean') {
        return obj
    } else if (res === null) {
        return obj
    } else {
        return res
    }
}