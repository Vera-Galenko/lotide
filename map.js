const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }
const results1 = map(words, word => word[0]);
console.log(results1);


function assertArraysEqual(first, second){
    let result = true;
    let tick = '✅✅✅';
    let cross = "🛑🛑🛑";
    if (first.length !== second.length){
        result = false;
    } else{
        for (var i = 0; i < first.length; i++){
            if(first[i] !== second[i]){
                result = false;
            }
        }  
    }
    if (result === true){
        console.log(`${tick} Assertion Passed: ${first} === ${second}`);
    }else{
        console.log(`${cross} Assertion Failed: ${first} !== ${second}`);
    }
}

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);