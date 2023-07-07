// JavaScript Functions

/*Question 1: Write a JavaScript function called reverseString that takes a string as
an argument and returns the reversed version of the string.*/
function reverseString() {
    let string = "!onaiP";
    string = [...string].reverse().join(""); //splits the string into seperate char, reverses it, then joins it.

    console.log(string); //checks the function
}

/*Question 2: Write a JavaScript function called calculateBMI that takes a person's
weight(in kilograms) and height(in meters) as arguments and returns their body
mass index(BMI).*/
function calculateBMI(weight, height) {
    let bmiResult = Math.round(weight / (height ** 2)*100)/100; //calculate bmi and round to 2 decimals
    return bmiResult
}
console.log(calculateBMI(97.5224, 1.9558)); //test function

/*Question 3: Write a JavaScript function called capitalizeWords that takes a
sentence as an argument and returns the sentence with each word capitalized.*/
function capitalizeWords(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(capitalizeWords("I'm a little tea pot"));
