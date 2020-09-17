const findKey = function(items, callback){
 let keys = Object.keys(items);
for(let i = 0; i < keys.length; i++){
    if(callback(items[keys[i]])){
       return keys[i];
    }
}};


let result1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"
  console.log(result1);



  const assertEqual = function(actual, expected) {
    let tick = '✅✅✅';
    let cross = "🛑🛑🛑";
    if (actual === expected) {
      console.log(`${tick} Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`${cross} Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  assertEqual(result1, "noma");