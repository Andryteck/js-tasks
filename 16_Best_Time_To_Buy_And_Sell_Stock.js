// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
    if (prices.length < 2) return 0
    let maxProfit = 0
    let maxStock = Math.max(prices[prices.length - 1], prices[prices.length - 2])
    for (let i = prices.length - 2; i > -1; i--) {
        let profit = maxStock - prices[i];
        maxStock = Math.max(maxStock, prices[i]);
        maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit
};