import './index.css';

import {Section} from '../components/Section.js';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';
import {config} from '../utils/const.js';

//Постоянные template
const cardsList = document.querySelector('.elements');
const template = document.querySelector('#element-template');

//Кнопки
const popupEditButton = document.querySelector('.profile__edit-button');
const popupAddCardButton = document.querySelector('.profile__add-button');
const popupEditAvatarButton = document.querySelector('.profile__avatar-button');

//Форма профиля
const profileForm = document.forms.editProfileForm;
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.job;

//Форма карточек
const cardForm = document.forms.addCardForm;

//Форма добавления аватара
const avatarForm = document.forms.editAvatarForm;

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-63",
    headers: {
      authorization: "3b6ba49e-c6c2-4141-aac3-86d97f08d7ae",
      "Content-Type": "application/json",
    },
  });

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([info, cards]) => {
    const { name, about, avatar, _id} = info;
    userInfo.setUserId(_id);
    userInfo.setUserInfo({ name, about });
    userInfo.setUserAvatar({ avatar });
    initialCards.setItems(cards);
    initialCards.renderItems();
})
.catch((err) => {
    console.log(`Ошибка: ${err}`);
})

const userInfo = new UserInfo({ nameSelector: '.profile__name', infoSelector: '.profile__information', avatarSelector: '.profile__avatar' });

const popupDeleteConfirmation = new PopupWithConfirmation('.popup_type_delete-element');
popupDeleteConfirmation.setEventListeners();

// делаем новую карточку 

const createElement = (data) => { 
    const card = new Card(data, template, (link, name) => { 
        popupShowCard.open(link, name);  
    },
    userInfo.getUserId(),
    (cardId) => {
        api.putLike(cardId)
          .then((data) => {
            card.handleLikeCard(data);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
    },
      (cardId) => {
        api.deleteLike(cardId)
          .then((data) => {
            card.handleLikeCard(data);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
    },
    () => {
        popupDeleteConfirmation.open();
        popupDeleteConfirmation.setSubmitCallback(() => {
            const id = card.getCardId();
            api.deleteCard(id)
            .then(() => {
                popupDeleteConfirmation.close();
                card.deleteElement()
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });    
        })    
    }); 
    const cardElement = card.generateCard(); 
    return cardElement; 
} 

// класс Section - отрисовка элементов на странице
const initialCards = new Section({ 
    items: [],
    renderer: createElement
}, cardsList);

// эта функция открывает картинку
const popupShowCard = new PopupWithImage('.popup_type_img');
popupShowCard.setEventListeners();

// //эта функция выводит данные Name и Job при открытии popup
const popupProfileForm = new PopupWithForm('.popup_type_edit-profile', (data) => {
    popupCardForm.load(true);
    api.editProfile(data)
    .then((data) => {
        userInfo.setUserInfo(data)
        popupProfileForm.close()
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    .finally(() => popupProfileForm.load(false));
});

popupProfileForm.setEventListeners();

//делаем форму добавления карточек
const popupCardForm = new PopupWithForm('.popup_type_add-card', 
    ({ place: name, link: link }) => {
    popupCardForm.load(true);
    api.addNewCard({ name, link })
    .then((data) => {
        initialCards.addNewItem(createElement(data))
        popupCardForm.close();
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    .finally(() => popupCardForm.load(false));
});

popupCardForm.setEventListeners();

//форма добавления аватарки
const popupAvatarForm = new PopupWithForm('.popup_type_edit-avatar', (data) => {
    popupCardForm.load(true);
    api.editProfileAvatar(data)
    .then((data) => {
        userInfo.setUserAvatar({ avatar: data.avatar})
        popupAvatarForm.close();
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    .finally(() => popupAvatarForm.load(false));
});

popupAvatarForm.setEventListeners();

function handleEditProfileClick() {
    popupProfileForm.open();
    profileFormValidation.resetValidation();
    profileFormValidation.disableSubmitButton();
    const {name, job} = userInfo.getUserInfo();
    nameInput.value = name;
    jobInput.value = job; 
}

popupEditButton.addEventListener('click', handleEditProfileClick);

function handleAddCardClick() {
    popupCardForm.open();
    cardFormValidation.resetValidation();
}

popupAddCardButton.addEventListener('click', handleAddCardClick);

function handleEditAvatarClick() {
    popupAvatarForm.open();
    avatarFormValidation.resetValidation();
    avatarFormValidation.disableSubmitButton();
}

popupEditAvatarButton.addEventListener('click', handleEditAvatarClick);

// //Делаем новые формы валидации
const profileFormValidation = new FormValidator(config, profileForm);
const cardFormValidation = new FormValidator(config, cardForm);
const avatarFormValidation = new FormValidator(config, avatarForm);

profileFormValidation.enableValidation();
cardFormValidation.enableValidation();
avatarFormValidation.enableValidation();
