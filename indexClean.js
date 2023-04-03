const numInput = 2932;

let inputArray = ("" + numInput).split("");
let newArray = [];
let sum1 = [];
let sum2 = [];

function compare(a,b){
}

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
console.log(finalSum)