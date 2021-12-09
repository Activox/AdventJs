// Investing in cryptocurrencies is almost a risky sport. Bitmart was hacked the other day and has made the value of Bitcoin, and other currencies, down 25%.

// We are going to write a function that receives the price list of a cryptocurrency in one day and we must return the maximum profit that we could get 
// if we buy and sell the investment on the same day.

// The price list is an array of numbers and represents time from left to right. So keep in mind that you cannot buy at a price that is to the right of the sale 
// and you cannot sell at a price that is to the left of the purchase.

// For instance:

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge)  // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda)  // -> -1 (no hay ganancia posible)

export default function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!
  let earnings = 0
  for(let i = 0; i < prices.length-1; i++){
    for(let j = i+1; j < prices.length; j++){
      if (prices[j] - prices[i] > earnings){
        earnings = prices[j] - prices[i]
      }
    }
  }
  return earnings === 0 ? -1 : earnings
}
