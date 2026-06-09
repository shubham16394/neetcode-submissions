class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let mArea = 0;
        let p = 0;
        let q = heights.length - 1;
        while(p<q) {
            const w = q-p;
            const h = Math.min(heights[p], heights[q]);
            mArea = Math.max(w*h, mArea);
            if(heights[p] > heights[q]) {
                q--;
            }
            else if(heights[p] <= heights[q]) {
                p++
            }
        }
        return mArea;
    }
}
