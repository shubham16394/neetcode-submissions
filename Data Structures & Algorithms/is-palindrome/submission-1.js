class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const revS = s.split('').reverse().join('');
        return s === revS;
        
    }
}
