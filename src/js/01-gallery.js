import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBox = document.querySelector('.gallery');
const imagesMarkup = makeGalleryItemsMarkup(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', imagesMarkup);

// creating gallery markup
function makeGalleryItemsMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}" />
    </a>
    `;
    })
    .join('');
}

// creating Lightbox
new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionPosition: 'bottom',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
