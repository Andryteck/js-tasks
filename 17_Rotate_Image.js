// https://leetcode.com/problems/rotate-image/

let rotate = function (matrix) {
    let n = matrix.length;
    let n2 = Math.floor(n / 2)
    // 1 2 3     7 8 9
    // 4 5 6  => 4 5 6
    // 7 8 9     1 2 3
    for (let i = 0; i < n2; i++) {
        for (let j = 0; j < n; j++) {
            swap(matrix, i, j, n - 1 - i, j)
        }
    }
    // 7 8 9     7 4 1
    // 4 5 6  => 8 5 2
    // 1 2 3     9 6 3
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            swap(matrix, i, j, j, i)
        }
    }
}

let swap = function (matrix, x1, y1, x2, y2) {
    let tmp = matrix[x1][y1]
    matrix[x1][y1] = matrix[x2][y2]
    matrix[x2][y2] = tmp
}