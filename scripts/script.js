const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_name');
const aboutInput = formElement.querySelector('.popup__input_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

function popupOpenToggle() {
    popup.classList.toggle('popup__opened');
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupOpenToggle()
}

editButton.addEventListener('click', popupOpenToggle);
popupCloseButton.addEventListener('click', popupOpenToggle);
formElement.addEventListener('submit', formSubmitHandler);

`function popupOverlayClickHandler(evt){  // функция закрытия попапа при нажатии за его границы
    if (evt.target === evt.currentTarget) {
        popupOpenToggle();
    }
}

popup.addEventListener('click', popupOverlayClickHandler); `