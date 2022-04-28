const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const placePopup = document.querySelector('.place-popup');
const profilePopup = document.querySelector('.profile-popup');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_type_name');
const aboutInput = formElement.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
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
    popup.classList.add('popup_opened');
}

function popupClose(popup) {
    popup.classList.remove('popup_opened'); // не работает
}

function formSubmitHandler (event) { // работает
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupClose(profilePopup);
}

addButton.addEventListener('click',  () => { // работает
    popupOpen(placePopup);
});

editButton.addEventListener('click', () => { // работает
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    popupOpen(profilePopup);
});

formElement.addEventListener('submit', formSubmitHandler); // работает

initialCards.forEach((elements) => { // работает
    renderCards(elements);
});


