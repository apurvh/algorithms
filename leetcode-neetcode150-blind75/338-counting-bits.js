/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // brute force, nlogn
  const output = [0];
  for (let i = 1; i <= n; i++) {
    // count 1's
    let count = 0;
    let num = i;
    while (num !== 0) {
      num = num & (num - 1);
      count++;
    }

    output.push(count);
  }

  return output;

  // O(n)solution using DP
  // draw out the binary representation of 1-9 and you can see the pattern
  /*
    const dp = new Array(n+1).fill(0)
    let offset = 1
    for(let i=1; i<=n; i++){
        if(offset*2 == i) offset = i
        dp[i] = 1+ dp[i-offset]
    }
    
    return dp
    */
};
