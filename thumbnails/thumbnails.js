let thumbnails = document.getElementsByClassName("gallery__thumbnails")[0];
let largeImg = document.querySelector(".gallery__big-image");

thumbnails.addEventListener("click", (e) => {
  let anchor = e.target.closest("a");
  if (anchor) {
    e.preventDefault();
    largeImg.src = anchor.getAttribute("href");
    largeImg.alt = anchor.getAttribute("title");
  }
});