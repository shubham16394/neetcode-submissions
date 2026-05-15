class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = {};
        for(let n of nums) {
            if(freq[n] !== undefined) {
                return true;
            }
            else {
                freq[n] = 1;
            }
        }
        return false;
    }
}
