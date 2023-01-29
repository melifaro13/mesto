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
const popupCloseProfile = popupEditProfile.querySelector('.popup__closed');
const popupEdit = document.querySelector('.profile__edit-button');
const nameTitle = document.querySelector('.profile__name');
const jobTitle = document.querySelector('.profile__information');
const formProfile = popupEditProfile.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__info_type_name');
const jobInput = document.querySelector('.popup__info_type_job');

//Постоянные добавления карточек

const popupAddCard = document.querySelector('.popup_type_add-card');
const popupCloseAddCard = popupAddCard.querySelector('.popup__closed');
const popupAdd = document.querySelector('.profile__add-button');
const formElement = popupAddCard.querySelector('.popup__form');
const placeInput = document.querySelector('.popup__info_type_place');
const linkInput = document.querySelector('.popup__info_type_link');

//Постоянные просмотра карточек

const popupShowCard = document.querySelector('.popup_type_img');
const popupCloseShowCard = popupShowCard.querySelector('.popup__closed');
const imgLink = document.querySelector('.popup__img');
const imgCaption = document.querySelector('.popup__caption');

//Постоянные template

const elementTemplate = document.querySelector('#element-template').content;

const elementsList = document.querySelector('.elements');

//эта функция открывает popup
function openPopUp(popup) {
    popup.classList.add('popup_opened');
}

//эта функция закрывает popup
function closePopUp(popup) {
    popup.classList.remove('popup_opened');
}


//эта функция выводит данные Name и Job при открытии popup
function infoPopUp() {
    nameInput.value = nameTitle.textContent;
    jobInput.value = jobTitle.textContent;
    openPopUp(popupEditProfile);
}

//эта функция сохраняет данные Name и Job при редактировании
function handleFormProfileSubmit (evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    jobTitle.textContent = jobInput.value;
    closePopUp(popupEditProfile);
}

// эта функция открывает картинку
function openImage(link, name){
    imgCaption.textContent = name;
    imgLink.src = link;
    imgLink.alt = name;
    openPopUp(popupShowCard);
}

// эта функция создает элемент с картинкой
function createElement (link, name) {
    const elementContent = elementTemplate.querySelector('.element').cloneNode(true);
    const elementImg = elementContent.querySelector('.element__img');
    const elementDelete = elementContent.querySelector('.element__delete');
    const elementTitle = elementContent.querySelector('.element__title');
    const elementLike = elementContent.querySelector('.element__like');
    elementImg.src = link;
    elementImg.alt = name;
    elementTitle.textContent = name;
    elementDelete.addEventListener('click', () => elementContent.remove());
    elementLike.addEventListener('click', () => {
      elementLike.classList.toggle('element__like_active');
    });
    elementImg.addEventListener('click', () => openImage(link, name));
    return elementContent;
}

//эта фуннкция добавляет новые элементы
function handleFormElementSubmit (evt) {
    evt.preventDefault();
    const newElement = createElement(linkInput.value, placeInput.value)
    elementsList.prepend(newElement);
    closePopUp(popupAddCard);
    evt.target.reset();
}

//достаем картинки из массива
function addElement () {
    const elements = initialCards.map(function (item) {
        const element = createElement(item.link, item.name);
        return element;
    });
    elementsList.append(...elements);
}
addElement();

//слушатель открывает модальное окно редактирования профиля
popupEdit.addEventListener('click', () => infoPopUp(popupEditProfile));
//слушатель закрывает модальное окно редактирования профиля
popupCloseProfile.addEventListener('click', () => closePopUp(popupEditProfile));
//слушатель сохраняет вводимые данные в модальное окно
formProfile.addEventListener('submit', handleFormProfileSubmit);

//Добавление и удаление карточек

//слушатель открывает модальное окно добавления карточек
popupAdd.addEventListener('click', () => openPopUp(popupAddCard));
//слушатель закрывает модальное окно добавления карточек
popupCloseAddCard.addEventListener('click', () => closePopUp(popupAddCard));
//слушатель добавляет новый элемент
formElement.addEventListener('submit', handleFormElementSubmit);

//слушатель закрывает модальное окно картинки
popupCloseShowCard.addEventListener('click', () => closePopUp(popupShowCard));


//Эксперименты

//эта функция для закрытия popUp с помощью клавиши 'Esc'
function closePopUpEsc(e) {
    if (e.key === "Escape") {
        closePopUp(popupEditProfile);
    }
}

document.addEventListener('keydown', closePopUpEsc); //этот слушатель закрывает popUp, при нажатии на кнопку 'Esc'

