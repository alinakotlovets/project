const menu=document.querySelector(".menu-list"),menuItems=document.querySelectorAll(".menu-list-element-link"),hamburger=document.querySelector(".menu-buttons"),closeIcon=document.querySelector(".menu-close"),menuIcon=document.querySelector(".menu-open");function toggleMenu(){menu.classList.contains("showMenu")?(menu.classList.remove("showMenu"),closeIcon.style.display="none",menuIcon.style.display="block"):(menu.classList.add("showMenu"),closeIcon.style.display="block",menuIcon.style.display="none")}hamburger.addEventListener("click",toggleMenu),menuItems.forEach((function(e){e.addEventListener("click",toggleMenu)}));