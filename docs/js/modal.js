const openModal=document.getElementById("openModal"),modalOverlay=document.getElementById("modalOverlay"),modalContent=modalOverlay.querySelector(".modal-content"),closeModal=document.getElementById("closeModal"),nameInput=modalContent.querySelector('.modal-input[type="text"]'),phoneInput=modalContent.querySelector('.modal-input[type="tel"]'),emailInput=modalContent.querySelector('.modal-input[type="email"]'),messageTextarea=modalContent.querySelector(".modal-input-textarea"),submitButton=modalContent.querySelector(".modal-button");function resetValidation(e){e.classList.remove("input-error"),e.classList.remove("placeholder-error"),e.placeholder="",e.style.color="",e.style.fontStyle="",e.style.lineHeight=""}function applyPlaceholderStyle(e){e.style.color="rgb(220, 126, 126)",e.style.fontStyle="italic",e.style.lineHeight="18px"}function resetValidation(e){e.classList.remove("input-error"),e.classList.remove("placeholder-error"),e.placeholder="",e.style.color="",e.style.fontStyle="",e.style.lineHeight=""}function applyPlaceholderStyle(e){e.style.color="rgb(220, 126, 126)",e.style.fontStyle="italic",e.style.lineHeight="18px"}openModal.addEventListener("click",(()=>{modalOverlay.classList.add("active"),modalContent.classList.add("active"),document.body.classList.add("modal-open"),nameInput.value="",phoneInput.value="",emailInput.value="",messageTextarea.value="",resetValidation(nameInput),resetValidation(phoneInput),resetValidation(emailInput)})),closeModal.addEventListener("click",(()=>{nameInput.value="",phoneInput.value="",emailInput.value="",messageTextarea.value="",resetValidation(nameInput),resetValidation(phoneInput),resetValidation(emailInput),modalOverlay.classList.remove("active"),modalContent.classList.remove("active"),document.body.classList.remove("modal-open")})),window.addEventListener("click",(e=>{e.target===modalOverlay&&(nameInput.value="",phoneInput.value="",emailInput.value="",messageTextarea.value="",resetValidation(nameInput),resetValidation(phoneInput),resetValidation(emailInput),modalOverlay.classList.remove("active"),modalContent.classList.remove("active"),document.body.classList.remove("modal-open"))})),submitButton.addEventListener("click",(e=>{e.preventDefault();let t=!0;""===nameInput.value.trim()?(t=!1,nameInput.classList.add("input-error"),nameInput.placeholder="Це поле обов'язково для заповнення",applyPlaceholderStyle(nameInput)):nameInput.value.trim().length<2?(t=!1,nameInput.classList.add("input-error"),nameInput.placeholder="Ім'я має бути більше 2 символів",applyPlaceholderStyle(nameInput)):(resetValidation(nameInput),nameInput.placeholder="");""===phoneInput.value.trim()?(t=!1,phoneInput.classList.add("input-error"),phoneInput.placeholder="Це поле обов'язково для заповнення",applyPlaceholderStyle(phoneInput)):/^\+?[0-9]{10,14}$/.test(phoneInput.value.trim())?(resetValidation(phoneInput),phoneInput.placeholder=""):(t=!1,phoneInput.classList.add("input-error"),phoneInput.placeholder="Невірний формат телефону",applyPlaceholderStyle(phoneInput));""===emailInput.value.trim()?(t=!1,emailInput.classList.add("input-error"),emailInput.placeholder="Це поле обов'язково для заповнення",applyPlaceholderStyle(emailInput)):/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value.trim())?(resetValidation(emailInput),emailInput.placeholder=""):(t=!1,emailInput.classList.add("input-error"),emailInput.placeholder="Невірний формат пошти",applyPlaceholderStyle(emailInput)),t&&setTimeout((()=>{alert("Форма відправлена!"),nameInput.value="",phoneInput.value="",emailInput.value="",messageTextarea.value="",resetValidation(nameInput),resetValidation(phoneInput),resetValidation(emailInput),modalOverlay.classList.remove("active"),modalContent.classList.remove("active"),document.body.classList.remove("modal-open")}),500)})),submitButton.addEventListener("click",(e=>{e.preventDefault();let t=!0;""===nameInput.value.trim()?(t=!1,nameInput.classList.add("input-error"),nameInput.placeholder="Це поле обов'язково для заповнення",applyPlaceholderStyle(nameInput),nameInput.value=""):nameInput.value.trim().length<2?(t=!1,nameInput.classList.add("input-error"),nameInput.placeholder="Ім'я має бути більше 2 символів",applyPlaceholderStyle(nameInput),nameInput.value=""):(resetValidation(nameInput),nameInput.placeholder="");""===phoneInput.value.trim()?(t=!1,phoneInput.classList.add("input-error"),phoneInput.placeholder="Це поле обов'язково для заповнення",applyPlaceholderStyle(phoneInput),phoneInput.value=""):/^\+?[0-9]{10,14}$/.test(phoneInput.value.trim())?(resetValidation(phoneInput),phoneInput.placeholder=""):(t=!1,phoneInput.classList.add("input-error"),phoneInput.placeholder="Невірний формат телефону",applyPlaceholderStyle(phoneInput),phoneInput.value="");""===emailInput.value.trim()?(t=!1,emailInput.classList.add("input-error"),emailInput.placeholder="Це поле обов'язково для заповнення",applyPlaceholderStyle(emailInput),emailInput.value=""):/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value.trim())?(resetValidation(emailInput),emailInput.placeholder=""):(t=!1,emailInput.classList.add("input-error"),emailInput.placeholder="Невірний формат пошти",applyPlaceholderStyle(emailInput),emailInput.value=""),t&&(alert("Форма відправлена!"),nameInput.value="",phoneInput.value="",emailInput.value="",messageTextarea.value="",resetValidation(nameInput),resetValidation(phoneInput),resetValidation(emailInput),modalOverlay.classList.remove("active"),modalContent.classList.remove("active"),document.body.classList.remove("modal-open"))})),nameInput.addEventListener("focus",(()=>{resetValidation(nameInput)})),phoneInput.addEventListener("focus",(()=>{resetValidation(phoneInput)})),emailInput.addEventListener("focus",(()=>{resetValidation(emailInput)}));