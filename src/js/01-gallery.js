import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);



    // displaying elements in the browser
    const galleryElem = document.querySelector('.gallery__image');        
    const galleryElement = document.querySelector('.gallery');


    galleryElement.insertAdjacentHTML('beforeend', galleryFunc(galleryItems).join(''));
  
   
    function galleryFunc(galleryItems) {
      return galleryItems
      .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source = "${original}"
            alt="${description}"
          />
        </a>
      </li>  
      `});
    };
  
  
  
            //library lightbox
   
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
     captionDelay: 250,
  });