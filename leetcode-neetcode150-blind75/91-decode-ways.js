/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = new Array(s.length + 2);

  // adding these two values simplifies the edgecase
  dp[dp.length - 1] = 0;
  dp[dp.length - 2] = 1;

  for (i = s.length - 1; i >= 0; i--) {
    if (s[i] === '0') dp[i] = 0;
    else dp[i] = dp[i + 1];

    // check if 0-26 and then add dp[[i+2] val to dp[i]
    if (s[i] === '1') dp[i] += dp[i + 2];
    if (s[i] === '2' && '0123456'.includes(s[i + 1])) dp[i] += dp[i + 2];
  }
  return dp[0];
};
