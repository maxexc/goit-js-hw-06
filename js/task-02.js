const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsList = document.querySelector("#ingredients");
// console.log(ingridientsList);

const ingredientsArray = ingredients.map((elem) => {
  const itemList = document.createElement("li");
  itemList.textContent = elem;
  itemList.classList.add("item");

  return itemList;
});

ingridientsList.append(...ingredientsArray);
// console.log(ingridientsList);

// const ingridientListEl = ingredients
//   .map((elem) => `<li class="item">${elem}</li>`)
//   .join("");

// // console.log(ingrListEl);
// ingridientsList.insertAdjacentHTML("beforeend", ingridientListEl);
