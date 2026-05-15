class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const iMap = new Map();
        nums.forEach((e, i) => {
            if(iMap.has(e)) {
                iMap.get(e).push(i);
            }
            else{
                iMap.set(e,[i]);
            }
        });
        
        for (let ind = 0; ind < nums.length; ind++) {
        let i = nums[ind];
        let r = target - i;

        if (iMap.has(r)) {
            if (i === r && iMap.get(r).length > 1) {
                return [ind, iMap.get(r)[1]];
            } else if (ind !== iMap.get(r)[0]) {
                return [ind, iMap.get(r)[0]];
            }
        }
}
    }
}
