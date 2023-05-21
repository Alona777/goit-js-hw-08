// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);
const galleryItemsMarkup = galleryItems
	.map(
		({ preview, original, description }) =>
			`<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
     class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"
    
     />
     </a>
     </li>`
	)
	.join("");

const ulRef = document.querySelector(".gallery");
ulRef.classList.add('list-style-none');
ulRef.insertAdjacentHTML("beforeend", galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250})