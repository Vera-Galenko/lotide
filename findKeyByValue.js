const findKeyByValue = function(items, value){
 let keys = Object.keys(items);
 let values = Object.values(items);
 let index = undefined;
 let result = "";
 for(let i = 0; i < values.length; i++){
     if(values[i] === value){
        index = [i];    
     }

}
result += keys[index];
return result;
};

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };


  
const assertEqual = function(actual, expected) {
    let tick = '✅✅✅';
    let cross = "🛑🛑🛑";
    if (actual === expected) {
      console.log(`${tick} Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`${cross} Assertion Failed: ${actual} !== ${expected}`);
    }
  };


  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);