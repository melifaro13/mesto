const popUpEdit = document.querySelector('.profile__edit');
const nameTitle = document.querySelector('.profile__name');
const jobTitle = document.querySelector('.profile__information');
const popUpClose = document.querySelector('.popup__closed');
const popUp = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__info_type_name');
const jobInput = document.querySelector('.popup__info_type_job');

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



