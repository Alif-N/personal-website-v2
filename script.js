document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    function toggleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    // Jalankan saat halaman di-scroll
    window.addEventListener("scroll", toggleNavbarScroll);

    // Jalankan sekali saat load halaman untuk memastikan kondisi scroll awal benar
    toggleNavbarScroll();
});