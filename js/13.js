/**
 * 13. Roman to Integer
 * Solved
 * Easy
 * Topics
 * Companies
 * Hint
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given a roman numeral, convert it to an integer.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 * Example 2:
 *
 * Input: s = "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * Example 3:
 *
 * Input: s = "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 15
 * s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 *
 *
 *
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const costs = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let c = 0
    let current = s[0]
    const agg = []
    let stack = []

    while(s[c]) {
        if(s[c] !== current) {
            if(costs[s[c]] > costs[current]) {
                stack.push(s[c])
                agg.push([ ...stack ])
                stack = []
                current = s[c + 1]
            } else {
                agg.push([ ...stack ])
                stack = []
                current = s[c]
                stack.push(s[c])
            }
        } else {
            stack.push(s[c])
        }

        c++
    }

    if(stack.length) {
        agg.push([ ...stack ])
    }

    const res = agg.reduce(((acc, cur) => {
        if(cur.length === 2 && costs[cur[0]] < costs[cur[1]]) {
            return acc + costs[cur[1]] - costs[cur[0]]
        } else {
            // console.log('cur.length',cur.length, costs[cur[0]], cur[0])
            return acc + (costs[cur[0]] * cur.length)
        }
    }), 0)

    return res
}