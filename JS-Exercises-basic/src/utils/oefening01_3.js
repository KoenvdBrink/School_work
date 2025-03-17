/* eslint-disable import/prefer-default-export */
/*

Loops

*/

/**
 * The function nFac calculates the faculty of a given number
 * NB: use a loop, not a recursive function
 *
 * @function nFac
 * @param {number} n - an integer
 * @return {number} = n! (spoken as n-faculty) = n * (n-1)!
 *           0! = 1
 *           1! = 1
 *           2! = 1 * 2 = 2
 *           3! = 1 * 2 * 3 = 6
 *           4! = 1 * 2 * 3 * 4 = 24
 *           ...
 */
function nFac(n){
  let res = 1
  for (let i = 2; i <= n; i++){
     res *= i
  }
  return res
}

export {
  nFac,
};
