import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// console.log(basicLightbox)



const createListGallery = galleryItems.map(elem => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${elem.original}" onclick="return false;">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
  </div>`
    ).join("")


const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createListGallery)

list.addEventListener('click', onImageClick)

function onImageClick(elem) {
  // console.log(elem.target.dataset.source)
  const instance = basicLightbox.create(`
  <img src="${elem.target.dataset.source}" width="800" height="600">
`)
 instance.show() 
}


