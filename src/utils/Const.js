//Карточки

export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  //Константы

  //Постоянные template
  export const cardsList = document.querySelector('.elements');
  export const template = document.querySelector('#element-template');

  //Кнопки
  export const popupEditButton = document.querySelector('.profile__edit-button');
  export const popupAddCardButton = document.querySelector('.profile__add-button');

  //Форма профиля
  export const profileForm = document.forms.editProfileForm;
  export const nameInput = profileForm.elements.name;
  export const jobInput = profileForm.elements.job;

  //Форма карточек
  export const cardForm = document.forms.addCardForm;
  
  //Объект

export const config = {
    formSelector: '.form',
    inputSelector: '.form__info',
    submitButtonSelector: '.form__save-button',
    inactiveButtonClass: 'form__save-button_disabled',
    inputErrorClass: 'form__info_type_error',
    errorClass: '-error'
  }

