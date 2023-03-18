import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popupSelector.querySelector('.form');
        this._formInputs = this._form.querySelectorAll('.form__info');
    }

    _getInputValues() {
        this._values = {};
        this._formInputs.forEach((input) => {
            this._values[input.name] = input.value;
        });
        return this._values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._submitForm(this._getInputValues());
            this.close();
          });
    }

    close() {
        super.close();
        this._form.reset();
    }

}