// JavaScript Numbers
/*Question 1: Calculate the square root of a given number and store the result in a
variable called result.*/
// take the input from the user
let number = prompt("Number?");
//take the square root of the number and store it
let result = Math.sqrt(number);
console.log(result); //used to test the result

/*Question 2: Write a JavaScript function called isPrime that takes a number as an
argument and returns true if it is a prime number and false otherwise.*/
function isPrime(number) {
    if (number <= 1) return false; //less than or equal to one cannot be a prime number
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; //checks to make sure number isnt divisible by "i"
        }
    }
    return true; 
}
console.log(isPrime(18)); //used to check the function

/*Question 3: Write a JavaScript function called generateRandomNumber that takes
two numbers, min, and max, as arguments and returns a random number between
min and max*/
function generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// used to test my function
console.log(generateRandomNumber(1, 5));

