var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice"+randomNumber1+".png";

var randomImageSouce1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSouce1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSouce2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSouce2);

// Winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 WINS! 🚩";
}

else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 WINS! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "DRAW ✌️";
}
