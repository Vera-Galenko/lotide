
function tail(arr){
 let words = arr.slice(1);
 return words;
} 

const assertEqual = function(words, num){
    console.assert(words.length === num);
}

const words = ["Yo Yo", "Lighthouse", "Labs", "3"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);


