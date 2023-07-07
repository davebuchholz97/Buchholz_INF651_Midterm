// JavaScript Loops and Iterations

/*Question 1: Write a while loop that prints the numbers from 1 to 20.*/
let input = 1;
while (input <= 20) { //loops through to find all numbers from input 1-20
    console.log(input);
    input++;
}
/*Question 2: Write a JavaScript function called calculateSum that takes a positive
integer n as an argument and returns the sum of all numbers from 1 to n.*/

    const n = 10; //positive integer value
    let sum = 0; //starting point

    for (i = 0; i <= n; i++) {

        sum = sum + i; //math to add numbers
    }
   console.log(sum); //checks function


/*Question 3: Write a JavaScript function called calculateFactorialIterative that
takes a positive integer n as an argument and calculates its factorial using a loop
instead of recursion.*/

const calculateFactorialIterative = int => { //initial functional format
    let f = 1; //set factorial to begin at 1

    for (let i = 1; i <= int; i++) { //for loop starting with 1 and then counting up by 1, until we reach the input value
        f *= i;
    }
    return f; //return the result
    }

console.log(calculateFactorialIterative(4)); //test the function