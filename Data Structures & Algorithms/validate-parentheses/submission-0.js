class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closing = new Map([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ]);

        const stack = [];

        for (const b of s) {
            if (closing.has(b)) {
                if (stack.pop() !== closing.get(b)) {
                    return false;
                }
            } else {
                stack.push(b);
            }
        }

        return stack.length === 0;
    }
}
