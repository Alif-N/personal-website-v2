document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("scroll", function () {
    const marquee = document.querySelector(".marquee");
    const scrollPosition = window.scrollY; // Posisi scroll saat ini
    const speed = 0.3; // Kecepatan teks berjalan
    marquee.style.transform = `translateX(${100 - scrollPosition * speed}%)`;
});