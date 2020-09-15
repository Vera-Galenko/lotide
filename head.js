
function head(array) {
  let word = array[0];
  return word;
}
const assertEqual = function(word, first) {
  if (word === first) {
    console.log(word);
  }console.assert(word === first);
   
};
console.log(head([]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
