// const assertEqual = function(actual, expected) {
// if (actual !== expected) {
//     console.log("Assertion Failed: " + actual + " !== " + expected);
// } else if (actual === expected) {
//     console.log("Assertion Passed: " + actual + " === " + expected);
// }
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const assertEqual = function(actual, expected) {
  let tick = '✅✅✅';
  let cross = "🛑🛑🛑";
  if (actual === expected) {
    console.log(`${tick} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${cross} Assertion Failed: ${actual} !== ${expected}`);
  }
};



module.exports = assertEqual;
    