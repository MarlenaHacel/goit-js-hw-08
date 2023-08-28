// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

import { galleryItems } from './gallery-items';

// Change code below this line

const createGalleryItem = (record, tabContent) => {
  const galleryItemsHTML = record
    .map(item => {
      return `
          <div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
              <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
              />
            </a>
          </div>`;
    })
    .join('');

  tabContent.innerHTML = galleryItemsHTML;
};

const galleryList = document.querySelector('.gallery');
createGalleryItem(galleryItems, galleryList);

const lightbox = new SimpleLightbox('.gallery a.gallery__link');

galleryList.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const imageSource = event.target.getAttribute('data-source');
    const lightbox = basicLightbox.create(
      `<img src="${imageSource}" alt="Image">`
    );
    lightbox.show();
  }
});

console.log(galleryItems);
