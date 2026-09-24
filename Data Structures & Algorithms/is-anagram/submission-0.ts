class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false
        }

        const count = new Map<string, number>();

        for(const char of s){
            count.set(char,(count.get(char) ?? 0) + 1)
        }

        for (const char of t){
            const current = count.get(char)
            if(current === undefined){
                return false;
            }
            if (current === 1){
                count.delete(char)
            } else {
                count.set(char, current - 1);
            }
            


        }

        return count.size === 0;


        
    }
}
