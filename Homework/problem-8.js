let wallet = prompt('Enter the amount of money you have in your wallet');
let chocolatePrice = prompt('Enter the price for each chocolate bar');
let youCanBuy =  Math.round(wallet/chocolatePrice);
let moneyBack = wallet-(chocolatePrice*youCanBuy);
console.log(`You can afford to buy ${youCanBuy} chocolate bars and will receive ${moneyBack} USD back`);