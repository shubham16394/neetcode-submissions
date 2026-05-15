class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const size = [];
        for(let s of strs) {
            size.push(s.length);
        }
        let encodedStr = '';
        for(let i=0; i<strs.length; i++) {
            encodedStr += size[i]+';'+strs[i];
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        let i = 0;
        let j = 0;
        while(i<str.length) {
            if(str[i] === ';') {
                const count = parseInt(str.slice(j,i));
                const s = str.slice(i+1, count+i+1);
                strs.push(s);
                j = i = count+i+1;
            }
            else {
                i++;
            }
        }
        return strs;
    }
}
