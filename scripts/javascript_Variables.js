// JavaScript Variables
/*Question 1: Declare a variable called name and assign it a string value of your
choice.Then, display a message that says "Hello, [name]!" using the value of the
name variable.*/

let name = "Dave Buchholz";
console.log(`Hello ${name}!`)

/*Question 2: Create two variables, x, and y, and assign them numerical values.
Swap the x and y values using a third variable and display the updated values.*/

let x = 3;
let y = 5;
let thirdVar; //used to help navigate around reassignment

thirdVar = x;
x = y;
y = thirdVar;

console.log(x); //used to test the variable change

