// const assertEqual = function (array, first) {
//    if(array[0] === first){
//        console.log(array[0])
//    } if(array[0] !== first){
//     console.log(array[0])}
// };


// assertEqual([5, 6, 7], 5);
// assertEqual(["Hello", "Lighthouse", "Labs"], "Hello");
// assertEqual([], "Hello");


const assertEqual = function (array, first) {
    if(array[0] === first){
        console.log(array[0])
    } if(array[0] !== first){
    console.assert(array[0] === first, array[0])}

 };
 
 assertEqual([5, 6, 7], 5);
 assertEqual(["Hello", "Lighthouse", "Labs"], "Hello");
 assertEqual([], "Hello");
