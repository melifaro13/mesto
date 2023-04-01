export class Card { 
    constructor(data, templateSelector, openImage, userId, like, dislike, handleDeleteButtonClick) { 
        this._name = data.name; 
        this._link = data.link; 
        this._likes = data.likes;
        this._id = data._id;
        this._owner = data.owner._id;
        this._templateSelector = templateSelector;  
        this._openImage = openImage; 
        this._userId = userId;
        this._like = like;
        this._dislike = dislike;
        this._handleDeleteButtonClick = handleDeleteButtonClick;
    } 

    getCardId() {
      return this._id;
    }

    //вызываем метод, чтобы получить наш темплейт 
    _getTemplate() { 
        const elementContent = this._templateSelector.content.querySelector('.element').cloneNode(true); 
        return elementContent; 
    } 

    _hideDeleteBtn() {
        if (this._userId !== this._owner) {
          this._deleteButton.remove();
        }
    }

    handleLikeCard(data) {
        this._likes = data.likes;
        this._countLikeElement.textContent = this._likes.length;
        this._likeButton.classList.toggle('element__like_active');
      }
    
      _userLiked() {
        this._likes.forEach((elementId) => {
          if (elementId._id === this._userId) {
            this._likeButton.classList.add('element__like_active');
          } else {
            this._likeButton.classList.remove('element__like_active');
          }
        })
      }
    
    //вызываем метод, чтобы добавить слушатели 
    _setEventListeners() {  
        this._likeButton.addEventListener('click', () => { 
            this._toggleLike(); 
        }); 
        this._deleteButton.addEventListener('click', () => { 
            this._handleDeleteButtonClick(); 
        }); 
        this._cardImage.addEventListener('click', () => { 
            this._openImage(this._link, this._name); 
        });  
    } 

    //метод - лайк 
    _toggleLike() { 
        if (this._likeButton.classList.contains('element__like_active')) {
            this._dislike(this._id );
          } else {
            this._like(this._id );
        } 
    } 

    //метод - удалить карточку 
    deleteElement() { 
        this._element.remove() 
    } 

    //добавляем данные в разметку 
    generateCard() { 
        this._element = this._getTemplate();
        this._deleteButton = this._element.querySelector('.element__delete'); 
        this._likeButton = this._element.querySelector('.element__like');
        this._countLikeElement = this._element.querySelector('.element__like-counter');
        this._countLikeElement.textContent = this._likes.length;

        this._cardImage = this._element.querySelector('.element__img') 

        this._setEventListeners(); 
        this._hideDeleteBtn();
        this._userLiked();

        this._cardImage.src = this._link; 
        this._cardImage.alt = this._name; 
        this._element.querySelector('.element__title').textContent = this._name; 
        return this._element; 
    } 
} 