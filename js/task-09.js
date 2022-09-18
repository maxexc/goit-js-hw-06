const btnColorRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

btnColorRef.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyRef.style.backgroundColor = color;
  colorRef.textContent = color;
}
