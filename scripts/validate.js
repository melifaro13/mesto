//Объект

const validationElements = {
  formSelector: '.form',
  inputSelector: '.form__info',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__info_type_error',
  errorClass: '-info-error'
}

//Показываем информацию об ошибке

const showInfoError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}${errorClass}`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
};

//Скрываем информацию об ошибке

const hideInfoError = (formElement, inputElement, inputErrorClass, errorClass) => {
   const errorElement = formElement.querySelector(`.${inputElement.id}${errorClass}`);
   inputElement.classList.remove(inputErrorClass);
   errorElement.textContent = errorMessage = '';
};

//Проверяем на валидность

const checkInfoValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
   if (!inputElement.validity.valid) {
       showInfoError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
   } else {
    hideInfoError(formElement, inputElement, inputErrorClass, errorClass);
   }
};

//добавляем слушатель всем полям формы

const setEventListeners = (formElement, inputList, buttonElement, inactiveButtonClass, inputErrorClass, errorClass) => {
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInfoValidity (formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
};

//true - не валидно, false - валидно

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//Перключаем кнопки (не забываем про disabled)

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
}

//находим и перебираем всеееее

const enableValidation = (object) => {
    const formList = Array.from(document.querySelectorAll(object.formSelector));
    const inputErrorClass = object.inputErrorClass;
    const errorClass = object.errorClass;
    const submitButtonSelector = object.submitButtonSelector;
    const inactiveButtonClass = object.inactiveButtonClass;
    formList.forEach((formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
        formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
        const buttonElement = formElement.querySelector(submitButtonSelector);
        setEventListeners(formElement, inputList, buttonElement, inactiveButtonClass, inputErrorClass, errorClass);
    });
};

// вызываем функцию и все должно работать

enableValidation(validationElements);


