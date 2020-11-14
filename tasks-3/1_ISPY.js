// https://www.codewars.com/kata/555185132c0d4cca3d000197/train/javascript

function spyOn(func) {
    let resArr = []

    function spy() {
        let result = func.apply(null, arguments)
        resArr.push([arguments, result])
        return result
    }

    spy.callCount = function () {
        return resArr.length
    }

    spy.returned = function (value) {
        return resArr.some(function (call) {
            return call[1] === value
        })
    }

    spy.wasCalledWith = function (value) {
        return calls.some(function (call) {
            for (let i = 0; i < call[0].length; i++) {
                if (call[0][i] === value) {
                    return true
                }
            }
        })
    }

    return spy;
}