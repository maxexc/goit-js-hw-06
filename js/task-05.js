const inputTextRef = document.querySelector("#name-input");
const outputTextRef = document.querySelector("#name-output");

inputTextRef.addEventListener("input", (event) => {
  outputTextRef.textContent = "Anonymous";
  if (event.currentTarget.value !== "") {
    outputTextRef.textContent = event.currentTarget.value;
  }
});
