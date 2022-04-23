/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = "";
  let max_res = "";
  let max = 0;
  let ft = 1;

  for (let j = 0; j < s.length; j++) {
    res = "";
    for (let i = j; i < s.length; i++) {
      if (!res.includes(s[i])) {
        res += s[i];
      } else {
        break;
      }
    }
    if (ft) (max = res.length), (ft = 0), (max_res = res);
    if (res.length > max) (max = res.length), (max_res = res);
  }

  return max;
};
// @lc code=end

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
