// FizzBuzz
// Create a JavaScript code that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.




//print 1-100 on new line

for(let i = 1; i <= 100; i++){
    console.log(i);
}



for(let i = 1; i <= 100; i++) {
    //replace every multiple of 3 and 5 with fizzbuzz
    //replace every multiple of 3 with fizz
    if(i % 3 == 0) {
      console.log('Fizz');
    }
    //replace every multiple of 5 with buzz
    if(i % 5 == 0) {
      console.log('Buzz');
    }
    //print all other numbers
    if(i % 3 != 0 && i % 5 != 0) {
      console.log(i);
    }
  }