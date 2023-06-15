// With a for loop, create a JavaScript code that creates a new array in reverse order.

// Input Arrays	             Expected Results
// [1, 2, 3]	                [3, 2, 1]
// [1, 3, 5, 7, 9, 11]	        [11, 9, 7, 5, 3, 1]
// [20, 50, 30, 60, 200]	    [200, 60, 30, 50, 20]
// [1, -1, 2, -3, 5, -8, 13]	[13, -8, 5, -3, 2, -1, 1]


//arrays

//for loops

// for(let index = array1.length -1; index >= 0; index--){
//     console.log(array1[index]);
// };   this prints the array backwards in seperate lines, not in a new array

const array1 = [1, 2, 3];

const reversedArray1 = []

for(let i = array1.length - 1; i >= 0; i--) {
  const valueAtIndex = array1[i]
  
  reversedArray1.push(valueAtIndex)
}

console.log(reversedArray1)

//array2
const array2 = [1, 3, 5, 7, 9, 11];

const reversedArray2 = []

for(let i = array2.length - 1; i >= 0; i--){
    const valueAtIndex = array2[i]
    reversedArray2.push(valueAtIndex)
}

console.log(reversedArray2);

//array3
const array3 = [20, 50, 30, 60, 200];

const reversedArray3 = []

for(let i = array3.length - 1; i >= 0; i--){
    const valueAtIndex = array3[i]
    reversedArray3.push(valueAtIndex)
}
console.log(reversedArray3);

//array4
const array4 = [1, -1, 2, -3, 5, -8, 13];

const reversedArray4 = []

for(let i = array4.length - 1; i >= 0; i--){
    const valueAtIndex = array4[i]
    reversedArray4.push(valueAtIndex)
}
console.log(reversedArray4);
