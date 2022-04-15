const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button')


function popupOpenToggle() {
    popup.classList.toggle('popup__opened')
}

editButton.addEventListener('click', popupOpenToggle);
popupCloseButton.addEventListener('click', popupOpenToggle);

function popupOverlayClickHandler(evt){
    if (evt.target === evt.currentTarget) {
        popupOpenToggle();
    }
}

popup.addEventListener('click', popupOverlayClickHandler)