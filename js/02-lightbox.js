import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const createListGallery = galleryItems.map(elem => 
    `<a class="gallery__item" href="${elem.original}" data-caption="${elem.description}" onclick="return false;">
    <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
  </a>`
    ).join("")

// console.log(createListGallery)

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createListGallery)

list.addEventListener('click', onImageClick)

function onImageClick(elem) {

  // let gallery = new SimpleLightbox('.gallery a');
  // gallery.on('show.simplelightbox', function () {
  //   console.log(elem.target.href)
  // });

  var lightbox = new SimpleLightbox('.gallery a', function (elem) {
    console.log(elem.target.href)
  });
  


  // $('.gallery a').on('open.simplelightbox', function (elem) {
  //   console.log(elem.target.href)
  // });
 
}



