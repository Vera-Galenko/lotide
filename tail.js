
function tail(words) {
  return words.slice(1);
}

const assertEqual = function(words, num) {
  if (words.length === num) {
    console.log(words);
  }console.assert(words.length === num);
};

// const words = ["Yo Yo", "Lighthouse", "Labs"];
const words = [];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);


