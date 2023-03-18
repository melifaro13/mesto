import './index.css';

import {Section} from '../components/Section.js';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {initialCards, config} from '../utils/Const.js';


import {
    cardsList,
    template,
    popupEditButton,
    popupAddCardButton,
    profileForm,
    nameInput,
    jobInput,
    cardForm
} from '../utils/Const.js';

// эта функция открывает картинку
const popupShowCard = new PopupWithImage('.popup_type_img');
popupShowCard.setEventListeners();

// делаем новую карточку
const createElement = (data) => {
    const card = new Card(data, template, (link, name) => {
        popupShowCard.open(link, name); 
    });
    const cardElement = card.generateCard();
    return cardElement;
}

// класс Section - отрисовка элементов на странице
const cards = new Section({ 
    items: initialCards,
    renderer: createElement
}, cardsList);

cards.renderItems();

const userInfo = new UserInfo({ nameSelector: '.profile__name', infoSelector: '.profile__information' });

//эта функция выводит данные Name и Job при открытии popup
const popupProfileForm = new PopupWithForm('.popup_type_edit-profile', (value) => 
    userInfo.setUserInfo(value));

popupProfileForm.setEventListeners();


//делаем форму добавления карточек
const popupCardForm = new PopupWithForm('.popup_type_add-card', (item) => {
    const value = {name: item.place, link: item.link};
    cards.addItem(createElement(value, template));
    cardFormValidation.disableSubmitButton();
    popupCardForm.close();
});

popupCardForm.setEventListeners();

//слушатель открывает попап изменения данных пользователя
popupEditButton.addEventListener('click', () => {
    popupProfileForm.open();
    profileFormValidation.disableSubmitButton();
    const {name, info} = userInfo.getUserInfo();
    nameInput.value = name;
    jobInput.value = info;
});

//слушатель открывает попап добавления карточек
popupAddCardButton.addEventListener('click', () => {
    popupCardForm.open();
    cardFormValidation.resetValidation();
});

// //Делаем новые формы валидации
const profileFormValidation = new FormValidator(config, profileForm);
const cardFormValidation = new FormValidator(config, cardForm);

profileFormValidation.enableValidation();
cardFormValidation.enableValidation();