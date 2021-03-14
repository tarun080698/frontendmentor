const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const fadeElems = document.querySelectorAll(".has-fade");
const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", () => {
  console.log("clicked");
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
