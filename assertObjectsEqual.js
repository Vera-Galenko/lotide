const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    let result = true;
    let tick = '✅✅✅';
    let cross = "🛑🛑🛑";
    let keys1 = Object.keys(actual);
    let keys2 = Object.keys(expected);
    if(keys1.length !== keys2.length){
       result = false;
    }
    for (let key of keys1) {
       if(Array.isArray(actual[key]) && Array.isArray(expected[key])){
            if (actual[key].length !== expected[key].length){
                result = false;
            } else{
                for (var i = 0; i < actual[key].length; i++){
                    if(actual[key][i] !== expected[key][i]){
                        result = false;
                    }
                }  
            }
        }
        else if (actual[key] !== expected[key]) {
            return false;
          }
      }
      if (result === true){
        console.log(`${tick} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    }else{
        console.log(`${cross} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }

    
  };

  module.exports = assertObjectsEqual;


//   assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });



 