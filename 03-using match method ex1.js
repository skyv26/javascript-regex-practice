/*
    Author: Aakash Verma
    Topic : Regex Match Method

    Description : In this exercise we will learn match regex method
                  which help us to find get matched result comes after
                  analyzing patterns or we can say instead of getting
                  true or false we will get all those result that matched
                  exactly with our pattern including index number of first
                  occuring letter and no matters words or letter are
                  case sensitive.
*/



// Now the variable decalred here are upto you, you can use any variable name in place of mine.
let testString;
let matchPattern;
let result_outcomes;


testString = 'It is a test string. I want to match this Test too!';

/******************** Example 1 ************************/

matchPattern = /test/;

result = testString.match(matchPattern);

console.log('Example 1 :',result);


/******************** Example 2 ************************/
/* In above example we got matched result with index 
number of first occuring letter `t`. now make a little bit
change in pattern.
*/

matchPattern = /Test/;

result = testString.match(matchPattern);

console.log('Example 2 :',result);


/******************** Example 3 **********************
 * We got result for our given pattern in above example
 * but now it just left test and move towards Test and
 * gave result to us with index number of letter `T`.
 * now we use `i` flag to match all cases.
 * use like this \Test\i
*/

matchPattern = /Test/i;

result = testString.match(matchPattern);

console.log('Example 3 :',result);



/******************** Example 4 **********************
 * Our last example worked perfectly but we didn't get
 * desired results. Our output is same as it just was
 * example 1. So now to handle this problem we now use
 * another special flag i.e `g` flag which stands for 
 * global. By using global and ignore case flags together
 * we will get combine result.
*/

matchPattern = /Test/gi;

result = testString.match(matchPattern);

console.log('Example 4 :',result);
