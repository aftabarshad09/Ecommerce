document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header .menu");
    const hamburgerBtn = document.querySelector(".hamburger-btn");

    // Initially hide menu on small screens
    function checkWindowSize() {
        if (window.innerWidth <= 768) {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    }

    checkWindowSize();

    // Toggle menu visibility on hamburger click
    hamburgerBtn.addEventListener("click", () => {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });

    // When window resizes, adjust menu display accordingly
    window.addEventListener("resize", () => {
        checkWindowSize();
    });
});
