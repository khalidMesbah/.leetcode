/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let i = -1;
  while (i++ < wordDict.length) {
    if (s.startsWith(wordDict[i])) {
      s = s.slice(wordDict[i].length);
    } else {
      i = 0;
    }
    console.log(s);
    if (s === "") break;
  }
  if (s === "") return true;
  return false;
};
// @lc code=end
// wordBreak("leetcode", ["leet", "code"]);
// console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
