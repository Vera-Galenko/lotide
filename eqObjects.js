const eqObjects = function(object1, object2) {
    let result = true;
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
    if(keys1.length !== keys2.length){
       result = false;
    }
    for (let key of keys1) {
       if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
            if (object1[key].length !== object2[key].length){
                result = false;
            } else{
                for (var i = 0; i < object1[key].length; i++){
                    if(object1[key][i] !== object2[key][i]){
                        result = false;
                    }
                }  
            }
        }
        else if (object1[key] !== object2[key]) {
            return false;
          }
      }
  return result;
};

module.exports = eqObjects;

// const assertEqual = function(actual, expected) {
//     let tick = '✅✅✅';
//     let cross = "🛑🛑🛑";
//     let result3 = "";
//     if (actual === expected) {
//       result3 = `${tick} Assertion Passed: ${actual} === ${expected}`;
//     } else if (actual !== expected) {
//       result3 = `${cross} Assertion Failed: ${actual} !== ${expected}`;
//     } return result3;
//   };
  
//   const ab = { a: "1", b: "2" };
//   const ba = { b: "2", a: "1"};
//   let result1 = eqObjects(ab, ba); // => true
//   console.log(result1);
//   const abc = { a: "1", b: "2", c: "3" };
//   let result2 = eqObjects(ab, abc);
//   console.log(result2);

//   console.log(assertEqual(result1, true));
//   console.log(assertEqual(result2, true));


//   const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// let result4 = eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// let result5 = eqObjects(cd, cd2); 

// console.log(assertEqual(result4, true));
// console.log(assertEqual(result5, true));


