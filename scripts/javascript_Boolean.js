// JavaScript Boolean

/*Question 1: Write a condition that checks whether a variable isRaining is true and
a variable isSunny is false.Store the result in a variable called shouldStayInside.*/

let isRaining = true;
let isSunny = true;
let shouldStayInside = true;

if (isRaining == true && isSunny == false) { //makes sure that if its raining and not sunny we stay inside
    shouldStayInside = true;
} else {
    shouldStayInside = false;
}
//checks the conditional
console.log(shouldStayInside);

/*Question 2: Write a JavaScript function called hasPermission that takes two
boolean parameters, isUserLoggedIn and isAdmin, and returns true if the user has
permission and false otherwise.*/

let isUserLoggedIn = true;
let isAdmin = true;

function hasPermission() {
    if (isUserLoggedIn == true && isAdmin == true) {
        return true;
    }
    return false;
}

/*Question 3: Write a JavaScript function called hasUniqueCharacters that takes a
string as an argument and returns true if all characters in the string are unique and
false otherwise.*/
function hasUniqueCharacters(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) !== i) { //i am checking to be sure the final index of the char is the same as the current one
            return false;
        }
    }
    return true;
}
//console.log(hasUniqueCharacters("Unique?")) used to check the code