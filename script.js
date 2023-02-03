// When this is located at the top of a script, the whole script works the “modern” way.
"use strict";

const calcBtn = document.querySelector("#calculate");
// variables for input fields

let firstInputNumber;
let secondInputNumber;
let result;
const resultList = document.querySelector("#results");
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
    result = firstInputNumber - secondInputNumber;
    console.log("this is the result: " + result);
  } else if (mathry === "mul") {
    // console.log(firstInputNumber * secondInputNumber);
    result = firstInputNumber * secondInputNumber;
    console.log("this is the result: " + result);
  } else {
    // console.log(firstInputNumber / secondInputNumber);
    result = firstInputNumber / secondInputNumber;
    console.log("this is the result: " + result);
  }

  document.querySelector("#firstnumber").value = result;
  let doround = document.querySelector("#doround").checked;

  // Create an "li" variable:
  let node = document.createElement("li");

  // Create a text node:
  let textnode = document.createTextNode(result);

  // Append the text node to the "li" node:
  node.appendChild(textnode);
  resultList.appendChild(node);

  // Append the "li" node to the list:
  document.getElementById("results").appendChild(node);

  resultList.scrollTo(0, 10000000);
}
