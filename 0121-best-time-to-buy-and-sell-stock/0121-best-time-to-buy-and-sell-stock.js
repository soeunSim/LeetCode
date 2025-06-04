/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let checkMinPrice = Infinity;
	let checkProfit = 0;
	
	for (let i = 0; i < prices.length; i++) {
		if(checkMinPrice > prices[i]) {
			checkMinPrice = prices[i];
		}
		
		let calcProfit = prices[i] - checkMinPrice;
		if (calcProfit > checkProfit) {
			checkProfit = calcProfit;
		}
	}
	
	return checkProfit;
};