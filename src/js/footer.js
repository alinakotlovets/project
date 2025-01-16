// Функція, яка перевіряє наявність елемента footer-left-text і коригує позицію footer-center-list
function adjustFooterCenter() {
    const footerLeftText = document.querySelector('.footer-left-text');
    const footerCenterList = document.querySelector('.footer-center-list');
    const screenWidth = window.innerWidth;


    if (screenWidth >= 1000 ) { // Перевіряємо, чи планшетна версія
        if (!footerLeftText) {
            // Якщо елемент footer-left-text був видалений, коригуємо відступи для планшетної версії
            footerCenterList.style.marginLeft = '10px'; // Встановлюємо відступ на 10px
            footerCenterList.style.marginRight = '0';   // Центруємо по горизонталі
        } else {
            // Якщо footer-left-text присутній, застосовуємо стандартні відступи для планшетної версії
            footerCenterList.style.marginLeft = '153px'; // Стандартний відступ
            footerCenterList.style.marginRight = '0';
        }
    }
    if (screenWidth >= 768 && screenWidth <= 999) { // Перевіряємо, чи планшетна версія
        if (!footerLeftText) {
            // Якщо елемент footer-left-text був видалений, коригуємо відступи для планшетної версії
            footerCenterList.style.marginLeft = '327px'; // Встановлюємо відступ на 10px
            footerCenterList.style.marginRight = '0';   // Центруємо по горизонталі
        } else {
            // Якщо footer-left-text присутній, застосовуємо стандартні відступи для планшетної версії
            footerCenterList.style.marginLeft = '110px'; // Стандартний відступ
            footerCenterList.style.marginRight = '0';
        }
    }
}

// Викликаємо функцію при завантаженні сторінки
window.addEventListener('load', adjustFooterCenter);

// Викликаємо функцію при зміні розміру вікна
window.addEventListener('resize', adjustFooterCenter);

// Викликаємо функцію при кожній зміні DOM
const observer = new MutationObserver(adjustFooterCenter);
observer.observe(document.body, { childList: true, subtree: true });
