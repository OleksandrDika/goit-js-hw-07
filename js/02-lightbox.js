import { galleryItems } from './gallery-items.js';
// Change code below this line


const createListGallery = galleryItems.map(elem => 
    `<a class="gallery__item" href="${elem.original}" data-caption="${elem.description}" onclick="return false;">
    <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
    </a>`
    ).join("")


const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createListGallery)

new SimpleLightbox('.gallery a', 
{ 
captions: true, 
captionsData: "alt", 
captionDelay: 250, 
}
); 


