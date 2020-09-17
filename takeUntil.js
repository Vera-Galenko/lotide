const takeUntil = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if(callback(array[i])){
          array.splice(i);
          return array;
      }
    
  }
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);

