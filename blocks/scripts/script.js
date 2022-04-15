const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');


function popupOpenToggle() {
    popup.classList.toggle('popup__opened');
}

editButton.addEventListener('click', popupOpenToggle);
popupCloseButton.addEventListener('click', popupOpenToggle);

function popupOverlayClickHandler(evt){
    if (evt.target === evt.currentTarget) {
        popupOpenToggle();
    }
}

popup.addEventListener('click', popupOverlayClickHandler);


const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__name');
const aboutInput = formElement.querySelector('.popup__about');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile_about');

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

