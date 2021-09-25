
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {

    let lowerBoundary = 0;
    let upperBoundary = nums.length - 1;
    let mid = 0;

    while (lowerBoundary <= upperBoundary) {

        mid = Math.floor((lowerBoundary + upperBoundary) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            lowerBoundary = mid + 1;
        }
        if (nums[mid] > target) {
            upperBoundary = mid - 1;
        }
    }

    return nums[mid] < target ? mid + 1 : mid;
};

