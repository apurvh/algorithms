/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxprofit = 0;

  l = 0;
  r = 1;

  while (r < prices.length) {
    if (prices[l] >= prices[r]) {
      l = r; // tricky condition
    }

    // when profitable
    else if (prices[l] < prices[r]) {
      // get profit and compare it with maxprofit
      const profit = prices[r] - prices[l];
      if (profit > maxprofit) maxprofit = profit;
    }
    r++;
  }

  return maxprofit;
};
