const assertEqual = require('./assertEqual');
const eqArrays = function(first, second){
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
module.exports = eqArrays;
