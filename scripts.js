// Pastikan DOM sudah dimuat sebelum menambahkan event listener
document.addEventListener("DOMContentLoaded", () => {
  // Ambil elemen menu-toggle dan nav-links
  const menuToggle = document.querySelector("#mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  // Menambahkan event listener untuk klik pada menu-toggle
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Mencegah event klik diteruskan ke elemen lain
    navLinks.classList.toggle("active"); // Menambahkan/menonaktifkan kelas 'active' pada menu
    menuToggle.classList.toggle("active"); // Menambahkan/menonaktifkan kelas 'active' pada tombol hamburger
  });

  // Menambahkan event listener untuk menutup menu ketika mengklik area luar menu
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active"); // Menutup menu jika klik di luar menu dan tombol hamburger
      menuToggle.classList.remove("active"); // Menonaktifkan animasi hamburger jika menu ditutup
    }
  });
});
