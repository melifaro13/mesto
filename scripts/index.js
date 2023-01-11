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
}
popUpEdit.addEventListener('click', openPopUp);

function closePopUp() {
    popUp.classList.remove('popup_opened');
}
popUpClose.addEventListener('click', closePopUp);

function infoPopUp() {
    nameInput.value = nameTitle.textContent;
    jobInput.value = jobTitle.textContent;
    openPopUp();
}
popUpEdit.addEventListener('click', infoPopUp);

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    jobTitle.textContent = jobInput.value;
    closePopUp();
}
formElement.addEventListener('submit', handleFormSubmit);



