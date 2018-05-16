//Exercise starter problems pulled from http://geospatialtraining.com/htmlcssjavascript-for-complete-beginners/
//Solution code and comments by Lee Richardson

// ================= VARIABLES  & STRING INTERPOLATION =================

// Exercise 1: The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

//Declare variables for number of children, partner's name, geographic location & job title.
var numChildren = 15;
var partnerName = "Shannon";
var geographicLocation = "Playa Del Rey";
var jobTitle = "Chief Awesomeness Officer";

//Output my fortune to the console

console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numChildren + " kids.");

// Exercise 2: The Age Calculator
//
// Forgot how old you are? Calculate it!
//
// Store the current year in a variable.
// Store your birth year in a variable.
// Calculate your 2 possible ages based on the stored values.
// Output them to the screen like so: "You are either NN or NN", substituting the values.

var currentYear = 2016;
var yourBirthYear = 1982;

function myAge(currentYear, yourBirthYear){ // this function expects two arguments to be passed in when calling it
  var age1 = currentYear - yourBirthYear; // this is your age if your birthday has already happened this year
  var age2 = currentYear - yourBirthYear - 1; // this is your age if your birthday has not happened this year
  console.log("Your possible age is " + age1);
  console.log("Your other possible age is " + age2);
}

myAge(currentYear, yourBirthYear); // call the function using the two year variables declared above

// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

//store your current age, max age and amount of snack per day as variables

var currentAge = 33;
var maxAge = 100;
var coffeeCupsPerDay = 3;

//write a function to calculate the total amount of snack consumed in your lifetime

function coffeeCupsPerYear(cupsPerDay){
  var cupsPerYear = cupsPerDay * 365; // amount per day times 365 is amount per year
  var lifetimeCups = (maxAge - currentAge) * cupsPerYear; // calculate the lifetime amount
  console.log("In one year you will drink " + cupsPerYear + " cups of coffee"); //log the answers
  console.log("In your lifetime you'll drink " + lifetimeCups + " cups of coffee");
}

//call the function
coffeeCupsPerYear(coffeeCupsPerDay);


// ================= CONDITIONALS =================

// Exercise 4: What number's bigger

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum (a, b){
  //if first number is bigger than the second, console log the answer
  if(a > b) {
    console.log(a + " is bigger");
  } //otherwise, console log the second number
  else {
    console.log(b + " is bigger");
  }
}

//call the functions a few times to verify the results

greaterNum(2, 4);
greaterNum(4, 2);
greaterNum(100, 300);


// Exercise 5: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language) {
  if(language == "fr"){  //if the language is fr, log a message in french
    console.log("Bonjour, monde")
  }
  else if(language == "es") { // else if the language is es, log a message in spanish
    console.log("Hola, mundo!")
  }
  else { // in all other cases, log a message in english
    console.log("Hello, world!")
  }
}

helloWorld('fr'); // call function, expect if statement to return true => "Bonjour, monde"
helloWorld('es'); // call function, expect else if statement  => "Hola, mundo"
helloWorld('yes'); // call function, expect else statement => "Hello, world!"

//Exercise 6: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

//order is important for this problem. If you tried the reverse you'd never get to the A condition. Try it & see!

function assignGrade(score) {
  if(score >= 90){  //if score is equal to or greater than 90, you get an A
    console.log("You get an A");
  } else if(score >= 80) {
    console.log("You get a B");
  } else if(score >= 70) {
    console.log("You get a C");
  } else if(score >= 60) {
    console.log("You get a D :-(");
  } else {
    console.log("You get an F. Bummer. :-(");
  }
}

// call the function with different scores to check the output

assignGrade(93);
assignGrade(45);
assignGrade(78);
assignGrade(88);
