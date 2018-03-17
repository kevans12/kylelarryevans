var myArray = ["Some of my favorite books include the Ender's Game series (I'm a big science fiction fan), Team of Rivals, Outliers, Essentialism, and Steal Like an Artist. I'm usually reading 2-3 books at any given time.", "My favorite TV shows include Doctor Who, Firefly, Community, Seinfeld and Law & Order. I think all of them ended prematurely (except Doctor Who, which is thankfully still on).", "I love playing sports, especially soccer, volleyball, golf, tennis and ultimate frisbee. I actually played ultimate through most of college on the BYU team and kept playing after graduation with a club team for a few years.","I have a bit of a sweet tooth and am a big fan of just about anything with chocolate and/or peanut butter. My favorite candy is probably Cadbury eggs (either the mini or creme-filled versions).", "I love photography. Before digital cameras, I used to carry around disposable cameras wherever I went so I could take pictures (I was and am the group historian). Today, I have more cameras than a non-professional probably needs, but I'm still just as passionate.","My favorite band of all-time is Collective Soul. Their self-titled album was my first CD ever and has been a favorite since.", "I've been doing woodworking for many years now having been inspired by my dad. I love creating beautiful pieces big and small - from pens to bookshelves."];
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
