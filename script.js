const menuToggle = document.querySelector("#mobile-menu");
const navList = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});
