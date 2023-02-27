// eslint-disable-next-line no-unused-vars
var maxProfit = function (prices) {

  let lowestPrice = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
    }
    if (prices[i] - lowestPrice > profit) {
      profit = prices[i] - lowestPrice;
    }
  }

  return profit;

};
