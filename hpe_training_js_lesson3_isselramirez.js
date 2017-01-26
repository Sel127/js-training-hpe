
/* This is HPE JavaScript training
lesson 3 */

//Using a For loop, print out numbers from 0 to 100 with a increase of 5 each
for (var i = 0; i <= 100; i = i + 5) {
    console.log(i);
}
//Using a For loop, print all the values of an array by separate. Tip: You will need to use .length ;-)
var colors = ["red","black","yellow","blue","green"];
for (var i = 0; i < colors.length; i = i + 1) {
    console.log(colors[i]);
}
//Using a For loop, print out numbers from 24 to 2 with a decrease of 2 each.
for (var i = 24; i >= 2; i = i - 2) {
    console.log(i);
}

/*Using an If statement, generate a condition that includes a .length comparation, and print numbers from 10 to 50 using for.
  Include an else that prints the same values but decreasing.*/
  var colors = ["red","black","yellow","blue","green"];

  if(colors.length > 0){
    for(var i = 10; i<= 50; i = i + 10){
      console.log("you are going up!");
      console.log(i);
    }
  }
  else{
    for(var i = 50; i>= 10; i = i - 10){
      console.log("you are going down!");
      console.log(i);
    }
  }

/* Using an If statement, generate a similar condition as in excercise 2, and print numbers from 9 to 0 using for.
    Include an else that prints the same values but increasing */
  var colors = ["red","black","yellow","blue","green","brown","navy", "gray", "white"];
    if(colors.length > 0){
      for(var i = colors.length; i>= 0; i = i - 1){
        console.log(i);
      }
    }
    else{
      for(var i = 0; i<= colors.length; i = i + 1){
        console.log(i);
      }
    }
