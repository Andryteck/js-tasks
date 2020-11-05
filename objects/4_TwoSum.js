// https://leetcode.com/problems/two-sum/

let twoSum = function(nums, target) {
    let myMap = new Map
    for (let i = 0; i < nums.length; i++) {
        let additional = target - nums[i]
        if (myMap.has(additional)) {
            return [myMap.get(additional), i]
        }
        myMap.set(nums[i], i)
    }
}