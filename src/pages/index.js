import {Card} from "../components/Card.js";
import {initialCards} from "../components/utils.js";
import FormValidator from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
    profileAddButton, profileEditButton,
    nameInput, profileForm,
    aboutInput, placeForm,
    validationObj
} from '../components/constants.js';
import '../pages/index.css'


const submitProfileForm = (data) => {
    const {popupName, popupAbout} = data;
    userInfo.setUserInfo(popupName, popupAbout)
    editProfilePopup.close();
}

const submitCardForm = (data) => {
    const card = createCard({
        name: data['popupTitle'],
        alt: data['popupTitle'],
        link: data['popupLink']
    });
    section.addItem(card)
    addCardPopup.close();
}

const createCard = (data) => {
    const card = new Card(data, '#elements-template', () => {
        imagePopup.open(data.name, data.link);
    });
    return card.generateCard();
};

const renderCard = (card) => {
    const cardElement = createCard(card);
    section.addItem(cardElement);
};

const section = new Section({items: initialCards, renderer: renderCard}, '.elements');
section.renderItems();

const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

const editProfilePopup = new PopupWithForm('.popup_type_profile', submitProfileForm);
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm('.popup_type_place', submitCardForm);
addCardPopup.setEventListeners();

const userInfo = new UserInfo({
    profileName: '.profile__name',
    profileAbout: '.profile__about'
});

const validatorEditProfile = new FormValidator(profileForm, validationObj);
validatorEditProfile.enableValidation();

const validatorEditPlace = new FormValidator(placeForm, validationObj);
validatorEditPlace.enableValidation();

profileAddButton.addEventListener('click', () => {
    addCardPopup.open();
    validatorEditPlace.resetValidation();
});

profileEditButton.addEventListener('click', () => {
    const {name, about} = userInfo.getUserInfo();
    nameInput.value = name;
    aboutInput.value = about;
    editProfilePopup.open();
    validatorEditProfile.resetValidation();
});



