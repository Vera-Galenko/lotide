function eqArrays(first, second){
let result = true;
if (first.length !== second.length){
    result = false;
} else{
    for (var i = 0; i < first.length; i++){
        if(first[i] !== second[i]){
            result = false;
        }
    }  
}

return result;
}

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays(["more", 3, "cat"], ["more", 2, "cat"]));

const assertEqual = function(actual, expected) {
    let tick = '✅✅✅';
    let cross = "🛑🛑🛑";
    if (actual === expected) {
      console.log(`${tick} Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`${cross} Assertion Failed: ${actual} !== ${expected}`);
    }
  };

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);