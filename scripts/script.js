/////
/////main section

window.onload = chooseRandomPictures;

/////
/////

img1=document.getElementById("img1");

img2=document.getElementById("img2");

header=document.getElementById("header");


function getRandom(min, max) {    //function to give random integer between 2 values; min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//dices is an array to store the images

var dices = ["../assets/dice1.png","../assets/dice2.png","../assets/dice3.png","../assets/dice4.png","../assets/dice5.png","../assets/dice6.png"];

var random_index_img1 , random_index_img2 ;

function chooseRandomPictures(){

random_index_img1=getRandom(0,5);

img1.src=dices[random_index_img1];

random_index_img2=getRandom(0,5);

img2.src=dices[random_index_img2];

if(random_index_img1 > random_index_img2)

        header.innerHTML="🚩 Player 1 Wins!";

else if(random_index_img1 < random_index_img2)

        header.innerHTML="🚩 Player 2 Wins!";

     else

         header.innerHTML="Draw!";

}

