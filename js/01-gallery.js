import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const container = document.querySelector(".gallery");
const markup = galleryItems.map(
	({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
    />
    </a>
</li>`
);

container.insertAdjacentHTML("beforeend", markup.join(""));
container.addEventListener("click", openFullSize);

function openFullSize(evt) {
	if (!evt.target.classList.contains("gallery__image")) {
		return;
	}
	evt.preventDefault();

	const originalImgLink = evt.target.dataset.source;
	const instance = basicLightbox.create(`
    <img src="${originalImgLink}">, {
		onShow: (instance) => {};
  onClose: (instance) => {};
	}
`);

	instance.show();

	document.addEventListener("keydown", (evt) => {
		if (evt.key === "Escape") {
			// const visible = basicLightbox.visible();
			// if (visible) {
				instance.close();
			// }
		}
	});
}

// function checkPressEsc(e) {
// 	if (e.code === "Escape") {
// 		modal.close();
// 	}
// }