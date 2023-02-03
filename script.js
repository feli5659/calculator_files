// When this is located at the top of a script, the whole script works the “modern” way.
"use strict";

const calcBtn = document.querySelector("#calculate");
// variables for input fields
let doround = document.querySelector("#doround").value;
let firstInputNumber;
let secondInputNumber;
let result;
window.addEventListener("loaded", start());

function start() {
  console.log("loaded");
  calcBtn.addEventListener("click", calculate);
}

// Reading a field

function calculate() {
  // convert string to number (everytime the calculate function runs it needs to check what the input is)
  firstInputNumber = Number(document.querySelector("#firstnumber").value);
  secondInputNumber = Number(document.querySelector("#secondnumber").value);
  let mathry = document.querySelector("#operator").value;

  console.log(firstInputNumber);
  console.log(secondInputNumber);
  console.log("operator " + mathry);

  if (mathry === "add") {
    // console.log(firstInputNumber + secondInputNumber);
    result = firstInputNumber + secondInputNumber;
    console.log("this is the result: " + result);
  } else if (mathry === "sub") {
    // console.log(firstInputNumber - secondInputNumber);
    result = firstInputNumber + secondInputNumber;
    console.log("this is the result: " + result);
  } else if (mathry === "mul") {
    // console.log(firstInputNumber * secondInputNumber);
    result = firstInputNumber + secondInputNumber;
    console.log("this is the result: " + result);
  } else {
    // console.log(firstInputNumber / secondInputNumber);
    result = firstInputNumber + secondInputNumber;
    console.log("this is the result: " + result);
  }
}

const results = document.querySelector("#results");
