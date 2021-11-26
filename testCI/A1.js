let inputArray = [2, 3, -5, -2, 4] 
    let len = inputArray.length;
    let guard = inputArray[0] * inputArray[1];
    for(let i = 1; i < len - 1; i++){
        let largets = inputArray[i] * inputArray[i+1];
        if(guard < largets) guard = largets;
    }
console.log(guard)
