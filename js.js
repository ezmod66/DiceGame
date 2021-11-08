function randomNumGenerator() {
    var max = 6;
    var min  = 1;
    return Math.floor(Math.random() * (max - min + 1) ) + min; 
}

var randomNumber1 = randomNumGenerator();
var randomNumber2 = randomNumGenerator();

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerText = "<Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1) 
{
    document.querySelector("h1").innerText = ">Player 2 Wins!";
}
else 
{
    document.querySelector("h1").innerText = "Draw!";
}

console.log(randomNumber1);
document.querySelector(".img1")
        .setAttribute("src","images/dice"+ randomNumber1 +".png");
document.querySelector(".img2")
        .setAttribute("src","images/dice"+ randomNumber2 +".png");