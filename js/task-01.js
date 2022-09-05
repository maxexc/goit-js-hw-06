const categoryItemsRef = document.querySelectorAll("#categories .item");
console.log("Number of categories: ", categoryItemsRef.length);
const categoryTitlesRef = document.querySelectorAll(".item > h2");

categoryTitlesRef.forEach((item) => {
  console.log(`Category: ${item.textContent}`);
  console.log(`Elements: ${item.nextElementSibling.children.length}`);
});
