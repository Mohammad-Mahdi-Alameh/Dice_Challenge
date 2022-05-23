window.onload = chooseRandomPictures;

img1=document.getElementById("img1");

img2=document.getElementById("img2");


function getRandom(min, max) {    //function to give random integer between 2 values; min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var myPix = ["../images/dice1.png","../images/dice2.png","../images/dice3.png","../images/dice4.png","../images/dice5.png","../images/dice6.png"];

function chooseRandomPictures(){


}