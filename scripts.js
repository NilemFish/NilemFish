// Ambil elemen menu-toggle dan nav-links
const menuToggle = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Menambahkan event listener untuk klik pada menu-toggle
menuToggle.addEventListener("click", () => {
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

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Ambil id target
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth' // Efek scroll halus
    });

    // Tutup menu hamburger setelah klik di perangkat mobile
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Highlight active link saat scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section'); // Semua elemen section
  const navLinks = document.querySelectorAll('.nav-links a'); // Semua link dalam navbar

  sections.forEach(section => {
    const top = window.scrollY; // Posisi scroll saat ini
    const offset = section.offsetTop - 100; // Offset atas section dikurangi 100px
    const height = section.offsetHeight; // Tinggi dari setiap section
    const id = section.getAttribute('id'); // ID dari section saat ini

    // Cek jika posisi scroll berada di dalam section
    if (top >= offset && top < offset + height) {
      // Hapus kelas 'active' dari semua link
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      // Tambahkan kelas 'active' ke link yang sesuai dengan section
      document.querySelector(`.nav-links a[href="#${id}"]`).classList.add('active');
    }
  });
});
