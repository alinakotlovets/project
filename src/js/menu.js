
const menu = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-list-element-link");
const hamburger= document.querySelector(".menu-buttons");
const closeIcon= document.querySelector(".menu-close");
const menuIcon = document.querySelector(".menu-open");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)