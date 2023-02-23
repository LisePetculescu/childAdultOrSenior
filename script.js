"use-strict";

console.log("script.js is ready");

window.addEventListener("load", start);

let message = "";
let age = 5;
// hvis jeg sætter en variabel ind i en funkton
// er det kun funktionen der kan læse variablen,
// men uden for funktionen kan alle funktioner læse den
// fx kan min let age; godt være inde i start()

function start() {
  console.log("start is starting");

  if (age < 18) {
    isChild();
  } else if (age <= 72) {
    isAdult();
  } else {
    isSenior();
  }
  document.querySelector("#message").textContent = message;
}

function isChild() {
  console.log("it is a child");
  message = "This is a child person";
  document.querySelector("body").classList.add("red");
}

function isAdult() {
  console.log("it is an adult");
  message = "This is an adult person";
  document.querySelector("body").classList.add("blue");
}

function isSenior() {
  console.log("it is a senior");
  message = "This is a senior person";
  document.querySelector("body").classList.add("green");
}

function display() {}
