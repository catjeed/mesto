export const profileAddButton = document.querySelector('.profile__add-button');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileFormElement = document.querySelector('.popup__container_type_profile');
export const nameInput = profileFormElement.querySelector('.popup__input_type_name');
export const aboutInput = profileFormElement.querySelector('.popup__input_type_description');
export const placeForm = document.querySelector('.popup__form_type_place');
export const profileForm = document.querySelector('.popup__form_type_profile');

export const validationObj = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});