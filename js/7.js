/**
 * 7. Reverse Integer
 * Solved
 * Medium
 * Topics
 * Companies
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 *
 *
 * Example 1:
 *
 * Input: x = 123
 * Output: 321
 * Example 2:
 *
 * Input: x = -123
 * Output: -321
 * Example 3:
 *
 * Input: x = 120
 * Output: 21
 *
 *
 * Constraints:
 *
 * -2**31 <= x <= 2**31 - 1
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const numStr = String(Math.abs(x)).split('').reverse().join('')
    const reversed = Number(numStr)

    if(reversed > 2147483647){
        return 0
    }

    return x<0 ?-Number(numStr):Number(numStr)
};