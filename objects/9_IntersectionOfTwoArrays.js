// https://leetcode.com/problems/intersection-of-two-arrays-ii/

let intersect = function (nums1, nums2) {
    let result = []
    for (let i = 0; i <= nums1.length; i++) {
        if (nums1.includes(nums2[i])) {
            result.push(nums2[i])
        }
    }

    return result
}