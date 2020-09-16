function assertArraysEqual(first, second){
    let result = true;
    let tick = '✅✅✅';
    let cross = "🛑🛑🛑";
    if (first.length !== second.length){
        result = false;
    } else{
        for (var i = 0; i < first.length; i++){
            if(first[i] !== second[i]){
                result = false;
            }
        }  
    }
    if (result === true){
        console.log(`${tick} Assertion Passed: ${first} === ${second}`);
    }else{
        console.log(`${cross} Assertion Failed: ${first} !== ${second}`);
    }
}

assertArraysEqual([1,2,3,8], [1,2,3]);