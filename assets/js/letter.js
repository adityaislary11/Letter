/* Letter page enhancements can be added here.
   The letter itself is intentionally static and editable in pages/letter.html. */
document.addEventListener("DOMContentLoaded", () => {
  const paper = document.querySelector(".letter-paper");
  if (paper) paper.classList.add("is-ready");
});
