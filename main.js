/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");
// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.
function minimum(num1, num2) {
  if (num1 > num2) {
    return num1+" is bigger than "+num2;
  }
  else if (num2 > num1) {
    return num2+" is bigger than "+num1;
  }
  else if (num1 === num2) {
    return "The numbers are equal.";
  }
  else {
    return "You broke me";
  }
}
document.getElementById("q1").innerHTML=minimum(10,9);

// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.
function minimum3(num1, num2, num3) {
  if (num1 >= num2 && num3 >= num2) {
    return num2+" is the smallest number.";
  }
  else if (num2 >= num1 && num3 >= num1) {
    return num1+" is the smallest number.";
  }
  else if (num2 >= num3 && num1 >= num3) {
    return num3+" is the smallest number.";
  }
  else {
    return "You broke me.";
  }
}
document.getElementById("submit1").addEventListener("click", function() {
  document.getElementById("q2").innerHTML=minimum3(num1.value, num2.value, num3.value)
});

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.
function sum(arr) {
  var nums = 0;
  for (i=0; i<arr.length; i++){
    nums += arr[i]
  }
  return "The total of these numbers are "+nums
}
document.getElementById("q3").innerHTML=sum([2,3,4,5]);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
function multiply(array) {
  var mult = 1;
  for (i=0; i<array.length; i++) {
    mult *=array[i]
  }
  return "The numbers multiplied together equal "+mult
}
document.getElementById("q4").innerHTML=multiply([10,87,2,3]);

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(arr) {
  var newString = 0;
  for (i=0; i<arr.length; i++) {
    if (arr[i].length < 6) {
      arr.splice(i, 1)
      i--;
    }
  }
  return arr;
}
document.getElementById("q5").innerHTML=filterSixPlus(words);

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

function temperature(str) {
  str *= 1.8;
  str += 32;
  var fahrenheit = str.toFixed(1);
  return fahrenheit
}
document.getElementById("submit2").addEventListener("click", function() {
    document.getElementById("q6").innerHTML=temperature(CtoF.value);
});

// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.
document.getElementById("CorFa").addEventListener("click", function() {
    var answer = prompt("Would you like to convert from Celsius to Fahrenheit or from Fahrenheit to Celsius?\n\nPlease use 'C to F' or 'F to C'.")
  temperatureCorF(answer);
function temperatureCorF(answer) {
  if (answer === "C to F") {
    var CtoF = prompt("Please enter the temperature");
    CtoF = parseFloat(CtoF);
  CtoF *= 1.8;
  CtoF += 32;
  var CtoFValue = CtoF.toFixed(1);
  var tempAnswer = document.getElementById("q7").innerHTML = "The temperature in Fahrenheit is "+CtoFValue+" degrees.";
  }
  else if (answer === "F to C") {
    var FtoC = prompt("Please enter the temperature");
    FtoC = parseFloat(FtoC);
    FtoC -=32;
    FtoC /=1.8;
    var FtoCValue = FtoC.toFixed(0);
    var tempAnswer = document.getElementById("q7").innerHTML =  "The temperature in Celsius is "+FtoCValue+" degrees.";
  }
  else {
    var tempAnswer = document.getElementById("q7").innerHTML = "That isn't an option"
  }
}
});

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
function countBs(string) {
    var totalB = 0;
    for (i=0; i<string.length; i++) {
      if (string.charAt(i) === "B"){
        totalB += 1;
      }
      }
      return totalB
};
document.getElementById("submitB").addEventListener("click", function() {
  document.getElementById("q8").innerHTML="The total number of Bs is "+countBs(ComeAtMeB.value);

});


// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.






// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.
function ohZero(string1) {
    var newString = string1.split("");
    for (i=0; i<newString.length; i++) {
        if (newString[i]==="o") {
        newString[i] = "0";
      }
    }
      return newString.join("");

}
document.getElementById("qb").innerHTML=ohZero("You stink, noob");

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.




// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.
