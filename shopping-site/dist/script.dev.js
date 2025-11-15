"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var items = [{
  image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
  title: "BIOLOID",
  description: "Robot Kit is a popular series of robot construction kits from the company Robotis. The series includes various sets designed both for beginners and for advanced users. In this kit, you'll find everything you need to build unique types of robots and make your own custom designs. The set comes with a software tool for programming, a remote controller, servo motors, and much more.",
  price: "$999"
}, {
  image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
  title: "BIOLOID Premium kit",
  description: "BIOLOID Premium Kit has everything needed to build bipedal robots and includes Dynamixel Smart Servo Motor and the CM-530 controller. BIOLOID Premium Kit is perfect for education, entertainment, and robotics competitions.",
  price: "$1800"
}, {
  image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail2.png",
  title: "Airwheel",
  description: "This bicycle model allows you to use both the pedal and the electric motor, or a combination of both. Airwheel R8 is equipped with a removable battery set to ensure sufficient power supply and to make your trips longer.",
  price: "$2000"
}];
var popupElement = document.querySelector(".popup");
var popupImage = document.querySelector(".popup__image");
var popupCloseButton = document.querySelector(".popup__close");

var Card =
/*#__PURE__*/
function () {
  function Card(data, cardSelector) {
    _classCallCheck(this, Card);

    this._title = data.title;
    this._description = data.description;
    this._price = data.price;
    this._image = data.image;
    this._cardSelector = cardSelector;
  }

  _createClass(Card, [{
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.querySelector(".card__image").addEventListener("click", function () {
        _this._handleOpenPopup();
      });

      popupCloseButton.addEventListener("click", function () {
        _this._handleClosePopup();
      });
    }
  }, {
    key: "_handleOpenPopup",
    value: function _handleOpenPopup() {
      popupImage.src = this._image;
      popupElement.classList.add("popup_is-opened");
    }
  }, {
    key: "_handleClosePopup",
    value: function _handleClosePopup() {
      popupImage.src = "";
      popupElement.classList.remove("popup_is-opened");
    }
  }, {
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector(".card__title").textContent = this._title;
      this._element.querySelector(".card__description").textContent = this._description;
      this._element.querySelector(".card__price").textContent = this._price;
      this._element.querySelector(".card__image").src = this._image;
      return this._elements;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector(".card__title").textContent = this._title;
      this._element.querySelector(".card__info").textContent = this._description;
      this._element.querySelector(".card__price-property").textContent = this._price;
      this._element.querySelector(".card__image").style.backgroundImage = "url(".concat(this._image, ")");

      this._setEventListeners();

      return this._element;
    }
  }]);

  return Card;
}();

items.forEach(function (item) {
  var card = new Card(item, ".horizontal-card");
  var cardElement = card.generateCard();
  document.querySelector(".card-list__items").append(cardElement);
});