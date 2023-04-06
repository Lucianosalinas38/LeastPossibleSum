
function leastPossibleSum(numInput) {
    if (numInput === +numInput && numInput > 0){
        let inputArray = ("" + numInput).split("");
        newArray = [];
        sum1 = [];
        sum2 = [];
    
    inputArray.sort(function(a, b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    
    sum1.push(inputArray[0]);
    sum1.push(inputArray[2]);
    firstSum = parseInt(inputArray[0] + inputArray[2])
    
    sum2.push(inputArray[1])
    sum2.push(inputArray[3])
    secondSum = parseInt(inputArray[1] + inputArray[3])
    
    const finalSum = firstSum + secondSum
    if (finalSum === +finalSum && finalSum > 0){
        console.log(`The least possible sum of those 4 numbers is ${finalSum}.`)
    } else {
        console.log("Please make sure to input 4 positive integers.")
    }
    }else {
        console.log("Please make sure to input 4 positive integers.")
    }
    }   
    leastPossibleSum("o932");