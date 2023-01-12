let popUpEdit = document.querySelector('.profile__edit');
let nameTitle = document.querySelector('.profile__name');
let jobTitle = document.querySelector('.profile__information');
let popUpClose = document.querySelector('.popup__closed');
let popUp = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__info_type_name');
let jobInput = document.querySelector('.popup__info_type_job');

function openPopUp() {
    popUp.classList.add('popup_opened');
} //эта функция открывает popUp

function closePopUp() {
    popUp.classList.remove('popup_opened');
} //эта функция закрывает popUp

function infoPopUp() {
    nameInput.value = nameTitle.textContent;
    jobInput.value = jobTitle.textContent;
    openPopUp();
} //эта функция выводит данные Name и Job при открытии popUp

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    jobTitle.textContent = jobInput.value;
    closePopUp();
} //эта функция сохраняет данные Name и Job при редактировании

popUpClose.addEventListener('click', closePopUp);
popUpEdit.addEventListener('click', infoPopUp);
formElement.addEventListener('submit', handleFormSubmit);



