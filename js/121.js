/**
 * 121. Best Time to Buy and Sell Stock
 * Solved
 * Easy
 * Topics
 * Companies
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 *
 *
 * Example 1:
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * Example 2:
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 *
 * Constraints:
 *
 * 1 <= prices.length <= 10**5
 * 0 <= prices[i] <= 10**4
 *
 * @param prices
 * @return {*}
 */

const maxProfit = function (prices) {
    // console.log({ prices })
    let minCandidate = prices[0]
    let max = 0

    for(let i = 1; i < prices.length; i++) {
        const sum = prices[i] - minCandidate
        // console.log({ i, price: prices[i], minCandidate, sum, max })
        if(sum > max) {
            max = sum
        }

        if(prices[i] < minCandidate) {
            minCandidate = prices[i]
        }
    }

    return max
}

console.log(maxProfit([ 7, 1, 5, 3, 6, 4 ])) // 5
console.log(maxProfit([ 7, 6, 4, 3, 1 ])) // 0
console.log(maxProfit([ 7, 6, 3, 4, 1, 8 ])) // 7
console.log(maxProfit([ 3, 2, 6, 5, 0, 3 ])) // 4
console.log(maxProfit([ 3, 3, 5, 0, 0, 3, 1, 4 ])) // 4