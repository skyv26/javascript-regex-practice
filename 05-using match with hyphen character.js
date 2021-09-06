/*
    Author: Aakash Verma
    Topic : Regex Match Method With Possibilities 
            using hyphen character to define range.

    Description : In this exercise we will learn match regex method
                  which help us to find get matched result comes after
                  analyzing patterns containing possibilies of words
                  by using hyphen character to set range.
*/



// Now the variable decalred here are upto you, you can use any variable name in place of mine.
let testString;
let matchPattern;
let result_outcomes;


testString = 'Dat Bat Cat Pat Oat Pot Cot Got Dot Rat';

/******************** Example 1 ************************/

matchPattern = /[a-z]at/gi;

result_outcomes = testString.match(matchPattern);

console.log('Example 1 :',result_outcomes);

/******************** Example 2 ************************/

matchPattern = /[a-z]ot/gi;

result_outcomes = testString.match(matchPattern);

console.log('Example 2 :',result_outcomes);


/******************** Example 3 ************************/

matchPattern = /D[a-z]t/gi;

result_outcomes = testString.match(matchPattern);

console.log('Example 3 :',result_outcomes);

