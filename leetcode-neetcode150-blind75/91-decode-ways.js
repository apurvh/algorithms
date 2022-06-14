/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = [];

  /**
   * calculate dp[n] & dp[n-1] .. n being the len of s
   */
  // 12 -> 21
  // 02 -> 01
  // 20 -> 10
  // 30 -> 00
  if (s[s.length - 1] === '0') dp[s.length - 1] = 0;
  else dp[s.length - 1] = 1;

  // 01-09
  if (s[s.length - 2] === '0') dp[s.length - 2] = 0;
  // 30-99
  else if ('3456789'.includes(s[s.length - 2])) {
    dp[s.length - 2] = dp[s.length - 1];
  }
  // 10-19
  else if (s[s.length - 2] === '1') {
    dp[s.length - 2] = dp[s.length - 1] + 1;
  } else {
    // 20-26
    if ('0123456'.includes(s[s.length - 1])) {
      dp[s.length - 2] = dp[s.length - 1] + 1;
    }
    // 27-29
    else {
      dp[s.length - 2] = dp[s.length - 1];
    }
  }

  // calculate dp[n-3] to dp[0]
  for (i = s.length - 3; i >= 0; i--) {
    if (s[i] === '0') dp[i] = 0;
    else dp[i] = dp[i + 1];

    // check if 0-26 and then add dp[[i+2] val to dp[i]
    if (s[i] === '1') dp[i] += dp[i + 2];
    if (s[i] === '2' && '0123456'.includes(s[i + 1])) dp[i] += dp[i + 2];
  }

  console.log(dp);
  return dp[0];
};
