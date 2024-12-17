// Ambil elemen menu-toggle dan nav-links
const menuToggle = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Menambahkan event listener untuk klik pada menu-toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Menambahkan/menonaktifkan kelas 'active' pada menu
  menuToggle.classList.toggle("active"); // Menambahkan/menonaktifkan kelas 'active' pada tombol hamburger
});

// Smooth Scroll untuk setiap link pada menu
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Ambil id target
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth' // Efek scroll halus
    });

    // Tutup menu hamburger setelah klik di perangkat mobile
    navLinks.classList.remove('active'); // Sembunyikan menu
    menuToggle.classList.remove('active'); // Kembalikan ikon hamburger
  });
});

// Menambahkan event listener untuk menutup menu ketika mengklik area luar menu
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active"); // Menutup menu jika klik di luar menu dan tombol hamburger
    menuToggle.classList.remove("active"); // Menonaktifkan animasi hamburger jika menu ditutup
  }
});
