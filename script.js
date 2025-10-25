// Buat observer untuk cek elemen yang masuk viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show"); // kasih class show kalau kelihatan
        } else {
            entry.target.classList.remove("show"); // reset biar bisa animasi lagi
        }
    });
}, { threshold: 0.2 }); // aktif kalau 20% elemen kelihatan

// Cari semua elemen dengan class "reveal"
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Smooth scroll untuk link internal (#)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});