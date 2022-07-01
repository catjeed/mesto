import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        const inputs = [...this._popupForm.querySelectorAll('.popup__input')]
        const values = {};
        inputs.forEach((input) => {
            values[input.name] = input.value
        });
        return values;
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', () => {
            this._submitForm(this._getInputValues());
            this.close();
        })
    }
    close() {
        super.close();
        this._popupForm.reset();
    }
}