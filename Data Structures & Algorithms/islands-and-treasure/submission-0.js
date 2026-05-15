class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const m = grid.length;
        const n = grid[0].length;
        function bfs(Q, V) {
            while(Q.length !== 0) {
                const [x, y] = Q.shift();
                if(grid[x][y] > -1) {
                    const nes = [[x, y+1], [x+1, y], [x-1, y], [x, y-1]];
                    for(let ne of nes) {
                        if(ne[0] < m && ne[1] < n && ne[0] >= 0 && ne[1] >= 0 && grid[ne[0]][ne[1]] > 0) {
                            if(!V.has(`${ne[0]}${ne[1]}`)) {
                                Q.push(ne);
                                V.add(`${ne[0]}${ne[1]}`);
                                if(grid[x][y] === 0) {
                                    grid[ne[0]][ne[1]] = 1;
                                }
                                else if(grid[x][y] > 0) {
                                    grid[ne[0]][ne[1]] = grid[x][y] + 1;
                                }
                            }
                        }
                    }
                }
            }
        }

        const Q = [];
        const V = new Set();
        for(let i=0; i<m; i++) {
            for(let j=0; j<n; j++) {
                if(grid[i][j] === 0) {
                    Q.push([i,j]);
                    V.add(`${i}${j}`);
                }
            }
        }
        bfs(Q, V);
        return grid;
    }

}
