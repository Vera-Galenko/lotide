    
    const middle = function(arr){
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

    module.exports = middle;
   
