/* Optional photo gallery interaction: click a photo to view it larger. */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".memory-card img").forEach((img) => {
    img.addEventListener("click", () => {
      const expanded = img.classList.toggle("is-expanded");
      if (expanded) {
        img.style.aspectRatio = "auto";
        img.style.maxHeight = "none";
        img.style.objectFit = "contain";
      } else {
        img.style.aspectRatio = "";
        img.style.maxHeight = "";
        img.style.objectFit = "";
      }
    });
  });
});
