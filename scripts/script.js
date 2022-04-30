const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const placePopup = document.querySelector('.popup_type_place');
const popupCloseButton = document.querySelectorAll(".popup__close-button");
const profilePopup = document.querySelector('.popup_type_profile');
const profileFormElement = document.querySelector('.popup__container_type_profile');
const placeFormElement = document.querySelector('.popup__container_type_place');
const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const aboutInput = profileFormElement.querySelector('.popup__input_type_description');
const titleInput = placeFormElement.querySelector('.popup__input_type_title');
const linkInput = placeFormElement.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const placeForm = document.querySelector('.popup__form_type_place');
const imagePreviewPopup = document.querySelector('.popup_type_image');
const imagePopupSrc = document.querySelector('.popup__image');
const imagePopupCaption = document.querySelector('.popup__image-caption');
const clickClose = (event) => {
    popupClose(event.target.closest('.popup'));
};
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
    event.target.closest('.element').remove(); // работает
};
const likeCard = (event) => {
    event.target.classList.toggle('element__button-like_active'); // // работает
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
    imageCard.addEventListener("click", openImagePopup);
    return newElement;
};
const renderCards = (elements) => {
    elementsContainer.prepend(generateCards(elements));  // работает
};
function openImagePopup(event){
    imagePopupSrc.src = event.target.src;
    imagePopupCaption.textContent = event.target.closest('.element')
        .querySelector(".element__title").textContent;
    popupOpen(imagePreviewPopup);
}
function popupOpen(popup) {
    popup.classList.add('popup_opened'); // работает
}
function popupClose(popup) {
    popup.classList.remove('popup_opened'); // работает
}
function profileFormSubmitHandler (event) { // работает
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupClose(profilePopup);
}
function placeFormSubmitHandler (event) { // работает
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
addButton.addEventListener('click', () => {
    placeForm.reset();
    popupOpen(placePopup);
});
editButton.addEventListener('click', () => { // работает
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    popupOpen(profilePopup);
});
popupCloseButton.forEach( // работает
    (button) => {
        button.addEventListener("click", clickClose);
    }
);
profileFormElement.addEventListener('submit', profileFormSubmitHandler); // работает
placeFormElement.addEventListener('submit', placeFormSubmitHandler);
initialCards.forEach((elements) => { // работает
    renderCards(elements);
});


