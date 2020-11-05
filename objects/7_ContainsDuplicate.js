// https://leetcode.com/problems/contains-duplicate/

let containsDuplicate = function(nums) {
    return [...new Set(nums)].length !== nums.length
}