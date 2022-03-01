/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    s = s.split("");
    t=t.split("");
    if(s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < t.length; j++) {
        if (s[i] === t[j]) {
            s[i] = 1;
            t[j] = 1;
        }
      }
    }

  for (let i = 0; i < s.length; i++) {
   if(s[i] !== 1) return false;
  }


  return true;
};
// @lc code=end

console.log(isAnagram("khaled", "delahk"));
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));
console.log(isAnagram("aacc", "ccac"));
console.log(isAnagram("aacc", "ccac"));
