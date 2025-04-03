/**
 * 123. Best Time to Buy and Sell Stock III
 * Hard
 * Topics
 * Companies
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * Find the maximum profit you can achieve. You may complete at most two transactions.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 *
 *
 *
 * Example 1:
 *
 * Input: prices = [3,3,5,0,0,3,1,4]
 * Output: 6
 * Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 * Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
 * Example 2:
 *
 * Input: prices = [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
 * Example 3:
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 *
 *
 * Constraints:
 *
 * 1 <= prices.length <= 10**5
 * 0 <= prices[i] <= 10**5
 *
 * @param {number[]} prices
 * @return {number}
 */


const maxProfit = function (prices) {
    // console.log({ prices })
    if(prices.length === 1) {
        return 0
    }

    let min = prices[0]
    let max = 0
    let acc = []

    for(let i = 1; i < prices.length; i++) {
        const sum = prices[i] - min
        // console.log({ i, price: prices[i], min, sum, max, acc })
        if(sum > max) {
            max = sum
        } else {
            acc.push(max)
            max = 0
            min = prices[i]
        }

        if(prices[i] < min) {
            min = prices[i]
        }
    }

    acc.push(max)
    acc.sort((num1, num2) => num1 - num2)
    console.log(acc)
    return Number(acc[acc.length - 1]) + (acc[acc.length - 2] ? acc[acc.length - 2] : 0)
}

const maxProfit2 = function (prices) {
    const upsAndDowns = []
    let open = true
    let start = 0

    for(let i = 0; i < prices.length; i++) {
        console.log(i, prices[i])
        if(prices[i + 1] > prices[i]) {
            if(open) {
                start = i

                open = false
            }
        } else if(i + 1 !== prices.length) {
            upsAndDowns.push([ start, i ])
            open = true
        }
    }
    const deals = []

    console.log(upsAndDowns)
    for(const [ start, finish ] of upsAndDowns) {
        console.log({ start, finish })
        deals.push(upsAndDowns.map(([up, down]) => prices[down] - prices[start]))
    }

    console.log({deals})
}

// console.log(maxProfit([ 3, 3, 5, 0, 0, 3, 1, 4 ])) // 6
// console.log(maxProfit2([ 1, 2, 3, 4, 5 ])) // 4
// console.log(maxProfit([ 7, 6, 4, 3, 1 ])) // 0
// console.log(maxProfit([ 3, 2, 6, 5, 0, 3 ])) // 7
// console.log(maxProfit([ 14, 9, 10, 12, 4, 8, 1, 16 ])) // 19
console.log(maxProfit2(
        [ 1, 2, 4, 2, 5, 7, 2, 4, 9, 0 ]),
              // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
) // 13 6+7

// unfinished