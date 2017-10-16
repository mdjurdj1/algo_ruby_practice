function printAllPossibleOrderedPairs(arrayOfItems) {
  arrayOfItems.forEach(function(firstItem) {
      arrayOfItems.forEach(function(secondItem) {
          console.log(firstItem, secondItem);
      });
  });
}

function evaluateStox(arr) {
	var maxProfits = -Number.MAX_VALUE
	arr.forEach(function(buyPrice) {
		arr.forEach(function(sellPrice) {
			if(arr.indexOf(sellPrice) > arr.indexOf(buyPrice)) {
				console.log(`buy price is: ${buyPrice} and sell price is: ${sellPrice}`)
                if(maxProfits < sellPrice - buyPrice) {
                    maxProfits = sellPrice - buyPrice
                }
            }
		})
	})
	return maxProfits
}

function getMax(arr) {
	var maxProfits = -Number.MAX_VALUE
	arr.forEach(function(buyPrice) {
		let index = arr.indexOf(buyPrice)
		let sliced = arr.slice(index+1, arr.length)
		let maxSell = Math.max(...sliced)
		if(maxProfits < maxSell - buyPrice) {
			maxProfits = maxSell - buyPrice
		}
	})
	return maxProfits
}

evaluateStox([10, 7, 6, 5, 4, 2, 1, 0])
