/**
 * 67. Add Binary
 * Easy
 * Topics
 * Companies
 * Given two binary strings a and b, return their sum as a binary string.
 *
 *
 *
 * Example 1:
 *
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 *
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 *
 * Constraints:
 *
 * 1 <= a.length, b.length <= 10**4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 *
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    /** @type {Record<string, {co:string, res:string}>} */
    const map = {
        '000': { co: '0', res: '0' },
        '001': { co: '0', res: '1' },
        '010': { co: '0', res: '1' },
        '011': { co: '1', res: '0' },
        '100': { co: '0', res: '1' },
        '101': { co: '1', res: '0' },
        '110': { co: '1', res: '0' },
        '111': { co: '1', res: '1' },
    }
    a = a.split('').reverse().join('')
    b = b.split('').reverse().join('')

    const [ lead, less ] = a.length >= b.length
        ? [ a, b ]
        : [ b, a ]

    let co = '0'
    let res = ''
    let adder

    for(let i = 0; i < lead.length; i++) {
        adder = map[co + lead[i] + (less[i] || '0')]
        // console.log(co, lead[i], (less[i] || '0'), '=>', { adder })
        res += adder.res
        co = adder.co
    }

    if(co === '1') {
        res += co
    }

    return res.split('').reverse().join('')
}

console.log(addBinary('11', '11')) // 110
console.log(addBinary('11', '1')) // 100
console.log(addBinary('1010', '1011')) // 10101