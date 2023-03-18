import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageLink = this._popupSelector.querySelector('.popup__img');
        this._imageCaption = this._popupSelector.querySelector('.popup__caption');
    }

    open(link, name) {
        this._imageCaption.textContent = name;
        this._imageLink.src = link;
        this._imageLink.alt = name;
        super.open();
    }
}