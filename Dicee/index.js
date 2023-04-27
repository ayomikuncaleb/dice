var randomNumber1 = Math.floor(Math.random()*6)+1;

 var randomDice = "images/dice" +randomNumber1 + ".png";


document.querySelectorAll("img")[0].setAttribute("src", randomDice);


var randomNumber2 = Math.floor(Math.random()*6)+1;

 var randomDice = "images/dice" +randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDice);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "😎Player1 wins"
    document.querySelector('h1').style.fontSize = "80px"
}else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = "😎Player2 wins"
    document.querySelector('h1').style.fontSize = "80px"
}else {
  document.querySelector('h1').innerHTML = "😂 draw go again"
  document.querySelector('h1').style.fontSize = "80px"
}
