/* global DOMPurify */

"use strict";
const purify = require("dompurify");

document.addEventListener("click", reveal);
window.addEventListener("resize", fitAppToWindow);

function fitAppToWindow() {
  // First, get the viewport height and multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

fitAppToWindow();

function reveal() {
  const params = new URLSearchParams(location.search);
  const recipient = purify.sanitize(params.get("recipient"));
  const gift = purify.sanitize(params.get("gift"));

  const container = document.querySelector(".inside");
  const salutation = document.querySelector(".message-salutation");

  if (recipient) {
    salutation.innerText = `Dear ${recipient},`;
  }

  if (container.firstChild) {
    container.removeChild(container.firstChild);
    toggleBox();
  } else {
    const image = document.createElement("img");

    fetch("/gif/" + params.get("gift"))
      .then(response => response.json())
      .then(json => {
        image.src = json.url;
        container.appendChild(image);
        toggleBox();
      });
  }
}

function toggleBox() {
  const top = document
    .querySelector(".top-side")
    .classList.toggle("top-side--open");
  const left = document
    .querySelector(".left-side")
    .classList.toggle("left-side--open");
  const right = document
    .querySelector(".right-side")
    .classList.toggle("right-side--open");
  const bottom = document
    .querySelector(".bottom-side")
    .classList.toggle("bottom-side--open");
  const outside = document
    .querySelector(".outside")
    .classList.toggle("outside--open");
}
