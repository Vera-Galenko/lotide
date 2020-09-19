const assertEqual = require('./assertEqual');
const head = function(array) {
  let word = array[0];
  return word;
};
module.exports = head;
    
// const assertEqual = function(word, first) {
//   if (word === first) {
//     console.log(word);
//   }console.assert(word === first);
   
// };
// console.log(head([]));
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// const assertEqual = function(actual, expected) {
//   let tick = '✅✅✅';
//   let cross = "🛑🛑🛑";
//   if (actual === expected) {
//     console.log(`${tick} Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`${cross} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


