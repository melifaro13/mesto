
import {Card} from "./Card.js";
import {FormValidator} from './FormValidator.js';
import {initialCards, config} from './Const.js';

const popupAll = document.querySelectorAll('.popup');

//Постоянные редактирования профиля

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupEditButton = document.querySelector('.profile__edit-button');
const nameTitle = document.querySelector('.profile__name');
const jobTitle = document.querySelector('.profile__information');

// Форма для редактирования данных профиля

const profileForm = document.forms.editProfileForm;
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.job;

//Постоянные добавления карточек

const popupAddCard = document.querySelector('.popup_type_add-card');
const popupAddCardButton = document.querySelector('.profile__add-button');

// Форма для добавления карточек

const cardForm = document.forms.addCardForm;
const placeInput = cardForm.elements.place;
const linkInput = cardForm.elements.link;

//Постоянные просмотра карточек

const popupShowCard = document.querySelector('.popup_type_img');
const imgLink = document.querySelector('.popup__img');
const imgCaption = document.querySelector('.popup__caption');

//Постоянные template

const cardsList = document.querySelector('.elements');

const findActivePopup = () => {
    return document.querySelector('.popup_opened');
}

//эта функция открывает popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
}

//эта функция закрывает popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}

//эта функция для закрытия popUp с помощью клавиши 'Esc'
function closePopupEsc(evt) {
    if (evt.key === "Escape") {
        closePopup(findActivePopup());
    }
}

//закрываем все модальные окна по клику мышки вне окна и на крестик всех модалок
popupAll.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__closed')) {
            closePopup(popup)
        }
    });
});

//эта функция выводит данные Name и Job при открытии popup
function openProfileForm() {
    nameInput.value = nameTitle.textContent;
    jobInput.value = jobTitle.textContent;
    profileFormValidation.resetValidation();
    openPopup(popupEditProfile);
}

//эта функция сохраняет данные Name и Job при редактировании
function handleFormProfileSubmit (evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    jobTitle.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

//эта функция открывает модальное окно добавления картинки
function openAddElementForm() {
    openPopup(popupAddCard);
}

// эта функция открывает картинку
function openImage(link, name){
    imgCaption.textContent = name;
    imgLink.src = link;
    imgLink.alt = name;
    openPopup(popupShowCard);
}

//делаем новую карточку
function createElement(data, templateSelector, openImage) {
    const card = new Card(data, templateSelector, openImage);
    const cardElement = card.generateCard();
    return cardElement;
}

//эта фуннкция добавляет новые элементы
function handleFormElementSubmit(evt) {
    evt.preventDefault();
    const cardValue = {name: placeInput.value, link: linkInput.value};
    const cardElement = createElement(cardValue, '#element-template', openImage)
    cardsList.prepend(cardElement);
    closePopup(popupAddCard);
    evt.target.reset();
    cardFormValidation.resetValidation();
}

//проходим по всему массиву с карточками.
initialCards.forEach((item) => {
    const cardElement = createElement(item, '#element-template', openImage);
    cardsList.append(cardElement);
});

// //Делаем новые формы валидации
const profileFormValidation = new FormValidator(config, profileForm);
const cardFormValidation = new FormValidator(config, cardForm);

profileFormValidation.enableValidation();
cardFormValidation.enableValidation();

//слушатель открывает модальное окно редактирования профиля
popupEditButton.addEventListener('click', () =>
    openProfileForm(popupEditProfile));

//слушатель сохраняет вводимые данные в модальное окно
profileForm.addEventListener('submit', handleFormProfileSubmit);

// //слушатель открывает модальное окно добавления карточек
popupAddCardButton.addEventListener('click', () => {
    openAddElementForm(popupAddCard)
});

//слушатель добавляет новый элемент
cardForm.addEventListener('submit', handleFormElementSubmit);