// https://leetcode.com/problems/find-peak-element/

var findPeakElement = function (nums) {
    let a = nums.length - 1
    for (let i = 0; i <= a; i++) {
        if (nums[i] > nums[i + 1]) {
            return i
        }
    }
    return a
}