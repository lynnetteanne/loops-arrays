// Create a JavaScript code that accepts a string of lowercase letters. 
// Print the word followed by how many consonants and vowels it has.

// "a", "e", "i", "o", and "u" are considered vowels. 

// Every other letter is considered a consonant.

// Hint: Define two variables that keep track of the number of consonants and vowels.

// Input Arrays	         Expected Results
// "hello"	
//                        "hello has 3 consonants and 2 vowels"
// "ukelele"	
//                        "ukelele has 3 consonants and 4 vowels"
// "awesome"	           "awesome has 3 consonants and 4 vowels"
// "onomonopia"	       "onomonopia has 4 consonants and 6 vowels"
// "textbook"	           "textbook has 5 consonants and 3 vowels"


// create function to count vowels

function vowel_count(str1)
{
  var vowel_list = 'aeiou';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}

//creat funtion to count consonants

function consonant_count(str1)
{
  var consonant_list = 'bcdfghjklmnpqrstvwxyz';
  var ccount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (consonant_list.indexOf(str1[x]) !== -1)
    {
      ccount += 1;
    }
  
  }
  return ccount;
}

//print results in correct format

console.log("hello has " + consonant_count("hello") + " consonants and " + vowel_count("hello") + " vowels");
console.log("ukelele has " + consonant_count("ukelele") + " consonants and " + vowel_count("ukelele") + " vowels");
console.log("awesome has " + consonant_count("awesome") + " consonants and " + vowel_count("awesome") + " vowels");
console.log("onomonopia has " + consonant_count("onomonopia") + " consonants and " + vowel_count("onomonopia") + " vowels");
console.log("textbook has " + consonant_count("textbook") + " consonants and " + vowel_count("textbook") + " vowels");



