const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
const showMoney = document.getElementById("showMoney")
const betAmount = document.getElementById("betAmount")
let num1;
let num2;
let num3;
let min = 1;
let max = 5;

let money = 1000;
export default money;

var audio = new Audio('untitled.mp3');

showMoney.innerHTML = `Money: ${money}`;

function Gamble() {
    if (betAmount.value == "") {
        alert("You have to place your bet");
    } else if (betAmount.value <= 0) {
        alert("No illegal numbers");
    } else if (betAmount.value > money) {
        alert("Not enough money");
    } else {
    num1 = Math.floor(Math.random() * (max - min + 1) ) + min;
    num2 = Math.floor(Math.random() * (max - min + 1) ) + min;
    num3 = Math.floor(Math.random() * (max - min + 1) ) + min;

    text1.innerHTML = num1;
    text2.innerHTML = num2;
    text3.innerHTML = num3;

    // 3 of a kinds
    if (Number(text1.innerHTML) == 1 && Number(text2.innerHTML) == 1 && Number(text3.innerHTML) == 1) {
        money = money + (Number(betAmount.value) * 2.5);
        console.log("2.5 multi");
    } else if (Number(text1.innerHTML) == 2 && Number(text2.innerHTML) == 2 && Number(text3.innerHTML) == 2) {
        money = money + (Number(betAmount.value) * 3);
        console.log("3 multi");
    } else if (Number(text1.innerHTML) == 3 && Number(text2.innerHTML) == 3 && Number(text3.innerHTML) == 3) {
        money = money + (Number(betAmount.value) * 5);
        console.log("5 multi");
    } else if (Number(text1.innerHTML) == 4 && Number(text2.innerHTML) == 4 && Number(text3.innerHTML) == 4) {
        money = money + (Number(betAmount.value) * 7);
        console.log("7 multi");
    } else if (Number(text1.innerHTML) == 5 && Number(text2.innerHTML) == 5 && Number(text3.innerHTML) == 5) {
        money = money + (Number(betAmount.value) * 10);
        console.log("10 multi");
    } //2 of a kinds
     else if (Number(text1.innerHTML) == 1 && Number(text2.innerHTML) == 1 || Number(text1.innerHTML) == 1 && Number(text3.innerHTML) == 1 || Number(text2.innerHTML) == 1 && Number(text3.innerHTML) == 1) { 
        money = money + (Number(betAmount.value) * 1.5);
        console.log("3.5 multi");
    } else if (Number(text1.innerHTML) == 3 && Number(text2.innerHTML) == 3 || Number(text1.innerHTML) == 3 && Number(text3.innerHTML) == 3 || Number(text2.innerHTML) == 3 && Number(text3.innerHTML) == 3) { 
        money = money + (Number(betAmount.value) * 4);
        console.log("5 multi");
    } else if (Number(text1.innerHTML) == 5 && Number(text2.innerHTML) == 5 || Number(text1.innerHTML) == 5 && Number(text3.innerHTML) == 5 || Number(text2.innerHTML) == 5 && Number(text3.innerHTML) == 5) { 
        money = money + (Number(betAmount.value) * 6.5);
        console.log("6.5 multi");
    }

    audio.play();

    money = money - Number(betAmount.value);
    showMoney.innerHTML = `Money: ${money}`;
    
    }
}

const button = document.getElementById('gambleButton');
let isOnCooldown = false;
const cooldownDuration = 1550;

button.addEventListener('click', function() {
    if (!isOnCooldown) {
        button.disabled = true;
        isOnCooldown = true;

        setTimeout(function() {
            button.disabled = false;
            isOnCooldown = false;
        }, cooldownDuration);
    } else {
        console.log('Button is on cooldown.');
    }
});

button.onclick = Gamble;
