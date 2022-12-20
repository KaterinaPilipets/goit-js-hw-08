// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onGalleryClick);
gallery.insertAdjacentHTML('beforeend', createGaleryItems(galleryItems));

let galleryLightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
}

function createGaleryItems(galleryItemsArr) {
  return galleryItemsArr
    .map(
      ({ preview, original, description }) => `
      <li class= "gallery__item">
          <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}"/>
         </a></li>`
    )
    .join('');
}
