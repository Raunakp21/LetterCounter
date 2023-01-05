"use strict";
const input = document.querySelector(".input");
const numCounter = document.querySelector("#number");

//keyup causes Browser to process keyboard input first then allows the handler to execute
input.addEventListener("keyup", function (e) {
  let count = input.value.length;
  numCounter.textContent = count;
});
