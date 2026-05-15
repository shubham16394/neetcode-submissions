class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const visit = new Set();
        const adjList = new Map();
        for(let i=0; i<n; i++) {
            adjList.set(i, []);
        }
        for(let [n1, n2] of edges) {
            adjList.get(n1).push(n2);
            adjList.get(n2).push(n1);
        }

        function dfs(s, p) {
            if(visit.has(s)) return false;
            visit.add(s);
            for(let ne of adjList.get(s)) {
                if(ne !== p) {
                    if(!dfs(ne, s)) return false;
                }
            }
            return true;
        }

        return dfs(0, -1) && n === visit.size;
    }
}
