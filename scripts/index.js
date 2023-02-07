//Карточки

const initialCards = [
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

//Постоянные редактирования профиля

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const profileCloseButton = popupEditProfile.querySelector('.popup__closed');
const popupEditButton = document.querySelector('.profile__edit-button');
const nameTitle = document.querySelector('.profile__name');
const jobTitle = document.querySelector('.profile__information');

// Форма для редактирования данных профиля

const formProfile = document.forms.editProfileForm;
const nameInput = formProfile.elements.name;
const jobInput = formProfile.elements.job;
const buttonSaveEditProfile = formProfile.querySelector('.form__save-button');

//Постоянные добавления карточек

const popupAddCard = document.querySelector('.popup_type_add-card');
const addCardCloseButton = popupAddCard.querySelector('.popup__closed');
const popupAddCardButton = document.querySelector('.profile__add-button');

// Форма для добавления карточек

const formElement = document.forms.addCardForm;
const placeInput = formElement.elements.place;
const linkInput = formElement.elements.link;
const buttonSaveAddElement = formElement.querySelector('.form__save-button');

//Постоянные просмотра карточек

const popupShowCard = document.querySelector('.popup_type_img');
const showCardCloseButton = popupShowCard.querySelector('.popup__closed');
const imgLink = document.querySelector('.popup__img');
const imgCaption = document.querySelector('.popup__caption');

//Постоянные template

const elementTemplate = document.querySelector('#element-template').content;

const elementsList = document.querySelector('.elements');

const popup = () => {
    return document.querySelector('.popup_opened'); // если просто задать переменную, то не работает!
}

//эта функция открывает popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    popup.addEventListener('mousedown', closePopupMouseClick);
}

//эта функция закрывает popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
    popup.removeEventListener('mousedown', closePopupMouseClick);
}

//эта функция для закрытия popUp с помощью клавиши 'Esc'
function closePopupEsc(evt) {
    if (evt.key === "Escape") {
        closePopup(popup());
    }
}

//эта функция для закрытия popUp с помощью клика мышкой вне модального окна
function closePopupMouseClick(evt) {
    if (evt.target == popup()) {
        closePopup(popup());
    }
}

//вешаем состояние кнопки
function disabledSaveButton(button) {
    button.setAttribute('disabled', true);
    button.classList.add('form__save-button_disabled');
}

//эта функция выводит данные Name и Job при открытии popup
function openProfilePopup() {
    nameInput.value = nameTitle.textContent;
    jobInput.value = jobTitle.textContent;
    openPopup(popupEditProfile);
    disabledSaveButton(buttonSaveEditProfile);
}

//эта функция сохраняет данные Name и Job при редактировании
function handleFormProfileSubmit (evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    jobTitle.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

//эта функция открывает модальное окно добавления картинки
function openElementPopup() {
    openPopup(popupAddCard);
    disabledSaveButton(buttonSaveAddElement);
}

// эта функция ставит лайк
function elementActiveLike (like) {
    like.classList.toggle('element__like_active');
}

// эта функция открывает картинку
function openImage(link, name){
    imgCaption.textContent = name;
    imgLink.src = link;
    imgLink.alt = name;
    openPopup(popupShowCard);
}

// эта функция создает элемент с картинкой
function createElement (link, name) {
    const elementContent = elementTemplate.querySelector('.element').cloneNode(true);
    const elementImg = elementContent.querySelector('.element__img');
    const elementDeleteButton = elementContent.querySelector('.element__delete');
    const elementTitle = elementContent.querySelector('.element__title');
    const elementLike = elementContent.querySelector('.element__like');
    elementImg.src = link;
    elementImg.alt = name;
    elementTitle.textContent = name;
    elementDeleteButton.addEventListener('click', () => elementContent.remove());
    elementLike.addEventListener('click', () => elementActiveLike(elementLike));
    elementImg.addEventListener('click', () => openImage(link, name));
    return elementContent;
}

//эта фуннкция добавляет новые элементы
function handleFormElementSubmit (evt) {
    evt.preventDefault();
    const newElement = createElement(linkInput.value, placeInput.value)
    elementsList.prepend(newElement);
    closePopup(popupAddCard);
    evt.target.reset();
}

//достаем картинки из массива
function addElements () {
    const elements = initialCards.map(function (item) {
        const element = createElement(item.link, item.name);
        return element;
    });
    elementsList.append(...elements);
}
addElements();

//слушатель открывает модальное окно редактирования профиля
popupEditButton.addEventListener('click', () => openProfilePopup(popupEditProfile));
//слушатель закрывает модальное окно редактирования профиля
profileCloseButton.addEventListener('click', () => closePopup(popupEditProfile));
//слушатель сохраняет вводимые данные в модальное окно
formProfile.addEventListener('submit', handleFormProfileSubmit);

//Добавление и удаление карточек

//слушатель открывает модальное окно добавления карточек
popupAddCardButton.addEventListener('click', () => openElementPopup(popupAddCard));
//слушатель закрывает модальное окно добавления карточек
addCardCloseButton.addEventListener('click', () => closePopup(popupAddCard));
//слушатель добавляет новый элемент
formElement.addEventListener('submit', handleFormElementSubmit);

//слушатель закрывает модальное окно картинки
showCardCloseButton.addEventListener('click', () => closePopup(popupShowCard));

