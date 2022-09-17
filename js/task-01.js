const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategories.length);

const titleH1 = document.querySelector("#categories");

const result = numberOfCategories.forEach((elem) => {
  const title = elem.querySelector("h2").textContent;
  const number = elem.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${number}`);
  return titleH1.append(`${title}: ${number}  `);
});

// ну или так, без вывода на страницу)

// const numberOfCategories = document.querySelectorAll(".item");
// console.log("Number of categories:", numberOfCategories.length);

// const categoryNamesAndCounts = numberOfCategories.forEach((elem) => {
//   console.log(Category: ${elem.querySelector("h2").textContent});
//   console.log(Elements: ${elem.querySelectorAll("li").length});
// });
