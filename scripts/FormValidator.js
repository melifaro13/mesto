export class FormValidator {
    constructor(config, formElement) {
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._errorClass = config.errorClass;

      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    _showInfoError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}${this._errorClass}`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideInfoError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}${this._errorClass}`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    }

    _checkInfoValidity(inputElement) {
        if (!inputElement.validity.valid) {
        this._showInfoError(inputElement);
        } else {
         this._hideInfoError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
          });
    }

    _disableSubmitButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    }

    _enableSubmitButton() {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
          this._enableSubmitButton()
        }
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInfoValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
          this._hideInfoError(inputElement);
        });
      }

    enableValidation() {
        this._setEventListeners();
    }
}