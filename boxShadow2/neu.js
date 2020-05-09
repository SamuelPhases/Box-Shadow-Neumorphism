let xValue = document.querySelector(".xValue");
let yValue = document.querySelector(".yValue");
let spreadValue = document.querySelector(".spread-value");
let blurValue = document.querySelector(".blur-value");
let firstShadow = document.querySelector(".first-shadow");
let txValue = document.querySelector(".txValue");
let tyValue = document.querySelector(".tyValue");
let tspreadValue = document.querySelector(".tspreadValue");
let tblurValue = document.querySelector(".tblurValue");
let BoxColor = document.querySelector(".boxColor");

let xPosition = document.querySelector(".x-position");
let txPosition = document.querySelector(".tx-position");
let yPosition = document.querySelector(".y-position");
let tyPosition = document.querySelector(".ty-position");
let blur = document.querySelector(".blur");
let tblur = document.querySelector(".tblur");
let spread = document.querySelector(".spread");
let tspread = document.querySelector(".tspread");
let boxcolor = document.querySelector(".box-color");

xPosition.addEventListener("input", () => {
  xValue.textContent = xPosition.value;
});
txPosition.addEventListener("input", () => {
  txValue.textContent = txPosition.value;
});
yPosition.addEventListener("input", () => {
  yValue.textContent = yPosition.value;
});
tyPosition.addEventListener("input", () => {
  tyValue.textContent = tyPosition.value;
});

blur.addEventListener("input", () => {
  blurValue.textContent = blur.value;
});
tblur.addEventListener("input", () => {
  tblurValue.textContent = tblur.value;
});
spread.addEventListener("input", () => {
  spreadValue.textContent = spread.value;
});
tspread.addEventListener("input", () => {
  tspreadValue.textContent = tspread.value;
});

boxcolor.addEventListener("input", () => {
  BoxColor.textContent = boxcolor.value;
});
