const letterPositions = function(sentence) {
    const results = {};
    arr = [];
    let snt = Array.from(sentence);
    let snt2 = Array.from(sentence);
    for (var i = 0; i < snt.length; i++) {
        var myCount = [];
		for (var w = 0; w < snt2.length; w++) {
			if (snt[i] === snt2[w]) {
				myCount.push(w);
			}
		}

            results[snt[i]] = myCount;
    } delete results[' '];

    return results;
  };

let result1 = letterPositions("Why do I go Why");
console.log(result1);
let result2 = letterPositions("hello");
console.log(result2);

const assertEqual = function(first, second) {
    let tick = '✅✅✅';
    let cross = "🛑🛑🛑";
    let result = `${tick} Assertion Passed: ${first} === ${second}`;
    if (first.length !== second.length){
        result = `${cross} Assertion Failed: ${first} !== ${second}`;
    } else{
        for (var i = 0; i < first.length; i++){
            if(first[i] !== second[i]){
                result = `${cross} Assertion Failed: ${first} !== ${second}`;
            }
        }  
    }
    
    console.log(result);
  };
  assertEqual(letterPositions("hello").e, [1]);
  assertEqual(letterPositions("Why do I go Why").W, [0, 12]);
