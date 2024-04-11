/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

let newArr = [];

function range(start, end) {
    if (end < start) {
        return [];
    } else if(start === end) {
        let result = newArr;        // copy the array to print the result
        newArr = [];               // clear the constructed array for the next function call on line 32
        return result;

    } else
    if(start !== end) {
        newArr.push(start);
        console.log(newArr);
        return range(start + 1, end);
    }
}

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []

console.log(range(1, 100)); // [1, 2, 3, 4]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
