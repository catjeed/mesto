const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelectorAll('.popup__close-button');
const placePopup = document.querySelector('.place-popup');
const profilePopup = document.querySelector('.profile-popup');
const profileFormElement = document.querySelector('.popup__container_type_profile');
const placeFormElement = document.querySelector('.popup__container_type_place');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const aboutInput = profileFormElement.querySelector('.popup__input_type_description');
const titleInput = placeFormElement.querySelector('.popup__input_type_title');
const linkInput = placeFormElement.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const placeForm = document.querySelector('.popup__form_type_place');
const profileForm = document.querySelector('.popup__form_type_profile');
const initialCards = [
    {
        name: 'Архыз',
        link: '../images/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: '../images/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: '../images/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: '../images/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: '../images/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: '../images/baikal.jpg'
    }
];
const elementsTemplate = document.querySelector("#elements-template").content.querySelector(".element"); // работает
const elementsContainer = document.querySelector(".elements"); // работает
const deleteCard = (event) => {
    event.target.closest('.element').remove(); // не работает на новой карточке
};
const likeCard = (event) => {
    event.target.classList.toggle('element__button-like_active'); // не работает на новой карточке
};
const generateCards = (elements) => {  // работает
    const newElement = elementsTemplate.cloneNode(true);
    const titleElement = newElement.querySelector('.element__title');
    titleElement.textContent = elements.name;
    const imageCard = newElement.querySelector('.element__image');
    imageCard.src = elements.link;
    const deleteButton = newElement.querySelector('.element__button-delete');
    deleteButton.addEventListener('click', deleteCard);
    const likeButton = newElement.querySelector('.element__button-like');
    likeButton.addEventListener('click', likeCard);
    return newElement;
};
const renderCards = (elements) => {
    elementsContainer.prepend(generateCards(elements));  // работает
};



function popupOpen(popup) {
    popup.classList.add('popup_opened'); // работает
}
function popupClose(popup) {
    popup.classList.remove('popup_opened'); // работает, но не на крестик
}
function profileFormSubmitHandler (event) { // работает
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupClose(profilePopup);
}
function placeFormSubmitHandler (event) {
    event.preventDefault();
    const newCard = generateCards(
        {
            name: titleInput.value,
            link: linkInput.value
        }
    );
    elementsContainer.prepend(newCard);
        popupClose(placePopup);
}

addButton.addEventListener('click',  function () {
    placeForm.reset();
    popupOpen(placePopup);
});
editButton.addEventListener('click', () => { // работает
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    popupOpen(profilePopup);
});
profileFormElement.addEventListener('submit', profileFormSubmitHandler); // работает, но только на основном попапе
placeFormElement.addEventListener('submit', placeFormSubmitHandler);
initialCards.forEach((elements) => { // работает
    renderCards(elements);
});
popupCloseButton.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => popupClose(popup));
});



