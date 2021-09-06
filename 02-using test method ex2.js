/*
    Author: Aakash Verma
    Topic : Regex Test Method

    Description : In this second exercise we will learn method to find 
                  whether the character or string is present in
                  a given test string or not with multiple possibilites.

                  (
                    This method used for finding multiple words at same
                    time, if anyone of case matched then we will get true
                    
                  ) 
*/



// Now the variable decalred here are upto you, you can use any variable name in place of mine.
let testString;
let findPattern;
let result;

testString = 'It is a test string.';

/******************** Example 1 **********************
 * As we can see if we run code then we get true or 
 * false in first exercise based on pattern and flag.
 * With the help of OR operator `|` we can check
 * multiple strings is available or not. use 'i'
 * flag to prevent unwanted result.
 * 
*/

findPattern = /test|string/;

result = findPattern.test(testString);

console.log('Example 1 :',result);

/******************** Example 2 **********************/

findPattern = /Test|string/;

result = findPattern.test(testString);

console.log('Example 2 :',result);

/******************** Example 3 **********************/

findPattern = /test|String/;

result = findPattern.test(testString);

console.log('Example 3 :',result);


/******************** Example 4 **********************/

findPattern = /Test|String/;

result = findPattern.test(testString);

console.log('Example 4 :',result);

/******************** Example 5 **********************/

/* So in above example we got false as result so here
   in such kind of cases we always prefer to use regex
   `i` flag.
*/

findPattern = /Test|String/i;

result = findPattern.test(testString);

console.log('Example 5 :',result);
