  const countOnly = function(allItems, itemsToCount){
    let counts = {};
    let pattern = [];
    let result = {};
     for(item in itemsToCount){
        if(itemsToCount[item] === true){
          pattern.push(item);
        }
     } 
    // console.log("Pattern is", pattern);
	let copy = allItems.slice(0);
	for (var i = 0; i < allItems.length; i++) {
		var myCount = 0;	
		for (var w = 0; w < copy.length; w++) {
			if (allItems[i] == copy[w]) {
				myCount++;
				delete copy[w];
			}
		}
		if (myCount > 0) {
			// var a = new Object();
            // a[allItems[i]] = myCount;
			counts[allItems[i]] = myCount;
		}
    }
    for(var m = 0; m < pattern.length; m++){
        for(count in counts){
            if(pattern[m] === count){
                result[pattern[m]] = counts[count];
            } 
        }
    }
    
	return result;
};


const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  module.exports = countOnly;


  // const assertEqual = function(actual, expected) {
  //   let tick = '✅✅✅';
  //   let cross = "🛑🛑🛑";
  //   if (actual === expected) {
  //     console.log(`${tick} Assertion Passed: ${actual} === ${expected}`);
  //   } else if (actual !== expected) {
  //     console.log(`${cross} Assertion Failed: ${actual} !== ${expected}`);
  //   }
  // };
  
  // const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  // console.log(result1);
  
  // assertEqual(result1["Jason"], 1);
  // assertEqual(result1["Karima"], undefined);
  // assertEqual(result1["Fang"], 2);
  // assertEqual(result1["Agouhanna"], undefined);