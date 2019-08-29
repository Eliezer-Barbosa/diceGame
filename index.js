
// get a random number from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// get the image according to its correspondent number
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// get the image path
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// get the first image 
var image1 = document.querySelectorAll("img")[0];

// set the source to image1
image1.setAttribute("src", randomImageSource);

// get a second random number from 1 to 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// get the path of image2
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// set the source to image2 in the second image
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
// else if player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
// otherwise it is a draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
