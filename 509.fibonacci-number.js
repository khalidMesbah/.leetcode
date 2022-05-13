/*
 * @lc app=leetcode id=509 lang=cpp
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
// @lc code=end
// console.log(fib(0));
// console.log(fib(1));
console.log(fib(2)); //1
console.log(fib(3)); //2
console.log(fib(4)); //3
