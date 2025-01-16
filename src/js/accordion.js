document.addEventListener("DOMContentLoaded", () => {
    // Знаходимо всі заголовки акардеону
    const accordionHeaders = document.querySelectorAll(".content-box-text");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            // Отримуємо наступний список (вкладений)
            const accordionContent = header.nextElementSibling;

            // Якщо цей заголовок вже активний, прибираємо клас active
            if (header.classList.contains("active")) {
                header.classList.remove("active");
                accordionContent.classList.remove("active");

                // Скидаємо активні стани всередині закритого акордеону
                accordionContent.querySelectorAll(".content-box-accordion-text.active").forEach(activeItem => {
                    activeItem.classList.remove("active");
                });
                return; // Завершуємо функцію
            }

            // Закриваємо всі відкриті списки та прибираємо активні класи
            document.querySelectorAll(".content-box-accordion.active").forEach(openAccordion => {
                openAccordion.classList.remove("active");
                // Скидаємо активні стани всередині інших акордеонів
                openAccordion.querySelectorAll(".content-box-accordion-text.active").forEach(activeItem => {
                    activeItem.classList.remove("active");
                });
            });
            document.querySelectorAll(".content-box-text.active").forEach(activeHeader => {
                activeHeader.classList.remove("active");
            });

            // Додаємо активний клас для натиснутого заголовка та його контенту
            header.classList.add("active");
            accordionContent.classList.add("active");
        });
    });

    // Додаємо обробник подій для елементів списку
    const accordionItems = document.querySelectorAll(".content-box-accordion-text");

    accordionItems.forEach(item => {
        item.addEventListener("click", () => {
            // Перевіряємо, чи вже активний
            if (item.classList.contains("active")) {
                item.classList.remove("active"); // Прибираємо активний стан
                return; // Завершуємо функцію
            }

            // Закриваємо інші активні елементи (опціонально, якщо потрібно тільки один активний)
            document.querySelectorAll(".content-box-accordion-text.active").forEach(activeItem => {
                activeItem.classList.remove("active");
            });

            // Додаємо активний клас
            item.classList.add("active");
        });
    });
});
