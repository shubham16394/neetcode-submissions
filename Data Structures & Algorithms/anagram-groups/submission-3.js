class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groupMap = {};
        for(let i=0; i<strs.length; i++) {
            const splitStr = strs[i].split('');
            const frqMap = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0};
            for(let j=0; j<splitStr.length; j++) {
                frqMap[splitStr[j]] = frqMap[splitStr[j]]+1;
            }
            const val = Object.values(frqMap).join(',');
            if(groupMap[val]){
                groupMap[val].push(strs[i]);
            }
            else {
                groupMap[val] = [strs[i]];
            }
        }
        return Object.values(groupMap);
    }
}
