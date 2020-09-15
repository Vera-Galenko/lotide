function without(arr, word){
 let result = [];
 for (var i = 0; i < arr.length; i ++){
     if (!word.includes(arr[i])) {
         result.push(arr[i]);}
 }
 console.log(arr);
 return result;
}


const assertArraysEqual = function(actual, expected) {
    let tick = '✅✅✅';
    let cross = "🛑🛑🛑";
    if (actual === expected) {
      console.log(`${tick} Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`${cross} Assertion Failed: ${actual} !== ${expected}`);
    }
  };



console.log(without(["Cat", 1, "cat", "mix", 4, "roll"], [1, 4]));
console.log(without(["1", "2", "3"], [1, 2, "3"])) 
let arr = ["hello", "world", "lighthouse"];
console.log(without(arr, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(arr, ["lighthouse"]), ["hello", "world", "lighthouse"]);