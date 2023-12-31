import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(
	({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"title="${description}" />
   </a>
</li>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));
gallery.addEventListener("click", openFullSize);

function openFullSize(evt) {
	if (!evt.target.classList(".gallery__image")) {
		return;
	}
	evt.preventDefault();
}
const galleryList = new SimpleLightbox(".gallery a");

