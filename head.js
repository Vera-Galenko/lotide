
 function head(array){
let word = array[0]
  return word;
 }
 const assertEqual = function (word, first) {
    if(word === first){
        console.log(word);
    }console.assert(word === first, word);
   
 };
 
 assertEqual(head([3,6,7]), 5);
 assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");