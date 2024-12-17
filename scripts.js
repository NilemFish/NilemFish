// Ambil elemen menu-toggle dan nav-links
const menuToggle = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Menambahkan event listener untuk klik pada menu-toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Menambahkan/menonaktifkan kelas 'active' pada menu
  menuToggle.classList.toggle("active"); // Menambahkan/menonaktifkan kelas 'active' pada tombol hamburger
});
