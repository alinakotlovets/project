const openModal = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = modalOverlay.querySelector('.modal-content');
const closeModal = document.getElementById('closeModal');

const nameInput = modalContent.querySelector('.modal-input[type="text"]');
const phoneInput = modalContent.querySelector('.modal-input[type="tel"]');
const emailInput = modalContent.querySelector('.modal-input[type="email"]');
const messageTextarea = modalContent.querySelector('.modal-input-textarea');
const submitButton = modalContent.querySelector('.modal-button');

openModal.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    modalContent.classList.add('active');
    document.body.classList.add('modal-open');

    // Очищаємо всі поля при відкритті форми
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    messageTextarea.value = '';

    // Очищаємо стилі помилок
    resetValidation(nameInput);
    resetValidation(phoneInput);
    resetValidation(emailInput);
});

closeModal.addEventListener('click', () => {
    // Очищаємо всі поля при закритті форми
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    messageTextarea.value = '';

    // Очищаємо стилі помилок
    resetValidation(nameInput);
    resetValidation(phoneInput);
    resetValidation(emailInput);

    modalOverlay.classList.remove('active');
    modalContent.classList.remove('active');
    document.body.classList.remove('modal-open');
});

window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        // Очищаємо всі поля при закритті форми через клік поза модальним вікном
        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        messageTextarea.value = '';

        // Очищаємо стилі помилок
        resetValidation(nameInput);
        resetValidation(phoneInput);
        resetValidation(emailInput);

        modalOverlay.classList.remove('active');
        modalContent.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
});

// Валідація перед відправкою
submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Скасовуємо відправку форми

    let isValid = true;

    // Перевірка поля ім'я
    if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.classList.add('input-error');
        nameInput.placeholder = 'Це поле обов\'язково для заповнення';
        applyPlaceholderStyle(nameInput); // Застосовуємо стилі для placeholder
    } else if (nameInput.value.trim().length < 2) {
        isValid = false;
        nameInput.classList.add('input-error');
        nameInput.placeholder = 'Ім\'я має бути більше 2 символів';
        applyPlaceholderStyle(nameInput); // Застосовуємо стилі для placeholder
    } else {
        resetValidation(nameInput);  // Очищаємо обводку після успішної валідації
        nameInput.placeholder = '';  // Очищаємо placeholder
    }

    // Перевірка номера телефону
    const phonePattern = /^\+?[0-9]{10,14}$/;
    if (phoneInput.value.trim() === '') {
        isValid = false;
        phoneInput.classList.add('input-error');
        phoneInput.placeholder = 'Це поле обов\'язково для заповнення';
        applyPlaceholderStyle(phoneInput); // Застосовуємо стилі для placeholder
    } else if (!phonePattern.test(phoneInput.value.trim())) {
        isValid = false;
        phoneInput.classList.add('input-error');
        phoneInput.placeholder = 'Невірний формат телефону';
        applyPlaceholderStyle(phoneInput); // Застосовуємо стилі для placeholder
    } else {
        resetValidation(phoneInput);  // Очищаємо обводку після успішної валідації
        phoneInput.placeholder = '';  // Очищаємо placeholder
    }

    // Перевірка електронної пошти
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.trim() === '') {
        isValid = false;
        emailInput.classList.add('input-error');
        emailInput.placeholder = 'Це поле обов\'язково для заповнення';
        applyPlaceholderStyle(emailInput); // Застосовуємо стилі для placeholder
    } else if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        emailInput.classList.add('input-error');
        emailInput.placeholder = 'Невірний формат пошти';
        applyPlaceholderStyle(emailInput); // Застосовуємо стилі для placeholder
    } else {
        resetValidation(emailInput);  // Очищаємо обводку після успішної валідації
        emailInput.placeholder = '';  // Очищаємо placeholder
    }

    // Якщо все правильно, можна відправити форму
    if (isValid) {
        // Додаємо анімацію успішної відправки форми
        setTimeout(() => {
            alert('Форма відправлена!');
            // Очищаємо поля після відправки форми
            nameInput.value = '';
            phoneInput.value = '';
            emailInput.value = '';
            messageTextarea.value = '';

            // Очищаємо стилі помилок після відправки
            resetValidation(nameInput);
            resetValidation(phoneInput);
            resetValidation(emailInput);

            modalOverlay.classList.remove('active');
            modalContent.classList.remove('active');
            document.body.classList.remove('modal-open');
        }, 500); // Затримка перед очищенням
    }
});

