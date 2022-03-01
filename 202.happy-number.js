/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sn = n.toString().split("");
  //   sn = sn.map(e=>Number(e));

  if (n === 1) return true;
  let r = 0;

  for (let i = 0; i < sn.length; i++) {
    r += Number(sn[i]) * Number(sn[i]);
  }

  if (r !== 1) {
    if (r.toString().length > 1) {
      isHappy(r);
    } else return false;

    return true;
  }
  return false;
};
// @lc code=end

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(1));
