const inputRef = document.querySelector("input");
const btnCreateBoxesRef = document.querySelector("[data-create]");
const btnDestroyBoxesRef = document.querySelector("[data-destroy]");
const boxRef = document.querySelector("#boxes");

let inputValue = 0;
inputRef.value = 0;

inputRef.addEventListener("input", () => (inputValue = inputRef.value));

btnCreateBoxesRef.addEventListener("click", () => createBoxes(inputValue));

function createBoxes(inputValue) {
  boxRef.innerHTML = "";
  let size = 30;

  for (let i = 0; i < inputValue; i += 1) {
    boxRef.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size += 10;
  }
}
// -----V2-----
// function createBoxes(inputValue) {
//   boxRef.innerHTML = "";
//   let size = 30;
//   const outputArray = [];

//   for (let i = 0; i < inputValue; i += 1) {
//     size += 10;
//     const newDiv = document.createElement("div");
//     newDiv.style.width = `${size}px`;
//     newDiv.style.height = `${size}px`;
//     newDiv.style.backgroundColor = getRandomHexColor();
//     outputArray.push(newDiv);
//   }
//   boxRef.append(...outputArray);
// }

btnDestroyBoxesRef.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxRef.innerHTML = "";
  inputRef.value = 0;
  inputValue = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
