/* This is HPE JavaScript training
lesson 4 */

//1. Create a simple function that prints out this line: "My name is: <yourName> and guess what?
//I'm indeed learning js" and call it sending your name as a parameter.

var sayName = function(name) {
    console.log('My name is: ' + name + ' and guess what? I am indeed learning js');
};
sayName("Issel");

//2. Create a simple While loop that prints true until the condition becomes false.
var i = 0;
while(i < 10){
    console.log('It is true!');
    i= i + 1;
}

//3. Create a While loop that prints all the statements inside an array of at least 10 words/sentences.
var i = 0;
var beverages = ["Coffe", "Tea", "Chocolate", "Water", "scotch", "Rum", "cocoa", "chai latte", "smothie", "soda"];
while(i < beverages.length){
    console.log('My list of beverages: ' + beverages[i]);
    i= i + 1;
}

//4. Combine a While and For, the For loop is gonna be isnide the While loop. Tip: take care of the infinite loops ;)
var i = 10;
while(i > 0){
    for(var x = 1; x < 11; x = x + 1){
    console.log(x + ' - ' + i);
    }
    i= i - 1;
}

/* 5. Ask a user for a number between 1-100 and create an If, elsif, else statement where you can print something different
depending on his/her choice. make sure you are making all this inside a function and the parameter that is gonna be sent, is the
user's answer. Tip: prompt is gonna help you out with this. */

var askNumber = function (num){
  if(num >= 1 && num <=50){
    console.log("You go lower");
  }
  else if (num >=51 && num <=100) {
    console.log("You go higher");
  }
  else {
    console.log("Entered number is not between 1 and 100");
  }
}
var numero = prompt("Please enter a number between 1 and 100");
askNumber(numero);
