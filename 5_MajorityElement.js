// https://leetcode.com/problems/majority-element/

let majorityElement = function (nums) {
    let major = nums[0], count = 1, maxAppears = nums.length / 2;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            count++;
            major = nums[i];
            if (count > maxAppears) return major
        } else if (major == nums[i]) {
            count++;
            if (count > maxAppears) return major
        } else count--;

    }
    return major;
};