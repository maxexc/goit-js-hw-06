const inputBoxRef = document.querySelector("#validation-input");
const setLength = inputBoxRef.dataset.length;
console.log(setLength);

inputBoxRef.addEventListener("blur", () => {
  if (inputBoxRef.value === "") {
    inputBoxRef.removeAttribute("class");
  } else {
    inputBoxRef.value.length === Number(setLength)
      ? (inputBoxRef.classList = "valid")
      : (inputBoxRef.classList = "invalid");
  }
});

// ------V2-------
// inputBoxRef.addEventListener("blur", () => {
//   if (inputBoxRef.value === "") {
//     inputBoxRef.removeAttribute("class");
//   } else {
//     if (inputBoxRef.value.length === Number(setLength)) {
//       inputBoxRef.classList = "valid";
//     } else inputBoxRef.classList = "invalid";
//   }
// });
