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
  total += 2;
  console.log(total);
  totalPara.textContent = `Total : $${total}.00`;
});
colaButton.addEventListener("click", (item) => {
  total += 2;
  console.log(total);
  totalPara.textContent = `Total : $${total}.00`;
});
colaButton.addEventListener("click", (item) => {
  total += 2;
  console.log(total);
  totalPara.textContent = `Total : $${total}.00`;
});
