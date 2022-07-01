import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputs = [...this._popupForm.querySelectorAll('.popup__input')];
    }

    _getInputValues() {

        const values = {};
        this._inputs.forEach((input) => {
            values[input.name] = input.value
        });
        return values;
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        })
    }
    close() {
        super.close();
        this._popupForm.reset();
    }
}