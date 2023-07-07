// JavaScript Operators
/*Question 1: Given the variables a = 10 and b = 3, what is the value of the
following expression: a % b? */
let a = 10;
let b = 3; 
console.log(a % b);
//the division remainder would be 1

/*Question 2: Write a JavaScript function called isInRange that takes a number as
an argument and returns true if it falls within a specific range(e.g., between 10
and 20) and false otherwise.*/
function isInRange(number) {

    let min = 10;
    let max = 20;

    if (number > min && number < max) {
        console.log('True');
    } else {
        console.log('False');
    }
}
console.log(isInRange(4)); //used to check the function

/*Question 3: Given the variables a = 5, b = 3, and c = 2, what is the value of the
following expression: a > b || c < b && a === c ?*/
let a = 5; 
let b = 3;
let c = 2;

console.log(a > b || c < b && a === c);
//The value is TRUE!

