const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const likeButton = document.querySelector('.element__like-button');
const placePopup = document.querySelector('.place-popup');
const profilePopup = document.querySelector('.profile-popup');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_type_name');
const aboutInput = formElement.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');



`function popupOpen() {
    popup.classList.add('popup_opened');
}`

function popupClose() {
    popup.classList.remove('popup_opened');
}
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupClose();
}

addButton.addEventListener('click',  () => {
    placePopup.classList.add('popup_opened');
});
editButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    profilePopup.classList.add('popup_opened');
});
popupCloseButton.addEventListener('click', popupClose);

formElement.addEventListener('submit', formSubmitHandler);


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

const cardsTemplate = document.querySelector("#cards-template").content.querySelector(".element");
const cardsContainer = document.querySelector(".elements");
const deleteCard = (event) => {
    event.target.closest('.element').remove();
};
const likeCard = (event) => {
    event.target.closest('.element__button-like').classList.toggle('element__button-like_active');
};

const generateCards = (cards) => {
    const newCard = cardsTemplate.cloneNode(true);

    const titleCard = newCard.querySelector('.element__title');
    titleCard.textContent = cards.name;

    const imageCard = newCard.querySelector('.element__image');
    imageCard.src = cards.link;

    const deleteButton = newCard.querySelector('.element__button-delete');
    deleteButton.addEventListener('click', deleteCard);

    const likeButton = newCard.querySelector('.element__button-like');
    likeButton.addEventListener('click', likeCard)

    return newCard;
};

const renderCards = (cards) => {
    cardsContainer.prepend(generateCards(cards));
};

initialCards.forEach((cards) => {
    renderCards(cards);
});

