import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);



    // displaying elements in the browser
    const galleryElem = document.querySelector('.gallery__image');        
    const galleryElement = document.querySelector('.gallery');

    
galleryElem.insertAdjacentHTML('beforeend', galleryFunc(galleryItems).join(''));

    galleryElement.insertAdjacentHTML('beforeend', galleryFunc(galleryItems).join(''));
  
   
    function galleryFunc(arr) {
      return arr.map(({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source = "${original}"
            alt="${description}"
          />
        </a>
      </li>  `);
    };
  
  
  galleryElement.addEventListener('click', onClick);
            //library lightbox
   
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
     captionDelay: 250,
  });