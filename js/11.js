/**
 * 11. Container With Most Water
 * Solved
 * Medium
 * Topics
 * Companies
 * Hint
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 *
 *
 * Example 1:
 * https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 * Example 2:
 *
 * Input: height = [1,1]
 * Output: 1
 *
 *
 * Constraints:
 *
 * n == height.length
 * 2 <= n <= 105
 * 0 <= height[i] <= 104
 *
 *
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {
    const max = heights.toSorted((a, b) => a - b)[heights.length - 1]
    const areas = [0]

    for(let i = max; i >= 1; i--) {
        const edgeL = heights.findIndex(height => height >= i)
        const edgeR = heights.findLastIndex((height, index) => height >= i)

        if(edgeL === edgeR) {
            continue
        }
        areas.push((edgeR - edgeL) * i)
    }

    return areas.toSorted((a, b) => a - b).pop()
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))