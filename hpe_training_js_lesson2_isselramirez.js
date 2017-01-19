/* This is HPE JavaScript training
lesson 2 */

//Logical operators
    //true
console.log("Marcela".length < 100);
console.log("Jorge Luis Borges".length > 8);
console.log(90*32 === 2880);
    //false
console.log("Friends and liars don't wait for me, 'Cause I'll get on all by myself".length > 122);
console.log("mi nombre completo".length < 8);
console.log(105*79 === 8801/23);

//Substrings
console.log("wonderful day".substring(0,2));
console.log("This is fun".substring(2,3));
console.log("I think mother nature is great".substring(0,5));
console.log("Hamburgers".substring(1,3));
console.log("Elvis Presley king of rock and roll".substring(5, 7));

//Arrays
/*
I found two ways to create the arrays, can you tell me the difference between them?

var word = ["word1", "word2", "etc"];
var array1 = new Array("Element1", "Element2", "Etc");

*/
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(trees[2]);

var names = ["Martha","Cristina","Jose", "Juan", "Manuel"];
console.log(names[4]);

var sizes = [5, 7, 9, 11];
console.log(sizes[0]);

var beverages = ["Coffe", "Tea", "Chocolat", "Water"];
console.log("My favorite: "+beverages[0]);

var cities = ["Paris","London","San Francisco","Tokio","Sidney"];
console.log("I want to go to: "+cities[1]);

//If statements
/**********************************************/
if ("My full name".length > 7) {
    console.log("I'm doing it in the right way");
}
else {
    console.log("your name is short");
}
/**********************************************/
var uName = prompt("Please enter your name");
var willContinue = confirm("Would you like to continue with the lesson?");
if (willContinue == "true") {
   alert("I'm doing it in the right way");
}
else {
   alert("We appreciate your time.");
}
/**********************************************/
if ("Ana".length * 2 / (2+1) === 2 ){
    console.log("I'm doing it in the right way");
}
else {
    console.log("¡this is not true!");
}
/**********************************************/
if(430 / 4 === "Ari".length){
    confirm("is it going to enter in the first block?");
} else {
    confirm("it entered in the second block!");
}
/**********************************************/
var visitor = prompt("Are you a FRIENDS fan? Y/N");
if(visitor == "Y" || visitor == "y"){
	alert("How you doin'?");
}else {
	alert("Monica, i'm scared!");
}
/**********************************************/
//Modulo
console.log(1658902 % 320);
console.log(93826732 % 24872);
console.log(10 % 3);
console.log(80566 % 15);

if(6780 % 20 === 0) {
    console.log("¡it's even!");
} else {
    console.log("¡it's odd!");
}

console.log(10280347 % "ari".length);
