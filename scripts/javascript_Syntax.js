// JavaScript Midtrm INF 651 Buchholz

//javascript (4 points)
//What are some advantages of using JavaScript in web development?
    /*The largest advantage of using javascript in web development is it allows the code to be faster. The
    client processes the commands and lessens the load on the requests to the server.
    It also allows for more dynamic content on the web pages than can be accomplished with just HTML.
    Javascript also allows code to be reused and reduces the amount of duplicate code.*/


//JavaScript Syntax (4 points)
//Question 1: Identify and correct the syntax errors in the following code:
let number = 10;
console.log(number + 5);
//I removed the "var" with "let", then changed the propercase of "number"" to be accurate

//Question 2: Write a JavaScript function called isEven that takes a number as an argument
//and returns true if the number is even and false if it is odd.
function isEven() {
    const number = prompt("Number: "); //allows for user input of a number

    //check if the number is even by dividing by 2 and making sure its an even number
    if (number % 2 == 0) {
        console.log("true");
    }

    // if the number is odd, returns false
    else {
        console.log("false");
    }
}
isEven.call() //used this to test the function

//Question 3: Write a JavaScript function called isPalindrome that takes a string as an
//argument and returns true if it is a palindrome(reads the same forwards and backwards)
//and false otherwise
function isPalindrome(str) {
    // find length of the string
    const len = str.length;

    // loop to look at the first half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same, return "false" if no match
        if (str[i] !== str[len - 1 - i]) {
            return 'false';
        }
    }
    // if it matches, return "true"
    return 'true';
}

