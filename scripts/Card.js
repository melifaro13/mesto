export class Card {
    constructor(data, templateSelector, openImage) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openImage = openImage;
    }

    //вызываем метод, чтобы получить наш темплейт
    _getTemplate() {
        const elementContent = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        return elementContent;
    }

    //вызываем метод, чтобы добавить слушатели
    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._buttonToggleLike();
        });
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._buttonDeleteElement();
        });
        this._element.querySelector('.element__img').addEventListener('click', () => {
            this._openImage(this._link, this._name);
        });
    }

    //метод - лайк
    _buttonToggleLike() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }

    //метод - удалить карточку
    _buttonDeleteElement() {
        this._element.remove()
    }

    //добавляем данные в разметку
    generateCard() {
        this._element = this._getTemplate();

        this._setEventListeners();
    
        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__img').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }

}
