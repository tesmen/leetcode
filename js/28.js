/**
 * 28. Find the Index of the First Occurrence in a String
 * Easy
 * Topics
 * Companies
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 *
 *
 * Example 1:
 *
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 * Example 2:
 *
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 *
 *
 * Constraints:
 *
 * 1 <= haystack.length, needle.length <= 10**4
 * haystack and needle consist of only lowercase English characters.
 *
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    /** @type {string[]} */
    const matches = []

    for(let i = 0; i < haystack.length; i++) {
        // console.log({ matches, letter: haystack[i] })
        if(haystack[i] === needle[0]) {
            // console.log('>>> noticed start', haystack[i],' at ', i)
            matches.push('')
        }

        for(let j = 0; j < matches.length; j++) {
            if(haystack[i] === needle[matches[j].length]) {
                matches[j] += haystack[i]
            } else {
                matches[j] = ''
            }

            if(matches[j] === needle) {
                return i - (matches[j].length - 1)
            }
        }
    }

    return -1
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function (haystack, needle) {
    for(let i = 0; i <= haystack.length - needle.length; i++) {
        if(haystack[i] === needle[0]) {
            for(let j = 0; j < needle.length; j++) {
                if(haystack[i + j] !== needle[j]) {
                    break
                } else if(j === needle.length - 1) {
                    return i
                }
            }
        }
    }

    return -1
}

console.log(strStr2('a', 'a')) // 0
console.log(strStr2('leetcode', 'leeto')) // -1
console.log(strStr2('sadbutsad', 'sad')) // 0
console.log(strStr2('sadbutsad', 'foo')) // -1
console.log(strStr2('thisiselephantelephant', 'elephant')) // 6
console.log(strStr2('mississippi', 'issip')) // 4

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStrQuick = function (haystack, needle) {

    if(needle === '') {
        return 0
    }

    for(let i = 0; i <= haystack.length - needle.length; i++) {
        if(haystack.slice(i, i + needle.length) === needle) {
            return i
        }
    }

    return -1
}