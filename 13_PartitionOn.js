// https://www.codewars.com/kata/525a037c82bf42b9f800029b/train/javascript

function partitionOn(pred, items) {
    let f = []
    let t = []
    for (let i = 0; i < items.length; ++i) {
        if (pred(items[i])) {
            t.push(items[i])
        } else {
            f.push(items[i])
        }

    }
    for (let i = 0; i < f.length; ++i) {
        for (let j = 0; j < t.length; ++j) {
            items[i] = f[i]
            items[j + f.length] = t[j]
        }
    }

    return f.length
}