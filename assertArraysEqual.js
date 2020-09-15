function assertArraysEqual(first, second){
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
    
    console.log(result);
}

assertArraysEqual([1,2,3,8], [1,2,3]);