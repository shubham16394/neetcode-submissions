class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let initCount = n;
        const parents = [];
        const rank = Array(n).fill(1);
        for(let i=0; i<n; i++) {
            parents.push(i);
        }
        function find(n) {
            let p = n;
            while(p !== parents[p]) {
                parents[p] = parents[parents[p]];
                p = parents[p]
            }
            return p;
        }

        function union(n1, n2) {
            const p1 = find(n1);
            const p2 = find(n2);

            if(p1 === p2) return 0;
            if(rank[p2] > rank[p1]) {
                parents[p1] = p2;
                rank[p2] += rank[p1];
            }
            else {
                parents[p2] = p1;
                rank[p1] += rank[p2];
            }
            return 1;
        }

        for(let [n1, n2] of edges) {
            initCount -= union(n1, n2);
        }
        return initCount;
    }
}
