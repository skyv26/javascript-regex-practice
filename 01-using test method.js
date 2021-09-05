/*
    Author: Aakash Verma
    Topic : Regex Test Method

    Description : In this very first exercise we will learn a very basic regex function
                  which help us to find whether the character or string is present in
                  a given test string.
*/



// Now the variable decalred here are upto you, you can use any variable name in place of mine.
let testString;
let findPattern;
let result;


/******************** Example 1 ************************/
testString = 'It is a test string.';

findPattern = /test/;

result = findPattern.test(testString);

console.log('Example 1 :',result);


/******************** Example 2 ************************/

testString = 'It is a test string.';

findPattern = /Test/;

result = findPattern.test(testString);

console.log('Example 2 :',result);


/******************** Example 3 **********************
 * As we can see if we run code then we get true in
 * example 1 and false in example 2, both the patterns
 * are case sensitive so to overcome the problem, we
 * can use flag which are provided by javascript i.e
 * 'i' flag. just add i at the last of 'findPattern'
 * after '\'. like this \Test\i
 * 
 * 
*/
testString = 'It is a test string.';

findPattern = /Test/i;

result = findPattern.test(testString);

console.log('Example 3 :',result);

