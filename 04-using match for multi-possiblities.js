/*
    Author: Aakash Verma
    Topic : Regex Match Method With Possibilities 
            using with or without wildCard character.

    Description : In this exercise we will learn match regex method
                  which help us to find get matched result comes after
                  analyzing patterns containing possibilies of words
                  which audibly seems to be similar.
*/



// Now the variable decalred here are upto you, you can use any variable name in place of mine.
let testString;
let matchPattern;
let result_outcomes;


testString = 'Crick Brick Trick';

/******************** Example 1 ************************/
/* Without wildCard Character */


matchPattern = /[CBT]rick/gi;

result_outcomes = testString.match(matchPattern);

console.log('Example 1 :',result_outcomes);

/******************** Example 2 ************************/
/* Without wildCard Character */

matchPattern = /.rick/gi;

result_outcomes = testString.match(matchPattern);

console.log('Example 2 :',result_outcomes);


