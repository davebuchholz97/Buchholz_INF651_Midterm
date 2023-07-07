// JavaScript Strings
/*Question 1: Given the string "Hello, World!", write code to convert it to
uppercase and store the result in a variable called uppercaseString.*/
let text = "Hello World!";
let uppercaseString = text.toUpperCase();
console.log(uppercaseString);

/*Question 2: Write a JavaScript function called countVowels that takes a string as
an argument and returns the number of vowels present in the string.*/
function countVowels(str) {
    let vowels = 'aeiouAEIOU'; //set list of all vowels
    let vowelCount = 0;
    //looks over the string and counts all of the vowels present
    for (var x = 0; x < str.length; x++) {
        if (vowels.indexOf(str[x]) !== -1) {
            vowelCount += 1;
        }
    }
    return vowelCount;
}
console.log(countVowels("How many vowels exist?")); //checks the function

/*Question 3: Write a JavaScript function called truncateString that takes a string
and a number maxLength as arguments and returns a truncated version of the
string if it exceeds maxLength, appending an ellipsis("...") at the end.*/

function truncateString(str, maxLength) {
    if (str.length > maxLength) { //looks to see if the str is too long
        return str.slice(0, maxLength) + '...'; //slices it and adds the ellipsis
    } else return str; //if too short, just returns the string as it was
}

console.log(truncateString('What a boring sentance I am writing today!', 20)); //test the code
