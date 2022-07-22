const colors = ["red", "green", "blue", "yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let number = getRandomNumber();
    number2 = number;
    while(document.body.style.backgroundColor == colors[number2] && colors[number2] == colors[number]){
        number = getRandomNumber();
        document.body.style.backgroundColor = colors[number];
    } 

    document.body.style.backgroundColor = colors[number];
    color.textContent = colors[number];
    console.log(colors[number]);
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}