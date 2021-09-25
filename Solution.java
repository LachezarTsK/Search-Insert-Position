
public class Solution {

    public int searchInsert(int[] nums, int target) {

        int lowerBoundary = 0;
        int upperBoundary = nums.length - 1;
        int mid = 0;

        while (lowerBoundary <= upperBoundary) {

            mid = (lowerBoundary + upperBoundary) / 2;
            if (nums[mid] == target) {
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
    }

}
