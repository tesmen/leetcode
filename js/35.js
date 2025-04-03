/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let bottomIndex = 0
    let topIndex = nums.length - 1
    let middleIndex = 0
    let c = 0

    if(nums[topIndex] < target) {
        return topIndex + 1
    }

    if(nums[bottomIndex] > target) {
        return bottomIndex
    }

    while(c < 100) {
        middleIndex = Math.floor((bottomIndex + topIndex) / 2)

        if(nums[middleIndex] === target) {
            console.log('found', middleIndex)
            return middleIndex
        }


        if(topIndex - bottomIndex === 1) {
            return topIndex
        }

        // console.log({
        // 	count: `c=${c}`,
        // 	bottomIndex,
        // 	topIndex,
        // 	middleIndex,
        // 	val: nums[middleIndex],
        // 	sign: nums[middleIndex] < target ? '<' : '>',
        // 	target,
        // })
        if(nums[middleIndex] < target) {
            bottomIndex = middleIndex
        } else {
            topIndex = middleIndex
        }
        c++
    }
}

console.log(searchInsert([1,3,5,6], 5))