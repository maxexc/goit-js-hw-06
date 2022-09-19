const inputRangeRef = document.querySelector('[type="range"]');
console.log(`set value: ${inputRangeRef.value}`);
const changeTextRef = document.querySelector("#text");
changeTextRef.style.fontSize = `${inputRangeRef.value}px`;

inputRangeRef.addEventListener("change", fontSize);

function fontSize() {
  changeTextRef.style.fontSize = `${inputRangeRef.value}px`;
  console.log(`fontSize: ${changeTextRef.style.fontSize}`);
}

// inputRangeRef.addEventListener("change", (event) => {
//   changeTextRef.style.fontSize = `${event.currentTarget.value}px`;
// });
