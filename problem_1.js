/**
 * TC: O(2^n)
 * SC: O(n)
 * tower of hanoi
 * @param {number} n number of disks
 * @param {string} A source
 * @param {string} B temp
 * @param {string} C destination
 * @returns 
 */
function TOH(n, A, B, C) {
    if (n === 0) return
    TOH(n - 1, A, C, B)
    console.log(`${n}: ${A} -> ${C}`)
    TOH(n - 1, B, A, C)
}
TOH(4, 'A', 'B', 'C')

//https://www.codechef.com/problems/HISC05