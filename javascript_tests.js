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

// input array
[3, 1, 2, 5, 6, 4]

// multiplication of all integers before each index
// (we give index 0 a value of 1 since it has no integers before it)
[1, 3,  3 * 1,  3 * 1 * 2,  3 * 1 * 2 * 5,  3 * 1 * 2 * 5 * 6]


function doIt(arr) {
    var allProductsBefore = []
    //for each integer, find the product of all integers
    //before it, storing the total product so far each time
    var productSoFar = 1;
    for(let i = 0; i < arr.length; i++) {
        allProductsBefore[i] = productSoFar;
        productsSoFar *= arr[i]
    }
    var productsOfAllIntsAfterIndex = [];

    var productSoFar = 1;
    for (var i = intArray.length - 1; i >= 0; i--) {
        productSoFar *= intArray[i];
        allProductsBefore[i] = productSoFar;
    }

    function spliceIt(arr) {
        var returnArr = []
        while(returnArr.length < 3) {
    		let currentMax = arr[0]
    		let currentMaxIndex = 0;
            for(let i=0; i<arr.length; i++) {
                if(arr[i] > currentMax) {
                    currentMax = arr[i]
    				currentMaxIndex = arr.indexOf(currentMax)
                }
            }
    		returnArr.push(currentMax)
            arr.splice(currentMaxIndex, 1)
            currentMax = arr[0]
            currentMaxIndex = 0
        }
    	return returnArr.reduce((s, v) => s * v, 1)
    }
