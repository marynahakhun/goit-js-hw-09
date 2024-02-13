// Add imports above this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";


  
console.log(galleryItems);
const gallery = document.querySelector(".gallery")
const galleryItemsHTML = galleryItems.map(({preview, original, description})=>`
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')
gallery.insertAdjacentHTML("beforeend", galleryItemsHTML)

const  lightbox = new SimpleLightbox('.gallery__link', { 
captionsData: 'alt',
captionDelay: 250,
});

lightbox.on('show.simplelightbox', function (evt) {
        if (evt.target.tagName === 'IMG') {
          console.log('lightbox opened');
          console.log(evt.target.src);
        }
      });

console.log(galleryItems);
console.log("lala")