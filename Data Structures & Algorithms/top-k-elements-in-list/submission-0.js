class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};
        const arr = Array.from({ length: nums.length+1 }, () => []);
        const finalArr = [];
        for(let i=0; i<nums.length; i++) {
            if(freqMap[nums[i]]) {
                freqMap[nums[i]] = freqMap[nums[i]] + 1;
            }
            else {
                freqMap[nums[i]] = 1;
            }
        }
        console.log('freqMap', freqMap, 'arr', arr);
        for(let [k,v] of Object.entries(freqMap)) {
            arr[v].push(k);
        }
        console.log('arr', arr);
        for(let i=arr.length-1; i>=0; i--) {
            if(finalArr.length === k) {
                break;
            }
            else {
                if(arr[i].length) {
                    finalArr.push(...arr[i]);
                }
            }
        }
        console.log('finalArr', finalArr);
        return finalArr;
    }
}
