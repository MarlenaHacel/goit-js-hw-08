// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

import { galleryItems } from './gallery-items';

// Change code below this line

const createGalleryItem = (record, tabContent) => {
  const galleryItemsHTML = record
    .map(item => {
      return `
          <li>
            <a class="gallery__link" href="${item.original}">
              <img
                class="gallery__image"
                src="${item.preview}"
                alt="${item.description}"
              />
            </a>
          </li>`;
    })
    .join('');

  tabContent.innerHTML = galleryItemsHTML;
};

const galleryList = document.querySelector('.gallery');
createGalleryItem(galleryItems, galleryList);

const lightbox = new SimpleLightbox('.gallery a.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);
