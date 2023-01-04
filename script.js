"use strict";
const input = document.querySelector(".input");
const numCounter = document.querySelector("#number");

input.onkeypress = letterCounter;

function letterCounter() {
  let count = input.value.length;
  //   if (count == 0) {
  //     numCounter.textContent = "0";
  //   } else {
  //     numCounter.textContent = count;
  //   }
  numCounter.textContent = count;
}
