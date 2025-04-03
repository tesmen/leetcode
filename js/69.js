/**
 * 69. Sqrt(x)
 * Solved
 * Easy
 * Topics
 * Companies
 * Hint
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *
 *
 * Example 1:
 *
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 * Example 2:
 *
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 *
 *
 * Constraints:
 *
 * 0 <= x <= 231 - 1
 *
 *
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    if(x === 0) {
        return 0
    }

    if(x === 1) {
        return 1
    }

    let max = 46341 // 2147483648
    let current = 0
    let currentPlus = 0
    let test = 0
    let testPlus = 0
    let min = 1

    while(true) {
        current = Math.floor((min + max) / 2)
        currentPlus = current + 1
        test = current * current
        testPlus = currentPlus * currentPlus
        // console.log({ min, max, current, test, testPlus })

        if(test === x) {
            return current
        }

        if(testPlus === x) {
            return currentPlus
        }

        if(test <= x && x < testPlus) {
            return current
        } else if(x < test) {
            max = Math.floor((min + max) / 2)
        } else if(x > testPlus) {
            min = Math.floor((min + max) / 2)
        }
    }
}
