"use strict";

// buttons showModel-1, showModel-2,showModel-3
const button = document.querySelectorAll(".button");

const overlay = document.querySelector(".overlay");

// pop up window
const popped = document.querySelector(".popped");

// function for open window
const openModel = function () {
  popped.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// function for close window
const closeModel = function () {
  popped.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i of button) {
  i.addEventListener("click", openModel);
}

const btnCloseModel = document.querySelector(".close-Model");

btnCloseModel.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  const pressedKey = e.key;
  console.log(pressedKey);

  if (pressedKey === "Escape" && !popped.classList.contains("hidden")) {
    closeModel();
  }
});
