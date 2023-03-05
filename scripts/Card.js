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
        this._likeButton = this._element.querySelector('.element__like');

        this._likeButton.addEventListener('click', () => {
            this._toggleLike();
        });
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._deleteElement();
        });
        this._element.querySelector('.element__img').addEventListener('click', () => {
            this._openImage(this._link, this._name);
        });
    }

    //метод - лайк
    _toggleLike() {
        this._likeButton.classList.toggle('element__like_active');
    }

    //метод - удалить карточку
    _deleteElement() {
        this._element.remove()
    }

    //добавляем данные в разметку
    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__img')

        this._setEventListeners();
    
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }

}