// Функція для скидання валідаційних стилів
function resetValidation(input) {
    input.classList.remove('input-error');
    input.classList.remove('placeholder-error'); // Скидаємо клас для стилізації placeholder
    input.placeholder = '';
    input.style.color = ''; // Скидаємо колір для placeholder
    input.style.fontStyle = ''; // Скидаємо стиль для placeholder
    input.style.lineHeight = ''; // Скидаємо line-height для placeholder
}

// Функція для застосування стилів до placeholder
function applyPlaceholderStyle(input) {
    input.style.color = 'rgb(220, 126, 126)';
    input.style.fontStyle = 'italic';
    input.style.lineHeight = '18px';
}




// Валідація перед відправкою
submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Скасовуємо відправку форми

    let isValid = true;

    // Перевірка поля ім'я
    if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.classList.add('input-error');
        nameInput.placeholder = 'Це поле обов\'язково для заповнення';
        applyPlaceholderStyle(nameInput); // Застосовуємо стилі для placeholder
        nameInput.value = '';  // Очищаємо введений текст
    } else if (nameInput.value.trim().length < 2) {
        isValid = false;
        nameInput.classList.add('input-error');
        nameInput.placeholder = 'Ім\'я має бути більше 2 символів';
        applyPlaceholderStyle(nameInput); // Застосовуємо стилі для placeholder
        nameInput.value = '';  // Очищаємо введений текст
    } else {
        resetValidation(nameInput);  // Очищаємо обводку після успішної валідації
        nameInput.placeholder = '';  // Очищаємо placeholder
    }

    // Перевірка номера телефону
    const phonePattern = /^\+?[0-9]{10,14}$/;
    if (phoneInput.value.trim() === '') {
        isValid = false;
        phoneInput.classList.add('input-error');
        phoneInput.placeholder = 'Це поле обов\'язково для заповнення';
        applyPlaceholderStyle(phoneInput); // Застосовуємо стилі для placeholder
        phoneInput.value = '';  // Очищаємо введений текст
    } else if (!phonePattern.test(phoneInput.value.trim())) {
        isValid = false;
        phoneInput.classList.add('input-error');
        phoneInput.placeholder = 'Невірний формат телефону';
        applyPlaceholderStyle(phoneInput); // Застосовуємо стилі для placeholder
        phoneInput.value = '';  // Очищаємо введений текст
    } else {
        resetValidation(phoneInput);  // Очищаємо обводку після успішної валідації
        phoneInput.placeholder = '';  // Очищаємо placeholder
    }

    // Перевірка електронної пошти
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value.trim() === '') {
        isValid = false;
        emailInput.classList.add('input-error');
        emailInput.placeholder = 'Це поле обов\'язково для заповнення';
        applyPlaceholderStyle(emailInput); // Застосовуємо стилі для placeholder
        emailInput.value = '';  // Очищаємо введений текст
    } else if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        emailInput.classList.add('input-error');
        emailInput.placeholder = 'Невірний формат пошти';
        applyPlaceholderStyle(emailInput); // Застосовуємо стилі для placeholder
        emailInput.value = '';  // Очищаємо введений текст
    } else {
        resetValidation(emailInput);  // Очищаємо обводку після успішної валідації
        emailInput.placeholder = '';  // Очищаємо placeholder
    }

    // Якщо все правильно, можна відправити форму
    if (isValid) {
        alert('Форма відправлена!');

        // Очищаємо поля після відправки форми
        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        messageTextarea.value = '';

        // Очищаємо стилі помилок
        resetValidation(nameInput);
        resetValidation(phoneInput);
        resetValidation(emailInput);

        modalOverlay.classList.remove('active');
        modalContent.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
});

// Функція для скидання валідаційних стилів
function resetValidation(input) {
    input.classList.remove('input-error');
    input.classList.remove('placeholder-error'); // Скидаємо клас для стилізації placeholder
    input.placeholder = '';
    input.style.color = ''; // Скидаємо колір для placeholder
    input.style.fontStyle = ''; // Скидаємо стиль для placeholder
    input.style.lineHeight = ''; // Скидаємо line-height для placeholder
}

// Функція для застосування стилів до placeholder
function applyPlaceholderStyle(input) {
    input.style.color = 'rgb(220, 126, 126)';
    input.style.fontStyle = 'italic';
    input.style.lineHeight = '18px';
}

// Подія на фокус для скидання стилю placeholder, коли користувач натискає на поле
nameInput.addEventListener('focus', () => {
    resetValidation(nameInput);
});

phoneInput.addEventListener('focus', () => {
    resetValidation(phoneInput);
});

emailInput.addEventListener('focus', () => {
    resetValidation(emailInput);
});
