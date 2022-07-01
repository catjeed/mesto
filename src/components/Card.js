export class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._alt = data.alt;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        return  document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    _likeCard(){
        this._likeBtn.classList.toggle('element__button-like_active');
    }

    _deleteCard(){
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
            this._likeBtn.addEventListener('click', () => {
                this._likeCard();
        });
            this._deleteBtn.addEventListener('click', () => {
                this._deleteCard();
        });
            this._image.addEventListener('click', () => {
                this._handleCardClick();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._name;
        this._image = this._element.querySelector('.element__image');
        this._image.src = this._link;
        this._image.alt = this._alt;
        this._likeBtn = this._element.querySelector('.element__button-like');
        this._deleteBtn = this._element.querySelector('.element__button-delete');
        this._setEventListeners();
        return this._element;
    }
}
