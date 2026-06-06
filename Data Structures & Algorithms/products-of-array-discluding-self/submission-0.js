class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const p = [1];
        const s = [1];
        let pp = 1;
        let sp = 1;
        for(let i=1; i<nums.length; i++) {
            pp = pp * nums[i-1];
            p.push(pp);
        }
        for(let i=nums.length-2; i>=0; i--) {
            sp = sp * nums[i+1];
            s.push(sp);
        }
        s.reverse();
        const op = [];
        for(let i=0; i<nums.length; i++) {
            op.push(p[i]*s[i]);
        }
        return op;
    }
}
