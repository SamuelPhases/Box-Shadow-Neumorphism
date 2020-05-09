// SELECTORS
const copyButton = document.querySelector(".split-right");
const splitLeft = document.querySelector(".split-left");
const body = document.querySelector("body");

// EVENT LISTENER
copyButton.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const shadow = splitLeft.innerText;
  //   console.log(splitLeft.textContent);

  textarea.value = shadow;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Shadow copied to clipboard");
});
