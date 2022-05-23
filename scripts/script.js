window.onload = chooseRandomPictures;

img1=document.getElementById("img1");

img2=document.getElementById("img2");


function getRandom(min, max) {    //function to give random integer between 2 values; min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//dices is an array to store the images

var dices = ["../images/dice1.png","../images/dice2.png","../images/dice3.png","../images/dice4.png","../images/dice5.png","../images/dice6.png"];

let random_index;

function chooseRandomPictures(){

random_index=getRandom(0,5);

img1.src=dices[random_index];

random_index=getRandom(0,5);

img2.src=dices[random_index];


}