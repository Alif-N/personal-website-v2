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

    // Horizontal Timeline Navigation
    const scrollContainer = document.getElementById("timeline-scroll");
    const prevBtn = document.getElementById("timeline-prev");
    const nextBtn = document.getElementById("timeline-next");

    if (scrollContainer && prevBtn && nextBtn) {
        const scrollAmount = 350; // Card width + gap (320px + 30px)

        prevBtn.addEventListener("click", () => {
            scrollContainer.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        nextBtn.addEventListener("click", () => {
            scrollContainer.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });

        // Enable/disable buttons based on scroll position
        function updateButtons() {
            const scrollLeft = scrollContainer.scrollLeft;
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            
            // Allow small rounding tolerance for screen scaling
            prevBtn.disabled = scrollLeft <= 5;
            nextBtn.disabled = scrollLeft >= maxScrollLeft - 5;
        }

        scrollContainer.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);
        
        // Initial button check
        setTimeout(updateButtons, 100);
    }
});