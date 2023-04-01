  //Константы

  //Постоянные template
  export const cardsList = document.querySelector('.elements');
  export const template = document.querySelector('#element-template');

  //Кнопки
  export const popupEditButton = document.querySelector('.profile__edit-button');
  export const popupAddCardButton = document.querySelector('.profile__add-button');
  export const popupEditAvatarButton = document.querySelector('.profile__avatar-button');

  //Форма профиля
  export const profileForm = document.forms.editProfileForm;
  export const nameInput = profileForm.elements.name;
  export const jobInput = profileForm.elements.job;

  //Форма карточек
  export const cardForm = document.forms.addCardForm;

  //Форма добавления аватара
  export const avatarForm = document.forms.editAvatarForm;
  
  //Объект

export const config = {
    formSelector: '.form',
    inputSelector: '.form__info',
    submitButtonSelector: '.form__save-button',
    inactiveButtonClass: 'form__save-button_disabled',
    inputErrorClass: 'form__info_type_error',
    errorClass: '-error'
  }

