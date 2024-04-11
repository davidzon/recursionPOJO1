/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

let sum = 0;

function sumArray(arr) {

    let lastNum = arr[arr.length -1];
    console.log(lastNum);

    if(arr.length === 0) {
        let result = sum;
        sum = 0;
        return result;
    } else {
        sum = sum + lastNum
        arr.pop(lastNum);
        console.log(arr);
        return sumArray(arr);
    }
}


console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
