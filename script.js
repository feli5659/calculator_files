// When this is located at the top of a script, the whole script works the “modern” way.
"use strict";

const calcBtn = document.querySelector("#calculate");
const resultList = document.querySelector("#results");

// variables for input fields
let firstInputNumber;
let secondInputNumber;
let result;
let lastResult;
let resultRound;

window.addEventListener("loaded", start());

function start() {
  console.log("loaded");
  calcBtn.addEventListener("click", calculate);
}

function calculate() {
  // Reading a field
  // convert string to number (everytime the calculate function runs it needs to check what the input is)
  firstInputNumber = Number(document.querySelector("#firstnumber").value);
  secondInputNumber = Number(document.querySelector("#secondnumber").value);
  let mathry = document.querySelector("#operator").value;
  let doround = document.querySelector("#doround").checked;
  let roundDecimals = Number(document.querySelector("#decimals").value);

  console.log("first Input " + firstInputNumber);
  console.log("second Input " + secondInputNumber);

  // if statement that checks if checkbox is checked and if it isnt then do this
  if (doround === false) {
    console.log("not checked");
    if (mathry === "add") {
      result = firstInputNumber + secondInputNumber;
      console.log("this is the result: " + result);
    } else if (mathry === "sub") {
      result = firstInputNumber - secondInputNumber;
      console.log("this is the result: " + result);
    } else if (mathry === "mul") {
      result = firstInputNumber * secondInputNumber;
      console.log("this is the result: " + result);
    } else {
      result = firstInputNumber / secondInputNumber;
      console.log("this is the result: " + result);
    }
  } // if statement that checks if checkbox is checked and if it is then do this
  else {
    console.log("checked");
    if (mathry === "add") {
      resultRound = firstInputNumber + secondInputNumber;
      console.log("this is the result: " + result);
      result = resultRound.toFixed(roundDecimals);
    } else if (mathry === "sub") {
      resultRound = firstInputNumber - secondInputNumber;
      console.log("this is the result: " + result);
      result = resultRound.toFixed(roundDecimals);
    } else if (mathry === "mul") {
      resultRound = firstInputNumber * secondInputNumber;
      console.log("this is the result: " + result);
      result = resultRound.toFixed(roundDecimals);
    } else {
      resultRound = firstInputNumber / secondInputNumber;
      console.log("this is the result: " + result);
      result = resultRound.toFixed(roundDecimals);
    }
  }

  document.querySelector("#firstnumber").value = result;

  // Create an "li" variable:
  let node = document.createElement("li");

  // Create a text node:
  let textnode = document.createTextNode(result);

  // Append the text node to the "li" node:
  node.appendChild(textnode);
  resultList.appendChild(node);

  // Append the "li" node to the list:
  document.getElementById("results").appendChild(node);

  // makes scroll go to bottom
  resultList.scrollTo(0, 10000000);

  // // check if input is checked
  // if (doround.checked) {
  //   console.log("checkbox is checked");
  //   result = result.toFixed(roundDecimals);
  // } else {
  //   console.log("checkbox is not checked");
  // }

  document.querySelector("#clear").addEventListener("click", clearResults);
}

function clearResults() {
  lastResult = resultList.lastChild.innerHTML;

  resultList.innerHTML = "";
  console.log(lastResult);

  //clone new li with the latest result
  let createLi = document.createElement("li");
  let textResult = document.createTextNode(lastResult);
  createLi.appendChild(textResult);
  resultList.appendChild(createLi);
}
