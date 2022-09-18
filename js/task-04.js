const btnDecrRef = document.querySelector(`button[data-action="decrement"]`);
const btnIncrRef = document.querySelector(`button[data-action="increment"]`);
const counterRef = document.querySelector("#value");

let counterValue = 0;

btnDecrRef.addEventListener("click", () => {
  counterRef.textContent = `${(counterValue -= 1)}`;
});

btnIncrRef.addEventListener("click", () => {
  counterRef.textContent = `${(counterValue += 1)}`;
});
