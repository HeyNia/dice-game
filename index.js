


// for player 1 dice
var  randnum1=Math.floor((Math.random() * 6) + 1); //1-6

var randDiceImage="dice" + randnum1 + ".png"; //dice1.png-dice6.png

var randomImageSource  = "images/" + randDiceImage;// images/dice1.png-dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// for player 2 dice

var randnum2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource2 = "images/dice" + randnum2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

if(randnum1 > randnum2 ){
document.querySelector("h1").innerHTML="🚩 Player 1 wins!! 🚩";
}

else if(randnum1 < randnum2 ) {
    document.querySelector("h1").innerHTML= "🚩 Player 2 wins!! 🚩";
}
else {
    document.querySelector("h1").innerHTML= "Draw !!";
}
