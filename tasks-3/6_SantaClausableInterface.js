// https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

function isSantaClausable(obj) {
    if (typeof obj.sayHoHoHo !== 'function') return false
    if (typeof obj.distributeGifts !== 'function') return false
    if (typeof obj.goDownTheChimney !== 'function') return false
    else return true
}