// Let's say you are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].

// Return the minimum possible sum of new1 and new2.

// Example 1:
// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

// Example 2:
// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
// ---------

//Create an input value that the machine will split then add to get the least possible sum value

const numInput = 2932;

let inputArray = ("" + numInput).split("");
let newArray = [];
let sum1 = [];
let sum2 = [];
//This function will sort the array from least to most
function compare(a,b){
}
//console.log(inputArray);
//Need a way to break up this input number to be able to move the values in a way where it formulates the least possible sum
//Maybe create an if statement to check diffrent value comparisions ex: if i[0] + i[1] > i[2] + i [3]
//Or organize how the numbers are paired, if i[0] > i[1] then .push i[1] into i[0 of new array

//Compare 0,1 and organize which one is the least, the least possible sum wont have 3 numbers so it will be i[0]i[1] + i[2]i[3]

// if (inputArray[0] > inputArray[1]){
//     newArray.push (inputArray[1])
//     newArray.push (inputArray[0])
//     console.log(newArray)
// }
// if (inputArray[2] > inputArray[3]){
//     newArray.push (inputArray[3])
//     newArray.push (inputArray[2])
//     console.log(newArray)
// }

// if (inputArray[0] >= inputArray[1] & inputArray[2] & inputArray[3]){
//     sum1.push(inputArray[0])
// }
// if (inputArray[1] >= inputArray[0] & inputArray[2] & inputArray[3]){
//     sum1.push(inputArray[1])
// }
// if (inputArray[2] >= inputArray[0] & inputArray[1] & inputArray[3] ){
//     sum1.push(inputArray[2])
// }
// if (inputArray[3] >= inputArray[0] & inputArray[1] & inputArray[2] ){
//     sum1.push(inputArray[2])
// }

//The compare and contrast wont work here effectively but maybe try to sort the initial array and splice in the values into a new array then add up the pairs

inputArray.sort(function(a, b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
//console.log(inputArray)

//Now that the Array is sorted Take the 1st and 2nd values and move them to the front of the arrays of sum1 and sum2

sum1.push(inputArray[0]);
sum1.push(inputArray[2]);

//I need to add parse int to the creation of firstSum and secondSum because the array values are saved as string and we need them to be int to add them together.

firstSum = parseInt(inputArray[0] + inputArray[2])
//console.log(firstSum)

sum2.push(inputArray[1])
sum2.push(inputArray[3])

secondSum = parseInt(inputArray[1] + inputArray[3])
//console.log(secondSum)

//Now that I created new arrays for the smallest possible number combinations I add them together to get the final sum.
const finalSum = firstSum + secondSum
console.log(finalSum)