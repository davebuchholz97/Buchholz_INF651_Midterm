// JavaScript Conditionals

/*Question 1: Write an if-else statement that checks whether a variable num is
positive, negative, or zero. Print the appropriate message accordingly.*/
let num = prompt("Number?: ")
// check if num is greater than 0
if (num > 0) {
    console.log("Your number is positive");
}
// check if num is 0
else if (num == 0) {
    console.log("Your number is zero");
}
// if num is less than 0
else {
    console.log("Your number is negative");
}

/*Question 2: Write a JavaScript function called getDiscount that takes a purchase
amount as an argument. If the purchase amount is greater than $100, apply a 10%
discount. If it is less than or equal to $100, apply a 5% discount. Return the
discounted amount.*/

function getDiscount(a) {
    let discAmt;
    if (a <= 100) {
        discAmt = a - (a * .05); //calculate $100 and lower discount
    } else {
        discAmt = a - (a * .10); //calculate over 100 discount
    }
    return discAmt;
}

console.log(getDiscount(94)); //test function

/*Question 3: Write an if-else statement that checks whether a year is a leap year.
Print "Leap year" if it is divisible by 4 but not divisible by 100, or if it is divisible
by 400. Otherwise, print "Not a leap year".*/

let year = 2000
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log('Leap year');
} else {
    console.log('Not a leap year');
}