const countLetters = function(snt){
    let counts = {};
    let pattern = Array.from(snt);
    let newSnt = [];
    for(var j = 0; j < pattern.length; j++){
        if(pattern[j] !== ' '){
            newSnt.push(pattern[j]);
        }  
    } 
    let copy = newSnt.slice(0);
	for (var i = 0; i < newSnt.length; i++) {
		var myCount = 0;	
		for (var w = 0; w < copy.length; w++) {
			if (newSnt[i] == copy[w]) {
				myCount++;
				delete copy[w];
			}
		}
		if (myCount > 0) {
			counts[newSnt[i]] = myCount;
		}
    }
	return counts;
};

module.exports = countLetters;

// let result1 = countLetters("Why do I go");
// console.log(result1);


//   const assertEqual = function(actual, expected) {
//     let tick = '✅✅✅';
//     let cross = "🛑🛑🛑";
//     if (actual === expected) {
//       console.log(`${tick} Assertion Passed: ${actual} === ${expected}`);
//     } else if (actual !== expected) {
//       console.log(`${cross} Assertion Failed: ${actual} !== ${expected}`);
//     }
//   };

//   assertEqual(result1["o"], 2);
//   assertEqual(result1["d"], 2);
//   assertEqual(result1["d"], 1);
//   assertEqual(result1["Agouhanna"], undefined);