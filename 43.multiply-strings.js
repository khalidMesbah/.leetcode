/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    num1 = [...num1].reverse().map((e, i) => +e * 10 ** i);
    num2 = [...num2].reverse().map((e, i) => +e * 10 ** i);
    let max, min;
    num1.length > num2.length ? (max = num1, min = num2) : (max = num2, min = num1);
    // console.log(max, min);
    let res = [];
    for (let i = 0; i < max.length; i++) {
        // console.log(`===>`, max[i]);
        for (let j = 0; j < min.length; j++) {
            // console.log(min[j]);
            res.push(`${max[i] * min[j]}`);
        }
    }
    let maxL = 0;
    for (let i = 0; i < res.length; i++) {
        if (res[i].length > maxL) maxL = res[i].length;
    }
    res.forEach((e, index) => {
        for (let i = 0; i < maxL - res[index].length; i++) {
            e = `0` + e;
        }
        res[index] = e;
    });
    let ans = '';
    let tmp = 0;
    let carry = 0;
    for (let i = maxL - 1; i >= 0; i--) {
        tmp = 0;
        if (carry) tmp = carry, carry = 0;
        for (let j = 0; j < res.length; j++) {
            tmp += +res[j][i] || 0;
        }
        if (`${tmp}`.length > 1) {
            carry = +`${tmp}`.slice(0, `${tmp}`.length - 1);
            tmp = +`${tmp}`[`${tmp}`.length - 1];
        }
        ans += tmp;
    }
    if (carry) ans += carry;
    return [...ans].reverse().join("");
};
// @lc code=end

// console.log(multiply("123456789", "987654321"));
// console.log(multiply("123", "456"));
// console.log(multiply("2", "3"));
console.log(multiply("498828660196", "840477629533"));