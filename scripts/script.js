const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_type_name');
const aboutInput = formElement.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

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

const cardsContainer = document.querySelector('.elements');
const renderCard = (cards) => {
    cardsContainer.insertAdjacentHTML(
        "beforeend",
        `
                  <div class="element">
                    <img src="${cards.link}" alt="" class="element__image">
                    <h2 class="element__title">${cards.name}</h2>
                    <button class="element__button element__button-like" type="button"></button>
                    <button class="element__button element__button-delete" type="button"></button>
                  </div>
        `
    )
}

initialCards.forEach((cards) => {
    renderCard(cards);
})

function popupOpenToggle() {
    popup.classList.toggle('popup_opened');
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
addButton.addEventListener('click', popupOpenToggle);

`function popupOverlayClickHandler(evt){  // функция закрытия попапа при нажатии за его границы
    if (evt.target === evt.currentTarget) {
        popupOpenToggle();
    }
}

popup.addEventListener('click', popupOverlayClickHandler); `