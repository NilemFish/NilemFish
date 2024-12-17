// Toggle menu saat tombol garis tiga diklik
const mobileMenu = document.querySelector("#mobile-menu");
const navLinks = document.querySelector("#nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
