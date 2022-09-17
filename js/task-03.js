const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");
console.log(galleryList);

const galleryCard = images
  .map(
    (elem) => `<li><img src="${elem.url}" alt="${elem.alt}" width ="420"</li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryCard);

// const makeGalleryCard = images.map(({ url, alt }) => {
//   const galleryItem = document.createElement("li");
//   const galleryImg = document.createElement("img");
//   galleryImg.src = url;
//   galleryImg.alt = alt;
//   galleryImg.width = "420";

//   galleryItem.appendChild(galleryImg);
//   galleryList.append(galleryItem);

//   return galleryList;
// });
// console.log(makeGalleryCard);
