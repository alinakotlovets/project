


const menu = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-list-element-link");
const hamburger = document.querySelector(".menu-buttons");
const closeIcon = document.querySelector(".menu-close");
const menuIcon = document.querySelector(".menu-open");
const body = document.querySelector("body");

function isMobile() {
    return window.innerWidth <= 767; // Перевіряємо, чи пристрій мобільний
}

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        if (isMobile()) {
            body.classList.remove("no-scroll"); // Забираємо клас лише на мобільних
        }
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        if (isMobile()) {
            body.classList.add("no-scroll"); // Додаємо клас лише на мобільних
        }
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
});

// Скидання класів при зміні розміру вікна
window.addEventListener("resize", function () {
    if (!isMobile()) {
        menu.classList.remove("showMenu");
        body.classList.remove("no-scroll");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }
});
