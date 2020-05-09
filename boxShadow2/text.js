let xValue = document.querySelector(".x-value");
let yValue = document.querySelector(".y-value");
let spreadValue = document.querySelector(".spread-value");
let blurValue = document.querySelector(".blur-value");
let colorValue = document.querySelector(".color-value");
let xPosition = document.querySelector(".x-position");
let yPosition = document.querySelector(".y-position");
let spreadPosition = document.querySelector(".spread-position");
let blurPosition = document.querySelector(".blur-position");
let shadowValue = document.querySelector(".shadow-value");

xValue.addEventListener("input", () => {
  xPosition.textContent = xValue.value;
});

yValue.addEventListener("input", () => {
  yPosition.textContent = yValue.value;
});

spreadValue.addEventListener("input", () => {
  spreadPosition.textContent = spreadValue.value;
});

blurValue.addEventListener("input", () => {
  blurPosition.textContent = blurValue.value;
});

colorValue.addEventListener("input", () => {
  shadowValue.textContent = colorValue.value;
  //   console.log(colorValue.value);
});
