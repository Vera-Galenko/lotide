
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



    const assertArraysEqual = function(actual, expected) {
        let tick = '✅✅✅';
        let cross = "🛑🛑🛑";
        if (actual === expected) {
          console.log(`${tick} Assertion Passed: ${actual} === ${expected}`);
        } else if (actual !== expected) {
          console.log(`${cross} Assertion Failed: ${actual} !== ${expected}`);
        }
      };
    
    assertArraysEqual(eqArrays([1,2,3], [1,2,3]), true);
    
    function middle(arr){
     let result = [];
     if(arr.length <= 1 || arr.length <= 2){
         result = [];
     }else if(arr.length % 2 === 0){
        result.push(arr[Math.floor(arr.length / 2) - 1]);
        result.push(arr[Math.floor(arr.length / 2)]);
        
     }
     else if (arr.length % 2 !== 0){
        result.push(arr[Math.floor(arr.length / 2)]);
     }
     
     
     return result;
    }

    console.log(middle([1]));
    console.log(middle([1, 2]));
    console.log(middle([1, 2, 5, 7])); 
    console.log(middle([1, 2, 5, 7, 8, 9, 8, 9]));
    console.log(middle([1, 2, 5, 7, 6]));

    const person = { firstName: "Khurram" };
    const firstName = person[firstName]
    console.log(firstName);
