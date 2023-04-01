import { Popup } from './Popup.js';

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._deleteButton = this._popupSelector.querySelector('.form');
    }

    setSubmitCallback(handleSubmit) {
        this._handlerSubmitForm = handleSubmit;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._deleteButton.addEventListener('submit', (event) => {
          event.preventDefault();
          this._handlerSubmitForm();
        });
    }
}