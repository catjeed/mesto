import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupTitle = this._popup.querySelector('.popup__image-caption');
    }
    open(text, link){
        this._popupTitle.textContent = text;
        this._popupImage.src = link;
        super.open();
    }
}
