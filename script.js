"use strict";
//Mini Challege 1
const colaButton = document.querySelector(".cola");
//console.dir(colaButton);
const peanutsButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");
const totalPara = document.querySelector(".vending-total");

let total = 0;

colaButton.addEventListener("click", (item) => {
  total += 2;
  console.log(total);
  totalPara.textContent = `Total : $${total}.00`;
});
peanutsButton.addEventListener("click", (item) => {
  total += 3;
  console.log(total);
  totalPara.textContent = `Total : $${total}.00`;
});
chocolateButton.addEventListener("click", (item) => {
  total += 4;
  console.log(total);
  totalPara.textContent = `Total : $${total}.00`;
});
gummiesButton.addEventListener("click", (item) => {
  total += 6;
  console.log(total);
  totalPara.textContent = `Total : $${total}.00`;
});

//2

const numberOfCoins = document.querySelector("#howMany");
const typeOfCoin = document.querySelector("#whichCoin");
const moneyButton = document.querySelector("#make-money");
const moneyForm = document.querySelector(".money-creator");

moneyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const howManyCoins = numberOfCoins.value;
  const kindOfCoins = typeOfCoin.value;
  console.log(howManyCoins, kindOfCoins);
  for (let i = 0; i < howManyCoins; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add(kindOfCoins, "coin");

    newCoin.addEventListener("click", (e) => {
      newCoin.removeEventListener(newCoin);
    });
    document.querySelector(".money").append(newCoin);
  }
});

//3
const lightBulb = document.querySelector(".light");
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");
const allButtons = document.querySelectorAll(".btn");

onButton.addEventListener("click", () => {
  lightBulb.classList.add("turn-on");
});
offButton.addEventListener("click", () => {
  lightBulb.classList.remove("turn-on");
});
toggleButton.addEventListener("click", (e) => {
  lightBulb.classList.toggle("turn-on");
});
endButton.addEventListener("click", () => {
  lightBulb.remove();
  allButtons.forEach((node) => {
    node.disabled = true;
  });
});
