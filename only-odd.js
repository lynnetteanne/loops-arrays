// Create a JavaScript code that accepts an array of numbers 
// and returns a new array with only the odd numbers from the original 
// array. If there is only one odd number in the array, return an array 
// with that single value.

// Input Arrays	                     Expected Results
// [2, 4, 6, 8, 11, 20, 15, 22]	     [ 11, 15]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	[1, 3, 5, 7, 9]
// [70, 42, 55, 81, 21, 91, 34]	    [55, 81, 21, 91]
// [2, 4, 6, 8, 10, 11, 12] 	    [11]

//create the arrays
//write method to return odd numbers
const num1 = [2, 4, 6, 8, 11, 20, 15, 22];

const odd1 = num1.filter((num) => num % 2 === 1);
console.log(odd1);

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd2 = num2.filter((num) => num % 2 === 1);
console.log(odd2);

const num3 = [70, 42, 55, 81, 21, 91, 34];

const odd3 = num3.filter((num) => num % 2 === 1);
console.log(odd3);

const num4 = [2, 4, 6, 8, 10, 11, 12];

const odd4 = num4.filter((num) => num % 2 === 1);
console.log(odd4);


