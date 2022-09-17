const decremBtnRef = document.querySelector('button[data-action="decrement"]');
const incremBtnRef = document.querySelector('button[data-action="increment"]');
const valueCounterRef = document.querySelector("#value");

let counterValue = 0;

decremBtnRef.addEventListener("click", () => {
  valueCounterRef.textContent = `${(counterValue -= 1)}`;
});

incremBtnRef.addEventListener("click", () => {
  valueCounterRef.textContent = `${(counterValue += 1)}`;
});
