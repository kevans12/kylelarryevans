var myArray = ["Some of my favorite books include the Ender's Game series (I'm a big science fiction fan), Team of Rivals, Outliers, and Steal Like an Artist", "My favorite TV shows include Doctor Who, Firefly, Community, Seinfeld and Law & Order", "I love playing sports, especially soccer, volleyball, tennis and ultimate frisbee","I have a bit of a sweet tooth and am a big fan of just about anything chocolate and peanut butter"];
var myIndex = 1;
var print = document.getElementById('print');

print.innerHTML = myArray[0]; //Print first value of array right away.

function nextElement() {
  if (myIndex < myArray.length) {
     print.innerHTML = myArray[myIndex];
     myIndex++;
  }
  else {
     myIndex = 0;
  }
};
