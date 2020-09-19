const assertArraysEqual = function (first, second){
    let result = true;
    // let tick = '✅✅✅';
    // let cross = "🛑🛑🛑";
    if (first.length !== second.length){
        result = false;
    } else{
        for (var i = 0; i < first.length; i++){
            if(first[i] !== second[i]){
                result = false;
            }
        }  
    } return result;
  
}

module.exports = assertArraysEqual;
// const assertEqual = function(actual, expected) {
//     let tick = '✅✅✅';
//     let cross = "🛑🛑🛑";
//     if (actual === expected) {
//       console.log(`${tick} Assertion Passed: ${actual} === ${expected}`);
//     } else if (actual !== expected) {
//       console.log(`${cross} Assertion Failed: ${actual} !== ${expected}`);
//     }
//   };
