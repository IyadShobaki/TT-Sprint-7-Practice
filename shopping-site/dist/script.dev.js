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

var Card =
/*#__PURE__*/
function () {
  function Card(title, description, price, image) {
    _classCallCheck(this, Card);

    this._title = title;
    this._description = description;
    this._price = price;
    this._image = image;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(".horizontal-card").content.querySelector(".card").cloneNode(true);
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
      return this._element;
    }
  }]);

  return Card;
}();