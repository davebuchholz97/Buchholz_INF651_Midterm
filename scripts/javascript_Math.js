// JavaScript Math

/*Question 1: Generate a random number between 1 and 100(inclusive) using the
Math.random() function and round it to the nearest integer.Store the result in a
variable called randomNumber.*/
//random number between 1 and 100 inclusive
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); //test function

/*Question 2: Write a JavaScript function called calculateFactorial that takes a
number as an argument and returns its factorial.*/
let x = []; //function parameter with an empty array
function calculateFactorial(num) { 
if (num == 0 || num == 1) //solve for 0 and 1
    return 1;
if (x[num] > 0)
    return x[num]; // initial math with memoized call
return x[num] = calculateFactorial(num - 1) * num; //next steps
}

console.log(calculateFactorial(5)); //test function

/*Question 3: Write a JavaScript function called calculatePower that takes two
numbers, base and exponent, as arguments and returns the result of base raised to
the power of exponent.*/

function calculatePower(base, exponent) {
	let result = 1; //define function
	//define for loop to itterate through the values
	for (let i = 1; i <= exponent; i++) {
		result = result * base;
	}
	return result;
}

console.log(calculatePower(5, 3)); //test function
