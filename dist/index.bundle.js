/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/*! namespace exports */
/*! export Accordion [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => /* binding */ Accordion
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* import { gsap } from "gsap";
 */
var Accordion = /*#__PURE__*/function () {
  function Accordion(gsap, ScrollTrigger) {
    _classCallCheck(this, Accordion);

    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.currBlockActive = 0, this.accordionImages = document.querySelectorAll('.accordionSection__imgContainer');
    this.accordionBlocks = this.getAccordionBlocks(document.querySelectorAll('.accordion__block')), this.blockContentAnimationDuration = 0.35, this.blockImgAnimationDuration = 0.7;
    this.blockContentStateON = {
      height: 'auto',
      duration: this.blockContentAnimationDuration
    };
    this.blockContentStateOFF = {
      height: 0,
      duration: this.blockContentAnimationDuration
    };
    this.blockImgStateON = {
      opacity: 1,
      duration: this.blockImgAnimationDuration
    };
    this.blockImgStateOFF = {
      opacity: 0,
      duration: this.blockImgAnimationDuration
    };
    this.accordion_Header_Click_Handler = this.accordion_Header_Click_Handler.bind(this);
  }

  _createClass(Accordion, [{
    key: "init",
    value: function init() {
      this.addEventListenersToHeaders();
      this.set1BlockInitState();
    }
  }, {
    key: "createBlock",
    value: function createBlock(currBlock, i) {
      var block = {
        block: currBlock,
        header: currBlock.querySelector('.accordion__header'),
        content: currBlock.querySelector('.accordion__content'),
        img: this.accordionImages[i]
      };
      block.header.dataset.accordionIndex = i;
      return block;
    }
  }, {
    key: "getAccordionBlocks",
    value: function getAccordionBlocks(elements) {
      return Array.from(elements).map(this.createBlock.bind(this));
    }
  }, {
    key: "addEventListenersToHeaders",
    value: function addEventListenersToHeaders() {
      this.accordionBlocks.forEach(this.addClickListenerToHeaders.bind(this));
    }
  }, {
    key: "addClickListenerToHeaders",
    value: function addClickListenerToHeaders(elem) {
      elem.header.addEventListener('click', this.accordion_Header_Click_Handler);
    }
  }, {
    key: "accordion_Header_Click_Handler",
    value: function accordion_Header_Click_Handler(event) {
      var _this = this;

      if (this.currBlockActive === +event.currentTarget.dataset.accordionIndex) return;
      this.currBlockActive = +event.currentTarget.dataset.accordionIndex;
      this.accordionBlocks.forEach(function (block, i) {
        _this.currBlockActive === i ? _this.blockTurnON(block, i) : _this.blockTurnOFF(block, i);
      });
    }
  }, {
    key: "set1BlockInitState",
    value: function set1BlockInitState() {
      var block = this.accordionBlocks[0];
      this.gsap.timeline().to(block.content, this.blockContentStateON).to(block.img, this.blockImgStateON, 0);
    }
  }, {
    key: "blockTurnON",
    value: function blockTurnON(block, index) {
      block.block.classList.add('accordion__block--active');
      var turnONTimeline = this.gsap.timeline();
      turnONTimeline.to(block.content, this.blockContentStateON).to(block.img, this.blockImgStateON, 0);
    }
  }, {
    key: "blockTurnOFF",
    value: function blockTurnOFF(block, index) {
      block.block.classList.remove('accordion__block--active');
      var turnOFFTimeline = this.gsap.timeline();
      turnOFFTimeline.to(block.content, this.blockContentStateOFF).to(block.img, this.blockImgStateOFF, 0);
    }
  }]);

  return Accordion;
}();

/***/ }),

/***/ "./src/js/chat.js":
/*!************************!*\
  !*** ./src/js/chat.js ***!
  \************************/
/*! namespace exports */
/*! export Chat [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chat": () => /* binding */ Chat
/* harmony export */ });
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var choices_js_public_assets_styles_choices_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choices.js/public/assets/styles/choices.min.css */ "./node_modules/choices.js/public/assets/styles/choices.min.css");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Chat = /*#__PURE__*/function () {
  function Chat() {
    _classCallCheck(this, Chat);

    this.chatIsOpen = false;
    this.chat = document.querySelector('.chat');
    this.chatButton = document.querySelector('.navBar__chatButon');
    this.chatCloseButton = document.querySelector('.chat__closeButton');
    this.form = document.querySelector('.chat__form');
    this.inputs = document.querySelectorAll('.form__input');
    this.selects = document.querySelectorAll('.form__input--select');
    this.submit = document.querySelector('.form__input--submit');
    this.toggleChat = this.toggleChat.bind(this);
    this.toggleChatBlock = this.toggleChatBlock.bind(this);
    this.toggleBodyScrollLock = this.toggleBodyScrollLock.bind(this);
    this.inputChangeListener = this.inputChangeListener.bind(this);
    this.formSubmitClickListener = this.formSubmitClickListener.bind(this);
    /* this.dropDownEventListener = this.dropDownEventListener.bind(this); */

    this.addChatButtonClickListener = this.addChatButtonClickListener.bind(this);
  }

  _createClass(Chat, [{
    key: "init",
    value: function init() {
      this.addChatButtonClickListener();
      this.addInputsChangeListeners();
      this.addFormSubmitClickListener(); //this.addSelectsDropDownEventListener();

      this.setUpSelections();
    }
    /* addSelectsDropDownEventListener () {
      this.selects.forEach(((input) => {
        input.addEventListener('showDropdown', this.dropDownEventListener);
        input.addEventListener('hideDropdown', this.dropDownEventListener);
      }).bind(this));
    } */

    /* dropDownEventListener (event) {
      let input = this.getChoicesIfInputIsSelect(event.currentTarget);
      input.classList.toggle('form__input--showDropdown');
    } */

  }, {
    key: "addInputsChangeListeners",
    value: function addInputsChangeListeners() {
      var _this = this;

      this.inputs.forEach(function (input) {
        input.addEventListener('change', _this.inputChangeListener);
      }.bind(this));
    }
  }, {
    key: "getChoicesIfInputIsSelect",
    value: function getChoicesIfInputIsSelect(input) {
      var elem = input;

      if (elem.tagName !== 'SELECT') {
        return input;
      }

      while (elem = elem.parentElement) {
        if (elem.classList.contains('choices')) {
          return elem;
        }
      }

      return input;
    }
  }, {
    key: "inputChangeListener",
    value: function inputChangeListener(event) {
      var input = event.currentTarget,
          inputValueIsValid = this.inputIsValid(input);
      this.toggleInput(input, inputValueIsValid);
    }
  }, {
    key: "toggleInput",
    value: function toggleInput(input, isValid) {
      var inputIsEmpty = input.value === '' ? true : false,
          inputOrChoices = this.getChoicesIfInputIsSelect(input);
      inputOrChoices.classList.toggle('form__input--filled', !inputIsEmpty);
      inputOrChoices.classList.toggle('form__input--error', !isValid);
    }
  }, {
    key: "createChoices",
    value: function createChoices(select) {
      var options = {
        renderChoiceLimit: -1,
        maxItemCount: 1,
        position: 'bottom',
        searchEnabled: select.classList.contains('form__input--searchEnabled'),
        searchFields: ['value'],
        shouldSort: false,
        placeholder: false,
        searchPlaceholderValue: 'Search',
        itemSelectText: '',
        classNames: {
          containerOuter: 'choices form__input'
        }
      };
      var choices = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, options);
    }
  }, {
    key: "setUpSelections",
    value: function setUpSelections() {
      this.selects.forEach(this.createChoices);
    }
  }, {
    key: "addChatButtonClickListener",
    value: function addChatButtonClickListener() {
      this.chatButton.addEventListener('click', this.toggleChat);
      this.chatCloseButton.addEventListener('click', this.toggleChat);
    }
  }, {
    key: "toggleChat",
    value: function toggleChat() {
      this.toggleChatBlock();
      this.toggleBodyScrollLock();
      this.chatIsOpen = this.chatIsOpen ? false : true;
    }
  }, {
    key: "toggleChatBlock",
    value: function toggleChatBlock() {
      this.chat.classList.toggle('chat--open');
    }
  }, {
    key: "toggleBodyScrollLock",
    value: function toggleBodyScrollLock() {
      document.body.classList.toggle('body--scroll-lock');
    }
  }, {
    key: "inputIsValid",
    value: function inputIsValid(input) {
      var value = String(input.value),
          valueIsEmpty = validator__WEBPACK_IMPORTED_MODULE_2___default().isEmpty(value),
          valueIsValid = true;

      if (!input.required) {
        return valueIsValid;
      }

      switch (input.type) {
        case 'text':
          valueIsValid = !valueIsEmpty;
          break;

        case 'email':
          valueIsValid = validator__WEBPACK_IMPORTED_MODULE_2___default().isEmail(value);
          break;

        case 'tel':
          valueIsValid = validator__WEBPACK_IMPORTED_MODULE_2___default().isMobilePhone(value);
          break;

        default:
          break;
      }

      return valueIsValid;
    }
  }, {
    key: "addFormSubmitClickListener",
    value: function addFormSubmitClickListener() {
      this.submit.addEventListener('click', this.formSubmitClickListener);
    }
  }, {
    key: "formSubmitClickListener",
    value: function formSubmitClickListener(event) {
      event.preventDefault();
      var formIsValid = this.checkAllInputs(this.inputs);
      formIsValid && this.submitForm();
    }
  }, {
    key: "checkAllInputs",
    value: function checkAllInputs(inputs) {
      var _this2 = this;

      var isValid = true;
      inputs.forEach(function (input) {
        var inputValueIsValid = _this2.inputIsValid(input);

        _this2.toggleInput(input, inputValueIsValid);

        inputValueIsValid || (isValid = false);
      }.bind(this));
      return isValid;
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      var url = this.form.action;
      fetch(url, {
        method: 'POST',
        body: new FormData(this.form)
      }).then(this.fetchResultHandler.bind(this), this.fetchErrorHandler.bind(this));
    }
  }, {
    key: "fetchResultHandler",
    value: function fetchResultHandler(response) {
      if (response.ok) {} else {}
    }
  }, {
    key: "fetchErrorHandler",
    value: function fetchErrorHandler(error) {}
  }]);

  return Chat;
}();

/***/ }),

/***/ "./src/js/clients.js":
/*!***************************!*\
  !*** ./src/js/clients.js ***!
  \***************************/
/*! namespace exports */
/*! export Clients [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clients": () => /* binding */ Clients
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
 */
var Clients = /*#__PURE__*/function () {
  function Clients(gsap, ScrollTrigger) {
    _classCallCheck(this, Clients);

    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.parallaxBlocks = gsap.utils.toArray('.clients__parallaxBlock');
  }

  _createClass(Clients, [{
    key: "init",
    value: function init() {
      this.setUpwhatIsBlock();
    }
  }, {
    key: "getTween",
    value: function getTween(element, isLeftLayout) {
      return this.gsap.fromTo(element, {
        xPercent: isLeftLayout ? 0 : -50
      }, {
        xPercent: isLeftLayout ? -50 : 0
      });
    }
  }, {
    key: "setUpwhatIsBlock",
    value: function setUpwhatIsBlock() {
      var _this = this;

      this.parallaxBlocks.forEach(function (header, i) {
        var leftLayout = i % 2 > 0 ? false : true;

        var tween = _this.getTween(header, leftLayout);

        _this.ScrollTrigger.create({
          trigger: header,
          start: 'top bottom',
          end: 'bottom top',
          animation: tween,
          scrub: 1
        });
      });
    }
  }]);

  return Clients;
}();

/***/ }),

/***/ "./src/js/hero.js":
/*!************************!*\
  !*** ./src/js/hero.js ***!
  \************************/
/*! namespace exports */
/*! export Hero [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": () => /* binding */ Hero
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); */
var Hero = /*#__PURE__*/function () {
  function Hero(gsap, ScrollTrigger) {
    _classCallCheck(this, Hero);

    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.backgroundTimeline = this.gsap.timeline();
    this.sphereTimeline = this.gsap.timeline();
    this.heroContainer = document.querySelector(".scroll-sections-horisontal");
    this.BGLogo = document.querySelector('.backgoundLogo__img');
    this.sphereSection = document.querySelector('.sphereSection');
    this.sphereInner = document.querySelector('.sphereSection__inner');
    this.heroSection = document.querySelector('.heroSection');
    this.logoLight = document.querySelector('.navBar__logo--light');
    this.logoDark = document.querySelector('.navBar__logo--dark');
  }

  _createClass(Hero, [{
    key: "init",
    value: function init() {
      this.pinNavBar();
      this.setUpBGLogo();
      this.setUpHorisontalScrollSection();
    }
  }, {
    key: "pinNavBar",
    value: function pinNavBar() {
      var _this = this;

      this.ScrollTrigger.create({
        trigger: this.heroContainer,
        pin: '.navBar',
        scrub: 1,
        start: 'top top',
        end: function end() {
          return "+=" + _this.heroContainer.offsetWidth;
        }
      });
    }
  }, {
    key: "setUpBGLogo",
    value: function setUpBGLogo() {
      var _this2 = this;

      this.backgroundTimeline.to(this.BGLogo, {
        opacity: 1,
        xPercent: 0,
        duration: 1
      }).to(this.BGLogo, {
        opacity: 1,
        xPercent: -100,
        duration: 2
      });
      this.ScrollTrigger.create({
        trigger: this.heroContainer,
        pin: this.BGLogo,
        anticipatePin: 1,
        animation: this.backgroundTimeline,
        scrub: 1,
        start: 'top top',
        end: function end() {
          return "+=" + _this2.heroContainer.offsetWidth;
        }
      });
      this.gsap.set(this.BGLogo, {
        opacity: 0
      });
    }
  }, {
    key: "setUpHorisontalScrollSection",
    value: function setUpHorisontalScrollSection() {
      var _this3 = this;

      var logosIsChanged = false;

      function checkProgress(_ref) {
        var progress = _ref.progress,
            direction = _ref.direction,
            isActive = _ref.isActive;

        if (logosIsChanged) {
          if (progress < 0.7) {
            logosIsChanged = false;
            this.logoLight.classList.remove('navBar__logo--opacity-0');
            this.logoDark.classList.add('navBar__logo--opacity-0');
          }
        } else {
          if (progress > 0.7) {
            logosIsChanged = true;
            this.logoLight.classList.add('navBar__logo--opacity-0');
            this.logoDark.classList.remove('navBar__logo--opacity-0');
          }
        }
      }

      this.sphereTimeline.to(this.sphereSection, {
        xPercent: -100,
        duration: 4
      }).to(this.heroSection, {
        xPercent: -100,
        duration: 4
      }, 0).to(this.sphereInner, {
        xPercent: 25,
        duration: 1
      }, 0);
      this.ScrollTrigger.create({
        trigger: this.heroContainer,
        pin: true,
        anticipatePin: 1,
        animation: this.sphereTimeline,
        scrub: 1,
        start: 'top top',
        end: function end() {
          return "+=" + _this3.heroContainer.offsetWidth;
        },
        onUpdate: checkProgress.bind(this)
      });
    }
  }]);

  return Hero;
}();

/***/ }),

/***/ "./src/js/howItWorks.js":
/*!******************************!*\
  !*** ./src/js/howItWorks.js ***!
  \******************************/
/*! namespace exports */
/*! export HowItWorks [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowItWorks": () => /* binding */ HowItWorks
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); */
var HowItWorks = /*#__PURE__*/function () {
  function HowItWorks(gsap, ScrollTrigger) {
    _classCallCheck(this, HowItWorks);

    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.backgroundTimeline = this.gsap.timeline();
    this.Stages = ['Ailet AI', 'Stage 1', 'Stage 2'];
    this.StageContent = document.querySelector('.howItWorks__stageIndicatorHeader');
    this.stageImages = this.gsap.utils.toArray('.ST__stageImgContainer');
    this.Blocks = this.gsap.utils.toArray('.ST__contentBlock--right');
    this.Container = document.querySelector('.ST__Container');
    this.LeftContent = document.querySelector('.ST__contentContainer--left');
    this.StageIndicatorContainer = document.querySelector('.ST__contentContainer--stage');
    this.currenStage = 0;
  }

  _createClass(HowItWorks, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.pinLeftSide();
      this.pinStageIndicator();
      this.Blocks.forEach(function (block, i) {
        /* FADEOUT */
        var fadeOut = _this.gsap.timeline();

        if (i > 0) {
          _this.addFadeOutAnimToRightBlock(fadeOut, block);

          _this.addFadeOutAnimToStageImg(fadeOut, _this.stageImages[i - 1]);
        }

        _this.ScrollTrigger.create({
          trigger: block,
          start: 'top 50%',
          end: 'top 10%',
          animation: fadeOut,
          scrub: 1,
          onEnter: i > 0 && _this.stageIncAnim.bind(_this),
          onLeaveBack: i > 0 && _this.stageDecAnim.bind(_this)
        });
        /* FADEIN */


        var fadeIn = _this.gsap.timeline();

        if (i < _this.Blocks.length - 1) {
          _this.addFadeInAnimToRightBlock(fadeIn, block);
        }

        if (i > 0 && i < _this.stageImages.length) {
          _this.addFadeInAnimToStageImg(fadeIn, _this.stageImages[i - 1]);
        }

        _this.ScrollTrigger.create({
          trigger: block,
          start: 'bottom 90%',
          end: 'bottom 50%',
          animation: fadeIn,
          scrub: 1
        });
      });
      this.setBlocksInitState();
    }
  }, {
    key: "stageIncAnim",
    value: function stageIncAnim() {
      this.gsap.timeline().to(this.StageContent, {
        autoAlpha: 0,
        duration: 0.2
      }).call(this.stageInc.bind(this)).to(this.StageContent, {
        autoAlpha: 1,
        duration: 0.2
      });
    }
  }, {
    key: "stageDecAnim",
    value: function stageDecAnim() {
      this.gsap.timeline().to(this.StageContent, {
        autoAlpha: 0,
        duration: 0.2
      }).call(this.stageDec.bind(this)).to(this.StageContent, {
        autoAlpha: 1,
        duration: 0.2
      });
    }
  }, {
    key: "stageInc",
    value: function stageInc() {
      if (this.currenStage + 1 > this.Stages.length) return;
      if (this.Stages[++this.currenStage] === undefined) return;
      this.StageContent.innerHTML = this.Stages[this.currenStage];
    }
  }, {
    key: "stageDec",
    value: function stageDec() {
      if (this.currenStage - 1 < -1) return;
      if (this.Stages[--this.currenStage] === undefined) return;
      this.StageContent.innerHTML = this.Stages[this.currenStage];
    }
  }, {
    key: "setBlocksInitState",
    value: function setBlocksInitState() {
      var blocksArr = this.gsap.utils.toArray('.ST__contentBlock--right');
      blocksArr.shift();
      this.gsap.set(blocksArr, {
        opacity: 0
      });
      this.gsap.set(this.stageImages, {
        autoAlpha: 0,
        yPercent: 10
      });
    }
  }, {
    key: "pinLeftSide",
    value: function pinLeftSide() {
      this.ScrollTrigger.create({
        trigger: this.Container,
        start: 'top top',
        end: 'bottom bottom',
        pin: this.LeftContent,
        anticipatePin: 1
        /* refreshPriority: -10 */

      });
    }
  }, {
    key: "pinStageIndicator",
    value: function pinStageIndicator() {
      this.ScrollTrigger.create({
        trigger: this.Container,
        start: 'top top',
        end: 'bottom bottom',
        pin: this.StageIndicatorContainer
      });
    }
  }, {
    key: "addFadeOutAnimToRightBlock",
    value: function addFadeOutAnimToRightBlock(timeline, element) {
      timeline.fromTo(element, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 2
      });
    }
  }, {
    key: "addFadeOutAnimToStageImg",
    value: function addFadeOutAnimToStageImg(timeline, element) {
      timeline.fromTo(element, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        duration: 1
      }, 0).fromTo(element, {
        yPercent: 10
      }, {
        yPercent: 0,
        duration: 2
      }, 0);
    }
  }, {
    key: "addFadeInAnimToRightBlock",
    value: function addFadeInAnimToRightBlock(timeline, element) {
      timeline.fromTo(element, {
        opacity: 1
      }, {
        opacity: 0,
        duration: 2
      });
    }
  }, {
    key: "addFadeInAnimToStageImg",
    value: function addFadeInAnimToStageImg(timeline, element) {
      timeline.fromTo(element, {
        autoAlpha: 1
      }, {
        autoAlpha: 0,
        duration: 1
      }, 0).fromTo(element, {
        yPercent: 0
      }, {
        yPercent: -10,
        duration: 2
      }, 0);
    }
  }]);

  return HowItWorks;
}();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _hero_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero.js */ "./src/js/hero.js");
/* harmony import */ var _css_link_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/link.css */ "./src/css/link.css");
/* harmony import */ var _css_sphere_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/sphere.css */ "./src/css/sphere.css");
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/menu.css */ "./src/css/menu.css");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _chat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat.js */ "./src/js/chat.js");
/* harmony import */ var _css_chat_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/chat.css */ "./src/css/chat.css");
/* harmony import */ var _css_sphereSection_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/sphereSection.css */ "./src/css/sphereSection.css");
/* harmony import */ var _css_scroll_sections_horisontal_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/scroll-sections-horisontal.css */ "./src/css/scroll-sections-horisontal.css");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/navbar.css */ "./src/css/navbar.css");
/* harmony import */ var _css_heroSection_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/heroSection.css */ "./src/css/heroSection.css");
/* harmony import */ var _css_whatIsBlock_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/whatIsBlock.css */ "./src/css/whatIsBlock.css");
/* harmony import */ var _whatIs_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./whatIs.js */ "./src/js/whatIs.js");
/* harmony import */ var _css_borderTopHeader_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../css/borderTopHeader.css */ "./src/css/borderTopHeader.css");
/* harmony import */ var _css_trigger_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../css/trigger.css */ "./src/css/trigger.css");
/* harmony import */ var _css_howItWorks_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../css/howItWorks.css */ "./src/css/howItWorks.css");
/* harmony import */ var _howItWorks_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./howItWorks.js */ "./src/js/howItWorks.js");
/* harmony import */ var _css_solutions_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../css/solutions.css */ "./src/css/solutions.css");
/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./accordion.js */ "./src/js/accordion.js");
/* harmony import */ var _css_why_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../css/why.css */ "./src/css/why.css");
/* harmony import */ var _why_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./why.js */ "./src/js/why.js");
/* harmony import */ var _css_clients_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../css/clients.css */ "./src/css/clients.css");
/* harmony import */ var _clients_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./clients.js */ "./src/js/clients.js");
/* harmony import */ var _css_contacts_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../css/contacts.css */ "./src/css/contacts.css");


gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
 //import './sphere.js';










 //import './menuButon.js';















/* (function () {
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
})(); */

DOMready();

function DOMready() {
  if (document.readyState != 'loading') {
    DOMContentLoaded();
  } else {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded);
  }
}

function DOMContentLoaded() {
  document.removeEventListener('DOMContentLoaded', DOMContentLoaded);
  init();
}

;

function init() {
  var Hero = new _hero_js__WEBPACK_IMPORTED_MODULE_3__.Hero(gsap__WEBPACK_IMPORTED_MODULE_0__.gsap, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
  Hero.init();
  var Menu = new _menu_js__WEBPACK_IMPORTED_MODULE_7__.Menu(gsap__WEBPACK_IMPORTED_MODULE_0__.gsap, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
  Menu.init();
  var Chat = new _chat_js__WEBPACK_IMPORTED_MODULE_8__.Chat();
  Chat.init();
  var WhatIs = new _whatIs_js__WEBPACK_IMPORTED_MODULE_15__.WhatIs(gsap__WEBPACK_IMPORTED_MODULE_0__.gsap, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
  WhatIs.init();
  var HowItWorks = new _howItWorks_js__WEBPACK_IMPORTED_MODULE_19__.HowItWorks(gsap__WEBPACK_IMPORTED_MODULE_0__.gsap, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
  HowItWorks.init();
  var Accordion = new _accordion_js__WEBPACK_IMPORTED_MODULE_21__.Accordion(gsap__WEBPACK_IMPORTED_MODULE_0__.gsap, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
  Accordion.init();
  var Why = new _why_js__WEBPACK_IMPORTED_MODULE_23__.Why(gsap__WEBPACK_IMPORTED_MODULE_0__.gsap, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
  Why.init();
  var Clients = new _clients_js__WEBPACK_IMPORTED_MODULE_25__.Clients(gsap__WEBPACK_IMPORTED_MODULE_0__.gsap, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
  Clients.init();
  /* document.querySelector('.preloaderCover').style.display = 'none'; */
}

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! namespace exports */
/*! export Menu [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => /* binding */ Menu
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); */
var Menu = /*#__PURE__*/function () {
  function Menu(gsap, ScrollTrigger) {
    _classCallCheck(this, Menu);

    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.menuIsOpen = false;
    this.menuButton = {
      button: document.querySelector('.menuButon'),
      lineTop: document.querySelector('.menuButon__iconLine--top'),
      lineBottom: document.querySelector('.menuButon__iconLine--bottom')
    };
    this.menu = document.querySelector('.menu');
    this.logoLight = document.querySelector('.navBar__logo--light');
    this.logoDark = document.querySelector('.navBar__logo--dark');
    this.chatLogoDark = document.querySelector('.navBar__chatButtonLogo--dark');
    this.chatLogoGradient = document.querySelector('.navBar__chatButtonLogo--gradient');
    /* this.links = [
      {
        
      },
    ], */

    /* this.solutions = {
      element: document.querySelector('.solutions'),
      link: document.getElementById('LinkSolution'),
      id: 'LinkSolution',
      yCoord:  undefined}; */

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenuBlock = this.toggleMenuBlock.bind(this);
    this.toggleBodyScrollLock = this.toggleBodyScrollLock.bind(this);
    this.toggleMenuButton = this.toggleMenuButton.bind(this);
    /* this.refreshElementsCoords = this.refreshElementsCoords.bind(this); */

    this.addMenuLinkClickListener = this.addMenuLinkClickListener.bind(this);
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      this.addMenuButtonClickListener();
      this.addMenuLinksClickListener();
      /* this.solutions.link.addEventListener('click', this.goToSection.bind(this)); */
    }
  }, {
    key: "goToSection",
    value: function goToSection() {
      this.toggleMenu(); //this.scrollToElementCoords(8401, 'auto');
    }
  }, {
    key: "addMenuButtonClickListener",
    value: function addMenuButtonClickListener() {
      this.menuButton.button.addEventListener('click', this.toggleMenu);
    }
  }, {
    key: "addMenuLinksClickListener",
    value: function addMenuLinksClickListener() {
      document.querySelectorAll('.menu__link--anchor').forEach(this.addMenuLinkClickListener);
    }
  }, {
    key: "addMenuLinkClickListener",
    value: function addMenuLinkClickListener(link) {
      link.addEventListener('click', this.toggleMenu);
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      //this.menuIsOpen || this.refreshElementsCoords();
      this.toggleMenuButton();
      this.toggleMenuBlock();
      this.toggleBodyScrollLock();
      this.menuIsOpen = this.menuIsOpen ? false : true;
    }
  }, {
    key: "toggleMenuBlock",
    value: function toggleMenuBlock() {
      this.menu.classList.toggle('menu--open');
    }
  }, {
    key: "toggleBodyScrollLock",
    value: function toggleBodyScrollLock() {
      document.body.classList.toggle('body--scroll-lock');
    }
  }, {
    key: "toggleMenuButton",
    value: function toggleMenuButton() {
      this.menuButton.lineTop.classList.toggle('menuButon__iconLine--transform-down');
      this.menuButton.lineTop.classList.toggle('menuButon__iconLine--active');
      this.menuButton.lineBottom.classList.toggle('menuButon__iconLine--transform-up');
      this.menuButton.lineBottom.classList.toggle('menuButon__iconLine--active');
      this.menuButton.button.classList.toggle('menuButon--active');
      this.toggleLogo();
    }
  }, {
    key: "toggleLogo",
    value: function toggleLogo() {
      if (this.menuIsOpen) {
        this.logoLight.classList.add('navBar__logo--opacity-0');
        this.chatLogoGradient.classList.add('navBar__logo--opacity-0');
        this.logoDark.classList.remove('navBar__logo--opacity-0');
        this.chatLogoDark.classList.remove('navBar__logo--opacity-0');
      } else {
        this.logoLight.classList.remove('navBar__logo--opacity-0');
        this.chatLogoGradient.classList.remove('navBar__logo--opacity-0');
        this.logoDark.classList.add('navBar__logo--opacity-0');
        this.chatLogoDark.classList.add('navBar__logo--opacity-0');
      }
    }
  }, {
    key: "toggleLogoOpacity",
    value: function toggleLogoOpacity(logo) {
      logo.classList.toggle('navBar__logo--opacity-0');
    }
    /* scrollToElementCoords (yCoord, behavior) {
      behavior || (behavior = "smooth");
      window.scrollTo({
        top: yCoord,
        behavior: behavior
      });
    }
      refreshElementsCoords () {
      this.solutions.yCoord = this.getYCoord(this.solutions.element);
    }
      getYCoord (element) {
      return element.getBoundingClientRect().top + pageYOffset;
    } */

  }]);

  return Menu;
}();

/***/ }),

/***/ "./src/js/whatIs.js":
/*!**************************!*\
  !*** ./src/js/whatIs.js ***!
  \**************************/
/*! namespace exports */
/*! export WhatIs [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatIs": () => /* binding */ WhatIs
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
 */
var WhatIs = /*#__PURE__*/function () {
  function WhatIs(gsap, ScrollTrigger) {
    _classCallCheck(this, WhatIs);

    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.headers = this.gsap.utils.toArray('.whatIsBlock__sliderHeader');
  }

  _createClass(WhatIs, [{
    key: "init",
    value: function init() {
      this.setUpwhatIsBlock();
    }
  }, {
    key: "getTween",
    value: function getTween(element, isLeftLayout) {
      return this.gsap.fromTo(element, {
        xPercent: isLeftLayout ? -10 : 10
      }, {
        xPercent: isLeftLayout ? 10 : -10
      });
    }
  }, {
    key: "setUpwhatIsBlock",
    value: function setUpwhatIsBlock() {
      var _this = this;

      this.headers.forEach(function (header, i) {
        var leftLayout = i % 2 > 0 ? false : true;

        var tween = _this.getTween(header, leftLayout);

        _this.ScrollTrigger.create({
          trigger: header,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'restart complete reverse complete',
          animation: tween,
          scrub: 1
        });
      });
    }
  }]);

  return WhatIs;
}();

/***/ }),

/***/ "./src/js/why.js":
/*!***********************!*\
  !*** ./src/js/why.js ***!
  \***********************/
/*! namespace exports */
/*! export Why [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Why": () => /* binding */ Why
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
 */
var Why = /*#__PURE__*/function () {
  function Why(gsap, ScrollTrigger) {
    _classCallCheck(this, Why);

    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.contentBlocks = this.gsap.utils.toArray('.whyParallax__contentBlock');
  }

  _createClass(Why, [{
    key: "init",
    value: function init() {
      this.setScrollTrigerToAllContentBlocks();
    }
  }, {
    key: "setScrollTrigerToAllContentBlocks",
    value: function setScrollTrigerToAllContentBlocks() {
      var _this = this;

      this.contentBlocks.forEach(function (sideBlock, i) {
        var leftLayout = i % 2 > 0 ? false : true;

        var tween = _this.gsap.fromTo(sideBlock, {
          yPercent: leftLayout ? 10 : -10
        }, {
          yPercent: leftLayout ? -10 : 10
        });

        _this.ScrollTrigger.create({
          trigger: '.whyParallax',
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'restart complete reverse complete',
          animation: tween,
          scrub: 1
        });
      });
    }
  }]);

  return Why;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/borderTopHeader.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/borderTopHeader.css ***!
  \***************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".borderTopHeader {\r\n  max-width: 1095px;\r\n  margin: 0 0 0 auto;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.borderTopHeader--paddingTop-big {\r\n  padding: 44px 0 44px;\r\n}\r\n.borderTopHeader__content {\r\n  width: 100%;\r\n  padding: 40px 0 0;\r\n  border-top: 2px solid #0F001E;\r\n}\r\n.borderTopHeader__content--paddingTop-big {\r\n  padding: 64px 0 0;\r\n}\r\n.borderTopHeader__headerAndIcon {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n}\r\n.borderTopHeader__header,\r\n.borderTopHeader__icon,\r\n.borderTopHeader__blockText {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 41px;\r\n  letter-spacing: 0.02em;\r\n  color: #0F001E;\r\n}\r\n.borderTopHeader__header {\r\n  max-width: 728px;\r\n  margin: 0;\r\n  text-transform: uppercase;\r\n}\r\n.borderTopHeader__header--orange {\r\n  font-size: 56px;\r\n  line-height: 71px;\r\n  color: #FF7236;\r\n  text-transform: none;\r\n}\r\n.borderTopHeader__icon {\r\n  font-weight: normal;\r\n}\r\n.borderTopHeader__block {\r\n  width: 49%;\r\n  display: inline-block;\r\n  padding: 0 150px 0 0;\r\n  box-sizing: border-box;\r\n}\r\n.borderTopHeader__blockText {\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #0F001E;\r\n}", "",{"version":3,"sources":["webpack://./src/css/borderTopHeader.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,oBAAoB;AACtB;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,6BAA6B;AAC/B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;AACnB;AACA;;;EAGE,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,qBAAqB;EACrB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB","sourcesContent":[".borderTopHeader {\r\n  max-width: 1095px;\r\n  margin: 0 0 0 auto;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.borderTopHeader--paddingTop-big {\r\n  padding: 44px 0 44px;\r\n}\r\n.borderTopHeader__content {\r\n  width: 100%;\r\n  padding: 40px 0 0;\r\n  border-top: 2px solid #0F001E;\r\n}\r\n.borderTopHeader__content--paddingTop-big {\r\n  padding: 64px 0 0;\r\n}\r\n.borderTopHeader__headerAndIcon {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n}\r\n.borderTopHeader__header,\r\n.borderTopHeader__icon,\r\n.borderTopHeader__blockText {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 41px;\r\n  letter-spacing: 0.02em;\r\n  color: #0F001E;\r\n}\r\n.borderTopHeader__header {\r\n  max-width: 728px;\r\n  margin: 0;\r\n  text-transform: uppercase;\r\n}\r\n.borderTopHeader__header--orange {\r\n  font-size: 56px;\r\n  line-height: 71px;\r\n  color: #FF7236;\r\n  text-transform: none;\r\n}\r\n.borderTopHeader__icon {\r\n  font-weight: normal;\r\n}\r\n.borderTopHeader__block {\r\n  width: 49%;\r\n  display: inline-block;\r\n  padding: 0 150px 0 0;\r\n  box-sizing: border-box;\r\n}\r\n.borderTopHeader__blockText {\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #0F001E;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/chat.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/chat.css ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".chat {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  overscroll-behavior: contain;\r\n  -webkit-overflow-scrolling: touch;\r\n  background-color: #0F001E;\r\n  transition: transform .75s ease-in-out;\r\n  transform: translateX(100%);\r\n\r\n  overflow-y: auto;\r\n}\r\n.chat--open {\r\n  transform: translateX(0);\r\n}\r\n.chat__closeButton {\r\n  width: 16px;\r\n  height: 16px;\r\n  margin: 36px 0 0 auto;\r\n  position: absolute;\r\n  top: 0;\r\n  display: block;\r\n}\r\n.chat__closeButtonIcon {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.chat__inner {\r\n  max-width: 1680px;\r\n  min-height: 100%;\r\n  margin: auto;\r\n  padding: 36px 74px 0;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n}\r\n.chat__layout {\r\n  /* max-width: 50%; */\r\n  margin: 0 0 0 auto;\r\n}\r\n.chat__header {\r\n  margin: 0;\r\n  font-family: Input Mono;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 48px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #FFFFFF;\r\n}\r\n.chat__form {\r\n  margin: 80px 0 0;\r\n}\r\n\r\n\r\n.form {\r\n\r\n}\r\n.form__container {\r\n\r\n}\r\n.form__container--column {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n.form__inputContainer {\r\n  width: 100%;\r\n  margin: 0 0 40px;\r\n  position: relative;\r\n  font-size: 0;\r\n}\r\n.form__inputContainer--column-2 {\r\n  width: 40%;\r\n}\r\n\r\n.form__input,\r\n.form__label--placeholder,\r\n.form__errorMessage {\r\n  transition: 0.25s ease-in-out;\r\n }\r\n.form__input {\r\n  width: 100%;\r\n  height: 40px;\r\n  position: relative;\r\n  border-bottom: 1px solid #FFFFFF;\r\n\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #FFFFFF;\r\n}\r\n.form__input--textarea {\r\n  min-height: 70px;\r\n  padding: 10px 0 10px;\r\n  resize: none;\r\n}\r\n.form__input--error {\r\n  border-bottom: 1px solid #FF0707;\r\n}\r\n.form__label {\r\n  \r\n}\r\n.form__label--placeholder {\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  pointer-events: none;\r\n  transform-origin: bottom left;\r\n\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #FFFFFF;\r\n  opacity: 0.35;\r\n}\r\n.form__label--button {\r\n  width: 100%;\r\n  opacity: 1;\r\n  background: #7744D2;\r\n  pointer-events: auto;\r\n}\r\n.form__input:active + .form__label--button {\r\n  opacity: 0.6;\r\n}\r\n.form__input:focus + .trigger__link .trigger__linkTextContainer {\r\n  transform: translateY(-200%);\r\n}\r\n.form__input:focus + .form__label--placeholder,\r\n.form__input--filled + .form__label--placeholder,\r\n.is-open + .form__label--placeholder {\r\n  transform: translateY(-75%) scale(0.8);\r\n}\r\n.form__input--error + .form__label--placeholder {\r\n  color: #FF0707;\r\n}\r\n.form__label--checkbox {\r\n  justify-content: flex-start;\r\n  background: none;\r\n}\r\n.form__checkbox,\r\n.form__checkboxCircleInner {\r\n  border-radius: 50%;\r\n}\r\n.form__checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0 14px 0 0;\r\n  position: relative;\r\n  flex-shrink: 0;\r\n  border: 1px solid #7744D2;\r\n}\r\n.form__checkboxCircleInner {\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: #7744D2;\r\n  opacity: 0;\r\n}\r\n.form__input:focus + .form__label--checkbox {\r\n  opacity: 0.6;\r\n}\r\n.form__input:checked + .form__label .form__checkboxCircleInner {\r\n  opacity: 1;\r\n}\r\n.form__checkboxText {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #FFFFFF;\r\n}\r\n.form__errorMessage {\r\n  margin: 8px auto 0;\r\n  position: absolute;\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #FF0707;\r\n  opacity: 0;\r\n}\r\n.form__input--error ~ .form__errorMessage {\r\n  opacity: 0.35;\r\n}\r\n\r\n.form__selectIcon {\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  pointer-events: none;\r\n  transition: 0.25s ease-in-out;\r\n  transform: rotate(0deg);\r\n}\r\n.form__input--showDropdown ~ .form__selectIcon,\r\n.is-open ~ .form__selectIcon {\r\n  transform: rotate(-180deg);\r\n}\r\n\r\n.form__label--button .form__submitText {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #FFFFFF;\r\n  background: none;\r\n  -webkit-text-fill-color: unset;\r\n}\r\n\r\n.choices {\r\n  margin: 0;\r\n}\r\n.choices__inner {\r\n  padding: 0 !important;\r\n  display: flex;\r\n  align-items: center;\r\n  border: none;\r\n  border-radius: unset;\r\n  background-color: unset;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #FFFFFF;\r\n}\r\n.choices__list--single {\r\n  padding: 0;\r\n}\r\n.choices__list--dropdown {  \r\n  border: none;\r\n  border-radius: 0 0 6px 6px;\r\n}\r\n.choices__list--dropdown .choices__list {\r\n  max-height: 180px;\r\n}\r\n.choices__list--dropdown .choices__item,\r\n.choices__input,\r\n.choices[data-type*=select-one] .choices__input {\r\n  padding: 10px 0 10px 24px;\r\n  box-sizing: border-box;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #0F001E;\r\n}\r\n.choices[data-type*=select-one]:after {\r\n  display: none !important;\r\n}", "",{"version":3,"sources":["webpack://./src/css/chat.css"],"names":[],"mappings":"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","sourcesContent":[".chat {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  overscroll-behavior: contain;\r\n  -webkit-overflow-scrolling: touch;\r\n  background-color: #0F001E;\r\n  transition: transform .75s ease-in-out;\r\n  transform: translateX(100%);\r\n\r\n  overflow-y: auto;\r\n}\r\n.chat--open {\r\n  transform: translateX(0);\r\n}\r\n.chat__closeButton {\r\n  width: 16px;\r\n  height: 16px;\r\n  margin: 36px 0 0 auto;\r\n  position: absolute;\r\n  top: 0;\r\n  display: block;\r\n}\r\n.chat__closeButtonIcon {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.chat__inner {\r\n  max-width: 1680px;\r\n  min-height: 100%;\r\n  margin: auto;\r\n  padding: 36px 74px 0;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n}\r\n.chat__layout {\r\n  /* max-width: 50%; */\r\n  margin: 0 0 0 auto;\r\n}\r\n.chat__header {\r\n  margin: 0;\r\n  font-family: Input Mono;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 48px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #FFFFFF;\r\n}\r\n.chat__form {\r\n  margin: 80px 0 0;\r\n}\r\n\r\n\r\n.form {\r\n\r\n}\r\n.form__container {\r\n\r\n}\r\n.form__container--column {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n.form__inputContainer {\r\n  width: 100%;\r\n  margin: 0 0 40px;\r\n  position: relative;\r\n  font-size: 0;\r\n}\r\n.form__inputContainer--column-2 {\r\n  width: 40%;\r\n}\r\n\r\n.form__input,\r\n.form__label--placeholder,\r\n.form__errorMessage {\r\n  transition: 0.25s ease-in-out;\r\n }\r\n.form__input {\r\n  width: 100%;\r\n  height: 40px;\r\n  position: relative;\r\n  border-bottom: 1px solid #FFFFFF;\r\n\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #FFFFFF;\r\n}\r\n.form__input--textarea {\r\n  min-height: 70px;\r\n  padding: 10px 0 10px;\r\n  resize: none;\r\n}\r\n.form__input--error {\r\n  border-bottom: 1px solid #FF0707;\r\n}\r\n.form__label {\r\n  \r\n}\r\n.form__label--placeholder {\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  pointer-events: none;\r\n  transform-origin: bottom left;\r\n\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #FFFFFF;\r\n  opacity: 0.35;\r\n}\r\n.form__label--button {\r\n  width: 100%;\r\n  opacity: 1;\r\n  background: #7744D2;\r\n  pointer-events: auto;\r\n}\r\n.form__input:active + .form__label--button {\r\n  opacity: 0.6;\r\n}\r\n.form__input:focus + .trigger__link .trigger__linkTextContainer {\r\n  transform: translateY(-200%);\r\n}\r\n.form__input:focus + .form__label--placeholder,\r\n.form__input--filled + .form__label--placeholder,\r\n.is-open + .form__label--placeholder {\r\n  transform: translateY(-75%) scale(0.8);\r\n}\r\n.form__input--error + .form__label--placeholder {\r\n  color: #FF0707;\r\n}\r\n.form__label--checkbox {\r\n  justify-content: flex-start;\r\n  background: none;\r\n}\r\n.form__checkbox,\r\n.form__checkboxCircleInner {\r\n  border-radius: 50%;\r\n}\r\n.form__checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0 14px 0 0;\r\n  position: relative;\r\n  flex-shrink: 0;\r\n  border: 1px solid #7744D2;\r\n}\r\n.form__checkboxCircleInner {\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: #7744D2;\r\n  opacity: 0;\r\n}\r\n.form__input:focus + .form__label--checkbox {\r\n  opacity: 0.6;\r\n}\r\n.form__input:checked + .form__label .form__checkboxCircleInner {\r\n  opacity: 1;\r\n}\r\n.form__checkboxText {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #FFFFFF;\r\n}\r\n.form__errorMessage {\r\n  margin: 8px auto 0;\r\n  position: absolute;\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #FF0707;\r\n  opacity: 0;\r\n}\r\n.form__input--error ~ .form__errorMessage {\r\n  opacity: 0.35;\r\n}\r\n\r\n.form__selectIcon {\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  pointer-events: none;\r\n  transition: 0.25s ease-in-out;\r\n  transform: rotate(0deg);\r\n}\r\n.form__input--showDropdown ~ .form__selectIcon,\r\n.is-open ~ .form__selectIcon {\r\n  transform: rotate(-180deg);\r\n}\r\n\r\n.form__label--button .form__submitText {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #FFFFFF;\r\n  background: none;\r\n  -webkit-text-fill-color: unset;\r\n}\r\n\r\n.choices {\r\n  margin: 0;\r\n}\r\n.choices__inner {\r\n  padding: 0 !important;\r\n  display: flex;\r\n  align-items: center;\r\n  border: none;\r\n  border-radius: unset;\r\n  background-color: unset;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #FFFFFF;\r\n}\r\n.choices__list--single {\r\n  padding: 0;\r\n}\r\n.choices__list--dropdown {  \r\n  border: none;\r\n  border-radius: 0 0 6px 6px;\r\n}\r\n.choices__list--dropdown .choices__list {\r\n  max-height: 180px;\r\n}\r\n.choices__list--dropdown .choices__item,\r\n.choices__input,\r\n.choices[data-type*=select-one] .choices__input {\r\n  padding: 10px 0 10px 24px;\r\n  box-sizing: border-box;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 111%;\r\n  letter-spacing: 0.02em;\r\n  color: #0F001E;\r\n}\r\n.choices[data-type*=select-one]:after {\r\n  display: none !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/clients.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/clients.css ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".clients {\r\n\r\n}\r\n.clients__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 186px 112px 166px;\r\n}\r\n.clients__borderTopHeader {\r\n  margin: 0;\r\n}\r\n\r\n.clients__parallax {\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.clients__parallaxBlock {\r\n  height: 92px;\r\n  width: 200%;\r\n  width: 200vw;\r\n  padding: 50px 0;\r\n  display: flex;\r\n}\r\n.clients__logoImg {\r\n  max-width: 50%;\r\n  max-height: 100%;\r\n  padding: 0 46px;\r\n}\r\n\r\n.clients__triggerInner {\r\n  max-width: 600px;\r\n}", "",{"version":3,"sources":["webpack://./src/css/clients.css"],"names":[],"mappings":"AAAA;;AAEA;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;AAC5B;AACA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,eAAe;EACf,aAAa;AACf;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".clients {\r\n\r\n}\r\n.clients__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 186px 112px 166px;\r\n}\r\n.clients__borderTopHeader {\r\n  margin: 0;\r\n}\r\n\r\n.clients__parallax {\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.clients__parallaxBlock {\r\n  height: 92px;\r\n  width: 200%;\r\n  width: 200vw;\r\n  padding: 50px 0;\r\n  display: flex;\r\n}\r\n.clients__logoImg {\r\n  max-width: 50%;\r\n  max-height: 100%;\r\n  padding: 0 46px;\r\n}\r\n\r\n.clients__triggerInner {\r\n  max-width: 600px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/contacts.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/contacts.css ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_contactsBG_2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/contactsBG_2x.png */ "./src/static/contactsBG_2x.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_contactsBG_2x_png__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contacts {\r\n  position: relative;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position-x: 100%;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.clients__topGradient {\r\n  width: 100%;\r\n  height: 3px;\r\n  position: absolute;\r\n  top: 0;\r\n  background: linear-gradient(82.55deg, #00CDFF 0%, #7744D2 39.1%, #FF3C01 67.17%, #FFC700 96.24%);\r\n  transform: rotate(-180deg);\r\n}\r\n.contacts__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 120px 112px 0;\r\n}\r\n.contacts__content {\r\n  max-width: 800px;\r\n}\r\n.contacts__header {\r\n  margin: 0;\r\n  display: flex;\r\n  align-items: center;  \r\n}\r\n.contacts__headerImg {\r\n  max-width: 46px;\r\n  margin: 0 26px 0 0;\r\n}\r\n.contacts__headerText {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 48px;\r\n  line-height: 82px;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.contacts__contactsContainer {\r\n  margin: 104px 0 224px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.contacts__contact {\r\n  width: 42%;\r\n  padding: 0 0 75px;\r\n}\r\n.contact {\r\n\r\n}\r\n.contact__header {\r\n  margin: 0 0 38px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 22px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: #FFFFFF;\r\n}\r\n.contact__text {\r\n  margin: 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 28px;\r\n  color: rgba(255, 255, 255, 0.35);\r\n}\r\n.contact__text--hightlight {\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.footer__borderTopContainer {\r\n  border-top: 2px solid #FFFFFF;\r\n  padding-bottom: 90px;\r\n}\r\n.footer__contentContainer {\r\n  flex-wrap: wrap;\r\n}\r\n.footer__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  color: #FFFFFF;\r\n}\r\n.footer__text--layout-left {\r\n  margin: 0 98px 0 0;\r\n}\r\n.footer__text--layout-center {\r\n  margin: 0 auto 0 0;\r\n}\r\n.footer__link {\r\n  height: auto;\r\n  background: none;\r\n}\r\n.footer__linkText {\r\n  margin: 0 8px 0 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  color: #FFFFFF;\r\n}\r\n.footer__markweberLogo {\r\n  transform: translateY(20%);\r\n}", "",{"version":3,"sources":["webpack://./src/css/contacts.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,mDAA8C;EAC9C,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,gGAAgG;EAChG,0BAA0B;AAC5B;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;AACA;;AAEA;AACA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,SAAS;EACT,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,gCAAgC;AAClC;AACA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,oBAAoB;AACtB;AACA;EACE,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,0BAA0B;AAC5B","sourcesContent":[".contacts {\r\n  position: relative;\r\n  background: url(\"../static/contactsBG_2x.png\");\r\n  background-position-x: 100%;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.clients__topGradient {\r\n  width: 100%;\r\n  height: 3px;\r\n  position: absolute;\r\n  top: 0;\r\n  background: linear-gradient(82.55deg, #00CDFF 0%, #7744D2 39.1%, #FF3C01 67.17%, #FFC700 96.24%);\r\n  transform: rotate(-180deg);\r\n}\r\n.contacts__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 120px 112px 0;\r\n}\r\n.contacts__content {\r\n  max-width: 800px;\r\n}\r\n.contacts__header {\r\n  margin: 0;\r\n  display: flex;\r\n  align-items: center;  \r\n}\r\n.contacts__headerImg {\r\n  max-width: 46px;\r\n  margin: 0 26px 0 0;\r\n}\r\n.contacts__headerText {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 48px;\r\n  line-height: 82px;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.contacts__contactsContainer {\r\n  margin: 104px 0 224px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.contacts__contact {\r\n  width: 42%;\r\n  padding: 0 0 75px;\r\n}\r\n.contact {\r\n\r\n}\r\n.contact__header {\r\n  margin: 0 0 38px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 22px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: #FFFFFF;\r\n}\r\n.contact__text {\r\n  margin: 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 28px;\r\n  color: rgba(255, 255, 255, 0.35);\r\n}\r\n.contact__text--hightlight {\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.footer__borderTopContainer {\r\n  border-top: 2px solid #FFFFFF;\r\n  padding-bottom: 90px;\r\n}\r\n.footer__contentContainer {\r\n  flex-wrap: wrap;\r\n}\r\n.footer__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  color: #FFFFFF;\r\n}\r\n.footer__text--layout-left {\r\n  margin: 0 98px 0 0;\r\n}\r\n.footer__text--layout-center {\r\n  margin: 0 auto 0 0;\r\n}\r\n.footer__link {\r\n  height: auto;\r\n  background: none;\r\n}\r\n.footer__linkText {\r\n  margin: 0 8px 0 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  color: #FFFFFF;\r\n}\r\n.footer__markweberLogo {\r\n  transform: translateY(20%);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/heroSection.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/heroSection.css ***!
  \***********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_BG_big_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/BG--big.svg */ "./src/static/BG--big.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_BG_big_svg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".heroSection {\r\n  /* background-color: #FFFFFF; */\r\n}\r\n.heroSection__BG {\r\n  /* width: 100%;\r\n  height: 100%; */\r\n  position: absolute;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position-x: 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n.heroSection__inner {\r\n  max-width: 1680px;\r\n  height: 100vh;\r\n  margin: auto;\r\n  padding: 0 112px 166px;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n}\r\n.heroSection__block {\r\n\r\n}\r\n.heroSection__block--left {\r\n  max-width: 600px;\r\n}\r\n.heroBlockLeft__header {\r\n  margin: 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 41px;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n}\r\n.heroBlockLeft__colorText {\r\n  color: #7744D2;\r\n}\r\n.heroBlockLeft__text {\r\n  max-width: 480px;\r\n  margin: 26px 0 44px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #0F001E;\r\n}\r\n.heroBlockLeft__link {\r\n  width: 280px;\r\n  margin: 0 0 14px;\r\n}\r\n\r\n.heroSection__block--right {\r\n  width: 386px;\r\n  border-top: 2px solid #0F001E;\r\n}\r\n.heroBlockRight__header {\r\n  margin: 30px 0 0 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #0F001E;\r\n}\r\n.heroBlockRight__gradientText {\r\n  margin: 10px 0 0;\r\n}\r\n.heroBlockRight__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n  line-height: 13px;\r\n  color: #505050;\r\n}", "",{"version":3,"sources":["webpack://./src/css/heroSection.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;AACjC;AACA;EACE;iBACe;EACf,kBAAkB;EAClB,mDAAwC;EACxC,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB;AACA;;AAEA;AACA;EACE,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB","sourcesContent":[".heroSection {\r\n  /* background-color: #FFFFFF; */\r\n}\r\n.heroSection__BG {\r\n  /* width: 100%;\r\n  height: 100%; */\r\n  position: absolute;\r\n  background: url(\"../static/BG--big.svg\");\r\n  background-position-x: 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n.heroSection__inner {\r\n  max-width: 1680px;\r\n  height: 100vh;\r\n  margin: auto;\r\n  padding: 0 112px 166px;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n}\r\n.heroSection__block {\r\n\r\n}\r\n.heroSection__block--left {\r\n  max-width: 600px;\r\n}\r\n.heroBlockLeft__header {\r\n  margin: 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 41px;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n}\r\n.heroBlockLeft__colorText {\r\n  color: #7744D2;\r\n}\r\n.heroBlockLeft__text {\r\n  max-width: 480px;\r\n  margin: 26px 0 44px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #0F001E;\r\n}\r\n.heroBlockLeft__link {\r\n  width: 280px;\r\n  margin: 0 0 14px;\r\n}\r\n\r\n.heroSection__block--right {\r\n  width: 386px;\r\n  border-top: 2px solid #0F001E;\r\n}\r\n.heroBlockRight__header {\r\n  margin: 30px 0 0 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #0F001E;\r\n}\r\n.heroBlockRight__gradientText {\r\n  margin: 10px 0 0;\r\n}\r\n.heroBlockRight__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n  line-height: 13px;\r\n  color: #505050;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/howItWorks.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/howItWorks.css ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".howItWorks {\r\n  background-color: #0F001E;\r\n}\r\n.howItWorks__topGradient {\r\n  width: 100%;\r\n  height: 34px;\r\n  position: absolute;\r\n  background: linear-gradient(82.55deg, rgba(0, 205, 255, 0.6) 0%, rgba(119, 68, 210, 0.6) 39.1%, rgba(255, 60, 1, 0.6) 67.17%, rgba(255, 199, 0, 0.6) 96.24%);\r\n  filter: blur(104px);\r\n  transform: rotate(-180deg);\r\n}\r\n.howItWorks__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 0 112px 192px;\r\n  position: relative;\r\n}\r\n\r\n.content-container {\r\n  display: none;\r\n}\r\n\r\n.ST__Container {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.ST__contentContainer--stage {\r\n  width: 50%;\r\n  height: 146px;\r\n  margin: 0;\r\n  padding: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.ST__contentContainer--left {\r\n  width: 50%;\r\n  position: absolute;\r\n  height: 100vh;\r\n}\r\n.howItWorks__sphere {\r\n  width: 50%;\r\n  height: 50%;\r\n  background-color: black;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n.ST__stageImgContainer {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.ST__stageImg {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.ST__contentContainer--right {\r\n  width: 50%;\r\n  margin: 0 0 0 auto;\r\n}\r\n.ST__contentBlock--right {\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: 0 0 0 auto;\r\n}\r\n.howItWorks__contentContainer--stage,\r\n.howItWorks__contentContainer--right {\r\n  width: 38%;\r\n}\r\n.howItWorks__stageIndicatorHeader {\r\n  margin: 0;\r\n  font-family: Input Mono;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 16px;\r\n  line-height: 19px;\r\n  color: #21C5ED;\r\n}\r\n.howItWorks__stageImg {\r\n  max-width: 112%;\r\n}\r\n.howItWorks__stageImg--translate-right {\r\n  transform: translateX(4%);\r\n}\r\n.howItWorks__contentContainer--right {\r\n}\r\n.howItWorks__contentBlock--right {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.howItWorks__stageHeader {\r\n  max-width: 402px;\r\n  margin: 0;\r\n  font-family: Input Mono;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 42px;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n}\r\n.howItWorks__stageHeader--big {\r\n  font-size: 66px;\r\n  line-height: 76px;\r\n  letter-spacing: 0.03em;\r\n}\r\n.howItWorks__stageText {\r\n  max-width: 546px;\r\n  margin: 50px 0 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 29px;\r\n  color: #FFFFFF;\r\n  opacity: 0.5;\r\n}\r\n.howItWorks__stageText--white {\r\n  max-width: 370px;\r\n  font-weight: normal;\r\n  font-size: 24px;\r\n  line-height: 33px;\r\n  letter-spacing: 0.02em;\r\n  color: #FFFFFF;\r\n  opacity: 1;\r\n}\r\n\r\n\r\n.howItWorks__linkContainer {\r\n  text-align: center;\r\n}\r\n.howItWorks__link {\r\n  margin: 14px auto 0;\r\n}", "",{"version":3,"sources":["webpack://./src/css/howItWorks.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,4JAA4J;EAC5J,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;AACA;;EAEE,UAAU;AACZ;AACA;EACE,SAAS;EACT,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;AACA;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,SAAS;EACT,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;EACd,UAAU;AACZ;;;AAGA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB","sourcesContent":[".howItWorks {\r\n  background-color: #0F001E;\r\n}\r\n.howItWorks__topGradient {\r\n  width: 100%;\r\n  height: 34px;\r\n  position: absolute;\r\n  background: linear-gradient(82.55deg, rgba(0, 205, 255, 0.6) 0%, rgba(119, 68, 210, 0.6) 39.1%, rgba(255, 60, 1, 0.6) 67.17%, rgba(255, 199, 0, 0.6) 96.24%);\r\n  filter: blur(104px);\r\n  transform: rotate(-180deg);\r\n}\r\n.howItWorks__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 0 112px 192px;\r\n  position: relative;\r\n}\r\n\r\n.content-container {\r\n  display: none;\r\n}\r\n\r\n.ST__Container {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.ST__contentContainer--stage {\r\n  width: 50%;\r\n  height: 146px;\r\n  margin: 0;\r\n  padding: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.ST__contentContainer--left {\r\n  width: 50%;\r\n  position: absolute;\r\n  height: 100vh;\r\n}\r\n.howItWorks__sphere {\r\n  width: 50%;\r\n  height: 50%;\r\n  background-color: black;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n.ST__stageImgContainer {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.ST__stageImg {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.ST__contentContainer--right {\r\n  width: 50%;\r\n  margin: 0 0 0 auto;\r\n}\r\n.ST__contentBlock--right {\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: 0 0 0 auto;\r\n}\r\n.howItWorks__contentContainer--stage,\r\n.howItWorks__contentContainer--right {\r\n  width: 38%;\r\n}\r\n.howItWorks__stageIndicatorHeader {\r\n  margin: 0;\r\n  font-family: Input Mono;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 16px;\r\n  line-height: 19px;\r\n  color: #21C5ED;\r\n}\r\n.howItWorks__stageImg {\r\n  max-width: 112%;\r\n}\r\n.howItWorks__stageImg--translate-right {\r\n  transform: translateX(4%);\r\n}\r\n.howItWorks__contentContainer--right {\r\n}\r\n.howItWorks__contentBlock--right {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.howItWorks__stageHeader {\r\n  max-width: 402px;\r\n  margin: 0;\r\n  font-family: Input Mono;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 42px;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n}\r\n.howItWorks__stageHeader--big {\r\n  font-size: 66px;\r\n  line-height: 76px;\r\n  letter-spacing: 0.03em;\r\n}\r\n.howItWorks__stageText {\r\n  max-width: 546px;\r\n  margin: 50px 0 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 29px;\r\n  color: #FFFFFF;\r\n  opacity: 0.5;\r\n}\r\n.howItWorks__stageText--white {\r\n  max-width: 370px;\r\n  font-weight: normal;\r\n  font-size: 24px;\r\n  line-height: 33px;\r\n  letter-spacing: 0.02em;\r\n  color: #FFFFFF;\r\n  opacity: 1;\r\n}\r\n\r\n\r\n.howItWorks__linkContainer {\r\n  text-align: center;\r\n}\r\n.howItWorks__link {\r\n  margin: 14px auto 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_fonts_InputMono_Medium_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/fonts/InputMono-Medium.woff */ "./src/static/fonts/InputMono-Medium.woff");
/* harmony import */ var _static_fonts_InputMono_Bold_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/fonts/InputMono-Bold.woff */ "./src/static/fonts/InputMono-Bold.woff");
/* harmony import */ var _static_fonts_PT_Root_UI_Medium_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Medium.woff2 */ "./src/static/fonts/PT Root UI_Medium.woff2");
/* harmony import */ var _static_fonts_PT_Root_UI_Medium_woff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Medium.woff */ "./src/static/fonts/PT Root UI_Medium.woff");
/* harmony import */ var _static_fonts_PT_Root_UI_Bold_woff2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Bold.woff2 */ "./src/static/fonts/PT Root UI_Bold.woff2");
/* harmony import */ var _static_fonts_PT_Root_UI_Bold_woff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Bold.woff */ "./src/static/fonts/PT Root UI_Bold.woff");
/* harmony import */ var _static_fonts_PT_Root_UI_Light_woff2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Light.woff2 */ "./src/static/fonts/PT Root UI_Light.woff2");
/* harmony import */ var _static_fonts_PT_Root_UI_Light_woff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Light.woff */ "./src/static/fonts/PT Root UI_Light.woff");
// Imports











var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_InputMono_Medium_woff__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_InputMono_Bold_woff__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Medium_woff2__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Medium_woff__WEBPACK_IMPORTED_MODULE_6__);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Bold_woff2__WEBPACK_IMPORTED_MODULE_7__);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Bold_woff__WEBPACK_IMPORTED_MODULE_8__);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Light_woff2__WEBPACK_IMPORTED_MODULE_9__);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Light_woff__WEBPACK_IMPORTED_MODULE_10__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n\tfont-family: 'Input Mono';\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tsrc: local('Input Mono'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'Input Mono';\r\n\tfont-style: normal;\r\n  font-weight: bold;\r\n\tsrc: local('Input Mono'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'PT Root UI';\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tsrc: local('PT Root UI'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), \r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'PT Root UI';\r\n\tfont-style: normal;\r\n\tfont-weight: bold;\r\n\tsrc: local('PT Root UI'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('woff2'), \r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'PT Root UI';\r\n\tfont-style: normal;\r\n\tfont-weight: lighter;\r\n\tsrc: local('PT Root UI'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff2'), \r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff');\r\n}\r\nhtml, body, #root, .app {\r\n\twidth: 100%;\r\n}\r\nbody {\r\n  min-height: 100%;\r\n  margin: 0;\r\n  background-color: #FFFFFF;\r\n}\r\n.visuallyhidden {\r\n  position: absolute !important;\r\n  width: 1px !important;\r\n  height: 1px !important;\r\n  margin: 0 !important;\r\n  padding: 0 !important;\r\n  overflow: hidden !important;\r\n  clip: rect(0 0 0 0) !important;\r\n  -webkit-clip-path: inset(50%) !important;\r\n  clip-path: inset(50%) !important;\r\n  border: 0 !important;\r\n  white-space: nowrap !important;\r\n}\r\n.button,\r\n.fieldset,\r\n.input,\r\n.form,\r\n.link {\r\n  margin: 0;\r\n  padding: 0;\r\n  appearance: none;\r\n  border: none;\r\n  background: none;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.button,\r\n.link {\r\n  cursor: pointer;\r\n}\r\n.button:hover,\r\n.button:focus,\r\n.link:hover,\r\n.link:focus {\r\n  outline: none;\r\n  opacity: .6;\r\n}\r\n.button:active,\r\n.link:active {\r\n  opacity: 1;\r\n}\r\n.input:focus {\r\n  outline: none;\r\n}\r\n\r\n\r\n.backgoundLogo {\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  overflow: hidden;\r\n}\r\n.backgoundLogo__img {\r\n  max-width: 100%;\r\n  margin: 0 0 0 auto;\r\n  display: block;\r\n  transform: translateX(100%);\r\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,mBAAmB;CACnB;wDAC4D;AAC7D;AACA;CACC,yBAAyB;CACzB,kBAAkB;EACjB,iBAAiB;CAClB;wDAC0D;AAC3D;AACA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,mBAAmB;CACnB;;wDAE6D;AAC9D;AACA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,iBAAiB;CACjB;;wDAE2D;AAC5D;AACA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,oBAAoB;CACpB;;wDAE4D;AAC7D;AACA;CACC,WAAW;AACZ;AACA;EACE,gBAAgB;EAChB,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,6BAA6B;EAC7B,qBAAqB;EACrB,sBAAsB;EACtB,oBAAoB;EACpB,qBAAqB;EACrB,2BAA2B;EAC3B,8BAA8B;EAC9B,wCAAwC;EACxC,gCAAgC;EAChC,oBAAoB;EACpB,8BAA8B;AAChC;AACA;;;;;EAKE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,qBAAqB;EACrB,wCAAwC;AAC1C;AACA;;EAEE,eAAe;AACjB;AACA;;;;EAIE,aAAa;EACb,WAAW;AACb;AACA;;EAEE,UAAU;AACZ;AACA;EACE,aAAa;AACf;;;AAGA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,2BAA2B;AAC7B","sourcesContent":["@font-face {\r\n\tfont-family: 'Input Mono';\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tsrc: local('Input Mono'),\r\n\t\turl('../static/fonts/InputMono-Medium.woff') format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'Input Mono';\r\n\tfont-style: normal;\r\n  font-weight: bold;\r\n\tsrc: local('Input Mono'),\r\n\t\turl('../static/fonts/InputMono-Bold.woff') format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'PT Root UI';\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tsrc: local('PT Root UI'),\r\n\t\turl('../static/fonts/PT Root UI_Medium.woff2') format('woff2'), \r\n\t\turl('../static/fonts/PT Root UI_Medium.woff') format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'PT Root UI';\r\n\tfont-style: normal;\r\n\tfont-weight: bold;\r\n\tsrc: local('PT Root UI'),\r\n\t\turl('../static/fonts/PT Root UI_Bold.woff2') format('woff2'), \r\n\t\turl('../static/fonts/PT Root UI_Bold.woff') format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'PT Root UI';\r\n\tfont-style: normal;\r\n\tfont-weight: lighter;\r\n\tsrc: local('PT Root UI'),\r\n\t\turl('../static/fonts/PT Root UI_Light.woff2') format('woff2'), \r\n\t\turl('../static/fonts/PT Root UI_Light.woff') format('woff');\r\n}\r\nhtml, body, #root, .app {\r\n\twidth: 100%;\r\n}\r\nbody {\r\n  min-height: 100%;\r\n  margin: 0;\r\n  background-color: #FFFFFF;\r\n}\r\n.visuallyhidden {\r\n  position: absolute !important;\r\n  width: 1px !important;\r\n  height: 1px !important;\r\n  margin: 0 !important;\r\n  padding: 0 !important;\r\n  overflow: hidden !important;\r\n  clip: rect(0 0 0 0) !important;\r\n  -webkit-clip-path: inset(50%) !important;\r\n  clip-path: inset(50%) !important;\r\n  border: 0 !important;\r\n  white-space: nowrap !important;\r\n}\r\n.button,\r\n.fieldset,\r\n.input,\r\n.form,\r\n.link {\r\n  margin: 0;\r\n  padding: 0;\r\n  appearance: none;\r\n  border: none;\r\n  background: none;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.button,\r\n.link {\r\n  cursor: pointer;\r\n}\r\n.button:hover,\r\n.button:focus,\r\n.link:hover,\r\n.link:focus {\r\n  outline: none;\r\n  opacity: .6;\r\n}\r\n.button:active,\r\n.link:active {\r\n  opacity: 1;\r\n}\r\n.input:focus {\r\n  outline: none;\r\n}\r\n\r\n\r\n.backgoundLogo {\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  overflow: hidden;\r\n}\r\n.backgoundLogo__img {\r\n  max-width: 100%;\r\n  margin: 0 0 0 auto;\r\n  display: block;\r\n  transform: translateX(100%);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/link.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/link.css ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".link {\r\n  height: 60px;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 40px;\r\n  background-color: #FFFFFF;\r\n}\r\n.link--BG-purple{\r\n  background-color: #7744D2;\r\n}\r\n.link__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #FFFFFF;\r\n}", "",{"version":3,"sources":["webpack://./src/css/link.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,SAAS;EACT,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB","sourcesContent":[".link {\r\n  height: 60px;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 40px;\r\n  background-color: #FFFFFF;\r\n}\r\n.link--BG-purple{\r\n  background-color: #7744D2;\r\n}\r\n.link__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #FFFFFF;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".body--scroll-lock {\r\n  overflow: hidden;\r\n  padding-right: 15px;\r\n}\r\n.menu {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  overscroll-behavior: contain;\r\n  -webkit-overflow-scrolling: touch;\r\n  background-color: #0F001E;\r\n  transition: transform .75s ease-in-out;\r\n  transform: translateY(-100%);\r\n}\r\n.menu--open {\r\n  transform: translateY(0);\r\n}\r\n.menu__inner {\r\n  max-width: 1680px;\r\n  height: 100%;\r\n  max-height: 570px;\r\n  margin: auto;\r\n  padding: 260px 112px 180px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.menu__links {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.menu__link {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 48px;\r\n  line-height: 60px;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n  background: none;\r\n  opacity: 0.35;\r\n}\r\n.menu__link:hover,\r\n.menu__link:focus {\r\n  opacity: 1;\r\n}\r\n.menu__link:active {\r\n  opacity: 0.35;\r\n}\r\n.menu__linkIcon {\r\n  margin: 0 0 0 24px;\r\n}\r\n\r\n.menu__contacts {\r\n  max-width: 364px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n}\r\n.menu__contact {\r\n  width: auto;\r\n  padding: 0 0 48px;\r\n}\r\n.menu__contact--padding-0 {\r\n  padding: 0;\r\n}\r\n.menu__contactHeader {\r\n  margin: 0 0 20px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n.menu__contactText {\r\n  margin: 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 22px;\r\n  color: #FFFFFF;\r\n  opacity: 0.35;\r\n}", "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,UAAU;EACV,4BAA4B;EAC5B,iCAAiC;EACjC,yBAAyB;EACzB,sCAAsC;EACtC,4BAA4B;AAC9B;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;EAC1B,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;EACd,gBAAgB;EAChB,aAAa;AACf;AACA;;EAEE,UAAU;AACZ;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,+BAA+B;AACjC;AACA;EACE,SAAS;EACT,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,aAAa;AACf","sourcesContent":[".body--scroll-lock {\r\n  overflow: hidden;\r\n  padding-right: 15px;\r\n}\r\n.menu {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  overscroll-behavior: contain;\r\n  -webkit-overflow-scrolling: touch;\r\n  background-color: #0F001E;\r\n  transition: transform .75s ease-in-out;\r\n  transform: translateY(-100%);\r\n}\r\n.menu--open {\r\n  transform: translateY(0);\r\n}\r\n.menu__inner {\r\n  max-width: 1680px;\r\n  height: 100%;\r\n  max-height: 570px;\r\n  margin: auto;\r\n  padding: 260px 112px 180px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.menu__links {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.menu__link {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 48px;\r\n  line-height: 60px;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n  background: none;\r\n  opacity: 0.35;\r\n}\r\n.menu__link:hover,\r\n.menu__link:focus {\r\n  opacity: 1;\r\n}\r\n.menu__link:active {\r\n  opacity: 0.35;\r\n}\r\n.menu__linkIcon {\r\n  margin: 0 0 0 24px;\r\n}\r\n\r\n.menu__contacts {\r\n  max-width: 364px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n}\r\n.menu__contact {\r\n  width: auto;\r\n  padding: 0 0 48px;\r\n}\r\n.menu__contact--padding-0 {\r\n  padding: 0;\r\n}\r\n.menu__contactHeader {\r\n  margin: 0 0 20px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n.menu__contactText {\r\n  margin: 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 22px;\r\n  color: #FFFFFF;\r\n  opacity: 0.35;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navBar {\r\n\r\n}\r\n.navBar__inner {\r\n  height: 110px;\r\n  width: 100%;\r\n  max-width: 1680px;\r\n  padding: 0 112px;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.navBar__logosContainer {\r\n  height: 76px;\r\n  position: relative;\r\n}\r\n.navBar__logo {\r\n  max-height: 100%;\r\n  display: block;\r\n  transition: 0.15s ease-in-out;\r\n}\r\n.navBar__logo--light {\r\n\r\n}\r\n.navBar__logo--dark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.navBar__logo--opacity-0 {\r\n  opacity: 0;\r\n}\r\n.navBar__buttons {\r\n  display: flex;\r\n}\r\n.menuButon {\r\n  display: flex;\r\n  align-items: center;\r\n  color: #0F001E;\r\n}\r\n.menuButon--active {\r\n  color: #FFFFFF;\r\n}\r\n.menuButon__icon {\r\n  width: 32px;\r\n  height: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.menuButon__iconLine {\r\n  width: 100%;\r\n  border: 1px solid #0F001E;\r\n  transform-origin: 0% 50%;\r\n  transition: .25s ease-in-out;\r\n}\r\n.menuButon__iconLine--active {\r\n  border: 1px solid #FFFFFF;\r\n}\r\n.menuButon__iconLine--transform-down {\r\n  transform: translateX(4px) translateY(-7px) rotate(45deg);\r\n}\r\n.menuButon__iconLine--transform-up {\r\n  transform: translateX(4px) translateY(7px) rotate(-45deg);\r\n}\r\n.menuButon__text {\r\n  margin: 0 0 0 16px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n}\r\n.navBar__chatButon {\r\n  width: 70px;\r\n  height: 70px;\r\n  position: relative;\r\n}\r\n.navBar__chatButtonLogo {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  transition: 0.15s ease-in-out;\r\n  /* background: url(\"../static/chatLogo.svg\" ); */\r\n}\r\n.navBar__chatButtonLogo--gradient {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  /* background: url(\"../static/chatLogo--gradient.svg\" ); */\r\n}\r\n.navBar__buttonsGap {\r\n  width: 20vw;\r\n  min-width: 20px;\r\n  max-width: 197px;\r\n}\r\n.scroll-sections-horisontal__navBar {\r\n  position: absolute;\r\n  top: 26px;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  max-width: 1680px;\r\n  margin: auto;\r\n}", "",{"version":3,"sources":["webpack://./src/css/navbar.css"],"names":[],"mappings":"AAAA;;AAEA;AACA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,6BAA6B;AAC/B;AACA;;AAEA;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT;AACA;EACE,UAAU;AACZ;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,WAAW;EACX,yBAAyB;EACzB,wBAAwB;EACxB,4BAA4B;AAC9B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yDAAyD;AAC3D;AACA;EACE,yDAAyD;AAC3D;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,6BAA6B;EAC7B,gDAAgD;AAClD;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,0DAA0D;AAC5D;AACA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,YAAY;AACd","sourcesContent":[".navBar {\r\n\r\n}\r\n.navBar__inner {\r\n  height: 110px;\r\n  width: 100%;\r\n  max-width: 1680px;\r\n  padding: 0 112px;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.navBar__logosContainer {\r\n  height: 76px;\r\n  position: relative;\r\n}\r\n.navBar__logo {\r\n  max-height: 100%;\r\n  display: block;\r\n  transition: 0.15s ease-in-out;\r\n}\r\n.navBar__logo--light {\r\n\r\n}\r\n.navBar__logo--dark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.navBar__logo--opacity-0 {\r\n  opacity: 0;\r\n}\r\n.navBar__buttons {\r\n  display: flex;\r\n}\r\n.menuButon {\r\n  display: flex;\r\n  align-items: center;\r\n  color: #0F001E;\r\n}\r\n.menuButon--active {\r\n  color: #FFFFFF;\r\n}\r\n.menuButon__icon {\r\n  width: 32px;\r\n  height: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.menuButon__iconLine {\r\n  width: 100%;\r\n  border: 1px solid #0F001E;\r\n  transform-origin: 0% 50%;\r\n  transition: .25s ease-in-out;\r\n}\r\n.menuButon__iconLine--active {\r\n  border: 1px solid #FFFFFF;\r\n}\r\n.menuButon__iconLine--transform-down {\r\n  transform: translateX(4px) translateY(-7px) rotate(45deg);\r\n}\r\n.menuButon__iconLine--transform-up {\r\n  transform: translateX(4px) translateY(7px) rotate(-45deg);\r\n}\r\n.menuButon__text {\r\n  margin: 0 0 0 16px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n}\r\n.navBar__chatButon {\r\n  width: 70px;\r\n  height: 70px;\r\n  position: relative;\r\n}\r\n.navBar__chatButtonLogo {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  transition: 0.15s ease-in-out;\r\n  /* background: url(\"../static/chatLogo.svg\" ); */\r\n}\r\n.navBar__chatButtonLogo--gradient {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  /* background: url(\"../static/chatLogo--gradient.svg\" ); */\r\n}\r\n.navBar__buttonsGap {\r\n  width: 20vw;\r\n  min-width: 20px;\r\n  max-width: 197px;\r\n}\r\n.scroll-sections-horisontal__navBar {\r\n  position: absolute;\r\n  top: 26px;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  max-width: 1680px;\r\n  margin: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/scroll-sections-horisontal.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/scroll-sections-horisontal.css ***!
  \**************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".scroll-sections-horisontal {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  overflow: hidden;\r\n}\r\n.scroll-sections-horisontal__panel {\r\n  width: 100%;\r\n  flex-shrink: 0;\r\n  position: relative;\r\n  overflow: hidden;\r\n}", "",{"version":3,"sources":["webpack://./src/css/scroll-sections-horisontal.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,gBAAgB;AAClB","sourcesContent":[".scroll-sections-horisontal {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  overflow: hidden;\r\n}\r\n.scroll-sections-horisontal__panel {\r\n  width: 100%;\r\n  flex-shrink: 0;\r\n  position: relative;\r\n  overflow: hidden;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/solutions.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/solutions.css ***!
  \*********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".solutions {\r\n  background-color: #ffffff;\r\n}\r\n.solutions__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 150px 112px 0;\r\n}\r\n.solutions__header {\r\n  max-width: 392px;\r\n}\r\n\r\n\r\n.accordionSection {\r\n  min-height: 60vw;\r\n  margin: 100px 0 0;\r\n  display: flex;\r\n}\r\n\r\n.accordionSection__imagesContainer {\r\n  width: 50%;\r\n  position: relative;\r\n}\r\n.accordionSection__imgContainer {\r\n  width: 60vw;\r\n  height: 60vw;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 0 100px 0 0;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  opacity: 0;\r\n}\r\n.accordionSection__img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.accordionSection__accordion {\r\n  width: 50%;\r\n  margin: 0 0 0 auto;\r\n}\r\n\r\n.accordion {\r\n\r\n}\r\n.accordion__inner {\r\n  border-top: 1px solid #0F001E;\r\n}\r\n.accordion__block {\r\n  border-bottom: 1px solid #0F001E;\r\n}\r\n.accordion__block--active {\r\n\r\n}\r\n\r\n.accordion__header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n}\r\n.accordion__headerText {\r\n  margin: 38px 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 34px;\r\n  text-transform: uppercase;\r\n  color: #0F001E;\r\n}\r\n.accordion__block--active .accordion__headerText {\r\n  color: #7744D2;\r\n}\r\n.accordion__headerIcon {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 2px;\r\n  flex-shrink: 0;\r\n}\r\n.accordion__iconLine {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  background-color: #0F001E;\r\n  transition: 0.2s ease-in-out;\r\n}\r\n.accordion__block--active \r\n.accordion__iconLine {\r\n  background-color: #7744D2;\r\n}\r\n\r\n.accordion__iconLine--plus {\r\n  transform: rotate(-90deg);\r\n}\r\n.accordion__block--active .accordion__iconLine--plus {\r\n  transform: rotate(0deg);\r\n}\r\n\r\n\r\n.accordion__content {\r\n  height: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.numList {\r\n  counter-reset: li; \r\n  list-style: none;\r\n  margin: 0; \r\n  padding: 0;\r\n}\r\n.numList__item {\r\n  position:relative;\r\n}\r\n.numList__item:before {\r\n  content:counter(li);\r\n  counter-increment:li;\r\n}\r\n\r\n\r\n.accordion__numList {\r\n  padding: 0 0 46px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  line-height: 26px;\r\n  color: #0F001E;\r\n}\r\n.accordion__numListItem {\r\n  padding: 0 0 0 36px;\r\n}\r\n.accordion__numListItem:before {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: -6px;\r\n  font-family: Input Mono;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  line-height: 42px;\r\n  text-transform: uppercase;\r\n  color: #0F001E;\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/css/solutions.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB;;;AAGA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;;AAEA;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,gCAAgC;AAClC;AACA;;AAEA;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,cAAc;EACd,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,4BAA4B;AAC9B;AACA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,uBAAuB;AACzB;;;AAGA;EACE,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;AACA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;;AAGA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;AAChB","sourcesContent":[".solutions {\r\n  background-color: #ffffff;\r\n}\r\n.solutions__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 150px 112px 0;\r\n}\r\n.solutions__header {\r\n  max-width: 392px;\r\n}\r\n\r\n\r\n.accordionSection {\r\n  min-height: 60vw;\r\n  margin: 100px 0 0;\r\n  display: flex;\r\n}\r\n\r\n.accordionSection__imagesContainer {\r\n  width: 50%;\r\n  position: relative;\r\n}\r\n.accordionSection__imgContainer {\r\n  width: 60vw;\r\n  height: 60vw;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 0 100px 0 0;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  opacity: 0;\r\n}\r\n.accordionSection__img {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.accordionSection__accordion {\r\n  width: 50%;\r\n  margin: 0 0 0 auto;\r\n}\r\n\r\n.accordion {\r\n\r\n}\r\n.accordion__inner {\r\n  border-top: 1px solid #0F001E;\r\n}\r\n.accordion__block {\r\n  border-bottom: 1px solid #0F001E;\r\n}\r\n.accordion__block--active {\r\n\r\n}\r\n\r\n.accordion__header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n}\r\n.accordion__headerText {\r\n  margin: 38px 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 34px;\r\n  text-transform: uppercase;\r\n  color: #0F001E;\r\n}\r\n.accordion__block--active .accordion__headerText {\r\n  color: #7744D2;\r\n}\r\n.accordion__headerIcon {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 2px;\r\n  flex-shrink: 0;\r\n}\r\n.accordion__iconLine {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  background-color: #0F001E;\r\n  transition: 0.2s ease-in-out;\r\n}\r\n.accordion__block--active \r\n.accordion__iconLine {\r\n  background-color: #7744D2;\r\n}\r\n\r\n.accordion__iconLine--plus {\r\n  transform: rotate(-90deg);\r\n}\r\n.accordion__block--active .accordion__iconLine--plus {\r\n  transform: rotate(0deg);\r\n}\r\n\r\n\r\n.accordion__content {\r\n  height: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.numList {\r\n  counter-reset: li; \r\n  list-style: none;\r\n  margin: 0; \r\n  padding: 0;\r\n}\r\n.numList__item {\r\n  position:relative;\r\n}\r\n.numList__item:before {\r\n  content:counter(li);\r\n  counter-increment:li;\r\n}\r\n\r\n\r\n.accordion__numList {\r\n  padding: 0 0 46px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  line-height: 26px;\r\n  color: #0F001E;\r\n}\r\n.accordion__numListItem {\r\n  padding: 0 0 0 36px;\r\n}\r\n.accordion__numListItem:before {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: -6px;\r\n  font-family: Input Mono;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 20px;\r\n  line-height: 42px;\r\n  text-transform: uppercase;\r\n  color: #0F001E;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/sphere.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/sphere.css ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sphere__canvas {\r\n  width: 100%;\r\n}\r\n.sphere {\r\n  display: flex;\r\n  align-items: center;\r\n}", "",{"version":3,"sources":["webpack://./src/css/sphere.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;AACrB","sourcesContent":[".sphere__canvas {\r\n  width: 100%;\r\n}\r\n.sphere {\r\n  display: flex;\r\n  align-items: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/sphereSection.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/sphereSection.css ***!
  \*************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sphereSection {\r\n  background-color: #0F001E;\r\n}\r\n.sphereSection__inner {\r\n  height: 100vh;\r\n  width: 100%;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.sphereSection__sphere {\r\n  height: 100%;\r\n}\r\n/* ПОДКЛЮЧИТЬ ШРИФТ */\r\n.sphereSection__header {\r\n  position: absolute;\r\n  margin: auto;\r\n  vertical-align: middle;\r\n  font-family: Input Mono;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 45px;\r\n  line-height: 54px;\r\n  text-align: center;\r\n  letter-spacing: 0.03em;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n}", "",{"version":3,"sources":["webpack://./src/css/sphereSection.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;AACA,qBAAqB;AACrB;EACE,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,yBAAyB;EACzB,cAAc;AAChB","sourcesContent":[".sphereSection {\r\n  background-color: #0F001E;\r\n}\r\n.sphereSection__inner {\r\n  height: 100vh;\r\n  width: 100%;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.sphereSection__sphere {\r\n  height: 100%;\r\n}\r\n/* ПОДКЛЮЧИТЬ ШРИФТ */\r\n.sphereSection__header {\r\n  position: absolute;\r\n  margin: auto;\r\n  vertical-align: middle;\r\n  font-family: Input Mono;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 45px;\r\n  line-height: 54px;\r\n  text-align: center;\r\n  letter-spacing: 0.03em;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/trigger.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/trigger.css ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_BG_trigger_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/BG--trigger.svg */ "./src/static/BG--trigger.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_BG_trigger_svg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".trigger {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-color: #7744D2;\r\n  border-radius: 7px;\r\n}\r\n.trigger__inner {\r\n  margin: auto;\r\n  padding: 80px 92px;\r\n  text-align: center;\r\n}\r\n.trigger__header,\r\n.trigger__text {\r\n  margin: auto;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  text-align: center;\r\n  color: #FFFFFF;\r\n}\r\n.trigger__header {\r\n  margin: auto;\r\n  font-weight: bold;\r\n  font-size: 48px;\r\n  line-height: 60px;\r\n}\r\n.trigger__text {\r\n  max-width: 821px;\r\n  padding: 34px 0;\r\n  font-weight: 500;\r\n  font-size: 24px;\r\n  line-height: 30px;\r\n  letter-spacing: 0.02em;\r\n}\r\n.trigger__link {\r\n  display: inline-block;\r\n  margin: 0;\r\n  padding: 0 34px;\r\n  overflow: hidden;\r\n}\r\n.trigger__link:hover {\r\n  opacity: 1;\r\n}\r\n.trigger__linkTextContainer {\r\n  height: 100%;\r\n  transition: 0.5s ease-in-out;\r\n  transform: translateY(0%);\r\n}\r\n.trigger__link:hover .trigger__linkTextContainer {\r\n  transform: translateY(-200%);\r\n}\r\n\r\n.trigger__linkText {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  \r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  background: linear-gradient(135.66deg, #00CDFF 1.13%, #7744D2 41.3%, #FF3C01 70.14%, #FFC700 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  color: transparent;\r\n}", "",{"version":3,"sources":["webpack://./src/css/trigger.css"],"names":[],"mappings":"AAAA;EACE,mDAA4C;EAC5C,2BAA2B;EAC3B,4BAA4B;EAC5B,wBAAwB;EACxB,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;AACA;;EAEE,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,UAAU;AACZ;AACA;EACE,YAAY;EACZ,4BAA4B;EAC5B,yBAAyB;AAC3B;AACA;EACE,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kGAAkG;EAClG,6BAA6B;EAC7B,oCAAoC;EACpC,kBAAkB;AACpB","sourcesContent":[".trigger {\r\n  background: url('../static/BG--trigger.svg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-color: #7744D2;\r\n  border-radius: 7px;\r\n}\r\n.trigger__inner {\r\n  margin: auto;\r\n  padding: 80px 92px;\r\n  text-align: center;\r\n}\r\n.trigger__header,\r\n.trigger__text {\r\n  margin: auto;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  text-align: center;\r\n  color: #FFFFFF;\r\n}\r\n.trigger__header {\r\n  margin: auto;\r\n  font-weight: bold;\r\n  font-size: 48px;\r\n  line-height: 60px;\r\n}\r\n.trigger__text {\r\n  max-width: 821px;\r\n  padding: 34px 0;\r\n  font-weight: 500;\r\n  font-size: 24px;\r\n  line-height: 30px;\r\n  letter-spacing: 0.02em;\r\n}\r\n.trigger__link {\r\n  display: inline-block;\r\n  margin: 0;\r\n  padding: 0 34px;\r\n  overflow: hidden;\r\n}\r\n.trigger__link:hover {\r\n  opacity: 1;\r\n}\r\n.trigger__linkTextContainer {\r\n  height: 100%;\r\n  transition: 0.5s ease-in-out;\r\n  transform: translateY(0%);\r\n}\r\n.trigger__link:hover .trigger__linkTextContainer {\r\n  transform: translateY(-200%);\r\n}\r\n\r\n.trigger__linkText {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  \r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  background: linear-gradient(135.66deg, #00CDFF 1.13%, #7744D2 41.3%, #FF3C01 70.14%, #FFC700 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  color: transparent;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/whatIsBlock.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/whatIsBlock.css ***!
  \***********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_BG_question_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/BG--question.svg */ "./src/static/BG--question.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_BG_question_svg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".whatIsBlock {\r\n  position: relative;\r\n}\r\n.whatIsBlock__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 186px 112px 166px;\r\n}\r\n.whatIsBlock__dollarSection {\r\n  \r\n}\r\n\r\n.whatIsBlock__sliderSection {\r\n\r\n}\r\n.whatIsBlock__sliderInner {\r\n  padding: 176px 0 176px;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n.whatIsBlock__sliderHeader {\r\n  margin: 12px 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 66px;\r\n  line-height: 83px;\r\n  color: #0F001E;\r\n}\r\n.whatIsBlock__text {\r\n  max-width: 490px;\r\n  margin: 0;\r\n  padding: 34px 0;\r\n  \r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 41px;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.whatIsBlock__triggerSectionInner {\r\n  padding: 86px 0 0;\r\n}", "",{"version":3,"sources":["webpack://./src/css/whatIsBlock.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;AAC5B;AACA;;AAEA;;AAEA;;AAEA;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,mDAA6C;EAC7C,4BAA4B;EAC5B,2BAA2B;AAC7B;AACA;EACE,cAAc;EACd,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,SAAS;EACT,eAAe;;EAEf,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".whatIsBlock {\r\n  position: relative;\r\n}\r\n.whatIsBlock__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 186px 112px 166px;\r\n}\r\n.whatIsBlock__dollarSection {\r\n  \r\n}\r\n\r\n.whatIsBlock__sliderSection {\r\n\r\n}\r\n.whatIsBlock__sliderInner {\r\n  padding: 176px 0 176px;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  background: url(\"../static/BG--question.svg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n.whatIsBlock__sliderHeader {\r\n  margin: 12px 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 66px;\r\n  line-height: 83px;\r\n  color: #0F001E;\r\n}\r\n.whatIsBlock__text {\r\n  max-width: 490px;\r\n  margin: 0;\r\n  padding: 34px 0;\r\n  \r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 41px;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.whatIsBlock__triggerSectionInner {\r\n  padding: 86px 0 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/why.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/why.css ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".why {\r\n  position: relative;\r\n  background-color: #ffffff;\r\n}\r\n.why__backgoundLogoImg {\r\n  transform: none;\r\n}\r\n.why__inner {\r\n  position: relative;\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 260px 112px 160px;\r\n}\r\n.why__borderTopHeader {\r\n  max-width: 100%;\r\n}\r\n\r\n.why__parallaxSection {\r\n  padding: 96px 0 192px;\r\n}\r\n.whyParallax__inner {\r\n  max-width: 1090px;\r\n  margin: 0 0 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.whyParallax__contentBlock {\r\n  max-width: 50%;\r\n}\r\n.whyParallax__block {\r\n  max-width: 460px;\r\n  margin-bottom: 136px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n.whyParallax__icon {\r\n  margin-right: 56px;\r\n}\r\n.whyParallax__header,\r\n.whyParallax__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  color: #0F001E;\r\n}\r\n.whyParallax__header {\r\n  margin: 0;\r\n\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 34px;\r\n  text-transform: uppercase;\r\n}\r\n.whyParallax__text {\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 26px;\r\n  opacity: 0.8;\r\n}\r\n\r\n.why__partnersInner {\r\n  display: flex;\r\n}\r\n\r\n.why__contentContainer {\r\n  flex-basis: 100%;\r\n}\r\n\r\n\r\n.why__partnersHeader {\r\n\r\n}\r\n\r\n.why__partnersContent {\r\n  padding: 94px 0 0 24%;\r\n}\r\n.why__partnersTextContent {\r\n\r\n}\r\n.why__partnersText {\r\n  margin: 0;\r\n  padding: 0 0 50px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 26px;\r\n  color: #000000;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n.caseLink {\r\n  height: 30px;\r\n  position: relative;\r\n  padding: 0 30px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n.caseLink__circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #7744D2;\r\n  border-radius: 30px;\r\n  transition: .25s;\r\n}\r\n.caseLink:hover .caseLink__circle {\r\n  width: 100%;\r\n}\r\n.caseLink__textContainer {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.caseLink__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  letter-spacing: 0.09em;\r\n  text-transform: uppercase;\r\n  color: #7744D2;\r\n  transition: .3s;\r\n  transform: translateX(18px);\r\n}\r\n.caseLink:hover .caseLink__text {\r\n  color: #ffffff;\r\n  transform: translateX(0px);\r\n}\r\n\r\n.why__partnersCounterContainer {\r\n  flex-basis: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.why__partnersCounterHeader {\r\n  margin: 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 30px;\r\n  line-height: 54px;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n  color: #000000;\r\n}\r\n.why__partnersCounter {\r\n  margin: 0 0 -28px;\r\n  display: block;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  font-size: 202px;\r\n  line-height: 255px;\r\n  text-transform: uppercase;\r\n  color: #7744D2;\r\n}\r\n\r\n\r\n\r\n\r\n.why__partnersLogos {\r\n  height: 92px;\r\n  margin: 134px 0 0;\r\n  display: flex;\r\n}\r\n.why__partnersLogoImgContainer {\r\n  min-width: 240px;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: auto;\r\n  padding: 0 68px 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n}\r\n.why__partnersLogoImg {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  margin: auto;\r\n}", "",{"version":3,"sources":["webpack://./src/css/why.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,SAAS;;EAET,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;;AAGA;;AAEA;;AAEA;EACE,qBAAqB;AACvB;AACA;;AAEA;AACA;EACE,SAAS;EACT,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;;;AAGA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,SAAS;EACT,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;AAChB;;;;;AAKA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd","sourcesContent":[".why {\r\n  position: relative;\r\n  background-color: #ffffff;\r\n}\r\n.why__backgoundLogoImg {\r\n  transform: none;\r\n}\r\n.why__inner {\r\n  position: relative;\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 260px 112px 160px;\r\n}\r\n.why__borderTopHeader {\r\n  max-width: 100%;\r\n}\r\n\r\n.why__parallaxSection {\r\n  padding: 96px 0 192px;\r\n}\r\n.whyParallax__inner {\r\n  max-width: 1090px;\r\n  margin: 0 0 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.whyParallax__contentBlock {\r\n  max-width: 50%;\r\n}\r\n.whyParallax__block {\r\n  max-width: 460px;\r\n  margin-bottom: 136px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n.whyParallax__icon {\r\n  margin-right: 56px;\r\n}\r\n.whyParallax__header,\r\n.whyParallax__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  color: #0F001E;\r\n}\r\n.whyParallax__header {\r\n  margin: 0;\r\n\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 34px;\r\n  text-transform: uppercase;\r\n}\r\n.whyParallax__text {\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 26px;\r\n  opacity: 0.8;\r\n}\r\n\r\n.why__partnersInner {\r\n  display: flex;\r\n}\r\n\r\n.why__contentContainer {\r\n  flex-basis: 100%;\r\n}\r\n\r\n\r\n.why__partnersHeader {\r\n\r\n}\r\n\r\n.why__partnersContent {\r\n  padding: 94px 0 0 24%;\r\n}\r\n.why__partnersTextContent {\r\n\r\n}\r\n.why__partnersText {\r\n  margin: 0;\r\n  padding: 0 0 50px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 26px;\r\n  color: #000000;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n.caseLink {\r\n  height: 30px;\r\n  position: relative;\r\n  padding: 0 30px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n.caseLink__circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #7744D2;\r\n  border-radius: 30px;\r\n  transition: .25s;\r\n}\r\n.caseLink:hover .caseLink__circle {\r\n  width: 100%;\r\n}\r\n.caseLink__textContainer {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.caseLink__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  letter-spacing: 0.09em;\r\n  text-transform: uppercase;\r\n  color: #7744D2;\r\n  transition: .3s;\r\n  transform: translateX(18px);\r\n}\r\n.caseLink:hover .caseLink__text {\r\n  color: #ffffff;\r\n  transform: translateX(0px);\r\n}\r\n\r\n.why__partnersCounterContainer {\r\n  flex-basis: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.why__partnersCounterHeader {\r\n  margin: 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 30px;\r\n  line-height: 54px;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n  color: #000000;\r\n}\r\n.why__partnersCounter {\r\n  margin: 0 0 -28px;\r\n  display: block;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  font-size: 202px;\r\n  line-height: 255px;\r\n  text-transform: uppercase;\r\n  color: #7744D2;\r\n}\r\n\r\n\r\n\r\n\r\n.why__partnersLogos {\r\n  height: 92px;\r\n  margin: 134px 0 0;\r\n  display: flex;\r\n}\r\n.why__partnersLogoImgContainer {\r\n  min-width: 240px;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: auto;\r\n  padding: 0 68px 0;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n}\r\n.why__partnersLogoImg {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  margin: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/borderTopHeader.css":
/*!*************************************!*\
  !*** ./src/css/borderTopHeader.css ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_borderTopHeader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./borderTopHeader.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/borderTopHeader.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_borderTopHeader_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_borderTopHeader_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/chat.css":
/*!**************************!*\
  !*** ./src/css/chat.css ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_chat_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./chat.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/chat.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_chat_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_chat_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/clients.css":
/*!*****************************!*\
  !*** ./src/css/clients.css ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clients_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./clients.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/clients.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clients_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clients_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/contacts.css":
/*!******************************!*\
  !*** ./src/css/contacts.css ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contacts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contacts.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/contacts.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contacts_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contacts_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/heroSection.css":
/*!*********************************!*\
  !*** ./src/css/heroSection.css ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_heroSection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./heroSection.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/heroSection.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_heroSection_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_heroSection_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/howItWorks.css":
/*!********************************!*\
  !*** ./src/css/howItWorks.css ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_howItWorks_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./howItWorks.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/howItWorks.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_howItWorks_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_howItWorks_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/link.css":
/*!**************************!*\
  !*** ./src/css/link.css ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_link_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./link.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/link.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_link_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_link_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/navbar.css":
/*!****************************!*\
  !*** ./src/css/navbar.css ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/scroll-sections-horisontal.css":
/*!************************************************!*\
  !*** ./src/css/scroll-sections-horisontal.css ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_scroll_sections_horisontal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./scroll-sections-horisontal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/scroll-sections-horisontal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_scroll_sections_horisontal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_scroll_sections_horisontal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/solutions.css":
/*!*******************************!*\
  !*** ./src/css/solutions.css ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_solutions_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./solutions.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/solutions.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_solutions_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_solutions_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/sphere.css":
/*!****************************!*\
  !*** ./src/css/sphere.css ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sphere_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sphere.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/sphere.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sphere_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sphere_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/sphereSection.css":
/*!***********************************!*\
  !*** ./src/css/sphereSection.css ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sphereSection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sphereSection.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/sphereSection.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sphereSection_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sphereSection_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/trigger.css":
/*!*****************************!*\
  !*** ./src/css/trigger.css ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_trigger_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./trigger.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/trigger.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_trigger_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_trigger_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/whatIsBlock.css":
/*!*********************************!*\
  !*** ./src/css/whatIsBlock.css ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_whatIsBlock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./whatIsBlock.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/whatIsBlock.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_whatIsBlock_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_whatIsBlock_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/why.css":
/*!*************************!*\
  !*** ./src/css/why.css ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_why_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./why.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/why.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_why_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_why_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/static/BG--big.svg":
/*!********************************!*\
  !*** ./src/static/BG--big.svg ***!
  \********************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7297f66a4e68facb407.svg";

/***/ }),

/***/ "./src/static/BG--question.svg":
/*!*************************************!*\
  !*** ./src/static/BG--question.svg ***!
  \*************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "083a60ee83521e756fb8.svg";

/***/ }),

/***/ "./src/static/BG--trigger.svg":
/*!************************************!*\
  !*** ./src/static/BG--trigger.svg ***!
  \************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50ec574578f7d0bad2f4.svg";

/***/ }),

/***/ "./src/static/contactsBG_2x.png":
/*!**************************************!*\
  !*** ./src/static/contactsBG_2x.png ***!
  \**************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19ce507df6177aea7096.png";

/***/ }),

/***/ "./src/static/fonts/InputMono-Bold.woff":
/*!**********************************************!*\
  !*** ./src/static/fonts/InputMono-Bold.woff ***!
  \**********************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52cf111e3573dd093758.woff";

/***/ }),

/***/ "./src/static/fonts/InputMono-Medium.woff":
/*!************************************************!*\
  !*** ./src/static/fonts/InputMono-Medium.woff ***!
  \************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7399fa01cea1b5a65c7.woff";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Bold.woff":
/*!***********************************************!*\
  !*** ./src/static/fonts/PT Root UI_Bold.woff ***!
  \***********************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b64e0b606e90a87d747a.woff";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Bold.woff2":
/*!************************************************!*\
  !*** ./src/static/fonts/PT Root UI_Bold.woff2 ***!
  \************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "605d5b6a7bdf8b7ddc75.woff2";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Light.woff":
/*!************************************************!*\
  !*** ./src/static/fonts/PT Root UI_Light.woff ***!
  \************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d32cfaa56718a98c7bd.woff";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Light.woff2":
/*!*************************************************!*\
  !*** ./src/static/fonts/PT Root UI_Light.woff2 ***!
  \*************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d12f28281daff2c68d99.woff2";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Medium.woff":
/*!*************************************************!*\
  !*** ./src/static/fonts/PT Root UI_Medium.woff ***!
  \*************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87a51940f7dba3060108.woff";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Medium.woff2":
/*!**************************************************!*\
  !*** ./src/static/fonts/PT Root UI_Medium.woff2 ***!
  \**************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ceb490d9f1d88c89e1d.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/js/index.js","vendors"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkAilet"] = self["webpackChunkAilet"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9qcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvanMvY2hhdC5qcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9qcy9jbGllbnRzLmpzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2pzL2hlcm8uanMiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvanMvaG93SXRXb3Jrcy5qcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2pzL3doYXRJcy5qcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9qcy93aHkuanMiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL2JvcmRlclRvcEhlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL2NoYXQuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9jbGllbnRzLmNzcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3MvY29udGFjdHMuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9oZXJvU2VjdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL2hvd0l0V29ya3MuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL2xpbmsuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3MvbmF2YmFyLmNzcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3Mvc2Nyb2xsLXNlY3Rpb25zLWhvcmlzb250YWwuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9zb2x1dGlvbnMuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9zcGhlcmUuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9zcGhlcmVTZWN0aW9uLmNzcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3MvdHJpZ2dlci5jc3MiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL3doYXRJc0Jsb2NrLmNzcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3Mvd2h5LmNzcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3MvYm9yZGVyVG9wSGVhZGVyLmNzcz8xNTNmIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9jaGF0LmNzcz9mOGM0Iiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9jbGllbnRzLmNzcz82OGFkIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9jb250YWN0cy5jc3M/MjdkZSIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3MvaGVyb1NlY3Rpb24uY3NzPzk0ZWUiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL2hvd0l0V29ya3MuY3NzP2RkNDUiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9saW5rLmNzcz81YzliIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9tZW51LmNzcz9kZGVjIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9uYXZiYXIuY3NzPzIyYTciLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL3Njcm9sbC1zZWN0aW9ucy1ob3Jpc29udGFsLmNzcz8wY2YzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9zb2x1dGlvbnMuY3NzPzY0MzYiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL3NwaGVyZS5jc3M/NDEyNyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3Mvc3BoZXJlU2VjdGlvbi5jc3M/ZTMyNSIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3MvdHJpZ2dlci5jc3M/NGM1YiIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3Mvd2hhdElzQmxvY2suY3NzPzNkMmIiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL3doeS5jc3M/NWQwOSIsIndlYnBhY2s6Ly9BaWxldC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BaWxldC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9BaWxldC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQWlsZXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9BaWxldC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FpbGV0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0FpbGV0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0FpbGV0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsImN1cnJCbG9ja0FjdGl2ZSIsImFjY29yZGlvbkltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFjY29yZGlvbkJsb2NrcyIsImdldEFjY29yZGlvbkJsb2NrcyIsImJsb2NrQ29udGVudEFuaW1hdGlvbkR1cmF0aW9uIiwiYmxvY2tJbWdBbmltYXRpb25EdXJhdGlvbiIsImJsb2NrQ29udGVudFN0YXRlT04iLCJoZWlnaHQiLCJkdXJhdGlvbiIsImJsb2NrQ29udGVudFN0YXRlT0ZGIiwiYmxvY2tJbWdTdGF0ZU9OIiwib3BhY2l0eSIsImJsb2NrSW1nU3RhdGVPRkYiLCJhY2NvcmRpb25fSGVhZGVyX0NsaWNrX0hhbmRsZXIiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lcnNUb0hlYWRlcnMiLCJzZXQxQmxvY2tJbml0U3RhdGUiLCJjdXJyQmxvY2siLCJpIiwiYmxvY2siLCJoZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImltZyIsImRhdGFzZXQiLCJhY2NvcmRpb25JbmRleCIsImVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiY3JlYXRlQmxvY2siLCJmb3JFYWNoIiwiYWRkQ2xpY2tMaXN0ZW5lclRvSGVhZGVycyIsImVsZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiYmxvY2tUdXJuT04iLCJibG9ja1R1cm5PRkYiLCJ0aW1lbGluZSIsInRvIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0dXJuT05UaW1lbGluZSIsInJlbW92ZSIsInR1cm5PRkZUaW1lbGluZSIsIkNoYXQiLCJjaGF0SXNPcGVuIiwiY2hhdCIsImNoYXRCdXR0b24iLCJjaGF0Q2xvc2VCdXR0b24iLCJmb3JtIiwiaW5wdXRzIiwic2VsZWN0cyIsInN1Ym1pdCIsInRvZ2dsZUNoYXQiLCJ0b2dnbGVDaGF0QmxvY2siLCJ0b2dnbGVCb2R5U2Nyb2xsTG9jayIsImlucHV0Q2hhbmdlTGlzdGVuZXIiLCJmb3JtU3VibWl0Q2xpY2tMaXN0ZW5lciIsImFkZENoYXRCdXR0b25DbGlja0xpc3RlbmVyIiwiYWRkSW5wdXRzQ2hhbmdlTGlzdGVuZXJzIiwiYWRkRm9ybVN1Ym1pdENsaWNrTGlzdGVuZXIiLCJzZXRVcFNlbGVjdGlvbnMiLCJpbnB1dCIsInRhZ05hbWUiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJpbnB1dFZhbHVlSXNWYWxpZCIsImlucHV0SXNWYWxpZCIsInRvZ2dsZUlucHV0IiwiaXNWYWxpZCIsImlucHV0SXNFbXB0eSIsInZhbHVlIiwiaW5wdXRPckNob2ljZXMiLCJnZXRDaG9pY2VzSWZJbnB1dElzU2VsZWN0IiwidG9nZ2xlIiwic2VsZWN0Iiwib3B0aW9ucyIsInJlbmRlckNob2ljZUxpbWl0IiwibWF4SXRlbUNvdW50IiwicG9zaXRpb24iLCJzZWFyY2hFbmFibGVkIiwic2VhcmNoRmllbGRzIiwic2hvdWxkU29ydCIsInBsYWNlaG9sZGVyIiwic2VhcmNoUGxhY2Vob2xkZXJWYWx1ZSIsIml0ZW1TZWxlY3RUZXh0IiwiY2xhc3NOYW1lcyIsImNvbnRhaW5lck91dGVyIiwiY2hvaWNlcyIsIkNob2ljZXMiLCJjcmVhdGVDaG9pY2VzIiwiYm9keSIsIlN0cmluZyIsInZhbHVlSXNFbXB0eSIsInZhbGlkYXRvciIsInZhbHVlSXNWYWxpZCIsInJlcXVpcmVkIiwidHlwZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybUlzVmFsaWQiLCJjaGVja0FsbElucHV0cyIsInN1Ym1pdEZvcm0iLCJ1cmwiLCJhY3Rpb24iLCJmZXRjaCIsIm1ldGhvZCIsIkZvcm1EYXRhIiwidGhlbiIsImZldGNoUmVzdWx0SGFuZGxlciIsImZldGNoRXJyb3JIYW5kbGVyIiwicmVzcG9uc2UiLCJvayIsImVycm9yIiwiQ2xpZW50cyIsInBhcmFsbGF4QmxvY2tzIiwidXRpbHMiLCJ0b0FycmF5Iiwic2V0VXB3aGF0SXNCbG9jayIsImVsZW1lbnQiLCJpc0xlZnRMYXlvdXQiLCJmcm9tVG8iLCJ4UGVyY2VudCIsImxlZnRMYXlvdXQiLCJ0d2VlbiIsImdldFR3ZWVuIiwiY3JlYXRlIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwiYW5pbWF0aW9uIiwic2NydWIiLCJIZXJvIiwiYmFja2dyb3VuZFRpbWVsaW5lIiwic3BoZXJlVGltZWxpbmUiLCJoZXJvQ29udGFpbmVyIiwiQkdMb2dvIiwic3BoZXJlU2VjdGlvbiIsInNwaGVyZUlubmVyIiwiaGVyb1NlY3Rpb24iLCJsb2dvTGlnaHQiLCJsb2dvRGFyayIsInBpbk5hdkJhciIsInNldFVwQkdMb2dvIiwic2V0VXBIb3Jpc29udGFsU2Nyb2xsU2VjdGlvbiIsInBpbiIsIm9mZnNldFdpZHRoIiwiYW50aWNpcGF0ZVBpbiIsInNldCIsImxvZ29zSXNDaGFuZ2VkIiwiY2hlY2tQcm9ncmVzcyIsInByb2dyZXNzIiwiZGlyZWN0aW9uIiwiaXNBY3RpdmUiLCJvblVwZGF0ZSIsIkhvd0l0V29ya3MiLCJTdGFnZXMiLCJTdGFnZUNvbnRlbnQiLCJzdGFnZUltYWdlcyIsIkJsb2NrcyIsIkNvbnRhaW5lciIsIkxlZnRDb250ZW50IiwiU3RhZ2VJbmRpY2F0b3JDb250YWluZXIiLCJjdXJyZW5TdGFnZSIsInBpbkxlZnRTaWRlIiwicGluU3RhZ2VJbmRpY2F0b3IiLCJmYWRlT3V0IiwiYWRkRmFkZU91dEFuaW1Ub1JpZ2h0QmxvY2siLCJhZGRGYWRlT3V0QW5pbVRvU3RhZ2VJbWciLCJvbkVudGVyIiwic3RhZ2VJbmNBbmltIiwib25MZWF2ZUJhY2siLCJzdGFnZURlY0FuaW0iLCJmYWRlSW4iLCJsZW5ndGgiLCJhZGRGYWRlSW5BbmltVG9SaWdodEJsb2NrIiwiYWRkRmFkZUluQW5pbVRvU3RhZ2VJbWciLCJzZXRCbG9ja3NJbml0U3RhdGUiLCJhdXRvQWxwaGEiLCJjYWxsIiwic3RhZ2VJbmMiLCJzdGFnZURlYyIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsImJsb2Nrc0FyciIsInNoaWZ0IiwieVBlcmNlbnQiLCJET01yZWFkeSIsInJlYWR5U3RhdGUiLCJET01Db250ZW50TG9hZGVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImluaXQiLCJIZXJvTW9kdWxlIiwiTWVudSIsIk1lbnVNb2R1bGUiLCJDaGF0TW9kdWxlIiwiV2hhdElzIiwiV2hhdElzTW9kdWxlIiwiSG93SXRXb3Jrc01vZHVsZSIsIkFjY29yZGlvbk1vZHVsZSIsIldoeSIsIldoeU1vZHVsZSIsIkNsaWVudHNNb2R1bGUiLCJtZW51SXNPcGVuIiwibWVudUJ1dHRvbiIsImJ1dHRvbiIsImxpbmVUb3AiLCJsaW5lQm90dG9tIiwibWVudSIsImNoYXRMb2dvRGFyayIsImNoYXRMb2dvR3JhZGllbnQiLCJ0b2dnbGVNZW51IiwidG9nZ2xlTWVudUJsb2NrIiwidG9nZ2xlTWVudUJ1dHRvbiIsImFkZE1lbnVMaW5rQ2xpY2tMaXN0ZW5lciIsImFkZE1lbnVCdXR0b25DbGlja0xpc3RlbmVyIiwiYWRkTWVudUxpbmtzQ2xpY2tMaXN0ZW5lciIsImxpbmsiLCJ0b2dnbGVMb2dvIiwibG9nbyIsImhlYWRlcnMiLCJ0b2dnbGVBY3Rpb25zIiwiY29udGVudEJsb2NrcyIsInNldFNjcm9sbFRyaWdlclRvQWxsQ29udGVudEJsb2NrcyIsInNpZGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFNBQWI7QUFDRSxxQkFBYUMsSUFBYixFQUFtQkMsYUFBbkIsRUFBa0M7QUFBQTs7QUFDaEMsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFFQSxTQUFLQyxlQUFMLEdBQXVCLENBQXZCLEVBQ0EsS0FBS0MsZUFBTCxHQUF1QkMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQ0FBMUIsQ0FEdkI7QUFFQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtDLGtCQUFMLENBQXdCSCxRQUFRLENBQUNDLGdCQUFULENBQTBCLG1CQUExQixDQUF4QixDQUF2QixFQUdBLEtBQUtHLDZCQUFMLEdBQXFDLElBSHJDLEVBSUEsS0FBS0MseUJBQUwsR0FBaUMsR0FKakM7QUFNQSxTQUFLQyxtQkFBTCxHQUEyQjtBQUN6QkMsWUFBTSxFQUFFLE1BRGlCO0FBRXpCQyxjQUFRLEVBQUUsS0FBS0o7QUFGVSxLQUEzQjtBQUtBLFNBQUtLLG9CQUFMLEdBQTRCO0FBQzFCRixZQUFNLEVBQUUsQ0FEa0I7QUFFMUJDLGNBQVEsRUFBRSxLQUFLSjtBQUZXLEtBQTVCO0FBS0EsU0FBS00sZUFBTCxHQUF1QjtBQUNyQkMsYUFBTyxFQUFFLENBRFk7QUFFckJILGNBQVEsRUFBRSxLQUFLSDtBQUZNLEtBQXZCO0FBS0EsU0FBS08sZ0JBQUwsR0FBd0I7QUFDdEJELGFBQU8sRUFBRSxDQURhO0FBRXRCSCxjQUFRLEVBQUUsS0FBS0g7QUFGTyxLQUF4QjtBQU1BLFNBQUtRLDhCQUFMLEdBQXNDLEtBQUtBLDhCQUFMLENBQW9DQyxJQUFwQyxDQUF5QyxJQUF6QyxDQUF0QztBQUNEOztBQW5D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WSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksUUFBUSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGlDQUFpQyxzQkFBc0IsYUFBYSxnQkFBZ0IsY0FBYyxlQUFlLGlCQUFpQixtQ0FBbUMsd0NBQXdDLGdDQUFnQyw2Q0FBNkMsa0NBQWtDLDJCQUEyQixLQUFLLGlCQUFpQiwrQkFBK0IsS0FBSyx3QkFBd0Isa0JBQWtCLG1CQUFtQiw0QkFBNEIseUJBQXlCLGFBQWEscUJBQXFCLEtBQUssNEJBQTRCLHNCQUFzQix1QkFBdUIsS0FBSyxzQkFBc0Isd0JBQXdCLHVCQUF1QixtQkFBbUIsMkJBQTJCLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLDZCQUE2Qiw0QkFBNEIsOEJBQThCLEtBQUssbUJBQW1CLHdCQUF3Qiw0QkFBNEIsS0FBSyxtQkFBbUIsZ0JBQWdCLDhCQUE4Qix5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0IsNkJBQTZCLHFCQUFxQixLQUFLLGlCQUFpQix1QkFBdUIsS0FBSyxtQkFBbUIsU0FBUyxzQkFBc0IsU0FBUyw4QkFBOEIsb0JBQW9CLHNCQUFzQixxQ0FBcUMsS0FBSywyQkFBMkIsa0JBQWtCLHVCQUF1Qix5QkFBeUIsbUJBQW1CLEtBQUsscUNBQXFDLGlCQUFpQixLQUFLLDRFQUE0RSxvQ0FBb0MsTUFBTSxrQkFBa0Isa0JBQWtCLG1CQUFtQix5QkFBeUIsdUNBQXVDLGtDQUFrQyx5QkFBeUIsdUJBQXVCLHNCQUFzQix3QkFBd0IsNkJBQTZCLHFCQUFxQixLQUFLLDRCQUE0Qix1QkFBdUIsMkJBQTJCLG1CQUFtQixLQUFLLHlCQUF5Qix1Q0FBdUMsS0FBSyxrQkFBa0IsV0FBVywrQkFBK0IsbUJBQW1CLHlCQUF5QixhQUFhLGdCQUFnQixvQkFBb0IsMEJBQTBCLDJCQUEyQixvQ0FBb0Msa0NBQWtDLHlCQUF5QiwwQkFBMEIsc0JBQXNCLHdCQUF3Qiw2QkFBNkIscUJBQXFCLG9CQUFvQixLQUFLLDBCQUEwQixrQkFBa0IsaUJBQWlCLDBCQUEwQiwyQkFBMkIsS0FBSyxnREFBZ0QsbUJBQW1CLEtBQUsscUVBQXFFLG1DQUFtQyxLQUFLLGtKQUFrSiw2Q0FBNkMsS0FBSyxxREFBcUQscUJBQXFCLEtBQUssNEJBQTRCLGtDQUFrQyx1QkFBdUIsS0FBSyxvREFBb0QseUJBQXlCLEtBQUsscUJBQXFCLGtCQUFrQixtQkFBbUIseUJBQXlCLHlCQUF5QixxQkFBcUIsZ0NBQWdDLEtBQUssZ0NBQWdDLGtCQUFrQixtQkFBbUIsbUJBQW1CLHlCQUF5QixhQUFhLGdCQUFnQixjQUFjLGVBQWUsZ0NBQWdDLGlCQUFpQixLQUFLLGlEQUFpRCxtQkFBbUIsS0FBSyxvRUFBb0UsaUJBQWlCLEtBQUsseUJBQXlCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHNCQUFzQix3QkFBd0IscUJBQXFCLEtBQUsseUJBQXlCLHlCQUF5Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixrQ0FBa0MseUJBQXlCLDBCQUEwQixzQkFBc0Isd0JBQXdCLDZCQUE2QixxQkFBcUIsaUJBQWlCLEtBQUssK0NBQStDLG9CQUFvQixLQUFLLDJCQUEyQixtQkFBbUIseUJBQXlCLGFBQWEsZ0JBQWdCLGVBQWUsMkJBQTJCLG9DQUFvQyw4QkFBOEIsS0FBSyxxRkFBcUYsaUNBQWlDLEtBQUssZ0RBQWdELDhCQUE4Qix5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0IscUJBQXFCLHVCQUF1QixxQ0FBcUMsS0FBSyxrQkFBa0IsZ0JBQWdCLEtBQUsscUJBQXFCLDRCQUE0QixvQkFBb0IsMEJBQTBCLG1CQUFtQiwyQkFBMkIsOEJBQThCLDhCQUE4Qix5QkFBeUIsdUJBQXVCLHNCQUFzQix3QkFBd0IsNkJBQTZCLHFCQUFxQixLQUFLLDRCQUE0QixpQkFBaUIsS0FBSyw4QkFBOEIscUJBQXFCLGlDQUFpQyxLQUFLLDZDQUE2Qyx3QkFBd0IsS0FBSyxxSEFBcUgsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIseUJBQXlCLDBCQUEwQixzQkFBc0Isd0JBQXdCLDZCQUE2QixxQkFBcUIsS0FBSywyQ0FBMkMsK0JBQStCLEtBQUssbUJBQW1CO0FBQ2hsZDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esb0RBQW9ELFNBQVMscUJBQXFCLHdCQUF3QixtQkFBbUIsaUNBQWlDLEtBQUssK0JBQStCLGdCQUFnQixLQUFLLDRCQUE0QixrQkFBa0IsdUJBQXVCLEtBQUssNkJBQTZCLG1CQUFtQixrQkFBa0IsbUJBQW1CLHNCQUFzQixvQkFBb0IsS0FBSyx1QkFBdUIscUJBQXFCLHVCQUF1QixzQkFBc0IsS0FBSyxnQ0FBZ0MsdUJBQXVCLEtBQUssT0FBTyx1RkFBdUYsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksb0NBQW9DLFNBQVMscUJBQXFCLHdCQUF3QixtQkFBbUIsaUNBQWlDLEtBQUssK0JBQStCLGdCQUFnQixLQUFLLDRCQUE0QixrQkFBa0IsdUJBQXVCLEtBQUssNkJBQTZCLG1CQUFtQixrQkFBa0IsbUJBQW1CLHNCQUFzQixvQkFBb0IsS0FBSyx1QkFBdUIscUJBQXFCLHVCQUF1QixzQkFBc0IsS0FBSyxnQ0FBZ0MsdUJBQXVCLEtBQUssbUJBQW1CO0FBQ2w4QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUN5SDtBQUM3QjtBQUNPO0FBQzNCO0FBQ3hFLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQixDQUFDLHNEQUE2QjtBQUN0RztBQUNBLHFEQUFxRCx5QkFBeUIsa0VBQWtFLGtDQUFrQyxtQ0FBbUMsNkJBQTZCLEtBQUssMkJBQTJCLGtCQUFrQixrQkFBa0IseUJBQXlCLGFBQWEsdUdBQXVHLGlDQUFpQyxLQUFLLHNCQUFzQix3QkFBd0IsbUJBQW1CLDZCQUE2QixLQUFLLHdCQUF3Qix1QkFBdUIsS0FBSyx1QkFBdUIsZ0JBQWdCLG9CQUFvQiwwQkFBMEIsT0FBTywwQkFBMEIsc0JBQXNCLHlCQUF5QixLQUFLLDJCQUEyQiw4QkFBOEIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLGdDQUFnQyxxQkFBcUIsS0FBSyxzQ0FBc0MsNEJBQTRCLG9CQUFvQixzQkFBc0IscUNBQXFDLEtBQUssNEJBQTRCLGlCQUFpQix3QkFBd0IsS0FBSyxjQUFjLFNBQVMsc0JBQXNCLHVCQUF1Qiw4QkFBOEIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLG9CQUFvQiwwQkFBMEIscUJBQXFCLEtBQUssb0JBQW9CLGdCQUFnQiw4QkFBOEIseUJBQXlCLHVCQUF1QixzQkFBc0Isd0JBQXdCLHVDQUF1QyxLQUFLLGdDQUFnQyx3QkFBd0IscUJBQXFCLEtBQUsscUNBQXFDLG9DQUFvQywyQkFBMkIsS0FBSywrQkFBK0Isc0JBQXNCLEtBQUssbUJBQW1CLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHNCQUFzQix3QkFBd0IscUJBQXFCLEtBQUssZ0NBQWdDLHlCQUF5QixLQUFLLGtDQUFrQyx5QkFBeUIsS0FBSyxtQkFBbUIsbUJBQW1CLHVCQUF1QixLQUFLLHVCQUF1Qix3QkFBd0IsOEJBQThCLHlCQUF5QiwwQkFBMEIsc0JBQXNCLHdCQUF3QixxQkFBcUIsS0FBSyw0QkFBNEIsaUNBQWlDLEtBQUssT0FBTyx1RkFBdUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxxQ0FBcUMseUJBQXlCLHVEQUF1RCxrQ0FBa0MsbUNBQW1DLDZCQUE2QixLQUFLLDJCQUEyQixrQkFBa0Isa0JBQWtCLHlCQUF5QixhQUFhLHVHQUF1RyxpQ0FBaUMsS0FBSyxzQkFBc0Isd0JBQXdCLG1CQUFtQiw2QkFBNkIsS0FBSyx3QkFBd0IsdUJBQXVCLEtBQUssdUJBQXVCLGdCQUFnQixvQkFBb0IsMEJBQTBCLE9BQU8sMEJBQTBCLHNCQUFzQix5QkFBeUIsS0FBSywyQkFBMkIsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3QixnQ0FBZ0MscUJBQXFCLEtBQUssc0NBQXNDLDRCQUE0QixvQkFBb0Isc0JBQXNCLHFDQUFxQyxLQUFLLDRCQUE0QixpQkFBaUIsd0JBQXdCLEtBQUssY0FBYyxTQUFTLHNCQUFzQix1QkFBdUIsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3QixvQkFBb0IsMEJBQTBCLHFCQUFxQixLQUFLLG9CQUFvQixnQkFBZ0IsOEJBQThCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLHdCQUF3Qix1Q0FBdUMsS0FBSyxnQ0FBZ0Msd0JBQXdCLHFCQUFxQixLQUFLLHFDQUFxQyxvQ0FBb0MsMkJBQTJCLEtBQUssK0JBQStCLHNCQUFzQixLQUFLLG1CQUFtQiw4QkFBOEIseUJBQXlCLDBCQUEwQixzQkFBc0Isd0JBQXdCLHFCQUFxQixLQUFLLGdDQUFnQyx5QkFBeUIsS0FBSyxrQ0FBa0MseUJBQXlCLEtBQUssbUJBQW1CLG1CQUFtQix1QkFBdUIsS0FBSyx1QkFBdUIsd0JBQXdCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHNCQUFzQix3QkFBd0IscUJBQXFCLEtBQUssNEJBQTRCLGlDQUFpQyxLQUFLLG1CQUFtQjtBQUMvck07QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdkM7QUFDeUg7QUFDN0I7QUFDTztBQUNqQztBQUNsRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQywrQ0FBNkI7QUFDdEc7QUFDQSx3REFBd0QsbUNBQW1DLFFBQVEsc0JBQXNCLHFCQUFxQixtQkFBbUIsNEJBQTRCLGtFQUFrRSxrQ0FBa0MsbUNBQW1DLEtBQUsseUJBQXlCLHdCQUF3QixvQkFBb0IsbUJBQW1CLDZCQUE2Qiw2QkFBNkIseUJBQXlCLG9CQUFvQixxQ0FBcUMsNEJBQTRCLEtBQUsseUJBQXlCLFNBQVMsK0JBQStCLHVCQUF1QixLQUFLLDRCQUE0QixnQkFBZ0IsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3Qiw2QkFBNkIsZ0NBQWdDLEtBQUssK0JBQStCLHFCQUFxQixLQUFLLDBCQUEwQix1QkFBdUIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsdUJBQXVCLHNCQUFzQix3QkFBd0IscUJBQXFCLEtBQUssMEJBQTBCLG1CQUFtQix1QkFBdUIsS0FBSyxvQ0FBb0MsbUJBQW1CLG9DQUFvQyxLQUFLLDZCQUE2Qix5QkFBeUIsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3QixxQkFBcUIsS0FBSyxtQ0FBbUMsdUJBQXVCLEtBQUssMkJBQTJCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHNCQUFzQix3QkFBd0IscUJBQXFCLEtBQUssT0FBTywwRkFBMEYsWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyx3Q0FBd0MsbUNBQW1DLFFBQVEsc0JBQXNCLHFCQUFxQixtQkFBbUIsNEJBQTRCLGlEQUFpRCxrQ0FBa0MsbUNBQW1DLEtBQUsseUJBQXlCLHdCQUF3QixvQkFBb0IsbUJBQW1CLDZCQUE2Qiw2QkFBNkIseUJBQXlCLG9CQUFvQixxQ0FBcUMsNEJBQTRCLEtBQUsseUJBQXlCLFNBQVMsK0JBQStCLHVCQUF1QixLQUFLLDRCQUE0QixnQkFBZ0IsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3Qiw2QkFBNkIsZ0NBQWdDLEtBQUssK0JBQStCLHFCQUFxQixLQUFLLDBCQUEwQix1QkFBdUIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsdUJBQXVCLHNCQUFzQix3QkFBd0IscUJBQXFCLEtBQUssMEJBQTBCLG1CQUFtQix1QkFBdUIsS0FBSyxvQ0FBb0MsbUJBQW1CLG9DQUFvQyxLQUFLLDZCQUE2Qix5QkFBeUIsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3QixxQkFBcUIsS0FBSyxtQ0FBbUMsdUJBQXVCLEtBQUssMkJBQTJCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHNCQUFzQix3QkFBd0IscUJBQXFCLEtBQUssbUJBQW1CO0FBQzcySTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2QztBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsdURBQXVELGdDQUFnQyxLQUFLLDhCQUE4QixrQkFBa0IsbUJBQW1CLHlCQUF5QixtS0FBbUssMEJBQTBCLGlDQUFpQyxLQUFLLHdCQUF3Qix3QkFBd0IsbUJBQW1CLDZCQUE2Qix5QkFBeUIsS0FBSyw0QkFBNEIsb0JBQW9CLEtBQUssd0JBQXdCLGtCQUFrQix5QkFBeUIsS0FBSyxzQ0FBc0MsaUJBQWlCLG9CQUFvQixnQkFBZ0IsaUJBQWlCLHlCQUF5QixhQUFhLGVBQWUsaUJBQWlCLG9CQUFvQiwwQkFBMEIsS0FBSyxxQ0FBcUMsaUJBQWlCLHlCQUF5QixvQkFBb0IsS0FBSyx5QkFBeUIsaUJBQWlCLGtCQUFrQiw4QkFBOEIseUJBQXlCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSxtQkFBbUIsS0FBSyw0QkFBNEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsYUFBYSxnQkFBZ0IsY0FBYyxlQUFlLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixLQUFLLG1CQUFtQixzQkFBc0IsdUJBQXVCLEtBQUssc0NBQXNDLGlCQUFpQix5QkFBeUIsS0FBSyw4QkFBOEIsa0JBQWtCLG9CQUFvQix5QkFBeUIsS0FBSyxtRkFBbUYsaUJBQWlCLEtBQUssdUNBQXVDLGdCQUFnQiw4QkFBOEIseUJBQXlCLDBCQUEwQixzQkFBc0Isd0JBQXdCLHFCQUFxQixLQUFLLDJCQUEyQixzQkFBc0IsS0FBSyw0Q0FBNEMsZ0NBQWdDLEtBQUssMENBQTBDLEtBQUssc0NBQXNDLG9CQUFvQiwwQkFBMEIsS0FBSyw4QkFBOEIsdUJBQXVCLGdCQUFnQiw4QkFBOEIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLGdDQUFnQyxxQkFBcUIsS0FBSyxtQ0FBbUMsc0JBQXNCLHdCQUF3Qiw2QkFBNkIsS0FBSyw0QkFBNEIsdUJBQXVCLHVCQUF1Qiw4QkFBOEIseUJBQXlCLHVCQUF1QixzQkFBc0Isd0JBQXdCLHFCQUFxQixtQkFBbUIsS0FBSyxtQ0FBbUMsdUJBQXVCLDBCQUEwQixzQkFBc0Isd0JBQXdCLDZCQUE2QixxQkFBcUIsaUJBQWlCLEtBQUssd0NBQXdDLHlCQUF5QixLQUFLLHVCQUF1QiwwQkFBMEIsS0FBSyxPQUFPLHlGQUF5RixZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLHVDQUF1QyxnQ0FBZ0MsS0FBSyw4QkFBOEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsbUtBQW1LLDBCQUEwQixpQ0FBaUMsS0FBSyx3QkFBd0Isd0JBQXdCLG1CQUFtQiw2QkFBNkIseUJBQXlCLEtBQUssNEJBQTRCLG9CQUFvQixLQUFLLHdCQUF3QixrQkFBa0IseUJBQXlCLEtBQUssc0NBQXNDLGlCQUFpQixvQkFBb0IsZ0JBQWdCLGlCQUFpQix5QkFBeUIsYUFBYSxlQUFlLGlCQUFpQixvQkFBb0IsMEJBQTBCLEtBQUsscUNBQXFDLGlCQUFpQix5QkFBeUIsb0JBQW9CLEtBQUsseUJBQXlCLGlCQUFpQixrQkFBa0IsOEJBQThCLHlCQUF5QixhQUFhLGdCQUFnQixjQUFjLGVBQWUsbUJBQW1CLEtBQUssNEJBQTRCLGtCQUFrQixtQkFBbUIseUJBQXlCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSxtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsS0FBSyxtQkFBbUIsc0JBQXNCLHVCQUF1QixLQUFLLHNDQUFzQyxpQkFBaUIseUJBQXlCLEtBQUssOEJBQThCLGtCQUFrQixvQkFBb0IseUJBQXlCLEtBQUssbUZBQW1GLGlCQUFpQixLQUFLLHVDQUF1QyxnQkFBZ0IsOEJBQThCLHlCQUF5QiwwQkFBMEIsc0JBQXNCLHdCQUF3QixxQkFBcUIsS0FBSywyQkFBMkIsc0JBQXNCLEtBQUssNENBQTRDLGdDQUFnQyxLQUFLLDBDQUEwQyxLQUFLLHNDQUFzQyxvQkFBb0IsMEJBQTBCLEtBQUssOEJBQThCLHVCQUF1QixnQkFBZ0IsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3QixnQ0FBZ0MscUJBQXFCLEtBQUssbUNBQW1DLHNCQUFzQix3QkFBd0IsNkJBQTZCLEtBQUssNEJBQTRCLHVCQUF1Qix1QkFBdUIsOEJBQThCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLHdCQUF3QixxQkFBcUIsbUJBQW1CLEtBQUssbUNBQW1DLHVCQUF1QiwwQkFBMEIsc0JBQXNCLHdCQUF3Qiw2QkFBNkIscUJBQXFCLGlCQUFpQixLQUFLLHdDQUF3Qyx5QkFBeUIsS0FBSyx1QkFBdUIsMEJBQTBCLEtBQUssbUJBQW1CO0FBQ3JyUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDeUg7QUFDN0I7QUFDTztBQUNqQjtBQUNGO0FBQ0k7QUFDRDtBQUNEO0FBQ0Q7QUFDRTtBQUNEO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQixDQUFDLGdFQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsOERBQTZCO0FBQ3RHLHlDQUF5QyxzRkFBK0IsQ0FBQyxrRUFBNkI7QUFDdEcseUNBQXlDLHNGQUErQixDQUFDLGlFQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsZ0VBQTZCO0FBQ3RHLHlDQUF5QyxzRkFBK0IsQ0FBQywrREFBNkI7QUFDdEcseUNBQXlDLHNGQUErQixDQUFDLGlFQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsaUVBQTZCO0FBQ3RHO0FBQ0Esc0RBQXNELGdDQUFnQyx5QkFBeUIsMEJBQTBCLHNHQUFzRyxLQUFLLGdCQUFnQixnQ0FBZ0MseUJBQXlCLHdCQUF3QixzR0FBc0csS0FBSyxnQkFBZ0IsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsK0tBQStLLEtBQUssZ0JBQWdCLGdDQUFnQyx5QkFBeUIsd0JBQXdCLCtLQUErSyxLQUFLLGdCQUFnQixnQ0FBZ0MseUJBQXlCLDJCQUEyQiwrS0FBK0ssS0FBSyw2QkFBNkIsa0JBQWtCLEtBQUssVUFBVSx1QkFBdUIsZ0JBQWdCLGdDQUFnQyxLQUFLLHFCQUFxQixvQ0FBb0MsNEJBQTRCLDZCQUE2QiwyQkFBMkIsNEJBQTRCLGtDQUFrQyxxQ0FBcUMsK0NBQStDLHVDQUF1QywyQkFBMkIscUNBQXFDLEtBQUssMERBQTBELGdCQUFnQixpQkFBaUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsNkJBQTZCLDRCQUE0QiwrQ0FBK0MsS0FBSyx1QkFBdUIsc0JBQXNCLEtBQUsscUVBQXFFLG9CQUFvQixrQkFBa0IsS0FBSyxxQ0FBcUMsaUJBQWlCLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLDRCQUE0QixrQkFBa0IseUJBQXlCLGFBQWEsdUJBQXVCLEtBQUsseUJBQXlCLHNCQUFzQix5QkFBeUIscUJBQXFCLGtDQUFrQyxLQUFLLE9BQU8sb0ZBQW9GLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sU0FBUyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsTUFBTSxRQUFRLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxzQ0FBc0MsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsbUdBQW1HLEtBQUssZ0JBQWdCLGdDQUFnQyx5QkFBeUIsd0JBQXdCLGlHQUFpRyxLQUFLLGdCQUFnQixnQ0FBZ0MseUJBQXlCLDBCQUEwQiw0S0FBNEssS0FBSyxnQkFBZ0IsZ0NBQWdDLHlCQUF5Qix3QkFBd0Isd0tBQXdLLEtBQUssZ0JBQWdCLGdDQUFnQyx5QkFBeUIsMkJBQTJCLDBLQUEwSyxLQUFLLDZCQUE2QixrQkFBa0IsS0FBSyxVQUFVLHVCQUF1QixnQkFBZ0IsZ0NBQWdDLEtBQUsscUJBQXFCLG9DQUFvQyw0QkFBNEIsNkJBQTZCLDJCQUEyQiw0QkFBNEIsa0NBQWtDLHFDQUFxQywrQ0FBK0MsdUNBQXVDLDJCQUEyQixxQ0FBcUMsS0FBSywwREFBMEQsZ0JBQWdCLGlCQUFpQix1QkFBdUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsNEJBQTRCLCtDQUErQyxLQUFLLHVCQUF1QixzQkFBc0IsS0FBSyxxRUFBcUUsb0JBQW9CLGtCQUFrQixLQUFLLHFDQUFxQyxpQkFBaUIsS0FBSyxrQkFBa0Isb0JBQW9CLEtBQUssNEJBQTRCLGtCQUFrQix5QkFBeUIsYUFBYSx1QkFBdUIsS0FBSyx5QkFBeUIsc0JBQXNCLHlCQUF5QixxQkFBcUIsa0NBQWtDLEtBQUssbUJBQW1CO0FBQzM4TDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCdkM7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxtQkFBbUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsMEJBQTBCLDhCQUE4QiwwQkFBMEIsZ0NBQWdDLEtBQUsscUJBQXFCLGdDQUFnQyxLQUFLLGlCQUFpQiw4QkFBOEIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLHFCQUFxQixLQUFLLE9BQU8sbUZBQW1GLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsaUNBQWlDLG1CQUFtQixnQkFBZ0IsaUJBQWlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQixnQ0FBZ0MsS0FBSyxxQkFBcUIsZ0NBQWdDLEtBQUssaUJBQWlCLDhCQUE4Qix5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0IscUJBQXFCLEtBQUssbUJBQW1CO0FBQ3RzQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsOERBQThELHVCQUF1QiwwQkFBMEIsS0FBSyxXQUFXLHNCQUFzQixhQUFhLGdCQUFnQixjQUFjLGVBQWUsaUJBQWlCLG1DQUFtQyx3Q0FBd0MsZ0NBQWdDLDZDQUE2QyxtQ0FBbUMsS0FBSyxpQkFBaUIsK0JBQStCLEtBQUssa0JBQWtCLHdCQUF3QixtQkFBbUIsd0JBQXdCLG1CQUFtQixpQ0FBaUMsb0JBQW9CLHFDQUFxQyxLQUFLLGtCQUFrQixvQkFBb0IsNkJBQTZCLHFDQUFxQyxLQUFLLGlCQUFpQixvQkFBb0IsMEJBQTBCLGtDQUFrQyw4QkFBOEIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLGdDQUFnQyxxQkFBcUIsdUJBQXVCLG9CQUFvQixLQUFLLDZDQUE2QyxpQkFBaUIsS0FBSyx3QkFBd0Isb0JBQW9CLEtBQUsscUJBQXFCLHlCQUF5QixLQUFLLHlCQUF5Qix1QkFBdUIsb0JBQW9CLDZCQUE2QixnQ0FBZ0MsS0FBSyxvQkFBb0Isa0JBQWtCLHdCQUF3QixLQUFLLCtCQUErQixpQkFBaUIsS0FBSywwQkFBMEIsdUJBQXVCLDhCQUE4Qix5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0Isc0NBQXNDLEtBQUssd0JBQXdCLGdCQUFnQiw4QkFBOEIseUJBQXlCLDBCQUEwQixzQkFBc0Isd0JBQXdCLHFCQUFxQixvQkFBb0IsS0FBSyxPQUFPLG1GQUFtRixZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSw2Q0FBNkMsdUJBQXVCLDBCQUEwQixLQUFLLFdBQVcsc0JBQXNCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSxpQkFBaUIsbUNBQW1DLHdDQUF3QyxnQ0FBZ0MsNkNBQTZDLG1DQUFtQyxLQUFLLGlCQUFpQiwrQkFBK0IsS0FBSyxrQkFBa0Isd0JBQXdCLG1CQUFtQix3QkFBd0IsbUJBQW1CLGlDQUFpQyxvQkFBb0IscUNBQXFDLEtBQUssa0JBQWtCLG9CQUFvQiw2QkFBNkIscUNBQXFDLEtBQUssaUJBQWlCLG9CQUFvQiwwQkFBMEIsa0NBQWtDLDhCQUE4Qix5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0IsZ0NBQWdDLHFCQUFxQix1QkFBdUIsb0JBQW9CLEtBQUssNkNBQTZDLGlCQUFpQixLQUFLLHdCQUF3QixvQkFBb0IsS0FBSyxxQkFBcUIseUJBQXlCLEtBQUsseUJBQXlCLHVCQUF1QixvQkFBb0IsNkJBQTZCLGdDQUFnQyxLQUFLLG9CQUFvQixrQkFBa0Isd0JBQXdCLEtBQUssK0JBQStCLGlCQUFpQixLQUFLLDBCQUEwQix1QkFBdUIsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3QixzQ0FBc0MsS0FBSyx3QkFBd0IsZ0JBQWdCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHNCQUFzQix3QkFBd0IscUJBQXFCLG9CQUFvQixLQUFLLG1CQUFtQjtBQUMvdUo7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG1EQUFtRCxTQUFTLG9CQUFvQixvQkFBb0Isa0JBQWtCLHdCQUF3Qix1QkFBdUIsNkJBQTZCLG9CQUFvQiwwQkFBMEIscUNBQXFDLEtBQUssNkJBQTZCLG1CQUFtQix5QkFBeUIsS0FBSyxtQkFBbUIsdUJBQXVCLHFCQUFxQixvQ0FBb0MsS0FBSywwQkFBMEIsU0FBUyx5QkFBeUIseUJBQXlCLGFBQWEsY0FBYyxLQUFLLDhCQUE4QixpQkFBaUIsS0FBSyxzQkFBc0Isb0JBQW9CLEtBQUssZ0JBQWdCLG9CQUFvQiwwQkFBMEIscUJBQXFCLEtBQUssd0JBQXdCLHFCQUFxQixLQUFLLHNCQUFzQixrQkFBa0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIscUNBQXFDLEtBQUssMEJBQTBCLGtCQUFrQixnQ0FBZ0MsK0JBQStCLG1DQUFtQyxLQUFLLGtDQUFrQyxnQ0FBZ0MsS0FBSywwQ0FBMEMsZ0VBQWdFLEtBQUssd0NBQXdDLGdFQUFnRSxLQUFLLHNCQUFzQix5QkFBeUIsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3QixLQUFLLHdCQUF3QixrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLDZCQUE2QixzQkFBc0IsdUJBQXVCLG9DQUFvQyxzREFBc0QsUUFBUSx1Q0FBdUMseUJBQXlCLGFBQWEsY0FBYyxnRUFBZ0UsUUFBUSx5QkFBeUIsa0JBQWtCLHNCQUFzQix1QkFBdUIsS0FBSyx5Q0FBeUMseUJBQXlCLGdCQUFnQixjQUFjLGVBQWUsaUJBQWlCLGtCQUFrQix3QkFBd0IsbUJBQW1CLEtBQUssT0FBTyxzRkFBc0YsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsa0NBQWtDLFNBQVMsb0JBQW9CLG9CQUFvQixrQkFBa0Isd0JBQXdCLHVCQUF1Qiw2QkFBNkIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsS0FBSyw2QkFBNkIsbUJBQW1CLHlCQUF5QixLQUFLLG1CQUFtQix1QkFBdUIscUJBQXFCLG9DQUFvQyxLQUFLLDBCQUEwQixTQUFTLHlCQUF5Qix5QkFBeUIsYUFBYSxjQUFjLEtBQUssOEJBQThCLGlCQUFpQixLQUFLLHNCQUFzQixvQkFBb0IsS0FBSyxnQkFBZ0Isb0JBQW9CLDBCQUEwQixxQkFBcUIsS0FBSyx3QkFBd0IscUJBQXFCLEtBQUssc0JBQXNCLGtCQUFrQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQ0FBcUMsS0FBSywwQkFBMEIsa0JBQWtCLGdDQUFnQywrQkFBK0IsbUNBQW1DLEtBQUssa0NBQWtDLGdDQUFnQyxLQUFLLDBDQUEwQyxnRUFBZ0UsS0FBSyx3Q0FBd0MsZ0VBQWdFLEtBQUssc0JBQXNCLHlCQUF5Qiw4QkFBOEIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLEtBQUssd0JBQXdCLGtCQUFrQixtQkFBbUIseUJBQXlCLEtBQUssNkJBQTZCLHNCQUFzQix1QkFBdUIsb0NBQW9DLHNEQUFzRCxRQUFRLHVDQUF1Qyx5QkFBeUIsYUFBYSxjQUFjLGdFQUFnRSxRQUFRLHlCQUF5QixrQkFBa0Isc0JBQXNCLHVCQUF1QixLQUFLLHlDQUF5Qyx5QkFBeUIsZ0JBQWdCLGNBQWMsZUFBZSxpQkFBaUIsa0JBQWtCLHdCQUF3QixtQkFBbUIsS0FBSyxtQkFBbUI7QUFDdCtLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSx1RUFBdUUsa0JBQWtCLG9CQUFvQix3QkFBd0IsdUJBQXVCLEtBQUssd0NBQXdDLGtCQUFrQixxQkFBcUIseUJBQXlCLHVCQUF1QixLQUFLLE9BQU8seUdBQXlHLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsdURBQXVELGtCQUFrQixvQkFBb0Isd0JBQXdCLHVCQUF1QixLQUFLLHdDQUF3QyxrQkFBa0IscUJBQXFCLHlCQUF5Qix1QkFBdUIsS0FBSyxtQkFBbUI7QUFDbHlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxzREFBc0QsZ0NBQWdDLEtBQUssdUJBQXVCLHdCQUF3QixtQkFBbUIsNkJBQTZCLEtBQUssd0JBQXdCLHVCQUF1QixLQUFLLCtCQUErQix1QkFBdUIsd0JBQXdCLG9CQUFvQixLQUFLLDRDQUE0QyxpQkFBaUIseUJBQXlCLEtBQUsscUNBQXFDLGtCQUFrQixtQkFBbUIseUJBQXlCLGFBQWEsZUFBZSwwQkFBMEIseUJBQXlCLHVCQUF1QixpQkFBaUIsS0FBSyw0QkFBNEIsc0JBQXNCLHVCQUF1Qix5QkFBeUIsZUFBZSxLQUFLLHNDQUFzQyxpQkFBaUIseUJBQXlCLEtBQUssb0JBQW9CLFNBQVMsdUJBQXVCLG9DQUFvQyxLQUFLLHVCQUF1Qix1Q0FBdUMsS0FBSywrQkFBK0IsU0FBUyw0QkFBNEIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsc0JBQXNCLEtBQUssNEJBQTRCLHFCQUFxQiw4QkFBOEIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLGdDQUFnQyxxQkFBcUIsS0FBSyxzREFBc0QscUJBQXFCLEtBQUssNEJBQTRCLHlCQUF5QixrQkFBa0Isa0JBQWtCLHFCQUFxQixLQUFLLDBCQUEwQixrQkFBa0IsbUJBQW1CLHlCQUF5QixnQ0FBZ0MsbUNBQW1DLEtBQUssd0RBQXdELGdDQUFnQyxLQUFLLG9DQUFvQyxnQ0FBZ0MsS0FBSywwREFBMEQsOEJBQThCLEtBQUssaUNBQWlDLGdCQUFnQix1QkFBdUIsS0FBSyxrQkFBa0Isd0JBQXdCLHdCQUF3QixnQkFBZ0Isa0JBQWtCLEtBQUssb0JBQW9CLHdCQUF3QixLQUFLLDJCQUEyQiwwQkFBMEIsMkJBQTJCLEtBQUssaUNBQWlDLHdCQUF3Qiw4QkFBOEIseUJBQXlCLDBCQUEwQixzQkFBc0Isd0JBQXdCLHFCQUFxQixLQUFLLDZCQUE2QiwwQkFBMEIsS0FBSyxvQ0FBb0MseUJBQXlCLGdCQUFnQixnQkFBZ0IsOEJBQThCLHlCQUF5QiwwQkFBMEIsc0JBQXNCLHdCQUF3QixnQ0FBZ0MscUJBQXFCLEtBQUssdUJBQXVCLHdGQUF3RixZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsc0NBQXNDLGdDQUFnQyxLQUFLLHVCQUF1Qix3QkFBd0IsbUJBQW1CLDZCQUE2QixLQUFLLHdCQUF3Qix1QkFBdUIsS0FBSywrQkFBK0IsdUJBQXVCLHdCQUF3QixvQkFBb0IsS0FBSyw0Q0FBNEMsaUJBQWlCLHlCQUF5QixLQUFLLHFDQUFxQyxrQkFBa0IsbUJBQW1CLHlCQUF5QixhQUFhLGVBQWUsMEJBQTBCLHlCQUF5Qix1QkFBdUIsaUJBQWlCLEtBQUssNEJBQTRCLHNCQUFzQix1QkFBdUIseUJBQXlCLGVBQWUsS0FBSyxzQ0FBc0MsaUJBQWlCLHlCQUF5QixLQUFLLG9CQUFvQixTQUFTLHVCQUF1QixvQ0FBb0MsS0FBSyx1QkFBdUIsdUNBQXVDLEtBQUssK0JBQStCLFNBQVMsNEJBQTRCLG9CQUFvQiwwQkFBMEIscUNBQXFDLHNCQUFzQixLQUFLLDRCQUE0QixxQkFBcUIsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3QixnQ0FBZ0MscUJBQXFCLEtBQUssc0RBQXNELHFCQUFxQixLQUFLLDRCQUE0Qix5QkFBeUIsa0JBQWtCLGtCQUFrQixxQkFBcUIsS0FBSywwQkFBMEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsZ0NBQWdDLG1DQUFtQyxLQUFLLHdEQUF3RCxnQ0FBZ0MsS0FBSyxvQ0FBb0MsZ0NBQWdDLEtBQUssMERBQTBELDhCQUE4QixLQUFLLGlDQUFpQyxnQkFBZ0IsdUJBQXVCLEtBQUssa0JBQWtCLHdCQUF3Qix3QkFBd0IsZ0JBQWdCLGtCQUFrQixLQUFLLG9CQUFvQix3QkFBd0IsS0FBSywyQkFBMkIsMEJBQTBCLDJCQUEyQixLQUFLLGlDQUFpQyx3QkFBd0IsOEJBQThCLHlCQUF5QiwwQkFBMEIsc0JBQXNCLHdCQUF3QixxQkFBcUIsS0FBSyw2QkFBNkIsMEJBQTBCLEtBQUssb0NBQW9DLHlCQUF5QixnQkFBZ0IsZ0JBQWdCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHNCQUFzQix3QkFBd0IsZ0NBQWdDLHFCQUFxQixLQUFLLG1DQUFtQztBQUM5L047QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDJEQUEyRCxrQkFBa0IsS0FBSyxhQUFhLG9CQUFvQiwwQkFBMEIsS0FBSyxPQUFPLHFGQUFxRixVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksMkNBQTJDLGtCQUFrQixLQUFLLGFBQWEsb0JBQW9CLDBCQUEwQixLQUFLLG1CQUFtQjtBQUM3YTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsMERBQTBELGdDQUFnQyxLQUFLLDJCQUEyQixvQkFBb0Isa0JBQWtCLHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLDRCQUE0QixtQkFBbUIsS0FBSyxzREFBc0QseUJBQXlCLG1CQUFtQiw2QkFBNkIsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3Qix5QkFBeUIsNkJBQTZCLGdDQUFnQyxxQkFBcUIsS0FBSyxPQUFPLDRGQUE0RixZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVywwQ0FBMEMsZ0NBQWdDLEtBQUssMkJBQTJCLG9CQUFvQixrQkFBa0IseUJBQXlCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssNEJBQTRCLG1CQUFtQixLQUFLLHNEQUFzRCx5QkFBeUIsbUJBQW1CLDZCQUE2Qiw4QkFBOEIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLHlCQUF5Qiw2QkFBNkIsZ0NBQWdDLHFCQUFxQixLQUFLLG1CQUFtQjtBQUNwdEQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDeUg7QUFDN0I7QUFDTztBQUM3QjtBQUN0RSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyxtREFBNkI7QUFDdEc7QUFDQSxvREFBb0Qsa0VBQWtFLGtDQUFrQyxtQ0FBbUMsK0JBQStCLGdDQUFnQyx5QkFBeUIsS0FBSyxxQkFBcUIsbUJBQW1CLHlCQUF5Qix5QkFBeUIsS0FBSyx5Q0FBeUMsbUJBQW1CLDhCQUE4Qix5QkFBeUIseUJBQXlCLHFCQUFxQixLQUFLLHNCQUFzQixtQkFBbUIsd0JBQXdCLHNCQUFzQix3QkFBd0IsS0FBSyxvQkFBb0IsdUJBQXVCLHNCQUFzQix1QkFBdUIsc0JBQXNCLHdCQUF3Qiw2QkFBNkIsS0FBSyxvQkFBb0IsNEJBQTRCLGdCQUFnQixzQkFBc0IsdUJBQXVCLEtBQUssMEJBQTBCLGlCQUFpQixLQUFLLGlDQUFpQyxtQkFBbUIsbUNBQW1DLGdDQUFnQyxLQUFLLHNEQUFzRCxtQ0FBbUMsS0FBSyw0QkFBNEIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLG9DQUFvQyx5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0IseUdBQXlHLG9DQUFvQywyQ0FBMkMseUJBQXlCLEtBQUssT0FBTyxzRkFBc0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxvQ0FBb0MsbURBQW1ELGtDQUFrQyxtQ0FBbUMsK0JBQStCLGdDQUFnQyx5QkFBeUIsS0FBSyxxQkFBcUIsbUJBQW1CLHlCQUF5Qix5QkFBeUIsS0FBSyx5Q0FBeUMsbUJBQW1CLDhCQUE4Qix5QkFBeUIseUJBQXlCLHFCQUFxQixLQUFLLHNCQUFzQixtQkFBbUIsd0JBQXdCLHNCQUFzQix3QkFBd0IsS0FBSyxvQkFBb0IsdUJBQXVCLHNCQUFzQix1QkFBdUIsc0JBQXNCLHdCQUF3Qiw2QkFBNkIsS0FBSyxvQkFBb0IsNEJBQTRCLGdCQUFnQixzQkFBc0IsdUJBQXVCLEtBQUssMEJBQTBCLGlCQUFpQixLQUFLLGlDQUFpQyxtQkFBbUIsbUNBQW1DLGdDQUFnQyxLQUFLLHNEQUFzRCxtQ0FBbUMsS0FBSyw0QkFBNEIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLG9DQUFvQyx5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0IseUdBQXlHLG9DQUFvQywyQ0FBMkMseUJBQXlCLEtBQUssbUJBQW1CO0FBQzUrSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2QztBQUN5SDtBQUM3QjtBQUNPO0FBQzVCO0FBQ3ZFLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQixDQUFDLG9EQUE2QjtBQUN0RztBQUNBLHdEQUF3RCx5QkFBeUIsS0FBSyx5QkFBeUIsd0JBQXdCLG1CQUFtQixpQ0FBaUMsS0FBSyxpQ0FBaUMsV0FBVyxxQ0FBcUMsU0FBUywrQkFBK0IsNkJBQTZCLHVCQUF1Qix5QkFBeUIsa0VBQWtFLG1DQUFtQyxrQ0FBa0MsS0FBSyxnQ0FBZ0MscUJBQXFCLDhCQUE4Qix5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0IscUJBQXFCLEtBQUssd0JBQXdCLHVCQUF1QixnQkFBZ0Isc0JBQXNCLG9DQUFvQyx5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0IsNkJBQTZCLGdDQUFnQyxLQUFLLDJDQUEyQyx3QkFBd0IsS0FBSyxPQUFPLDBGQUEwRixZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSx3Q0FBd0MseUJBQXlCLEtBQUsseUJBQXlCLHdCQUF3QixtQkFBbUIsaUNBQWlDLEtBQUssaUNBQWlDLFdBQVcscUNBQXFDLFNBQVMsK0JBQStCLDZCQUE2Qix1QkFBdUIseUJBQXlCLHNEQUFzRCxtQ0FBbUMsa0NBQWtDLEtBQUssZ0NBQWdDLHFCQUFxQiw4QkFBOEIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLHFCQUFxQixLQUFLLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLHNCQUFzQixvQ0FBb0MseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLDZCQUE2QixnQ0FBZ0MsS0FBSywyQ0FBMkMsd0JBQXdCLEtBQUssbUJBQW1CO0FBQzFuRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2QztBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELHlCQUF5QixnQ0FBZ0MsS0FBSyw0QkFBNEIsc0JBQXNCLEtBQUssaUJBQWlCLHlCQUF5Qix3QkFBd0IsbUJBQW1CLGlDQUFpQyxLQUFLLDJCQUEyQixzQkFBc0IsS0FBSywrQkFBK0IsNEJBQTRCLEtBQUsseUJBQXlCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsS0FBSyxnQ0FBZ0MscUJBQXFCLEtBQUsseUJBQXlCLHVCQUF1QiwyQkFBMkIsb0JBQW9CLDhCQUE4QixLQUFLLHdCQUF3Qix5QkFBeUIsS0FBSyxpREFBaUQsOEJBQThCLHlCQUF5QixxQkFBcUIsS0FBSywwQkFBMEIsZ0JBQWdCLDRCQUE0QixzQkFBc0Isd0JBQXdCLGdDQUFnQyxLQUFLLHdCQUF3Qix1QkFBdUIsc0JBQXNCLHdCQUF3QixtQkFBbUIsS0FBSyw2QkFBNkIsb0JBQW9CLEtBQUssZ0NBQWdDLHVCQUF1QixLQUFLLGtDQUFrQyxTQUFTLCtCQUErQiw0QkFBNEIsS0FBSywrQkFBK0IsU0FBUyx3QkFBd0IsZ0JBQWdCLHdCQUF3Qiw4QkFBOEIseUJBQXlCLHVCQUF1QixzQkFBc0Isd0JBQXdCLHFCQUFxQixtQkFBbUIsS0FBSyx1QkFBdUIsbUJBQW1CLHlCQUF5QixzQkFBc0IsNEJBQTRCLHNCQUFzQixLQUFLLHVCQUF1QixrQkFBa0IsbUJBQW1CLGdCQUFnQix5QkFBeUIsYUFBYSxjQUFjLGdDQUFnQywwQkFBMEIsdUJBQXVCLEtBQUssdUNBQXVDLGtCQUFrQixLQUFLLDhCQUE4QixtQkFBbUIsb0JBQW9CLDBCQUEwQix5QkFBeUIsS0FBSyxxQkFBcUIsOEJBQThCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLHdCQUF3Qiw2QkFBNkIsZ0NBQWdDLHFCQUFxQixzQkFBc0Isa0NBQWtDLEtBQUsscUNBQXFDLHFCQUFxQixpQ0FBaUMsS0FBSyx3Q0FBd0MsdUJBQXVCLG9CQUFvQiw4QkFBOEIsS0FBSyxpQ0FBaUMsZ0JBQWdCLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHNCQUFzQix3QkFBd0IsNkJBQTZCLGdDQUFnQyxxQkFBcUIsS0FBSywyQkFBMkIsd0JBQXdCLHFCQUFxQiw4QkFBOEIseUJBQXlCLHVCQUF1Qix1QkFBdUIseUJBQXlCLGdDQUFnQyxxQkFBcUIsS0FBSyx5Q0FBeUMsbUJBQW1CLHdCQUF3QixvQkFBb0IsS0FBSyxvQ0FBb0MsdUJBQXVCLGtCQUFrQixtQkFBbUIsbUJBQW1CLHdCQUF3Qiw2QkFBNkIsb0JBQW9CLEtBQUssMkJBQTJCLHNCQUFzQix1QkFBdUIsbUJBQW1CLEtBQUssT0FBTyxrRkFBa0YsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLCtCQUErQix5QkFBeUIsZ0NBQWdDLEtBQUssNEJBQTRCLHNCQUFzQixLQUFLLGlCQUFpQix5QkFBeUIsd0JBQXdCLG1CQUFtQixpQ0FBaUMsS0FBSywyQkFBMkIsc0JBQXNCLEtBQUssK0JBQStCLDRCQUE0QixLQUFLLHlCQUF5Qix3QkFBd0IseUJBQXlCLG9CQUFvQiwwQkFBMEIscUNBQXFDLEtBQUssZ0NBQWdDLHFCQUFxQixLQUFLLHlCQUF5Qix1QkFBdUIsMkJBQTJCLG9CQUFvQiw4QkFBOEIsS0FBSyx3QkFBd0IseUJBQXlCLEtBQUssaURBQWlELDhCQUE4Qix5QkFBeUIscUJBQXFCLEtBQUssMEJBQTBCLGdCQUFnQiw0QkFBNEIsc0JBQXNCLHdCQUF3QixnQ0FBZ0MsS0FBSyx3QkFBd0IsdUJBQXVCLHNCQUFzQix3QkFBd0IsbUJBQW1CLEtBQUssNkJBQTZCLG9CQUFvQixLQUFLLGdDQUFnQyx1QkFBdUIsS0FBSyxrQ0FBa0MsU0FBUywrQkFBK0IsNEJBQTRCLEtBQUssK0JBQStCLFNBQVMsd0JBQXdCLGdCQUFnQix3QkFBd0IsOEJBQThCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLHdCQUF3QixxQkFBcUIsbUJBQW1CLEtBQUssdUJBQXVCLG1CQUFtQix5QkFBeUIsc0JBQXNCLDRCQUE0QixzQkFBc0IsS0FBSyx1QkFBdUIsa0JBQWtCLG1CQUFtQixnQkFBZ0IseUJBQXlCLGFBQWEsY0FBYyxnQ0FBZ0MsMEJBQTBCLHVCQUF1QixLQUFLLHVDQUF1QyxrQkFBa0IsS0FBSyw4QkFBOEIsbUJBQW1CLG9CQUFvQiwwQkFBMEIseUJBQXlCLEtBQUsscUJBQXFCLDhCQUE4Qix5QkFBeUIsd0JBQXdCLHNCQUFzQix3QkFBd0IsNkJBQTZCLGdDQUFnQyxxQkFBcUIsc0JBQXNCLGtDQUFrQyxLQUFLLHFDQUFxQyxxQkFBcUIsaUNBQWlDLEtBQUssd0NBQXdDLHVCQUF1QixvQkFBb0IsOEJBQThCLEtBQUssaUNBQWlDLGdCQUFnQiw4QkFBOEIseUJBQXlCLDBCQUEwQixzQkFBc0Isd0JBQXdCLDZCQUE2QixnQ0FBZ0MscUJBQXFCLEtBQUssMkJBQTJCLHdCQUF3QixxQkFBcUIsOEJBQThCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLHlCQUF5QixnQ0FBZ0MscUJBQXFCLEtBQUsseUNBQXlDLG1CQUFtQix3QkFBd0Isb0JBQW9CLEtBQUssb0NBQW9DLHVCQUF1QixrQkFBa0IsbUJBQW1CLG1CQUFtQix3QkFBd0IsNkJBQTZCLG9CQUFvQixLQUFLLDJCQUEyQixzQkFBc0IsdUJBQXVCLG1CQUFtQixLQUFLLG1CQUFtQjtBQUNqMFI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BxRDtBQUM1RixZQUFvRzs7QUFFcEc7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsNkZBQU87Ozs7QUFJeEIsaUVBQWUsb0dBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeUQ7QUFDNUYsWUFBeUY7O0FBRXpGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLGtGQUFPOzs7O0FBSXhCLGlFQUFlLHlGQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnlEO0FBQzVGLFlBQTRGOztBQUU1Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUl4QixpRUFBZSw0RkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p5RDtBQUM1RixZQUE2Rjs7QUFFN0Y7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJeEIsaUVBQWUsNkZBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeUQ7QUFDNUYsWUFBZ0c7O0FBRWhHOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHlGQUFPOzs7O0FBSXhCLGlFQUFlLGdHQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnlEO0FBQzVGLFlBQStGOztBQUUvRjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx3RkFBTzs7OztBQUl4QixpRUFBZSwrRkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p5RDtBQUM1RixZQUEwRjs7QUFFMUY7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJeEIsaUVBQWUsMEZBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeUQ7QUFDNUYsWUFBeUY7O0FBRXpGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLGtGQUFPOzs7O0FBSXhCLGlFQUFlLHlGQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnlEO0FBQzVGLFlBQXlGOztBQUV6Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxrRkFBTzs7OztBQUl4QixpRUFBZSx5RkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p5RDtBQUM1RixZQUEyRjs7QUFFM0Y7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsb0ZBQU87Ozs7QUFJeEIsaUVBQWUsMkZBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeUQ7QUFDNUYsWUFBK0c7O0FBRS9HOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHdHQUFPOzs7O0FBSXhCLGlFQUFlLCtHQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnlEO0FBQzVGLFlBQThGOztBQUU5Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUl4QixpRUFBZSw4RkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p5RDtBQUM1RixZQUEyRjs7QUFFM0Y7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsb0ZBQU87Ozs7QUFJeEIsaUVBQWUsMkZBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeUQ7QUFDNUYsWUFBa0c7O0FBRWxHOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDJGQUFPOzs7O0FBSXhCLGlFQUFlLGtHQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnlEO0FBQzVGLFlBQTRGOztBQUU1Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUl4QixpRUFBZSw0RkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p5RDtBQUM1RixZQUFnRzs7QUFFaEc7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMseUZBQU87Ozs7QUFJeEIsaUVBQWUsZ0dBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeUQ7QUFDNUYsWUFBd0Y7O0FBRXhGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLGlGQUFPOzs7O0FBSXhCLGlFQUFlLHdGQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWm5DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDeEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BLDJCOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLCtCQUErQjtXQUM5QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSwrQzs7OztVQzFGQTtVQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbiB7XHJcbiAgY29uc3RydWN0b3IgKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcclxuICAgIHRoaXMuZ3NhcCA9IGdzYXA7XHJcbiAgICB0aGlzLlNjcm9sbFRyaWdnZXIgPSBTY3JvbGxUcmlnZ2VyO1xyXG5cclxuICAgIHRoaXMuY3VyckJsb2NrQWN0aXZlID0gMCxcclxuICAgIHRoaXMuYWNjb3JkaW9uSW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvblNlY3Rpb25fX2ltZ0NvbnRhaW5lcicpO1xyXG4gICAgdGhpcy5hY2NvcmRpb25CbG9ja3MgPSB0aGlzLmdldEFjY29yZGlvbkJsb2Nrcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19ibG9jaycpKSxcclxuICAgIFxyXG5cclxuICAgIHRoaXMuYmxvY2tDb250ZW50QW5pbWF0aW9uRHVyYXRpb24gPSAwLjM1LFxyXG4gICAgdGhpcy5ibG9ja0ltZ0FuaW1hdGlvbkR1cmF0aW9uID0gMC43O1xyXG5cclxuICAgIHRoaXMuYmxvY2tDb250ZW50U3RhdGVPTiA9IHtcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmJsb2NrQ29udGVudEFuaW1hdGlvbkR1cmF0aW9uLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmJsb2NrQ29udGVudFN0YXRlT0ZGID0ge1xyXG4gICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmJsb2NrQ29udGVudEFuaW1hdGlvbkR1cmF0aW9uLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmJsb2NrSW1nU3RhdGVPTiA9IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgZHVyYXRpb246IHRoaXMuYmxvY2tJbWdBbmltYXRpb25EdXJhdGlvbixcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5ibG9ja0ltZ1N0YXRlT0ZGID0ge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICBkdXJhdGlvbjogdGhpcy5ibG9ja0ltZ0FuaW1hdGlvbkR1cmF0aW9uLFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGhpcy5hY2NvcmRpb25fSGVhZGVyX0NsaWNrX0hhbmRsZXIgPSB0aGlzLmFjY29yZGlvbl9IZWFkZXJfQ2xpY2tfSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCAoKSB7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzVG9IZWFkZXJzKCk7XHJcblxyXG4gICAgdGhpcy5zZXQxQmxvY2tJbml0U3RhdGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJsb2NrIChjdXJyQmxvY2ssIGkpIHtcclxuICAgIGNvbnN0IGJsb2NrID0geyBcclxuICAgICAgYmxvY2s6IGN1cnJCbG9jayxcclxuICAgICAgaGVhZGVyOiBjdXJyQmxvY2sucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faGVhZGVyJyksXHJcbiAgICAgIGNvbnRlbnQ6IGN1cnJCbG9jay5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19jb250ZW50JyksXHJcbiAgICAgIGltZzogdGhpcy5hY2NvcmRpb25JbWFnZXNbaV19O1xyXG4gICAgXHJcbiAgICBibG9jay5oZWFkZXIuZGF0YXNldC5hY2NvcmRpb25JbmRleCA9IGk7XHJcblxyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWNjb3JkaW9uQmxvY2tzIChlbGVtZW50cykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgQXJyYXkuZnJvbShlbGVtZW50cykubWFwKHRoaXMuY3JlYXRlQmxvY2suYmluZCh0aGlzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhZGRFdmVudExpc3RlbmVyc1RvSGVhZGVycyAoKSB7XHJcbiAgICB0aGlzLmFjY29yZGlvbkJsb2Nrcy5mb3JFYWNoKHRoaXMuYWRkQ2xpY2tMaXN0ZW5lclRvSGVhZGVycy5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFkZENsaWNrTGlzdGVuZXJUb0hlYWRlcnMgKGVsZW0pIHtcclxuICAgIGVsZW0uaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NvcmRpb25fSGVhZGVyX0NsaWNrX0hhbmRsZXIpO1xyXG4gIH1cclxuICBcclxuICBhY2NvcmRpb25fSGVhZGVyX0NsaWNrX0hhbmRsZXIgKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5jdXJyQmxvY2tBY3RpdmUgPT09ICtldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWNjb3JkaW9uSW5kZXgpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmN1cnJCbG9ja0FjdGl2ZSA9ICtldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWNjb3JkaW9uSW5kZXg7XHJcblxyXG4gICAgdGhpcy5hY2NvcmRpb25CbG9ja3MuZm9yRWFjaCgoYmxvY2ssIGkpID0+IHtcclxuICAgICAgdGhpcy5jdXJyQmxvY2tBY3RpdmUgPT09IGkgXHJcbiAgICAgICAgPyB0aGlzLmJsb2NrVHVybk9OKGJsb2NrLCBpKVxyXG4gICAgICAgIDogdGhpcy5ibG9ja1R1cm5PRkYoYmxvY2ssIGkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXQxQmxvY2tJbml0U3RhdGUgKCkge1xyXG4gICAgbGV0IGJsb2NrID0gdGhpcy5hY2NvcmRpb25CbG9ja3NbMF07XHJcbiAgICB0aGlzLmdzYXAudGltZWxpbmUoKVxyXG4gICAgLnRvKGJsb2NrLmNvbnRlbnQsIHRoaXMuYmxvY2tDb250ZW50U3RhdGVPTilcclxuICAgIC50byhibG9jay5pbWcsIHRoaXMuYmxvY2tJbWdTdGF0ZU9OLCAwKTtcclxuICB9XHJcblxyXG4gIGJsb2NrVHVybk9OIChibG9jaywgaW5kZXgpIHtcclxuICAgIGJsb2NrLmJsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9fYmxvY2stLWFjdGl2ZScpO1xyXG5cclxuICAgIGxldCB0dXJuT05UaW1lbGluZSA9IHRoaXMuZ3NhcC50aW1lbGluZSgpO1xyXG4gICAgdHVybk9OVGltZWxpbmVcclxuICAgICAgLnRvKGJsb2NrLmNvbnRlbnQsIHRoaXMuYmxvY2tDb250ZW50U3RhdGVPTilcclxuICAgICAgLnRvKGJsb2NrLmltZywgdGhpcy5ibG9ja0ltZ1N0YXRlT04sIDApO1xyXG4gIH1cclxuXHJcbiAgYmxvY2tUdXJuT0ZGIChibG9jaywgaW5kZXgpIHtcclxuICAgIGJsb2NrLmJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9fYmxvY2stLWFjdGl2ZScpO1xyXG5cclxuICAgIGxldCB0dXJuT0ZGVGltZWxpbmUgPSB0aGlzLmdzYXAudGltZWxpbmUoKTtcclxuICAgIHR1cm5PRkZUaW1lbGluZVxyXG4gICAgICAudG8oYmxvY2suY29udGVudCwgdGhpcy5ibG9ja0NvbnRlbnRTdGF0ZU9GRilcclxuICAgICAgLnRvKGJsb2NrLmltZywgdGhpcy5ibG9ja0ltZ1N0YXRlT0ZGLCAwKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IENob2ljZXMgZnJvbSAnY2hvaWNlcy5qcydcclxuaW1wb3J0IFwiY2hvaWNlcy5qcy9wdWJsaWMvYXNzZXRzL3N0eWxlcy9jaG9pY2VzLm1pbi5jc3NcIjtcclxuaW1wb3J0IHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuY2hhdElzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuY2hhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGF0Jyk7XHJcbiAgICB0aGlzLmNoYXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2QmFyX19jaGF0QnV0b24nKTtcclxuICAgIHRoaXMuY2hhdENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRfX2Nsb3NlQnV0dG9uJyk7XHJcblxyXG4gICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXRfX2Zvcm0nKTtcclxuICAgIHRoaXMuaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2lucHV0Jyk7XHJcbiAgICB0aGlzLnNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9faW5wdXQtLXNlbGVjdCcpO1xyXG4gICAgdGhpcy5zdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9faW5wdXQtLXN1Ym1pdCcpO1xyXG5cclxuXHJcbiAgICB0aGlzLnRvZ2dsZUNoYXQgPSB0aGlzLnRvZ2dsZUNoYXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudG9nZ2xlQ2hhdEJsb2NrID0gdGhpcy50b2dnbGVDaGF0QmxvY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMudG9nZ2xlQm9keVNjcm9sbExvY2sgPSB0aGlzLnRvZ2dsZUJvZHlTY3JvbGxMb2NrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmlucHV0Q2hhbmdlTGlzdGVuZXIgPSB0aGlzLmlucHV0Q2hhbmdlTGlzdGVuZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZm9ybVN1Ym1pdENsaWNrTGlzdGVuZXIgPSB0aGlzLmZvcm1TdWJtaXRDbGlja0xpc3RlbmVyLmJpbmQodGhpcyk7XHJcbiAgICAvKiB0aGlzLmRyb3BEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMuZHJvcERvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyk7ICovXHJcblxyXG4gICAgdGhpcy5hZGRDaGF0QnV0dG9uQ2xpY2tMaXN0ZW5lciA9IHRoaXMuYWRkQ2hhdEJ1dHRvbkNsaWNrTGlzdGVuZXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXQgKCkge1xyXG4gICAgdGhpcy5hZGRDaGF0QnV0dG9uQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy5hZGRJbnB1dHNDaGFuZ2VMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuYWRkRm9ybVN1Ym1pdENsaWNrTGlzdGVuZXIoKTtcclxuICAgIC8vdGhpcy5hZGRTZWxlY3RzRHJvcERvd25FdmVudExpc3RlbmVyKCk7XHJcbiAgICB0aGlzLnNldFVwU2VsZWN0aW9ucygpOyAgXHJcbiAgfVxyXG5cclxuICAvKiBhZGRTZWxlY3RzRHJvcERvd25FdmVudExpc3RlbmVyICgpIHtcclxuICAgIHRoaXMuc2VsZWN0cy5mb3JFYWNoKCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignc2hvd0Ryb3Bkb3duJywgdGhpcy5kcm9wRG93bkV2ZW50TGlzdGVuZXIpO1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdoaWRlRHJvcGRvd24nLCB0aGlzLmRyb3BEb3duRXZlbnRMaXN0ZW5lcik7XHJcbiAgICB9KS5iaW5kKHRoaXMpKTtcclxuICB9ICovXHJcblxyXG4gIC8qIGRyb3BEb3duRXZlbnRMaXN0ZW5lciAoZXZlbnQpIHtcclxuICAgIGxldCBpbnB1dCA9IHRoaXMuZ2V0Q2hvaWNlc0lmSW5wdXRJc1NlbGVjdChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm1fX2lucHV0LS1zaG93RHJvcGRvd24nKTtcclxuICB9ICovXHJcblxyXG4gIGFkZElucHV0c0NoYW5nZUxpc3RlbmVycyAoKSB7XHJcbiAgICB0aGlzLmlucHV0cy5mb3JFYWNoKCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5pbnB1dENoYW5nZUxpc3RlbmVyKTtcclxuICAgIH0pLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2hvaWNlc0lmSW5wdXRJc1NlbGVjdCAoaW5wdXQpIHtcclxuICAgIGxldCBlbGVtID0gaW5wdXQ7XHJcbiAgICBpZiAoZWxlbS50YWdOYW1lICE9PSAnU0VMRUNUJykge1xyXG4gICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcbiAgICB3aGlsZShlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucygnY2hvaWNlcycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcblxyXG4gIGlucHV0Q2hhbmdlTGlzdGVuZXIgKGV2ZW50KSB7XHJcbiAgICBsZXQgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxyXG4gICAgaW5wdXRWYWx1ZUlzVmFsaWQgPSB0aGlzLmlucHV0SXNWYWxpZChpbnB1dCk7XHJcblxyXG4gICAgdGhpcy50b2dnbGVJbnB1dChpbnB1dCwgaW5wdXRWYWx1ZUlzVmFsaWQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSW5wdXQgKGlucHV0LCBpc1ZhbGlkKSB7XHJcbiAgICBsZXQgaW5wdXRJc0VtcHR5ID0gaW5wdXQudmFsdWUgPT09ICcnID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgaW5wdXRPckNob2ljZXMgPSB0aGlzLmdldENob2ljZXNJZklucHV0SXNTZWxlY3QoaW5wdXQpO1xyXG5cclxuICAgIGlucHV0T3JDaG9pY2VzLmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm1fX2lucHV0LS1maWxsZWQnLCAhaW5wdXRJc0VtcHR5KTtcclxuXHJcbiAgICBpbnB1dE9yQ2hvaWNlcy5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtX19pbnB1dC0tZXJyb3InLCAhaXNWYWxpZCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaG9pY2VzIChzZWxlY3QpIHtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICByZW5kZXJDaG9pY2VMaW1pdDogLTEsXHJcbiAgICAgIG1heEl0ZW1Db3VudDogMSxcclxuICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICBzZWFyY2hFbmFibGVkOiBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb3JtX19pbnB1dC0tc2VhcmNoRW5hYmxlZCcpLFxyXG4gICAgICBzZWFyY2hGaWVsZHM6IFsndmFsdWUnXSxcclxuICAgICAgc2hvdWxkU29ydDogZmFsc2UsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBmYWxzZSxcclxuICAgICAgc2VhcmNoUGxhY2Vob2xkZXJWYWx1ZTogJ1NlYXJjaCcsXHJcbiAgICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcclxuICAgICAgY2xhc3NOYW1lczoge1xyXG4gICAgICAgIGNvbnRhaW5lck91dGVyOiAnY2hvaWNlcyBmb3JtX19pbnB1dCcsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgbGV0IGNob2ljZXMgPSBuZXcgQ2hvaWNlcyhzZWxlY3QsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXBTZWxlY3Rpb25zICgpIHtcclxuICAgIHRoaXMuc2VsZWN0cy5mb3JFYWNoKHRoaXMuY3JlYXRlQ2hvaWNlcyk7XHJcbiAgfVxyXG5cclxuICBhZGRDaGF0QnV0dG9uQ2xpY2tMaXN0ZW5lciAoKSB7XHJcbiAgICB0aGlzLmNoYXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNoYXQpO1xyXG4gICAgdGhpcy5jaGF0Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNoYXQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ2hhdCAoKSB7XHJcbiAgICB0aGlzLnRvZ2dsZUNoYXRCbG9jaygpO1xyXG4gICAgdGhpcy50b2dnbGVCb2R5U2Nyb2xsTG9jaygpO1xyXG4gICAgdGhpcy5jaGF0SXNPcGVuID0gdGhpcy5jaGF0SXNPcGVuID8gZmFsc2UgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ2hhdEJsb2NrICgpIHtcclxuICAgIHRoaXMuY2hhdC5jbGFzc0xpc3QudG9nZ2xlKCdjaGF0LS1vcGVuJyk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVCb2R5U2Nyb2xsTG9jayAoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2JvZHktLXNjcm9sbC1sb2NrJyk7XHJcbiAgfVxyXG5cclxuICBpbnB1dElzVmFsaWQgKGlucHV0KSB7XHJcbiAgICBsZXQgdmFsdWUgPSBTdHJpbmcoaW5wdXQudmFsdWUpLFxyXG4gICAgdmFsdWVJc0VtcHR5ID0gdmFsaWRhdG9yLmlzRW1wdHkodmFsdWUpLFxyXG4gICAgdmFsdWVJc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIWlucHV0LnJlcXVpcmVkKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZUlzVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgIHZhbHVlSXNWYWxpZCA9ICF2YWx1ZUlzRW1wdHk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICB2YWx1ZUlzVmFsaWQgPSB2YWxpZGF0b3IuaXNFbWFpbCh2YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3RlbCc6XHJcbiAgICAgICAgdmFsdWVJc1ZhbGlkID0gdmFsaWRhdG9yLmlzTW9iaWxlUGhvbmUodmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZUlzVmFsaWQ7XHJcbiAgfVxyXG5cclxuICBhZGRGb3JtU3VibWl0Q2xpY2tMaXN0ZW5lciAoKSB7XHJcbiAgICB0aGlzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZm9ybVN1Ym1pdENsaWNrTGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgZm9ybVN1Ym1pdENsaWNrTGlzdGVuZXIgKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCBmb3JtSXNWYWxpZCA9IHRoaXMuY2hlY2tBbGxJbnB1dHModGhpcy5pbnB1dHMpO1xyXG5cclxuICAgIGZvcm1Jc1ZhbGlkICYmIHRoaXMuc3VibWl0Rm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tBbGxJbnB1dHMgKGlucHV0cykge1xyXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0ID0+IHtcclxuICAgICAgbGV0IGlucHV0VmFsdWVJc1ZhbGlkID0gdGhpcy5pbnB1dElzVmFsaWQoaW5wdXQpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy50b2dnbGVJbnB1dChpbnB1dCwgaW5wdXRWYWx1ZUlzVmFsaWQpO1xyXG4gICAgICBcclxuICAgICAgaW5wdXRWYWx1ZUlzVmFsaWQgfHwgKGlzVmFsaWQgPSBmYWxzZSk7XHJcbiAgICAgIFxyXG4gICAgfSkuYmluZCh0aGlzKSk7XHJcbiAgICByZXR1cm4gaXNWYWxpZDsgIFxyXG4gIH1cclxuXHJcbiAgc3VibWl0Rm9ybSAoKSB7XHJcbiAgICBsZXQgdXJsID0gdGhpcy5mb3JtLmFjdGlvbjtcclxuICAgIGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSlcclxuICAgIH0pLnRoZW4odGhpcy5mZXRjaFJlc3VsdEhhbmRsZXIuYmluZCh0aGlzKSwgXHJcbiAgICB0aGlzLmZldGNoRXJyb3JIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZmV0Y2hSZXN1bHRIYW5kbGVyIChyZXNwb25zZSkge1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmZXRjaEVycm9ySGFuZGxlciAoZXJyb3IpIHtcclxuXHJcbiAgfVxyXG5cclxufSIsIi8qIGltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRzIHtcclxuICBjb25zdHJ1Y3RvciAoZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xyXG4gICAgdGhpcy5nc2FwID0gZ3NhcDtcclxuICAgIHRoaXMuU2Nyb2xsVHJpZ2dlciA9IFNjcm9sbFRyaWdnZXI7XHJcblxyXG4gICAgdGhpcy5wYXJhbGxheEJsb2NrcyA9IGdzYXAudXRpbHMudG9BcnJheSgnLmNsaWVudHNfX3BhcmFsbGF4QmxvY2snKTtcclxuICB9XHJcblxyXG4gIGluaXQgKCkge1xyXG4gICAgdGhpcy5zZXRVcHdoYXRJc0Jsb2NrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUd2VlbiAoZWxlbWVudCwgaXNMZWZ0TGF5b3V0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5nc2FwLmZyb21UbyhlbGVtZW50LCBcclxuICAgICAgeyB4UGVyY2VudDogaXNMZWZ0TGF5b3V0ID8gMCA6IC01MFxyXG4gICAgICB9LFxyXG4gICAgICB7IHhQZXJjZW50OiBpc0xlZnRMYXlvdXQgPyAtNTAgOiAwLFxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFVwd2hhdElzQmxvY2sgKCkge1xyXG4gICAgdGhpcy5wYXJhbGxheEJsb2Nrcy5mb3JFYWNoKChoZWFkZXIsIGkpPT57XHJcbiAgICAgIGxldCBsZWZ0TGF5b3V0ID0gKGkgJSAyID4gMCkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgIGxldCB0d2VlbiA9IHRoaXMuZ2V0VHdlZW4oaGVhZGVyLCBsZWZ0TGF5b3V0KTtcclxuXHJcbiAgICAgIHRoaXMuU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGhlYWRlcixcclxuICAgICAgICBzdGFydDogJ3RvcCBib3R0b20nLFxyXG4gICAgICAgIGVuZDogJ2JvdHRvbSB0b3AnLFxyXG4gICAgICAgIGFuaW1hdGlvbjogdHdlZW4sXHJcbiAgICAgICAgc2NydWI6IDEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSIsIi8qIGltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTsgKi9cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSGVybyB7XHJcbiAgY29uc3RydWN0b3IgKGdzYXAsIFNjcm9sbFRyaWdnZXIpIHtcclxuICAgIHRoaXMuZ3NhcCA9IGdzYXA7XHJcbiAgICB0aGlzLlNjcm9sbFRyaWdnZXIgPSBTY3JvbGxUcmlnZ2VyO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZFRpbWVsaW5lID0gdGhpcy5nc2FwLnRpbWVsaW5lKCk7XHJcbiAgICB0aGlzLnNwaGVyZVRpbWVsaW5lID0gdGhpcy5nc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgdGhpcy5oZXJvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbFwiKTtcclxuICAgIHRoaXMuQkdMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tnb3VuZExvZ29fX2ltZycpO1xyXG4gICAgdGhpcy5zcGhlcmVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaGVyZVNlY3Rpb24nKTtcclxuICAgIHRoaXMuc3BoZXJlSW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BoZXJlU2VjdGlvbl9faW5uZXInKTtcclxuICAgIHRoaXMuaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb1NlY3Rpb24nKTtcclxuXHJcbiAgICB0aGlzLmxvZ29MaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZCYXJfX2xvZ28tLWxpZ2h0Jyk7XHJcbiAgICB0aGlzLmxvZ29EYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkJhcl9fbG9nby0tZGFyaycpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCAoKSB7XHJcbiAgICB0aGlzLnBpbk5hdkJhcigpO1xyXG4gICAgdGhpcy5zZXRVcEJHTG9nbygpO1xyXG4gICAgdGhpcy5zZXRVcEhvcmlzb250YWxTY3JvbGxTZWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwaW5OYXZCYXIgKCkge1xyXG4gICAgdGhpcy5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgIHRyaWdnZXI6IHRoaXMuaGVyb0NvbnRhaW5lcixcclxuICAgICAgcGluOiAnLm5hdkJhcicsXHJcbiAgICAgIHNjcnViOiAxLFxyXG4gICAgICBzdGFydDogJ3RvcCB0b3AnLFxyXG4gICAgICBlbmQ6ICgpID0+IFwiKz1cIiArIHRoaXMuaGVyb0NvbnRhaW5lci5vZmZzZXRXaWR0aCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VXBCR0xvZ28gKCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kVGltZWxpbmVcclxuICAgIC50byhcclxuICAgICAgdGhpcy5CR0xvZ28sXHJcbiAgICAgIHsgb3BhY2l0eTogMSxcclxuICAgICAgICB4UGVyY2VudDogMCxcclxuICAgICAgICBkdXJhdGlvbjogMSB9KVxyXG4gICAgICAudG8oXHJcbiAgICAgICAgdGhpcy5CR0xvZ28sXHJcbiAgICAgICAgeyBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgeFBlcmNlbnQ6IC0xMDAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMiB9KTtcclxuXHJcbiAgICB0aGlzLlNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgdHJpZ2dlcjogdGhpcy5oZXJvQ29udGFpbmVyLFxyXG4gICAgICBwaW46IHRoaXMuQkdMb2dvLFxyXG4gICAgICBhbnRpY2lwYXRlUGluOiAxLFxyXG4gICAgICBhbmltYXRpb246IHRoaXMuYmFja2dyb3VuZFRpbWVsaW5lLFxyXG4gICAgICBzY3J1YjogMSxcclxuICAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcclxuICAgICAgZW5kOiAoKSA9PiBcIis9XCIgKyB0aGlzLmhlcm9Db250YWluZXIub2Zmc2V0V2lkdGgsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmdzYXAuc2V0KHRoaXMuQkdMb2dvLCB7b3BhY2l0eTogMH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VXBIb3Jpc29udGFsU2Nyb2xsU2VjdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IGxvZ29zSXNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICBmdW5jdGlvbiBjaGVja1Byb2dyZXNzICh7cHJvZ3Jlc3MsIGRpcmVjdGlvbiwgaXNBY3RpdmV9KSB7XHJcbiAgICAgIGlmIChsb2dvc0lzQ2hhbmdlZCkge1xyXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDAuNykge1xyXG4gICAgICAgICAgbG9nb3NJc0NoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5sb2dvTGlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2QmFyX19sb2dvLS1vcGFjaXR5LTAnKTtcclxuICAgICAgICAgIHRoaXMubG9nb0RhcmsuY2xhc3NMaXN0LmFkZCgnbmF2QmFyX19sb2dvLS1vcGFjaXR5LTAnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzID4gMC43KSB7XHJcbiAgICAgICAgICBsb2dvc0lzQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMubG9nb0xpZ2h0LmNsYXNzTGlzdC5hZGQoJ25hdkJhcl9fbG9nby0tb3BhY2l0eS0wJyk7XHJcbiAgICAgICAgICB0aGlzLmxvZ29EYXJrLmNsYXNzTGlzdC5yZW1vdmUoJ25hdkJhcl9fbG9nby0tb3BhY2l0eS0wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zcGhlcmVUaW1lbGluZVxyXG4gICAgICAudG8oXHJcbiAgICAgICAgdGhpcy5zcGhlcmVTZWN0aW9uLFxyXG4gICAgICAgIHsgeFBlcmNlbnQ6IC0xMDAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogNCB9KVxyXG4gICAgICAudG8oXHJcbiAgICAgICAgdGhpcy5oZXJvU2VjdGlvbixcclxuICAgICAgICB7IHhQZXJjZW50OiAtMTAwLFxyXG4gICAgICAgICAgZHVyYXRpb246IDQgfSxcclxuICAgICAgICAwKVxyXG4gICAgICAudG8oXHJcbiAgICAgICAgdGhpcy5zcGhlcmVJbm5lcixcclxuICAgICAgICB7IHhQZXJjZW50OiAyNSxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxIH0sXHJcbiAgICAgICAgMCk7XHJcblxyXG4gICAgdGhpcy5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgIHRyaWdnZXI6IHRoaXMuaGVyb0NvbnRhaW5lcixcclxuICAgICAgcGluOiB0cnVlLFxyXG4gICAgICBhbnRpY2lwYXRlUGluOiAxLFxyXG4gICAgICBhbmltYXRpb246IHRoaXMuc3BoZXJlVGltZWxpbmUsXHJcbiAgICAgIHNjcnViOiAxLFxyXG4gICAgICBzdGFydDogJ3RvcCB0b3AnLFxyXG4gICAgICBlbmQ6ICgpID0+IFwiKz1cIiArIHRoaXMuaGVyb0NvbnRhaW5lci5vZmZzZXRXaWR0aCxcclxuICAgICAgb25VcGRhdGU6IGNoZWNrUHJvZ3Jlc3MuYmluZCh0aGlzKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSIsIi8qIGltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTsgKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBIb3dJdFdvcmtzIHtcclxuICBjb25zdHJ1Y3RvciAoZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xyXG4gICAgdGhpcy5nc2FwID0gZ3NhcDtcclxuICAgIHRoaXMuU2Nyb2xsVHJpZ2dlciA9IFNjcm9sbFRyaWdnZXI7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kVGltZWxpbmUgPSB0aGlzLmdzYXAudGltZWxpbmUoKTtcclxuXHJcbiAgICB0aGlzLlN0YWdlcyA9IFsnQWlsZXQgQUknLCAnU3RhZ2UgMScsICdTdGFnZSAyJ107XHJcbiAgICB0aGlzLlN0YWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3dJdFdvcmtzX19zdGFnZUluZGljYXRvckhlYWRlcicpO1xyXG4gICAgdGhpcy5zdGFnZUltYWdlcyA9IHRoaXMuZ3NhcC51dGlscy50b0FycmF5KCcuU1RfX3N0YWdlSW1nQ29udGFpbmVyJyk7XHJcbiAgICB0aGlzLkJsb2NrcyA9IHRoaXMuZ3NhcC51dGlscy50b0FycmF5KCcuU1RfX2NvbnRlbnRCbG9jay0tcmlnaHQnKTtcclxuICAgIHRoaXMuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNUX19Db250YWluZXInKTtcclxuICAgIHRoaXMuTGVmdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU1RfX2NvbnRlbnRDb250YWluZXItLWxlZnQnKTtcclxuICAgIHRoaXMuU3RhZ2VJbmRpY2F0b3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU1RfX2NvbnRlbnRDb250YWluZXItLXN0YWdlJyk7XHJcbiAgICBcclxuXHJcbiAgICB0aGlzLmN1cnJlblN0YWdlID0gMDtcclxuICB9XHJcblxyXG4gIGluaXQgKCkge1xyXG4gICAgdGhpcy5waW5MZWZ0U2lkZSgpO1xyXG4gIFxyXG4gICAgdGhpcy5waW5TdGFnZUluZGljYXRvcigpO1xyXG4gICAgXHJcbiAgICB0aGlzLkJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSk9PntcclxuXHJcbiAgICAgIC8qIEZBREVPVVQgKi9cclxuICAgICAgbGV0IGZhZGVPdXQgPSB0aGlzLmdzYXAudGltZWxpbmUoKTtcclxuICBcclxuICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5hZGRGYWRlT3V0QW5pbVRvUmlnaHRCbG9jayhmYWRlT3V0LCBibG9jayk7XHJcbiAgICAgICAgdGhpcy5hZGRGYWRlT3V0QW5pbVRvU3RhZ2VJbWcoZmFkZU91dCwgdGhpcy5zdGFnZUltYWdlc1tpIC0gMV0pO1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIHRoaXMuU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGJsb2NrLFxyXG4gICAgICAgIHN0YXJ0OiAndG9wIDUwJScsXHJcbiAgICAgICAgZW5kOiAndG9wIDEwJScsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0LFxyXG4gICAgICAgIHNjcnViOiAxLFxyXG4gICAgICAgIG9uRW50ZXI6IGkgPiAwICYmIHRoaXMuc3RhZ2VJbmNBbmltLmJpbmQodGhpcyksXHJcbiAgICAgICAgb25MZWF2ZUJhY2s6IGkgPiAwICYmIHRoaXMuc3RhZ2VEZWNBbmltLmJpbmQodGhpcyksXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAvKiBGQURFSU4gKi9cclxuICAgICAgbGV0IGZhZGVJbiA9IHRoaXMuZ3NhcC50aW1lbGluZSgpO1xyXG4gIFxyXG4gICAgICBpZiAoaSA8IHRoaXMuQmxvY2tzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLmFkZEZhZGVJbkFuaW1Ub1JpZ2h0QmxvY2soZmFkZUluLCBibG9jayk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKGkgPiAwICYmIGkgPCB0aGlzLnN0YWdlSW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuYWRkRmFkZUluQW5pbVRvU3RhZ2VJbWcoZmFkZUluLCB0aGlzLnN0YWdlSW1hZ2VzW2kgLSAxXSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdGhpcy5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogYmxvY2ssXHJcbiAgICAgICAgc3RhcnQ6ICdib3R0b20gOTAlJyxcclxuICAgICAgICBlbmQ6ICdib3R0b20gNTAlJyxcclxuICAgICAgICBhbmltYXRpb246IGZhZGVJbixcclxuICAgICAgICBzY3J1YjogMSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICB9KTtcclxuICBcclxuICAgIHRoaXMuc2V0QmxvY2tzSW5pdFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGFnZUluY0FuaW0gKCkge1xyXG4gICAgdGhpcy5nc2FwLnRpbWVsaW5lKClcclxuICAgICAgLnRvKHRoaXMuU3RhZ2VDb250ZW50LCB7YXV0b0FscGhhOiAwLCBkdXJhdGlvbjogMC4yfSlcclxuICAgICAgLmNhbGwodGhpcy5zdGFnZUluYy5iaW5kKHRoaXMpKVxyXG4gICAgICAudG8odGhpcy5TdGFnZUNvbnRlbnQsIHthdXRvQWxwaGE6IDEsIGR1cmF0aW9uOiAwLjJ9KTtcclxuICB9XHJcbiAgc3RhZ2VEZWNBbmltICgpIHtcclxuICAgIHRoaXMuZ3NhcC50aW1lbGluZSgpXHJcbiAgICAgIC50byh0aGlzLlN0YWdlQ29udGVudCwge2F1dG9BbHBoYTogMCwgZHVyYXRpb246IDAuMn0pXHJcbiAgICAgIC5jYWxsKHRoaXMuc3RhZ2VEZWMuYmluZCh0aGlzKSlcclxuICAgICAgLnRvKHRoaXMuU3RhZ2VDb250ZW50LCB7YXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMC4yfSk7XHJcbiAgfVxyXG4gIHN0YWdlSW5jICgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlblN0YWdlICsgMSA+IHRoaXMuU3RhZ2VzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgaWYgKHRoaXMuU3RhZ2VzWysrdGhpcy5jdXJyZW5TdGFnZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5TdGFnZUNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5TdGFnZXNbdGhpcy5jdXJyZW5TdGFnZV07XHJcbiAgfVxyXG4gIHN0YWdlRGVjICgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlblN0YWdlIC0gMSA8IC0xKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5TdGFnZXNbLS10aGlzLmN1cnJlblN0YWdlXSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICB0aGlzLlN0YWdlQ29udGVudC5pbm5lckhUTUwgPSB0aGlzLlN0YWdlc1t0aGlzLmN1cnJlblN0YWdlXTtcclxuICB9XHJcblxyXG4gIHNldEJsb2Nrc0luaXRTdGF0ZSAoKSB7XHJcbiAgICBsZXQgYmxvY2tzQXJyID0gdGhpcy5nc2FwLnV0aWxzLnRvQXJyYXkoJy5TVF9fY29udGVudEJsb2NrLS1yaWdodCcpO1xyXG4gIFxyXG4gICAgYmxvY2tzQXJyLnNoaWZ0KCk7XHJcbiAgXHJcbiAgICB0aGlzLmdzYXAuc2V0KFxyXG4gICAgICBibG9ja3NBcnIsXHJcbiAgICAgIHtvcGFjaXR5OiAwfVxyXG4gICAgKTtcclxuICBcclxuICAgIHRoaXMuZ3NhcC5zZXQoXHJcbiAgICAgIHRoaXMuc3RhZ2VJbWFnZXMsIFxyXG4gICAgICB7IGF1dG9BbHBoYTogMCxcclxuICAgICAgICB5UGVyY2VudDogMTAgfSk7XHJcbiAgfVxyXG5cclxuICBwaW5MZWZ0U2lkZSAoKSB7XHJcbiAgICB0aGlzLlNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgdHJpZ2dlcjogdGhpcy5Db250YWluZXIsXHJcbiAgICAgIHN0YXJ0OiAndG9wIHRvcCcsXHJcbiAgICAgIGVuZDogJ2JvdHRvbSBib3R0b20nLFxyXG4gICAgICBwaW46IHRoaXMuTGVmdENvbnRlbnQsXHJcbiAgICAgIGFudGljaXBhdGVQaW46IDEsXHJcbiAgICAgIC8qIHJlZnJlc2hQcmlvcml0eTogLTEwICovXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBpblN0YWdlSW5kaWNhdG9yICgpIHtcclxuICAgIHRoaXMuU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICB0cmlnZ2VyOiB0aGlzLkNvbnRhaW5lcixcclxuICAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcclxuICAgICAgZW5kOiAnYm90dG9tIGJvdHRvbScsXHJcbiAgICAgIHBpbjogdGhpcy5TdGFnZUluZGljYXRvckNvbnRhaW5lcixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkRmFkZU91dEFuaW1Ub1JpZ2h0QmxvY2sgKHRpbWVsaW5lLCBlbGVtZW50KSB7XHJcbiAgICB0aW1lbGluZS5mcm9tVG8oXHJcbiAgICAgIGVsZW1lbnQsXHJcbiAgICAgIHsgb3BhY2l0eTogMCB9LFxyXG4gICAgICB7IG9wYWNpdHk6IDEsXHJcbiAgICAgICAgZHVyYXRpb246IDIgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRGYWRlT3V0QW5pbVRvU3RhZ2VJbWcgKHRpbWVsaW5lLCBlbGVtZW50KSB7XHJcbiAgICB0aW1lbGluZVxyXG4gICAgICAuZnJvbVRvKFxyXG4gICAgICAgIGVsZW1lbnQsIFxyXG4gICAgICAgIHsgYXV0b0FscGhhOiAwIH0sXHJcbiAgICAgICAgeyBhdXRvQWxwaGE6IDEsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMSB9LCAwKVxyXG4gICAgICAuZnJvbVRvKFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgeyB5UGVyY2VudDogMTAgfSxcclxuICAgICAgICB7IHlQZXJjZW50OiAwLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBhZGRGYWRlSW5BbmltVG9SaWdodEJsb2NrICh0aW1lbGluZSwgZWxlbWVudCkge1xyXG4gICAgdGltZWxpbmUuZnJvbVRvKFxyXG4gICAgICBlbGVtZW50LFxyXG4gICAgICB7IG9wYWNpdHk6IDEgfSxcclxuICAgICAgeyBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAyIH0pO1xyXG4gIH1cclxuICBcclxuICBhZGRGYWRlSW5BbmltVG9TdGFnZUltZyAodGltZWxpbmUsIGVsZW1lbnQpIHtcclxuICAgIHRpbWVsaW5lXHJcbiAgICAgIC5mcm9tVG8oXHJcbiAgICAgICAgZWxlbWVudCwgXHJcbiAgICAgICAgeyBhdXRvQWxwaGE6IDEgfSxcclxuICAgICAgICB7IGF1dG9BbHBoYTogMCxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxIH0sIDApXHJcbiAgICAgIC5mcm9tVG8oXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB7IHlQZXJjZW50OiAwIH0sXHJcbiAgICAgICAgeyB5UGVyY2VudDogLTEwLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIgfSwgMCk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcclxuXHJcblxyXG5pbXBvcnQgJy4uL2Nzcy9pbmRleC5jc3MnO1xyXG4vL2ltcG9ydCAnLi9zcGhlcmUuanMnO1xyXG5pbXBvcnQge0hlcm8gYXMgSGVyb01vZHVsZX0gZnJvbSAnLi9oZXJvLmpzJztcclxuaW1wb3J0ICcuLi9jc3MvbGluay5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9zcGhlcmUuY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWVudS5jc3MnO1xyXG5pbXBvcnQge01lbnUgYXMgTWVudU1vZHVsZX0gZnJvbSAnLi9tZW51LmpzJztcclxuaW1wb3J0IHtDaGF0IGFzIENoYXRNb2R1bGV9IGZyb20gJy4vY2hhdC5qcyc7XHJcbmltcG9ydCAnLi4vY3NzL2NoYXQuY3NzJztcclxuaW1wb3J0ICcuLi9jc3Mvc3BoZXJlU2VjdGlvbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbC5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9uYXZiYXIuY3NzJztcclxuLy9pbXBvcnQgJy4vbWVudUJ1dG9uLmpzJztcclxuaW1wb3J0ICcuLi9jc3MvaGVyb1NlY3Rpb24uY3NzJztcclxuaW1wb3J0ICcuLi9jc3Mvd2hhdElzQmxvY2suY3NzJztcclxuaW1wb3J0IHtXaGF0SXMgYXMgV2hhdElzTW9kdWxlfSBmcm9tICcuL3doYXRJcy5qcyc7XHJcbmltcG9ydCAnLi4vY3NzL2JvcmRlclRvcEhlYWRlci5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy90cmlnZ2VyLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2hvd0l0V29ya3MuY3NzJztcclxuaW1wb3J0IHtIb3dJdFdvcmtzIGFzIEhvd0l0V29ya3NNb2R1bGV9IGZyb20gJy4vaG93SXRXb3Jrcy5qcyc7XHJcbmltcG9ydCAnLi4vY3NzL3NvbHV0aW9ucy5jc3MnO1xyXG5pbXBvcnQge0FjY29yZGlvbiBhcyBBY2NvcmRpb25Nb2R1bGV9IGZyb20gJy4vYWNjb3JkaW9uLmpzJztcclxuaW1wb3J0ICcuLi9jc3Mvd2h5LmNzcyc7XHJcbmltcG9ydCB7V2h5IGFzIFdoeU1vZHVsZX0gZnJvbSAnLi93aHkuanMnO1xyXG5pbXBvcnQgJy4uL2Nzcy9jbGllbnRzLmNzcyc7XHJcbmltcG9ydCB7Q2xpZW50cyBhcyBDbGllbnRzTW9kdWxlfSBmcm9tICcuL2NsaWVudHMuanMnO1xyXG5pbXBvcnQgJy4uL2Nzcy9jb250YWN0cy5jc3MnO1xyXG5cclxuLyogKGZ1bmN0aW9uICgpIHtcclxuICBpZiAoaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbikge1xyXG4gICAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xyXG4gIH1cclxufSkoKTsgKi9cclxuRE9NcmVhZHkoKTtcclxuZnVuY3Rpb24gRE9NcmVhZHkoKSB7XHJcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gJ2xvYWRpbmcnKXtcclxuICAgIERPTUNvbnRlbnRMb2FkZWQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUNvbnRlbnRMb2FkZWQpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBET01Db250ZW50TG9hZGVkICgpIHtcclxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NQ29udGVudExvYWRlZCk7XHJcbiAgaW5pdCgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcblx0Y29uc3QgSGVybyA9IG5ldyBIZXJvTW9kdWxlKGdzYXAsIFNjcm9sbFRyaWdnZXIpO1xyXG5cdEhlcm8uaW5pdCgpO1xyXG5cclxuXHRjb25zdCBNZW51ID0gbmV3IE1lbnVNb2R1bGUoZ3NhcCwgU2Nyb2xsVHJpZ2dlcik7XHJcblx0TWVudS5pbml0KCk7XHJcblxyXG5cdGNvbnN0IENoYXQgPSBuZXcgQ2hhdE1vZHVsZSgpO1xyXG5cdENoYXQuaW5pdCgpO1xyXG5cclxuXHRjb25zdCBXaGF0SXMgPSBuZXcgV2hhdElzTW9kdWxlKGdzYXAsIFNjcm9sbFRyaWdnZXIpO1xyXG5cdFdoYXRJcy5pbml0KCk7XHJcblxyXG5cdGNvbnN0IEhvd0l0V29ya3MgPSBuZXcgSG93SXRXb3Jrc01vZHVsZShnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcclxuXHRIb3dJdFdvcmtzLmluaXQoKTtcclxuXHJcblx0Y29uc3QgQWNjb3JkaW9uID0gbmV3IEFjY29yZGlvbk1vZHVsZShnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcclxuXHRBY2NvcmRpb24uaW5pdCgpO1xyXG5cclxuXHRjb25zdCBXaHkgPSBuZXcgV2h5TW9kdWxlKGdzYXAsIFNjcm9sbFRyaWdnZXIpO1xyXG5cdFdoeS5pbml0KCk7XHJcblxyXG5cdGNvbnN0IENsaWVudHMgPSBuZXcgQ2xpZW50c01vZHVsZShnc2FwLCBTY3JvbGxUcmlnZ2VyKTtcclxuXHRDbGllbnRzLmluaXQoKTtcclxuXHQvKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyQ292ZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAqL1xyXG59IiwiLyogaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XHJcblxyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpOyAqL1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IHtcclxuICBjb25zdHJ1Y3RvciAoZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xyXG4gICAgdGhpcy5nc2FwID0gZ3NhcDtcclxuICAgIHRoaXMuU2Nyb2xsVHJpZ2dlciA9IFNjcm9sbFRyaWdnZXI7XHJcblxyXG4gICAgdGhpcy5tZW51SXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lbnVCdXR0b24gPSB7XHJcbiAgICAgIGJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdXRvbicpLFxyXG4gICAgICBsaW5lVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ1dG9uX19pY29uTGluZS0tdG9wJyksXHJcbiAgICAgIGxpbmVCb3R0b206IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnV0b25fX2ljb25MaW5lLS1ib3R0b20nKSB9O1xyXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuXHJcbiAgICB0aGlzLmxvZ29MaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZCYXJfX2xvZ28tLWxpZ2h0Jyk7XHJcbiAgICB0aGlzLmxvZ29EYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkJhcl9fbG9nby0tZGFyaycpO1xyXG5cclxuICAgIHRoaXMuY2hhdExvZ29EYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkJhcl9fY2hhdEJ1dHRvbkxvZ28tLWRhcmsnKTtcclxuICAgIHRoaXMuY2hhdExvZ29HcmFkaWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZCYXJfX2NoYXRCdXR0b25Mb2dvLS1ncmFkaWVudCcpO1xyXG4gICAgLyogdGhpcy5saW5rcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgXSwgKi9cclxuICAgIC8qIHRoaXMuc29sdXRpb25zID0ge1xyXG4gICAgICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29sdXRpb25zJyksXHJcbiAgICAgIGxpbms6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMaW5rU29sdXRpb24nKSxcclxuICAgICAgaWQ6ICdMaW5rU29sdXRpb24nLFxyXG4gICAgICB5Q29vcmQ6ICB1bmRlZmluZWR9OyAqL1xyXG5cclxuICAgIHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy50b2dnbGVNZW51QmxvY2sgPSB0aGlzLnRvZ2dsZU1lbnVCbG9jay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy50b2dnbGVCb2R5U2Nyb2xsTG9jayA9IHRoaXMudG9nZ2xlQm9keVNjcm9sbExvY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMudG9nZ2xlTWVudUJ1dHRvbiA9IHRoaXMudG9nZ2xlTWVudUJ1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgLyogdGhpcy5yZWZyZXNoRWxlbWVudHNDb29yZHMgPSB0aGlzLnJlZnJlc2hFbGVtZW50c0Nvb3Jkcy5iaW5kKHRoaXMpOyAqL1xyXG4gICAgdGhpcy5hZGRNZW51TGlua0NsaWNrTGlzdGVuZXIgPSB0aGlzLmFkZE1lbnVMaW5rQ2xpY2tMaXN0ZW5lci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCAoKSB7XHJcbiAgICB0aGlzLmFkZE1lbnVCdXR0b25DbGlja0xpc3RlbmVyKCk7XHJcbiAgICB0aGlzLmFkZE1lbnVMaW5rc0NsaWNrTGlzdGVuZXIoKTtcclxuICAgIC8qIHRoaXMuc29sdXRpb25zLmxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdvVG9TZWN0aW9uLmJpbmQodGhpcykpOyAqL1xyXG4gIH1cclxuXHJcbiAgZ29Ub1NlY3Rpb24gKCkge1xyXG4gICAgdGhpcy50b2dnbGVNZW51KCk7XHJcbiAgICAvL3RoaXMuc2Nyb2xsVG9FbGVtZW50Q29vcmRzKDg0MDEsICdhdXRvJyk7XHJcbiAgfVxyXG5cclxuICBhZGRNZW51QnV0dG9uQ2xpY2tMaXN0ZW5lciAoKSB7XHJcbiAgICB0aGlzLm1lbnVCdXR0b24uYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVNZW51KTtcclxuICB9XHJcblxyXG4gIGFkZE1lbnVMaW5rc0NsaWNrTGlzdGVuZXIgKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2xpbmstLWFuY2hvcicpLmZvckVhY2godGhpcy5hZGRNZW51TGlua0NsaWNrTGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgYWRkTWVudUxpbmtDbGlja0xpc3RlbmVyIChsaW5rKSB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVNZW51KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU1lbnUgKCkge1xyXG4gICAgLy90aGlzLm1lbnVJc09wZW4gfHwgdGhpcy5yZWZyZXNoRWxlbWVudHNDb29yZHMoKTtcclxuICAgIHRoaXMudG9nZ2xlTWVudUJ1dHRvbigpO1xyXG4gICAgdGhpcy50b2dnbGVNZW51QmxvY2soKTtcclxuICAgIHRoaXMudG9nZ2xlQm9keVNjcm9sbExvY2soKTtcclxuICAgIHRoaXMubWVudUlzT3BlbiA9IHRoaXMubWVudUlzT3BlbiA/IGZhbHNlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU1lbnVCbG9jayAoKSB7XHJcbiAgICB0aGlzLm1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS0tb3BlbicpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQm9keVNjcm9sbExvY2sgKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdib2R5LS1zY3JvbGwtbG9jaycpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTWVudUJ1dHRvbiAoKSB7XHJcbiAgICB0aGlzLm1lbnVCdXR0b24ubGluZVRvcC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51QnV0b25fX2ljb25MaW5lLS10cmFuc2Zvcm0tZG93bicpO1xyXG4gICAgdGhpcy5tZW51QnV0dG9uLmxpbmVUb3AuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudUJ1dG9uX19pY29uTGluZS0tYWN0aXZlJyk7XHJcbiAgICBcclxuICAgIHRoaXMubWVudUJ1dHRvbi5saW5lQm90dG9tLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVCdXRvbl9faWNvbkxpbmUtLXRyYW5zZm9ybS11cCcpO1xyXG4gICAgdGhpcy5tZW51QnV0dG9uLmxpbmVCb3R0b20uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudUJ1dG9uX19pY29uTGluZS0tYWN0aXZlJyk7XHJcblxyXG4gICAgdGhpcy5tZW51QnV0dG9uLmJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51QnV0b24tLWFjdGl2ZScpO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlTG9nbygpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTG9nbyAoKSB7XHJcbiAgICBpZiAodGhpcy5tZW51SXNPcGVuKSB7XHJcbiAgICAgIHRoaXMubG9nb0xpZ2h0LmNsYXNzTGlzdC5hZGQoJ25hdkJhcl9fbG9nby0tb3BhY2l0eS0wJyk7XHJcbiAgICAgIHRoaXMuY2hhdExvZ29HcmFkaWVudC5jbGFzc0xpc3QuYWRkKCduYXZCYXJfX2xvZ28tLW9wYWNpdHktMCcpO1xyXG4gICAgICB0aGlzLmxvZ29EYXJrLmNsYXNzTGlzdC5yZW1vdmUoJ25hdkJhcl9fbG9nby0tb3BhY2l0eS0wJyk7XHJcbiAgICAgIHRoaXMuY2hhdExvZ29EYXJrLmNsYXNzTGlzdC5yZW1vdmUoJ25hdkJhcl9fbG9nby0tb3BhY2l0eS0wJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvZ29MaWdodC5jbGFzc0xpc3QucmVtb3ZlKCduYXZCYXJfX2xvZ28tLW9wYWNpdHktMCcpO1xyXG4gICAgICB0aGlzLmNoYXRMb2dvR3JhZGllbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2QmFyX19sb2dvLS1vcGFjaXR5LTAnKTtcclxuICAgICAgdGhpcy5sb2dvRGFyay5jbGFzc0xpc3QuYWRkKCduYXZCYXJfX2xvZ28tLW9wYWNpdHktMCcpO1xyXG4gICAgICB0aGlzLmNoYXRMb2dvRGFyay5jbGFzc0xpc3QuYWRkKCduYXZCYXJfX2xvZ28tLW9wYWNpdHktMCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTG9nb09wYWNpdHkgKGxvZ28pIHtcclxuICAgIGxvZ28uY2xhc3NMaXN0LnRvZ2dsZSgnbmF2QmFyX19sb2dvLS1vcGFjaXR5LTAnKTtcclxuICB9XHJcblxyXG4gIC8qIHNjcm9sbFRvRWxlbWVudENvb3JkcyAoeUNvb3JkLCBiZWhhdmlvcikge1xyXG4gICAgYmVoYXZpb3IgfHwgKGJlaGF2aW9yID0gXCJzbW9vdGhcIik7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IHlDb29yZCxcclxuICAgICAgYmVoYXZpb3I6IGJlaGF2aW9yXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hFbGVtZW50c0Nvb3JkcyAoKSB7XHJcbiAgICB0aGlzLnNvbHV0aW9ucy55Q29vcmQgPSB0aGlzLmdldFlDb29yZCh0aGlzLnNvbHV0aW9ucy5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGdldFlDb29yZCAoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgcGFnZVlPZmZzZXQ7XHJcbiAgfSAqL1xyXG5cclxufSIsIi8qIGltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBXaGF0SXMge1xyXG4gIGNvbnN0cnVjdG9yIChnc2FwLCBTY3JvbGxUcmlnZ2VyKSB7XHJcbiAgICB0aGlzLmdzYXAgPSBnc2FwO1xyXG4gICAgdGhpcy5TY3JvbGxUcmlnZ2VyID0gU2Nyb2xsVHJpZ2dlcjtcclxuXHJcbiAgICB0aGlzLmhlYWRlcnMgPSB0aGlzLmdzYXAudXRpbHMudG9BcnJheSgnLndoYXRJc0Jsb2NrX19zbGlkZXJIZWFkZXInKTtcclxuICB9XHJcblxyXG4gIGluaXQgKCkge1xyXG4gICAgdGhpcy5zZXRVcHdoYXRJc0Jsb2NrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUd2VlbiAoZWxlbWVudCwgaXNMZWZ0TGF5b3V0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5nc2FwLmZyb21UbyhlbGVtZW50LCBcclxuICAgICAgeyB4UGVyY2VudDogaXNMZWZ0TGF5b3V0ID8gLTEwIDogMTBcclxuICAgICAgfSxcclxuICAgICAgeyB4UGVyY2VudDogaXNMZWZ0TGF5b3V0ID8gMTAgOiAtMTAsXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VXB3aGF0SXNCbG9jayAoKSB7XHJcbiAgICB0aGlzLmhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyLCBpKT0+e1xyXG4gICAgICBsZXQgbGVmdExheW91dCA9IChpICUgMiA+IDApID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICBsZXQgdHdlZW4gPSB0aGlzLmdldFR3ZWVuKGhlYWRlciwgbGVmdExheW91dCk7XHJcblxyXG4gICAgICB0aGlzLlNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiBoZWFkZXIsXHJcbiAgICAgICAgc3RhcnQ6ICd0b3AgYm90dG9tJyxcclxuICAgICAgICBlbmQ6ICdib3R0b20gdG9wJyxcclxuICAgICAgICB0b2dnbGVBY3Rpb25zOiAncmVzdGFydCBjb21wbGV0ZSByZXZlcnNlIGNvbXBsZXRlJyxcclxuICAgICAgICBhbmltYXRpb246IHR3ZWVuLFxyXG4gICAgICAgIHNjcnViOiAxLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0iLCIvKiBpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgV2h5IHtcclxuICBjb25zdHJ1Y3RvciAoZ3NhcCwgU2Nyb2xsVHJpZ2dlcikge1xyXG4gICAgdGhpcy5nc2FwID0gZ3NhcDtcclxuICAgIHRoaXMuU2Nyb2xsVHJpZ2dlciA9IFNjcm9sbFRyaWdnZXI7XHJcblxyXG4gICAgdGhpcy5jb250ZW50QmxvY2tzID0gdGhpcy5nc2FwLnV0aWxzLnRvQXJyYXkoJy53aHlQYXJhbGxheF9fY29udGVudEJsb2NrJyk7XHJcbiAgfVxyXG5cclxuICBpbml0ICgpIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsVHJpZ2VyVG9BbGxDb250ZW50QmxvY2tzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGxUcmlnZXJUb0FsbENvbnRlbnRCbG9ja3MgKCkge1xyXG4gICAgdGhpcy5jb250ZW50QmxvY2tzLmZvckVhY2goKHNpZGVCbG9jaywgaSkgPT4ge1xyXG4gICAgICBsZXQgbGVmdExheW91dCA9IChpICUgMiA+IDApID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICBsZXQgdHdlZW4gPSB0aGlzLmdzYXAuZnJvbVRvKHNpZGVCbG9jaywgXHJcbiAgICAgICAgeyB5UGVyY2VudDogbGVmdExheW91dCA/IDEwIDogLTEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHlQZXJjZW50OiBsZWZ0TGF5b3V0ID8gLTEwIDogMTAsXHJcbiAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHRoaXMuU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6ICcud2h5UGFyYWxsYXgnLFxyXG4gICAgICAgIHN0YXJ0OiAndG9wIGJvdHRvbScsXHJcbiAgICAgICAgZW5kOiAnYm90dG9tIHRvcCcsXHJcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3Jlc3RhcnQgY29tcGxldGUgcmV2ZXJzZSBjb21wbGV0ZScsXHJcbiAgICAgICAgYW5pbWF0aW9uOiB0d2VlbixcclxuICAgICAgICBzY3J1YjogMSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ib3JkZXJUb3BIZWFkZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMDk1cHg7XFxyXFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlci0tcGFkZGluZ1RvcC1iaWcge1xcclxcbiAgcGFkZGluZzogNDRweCAwIDQ0cHg7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDAgMDtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMEYwMDFFO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19jb250ZW50LS1wYWRkaW5nVG9wLWJpZyB7XFxyXFxuICBwYWRkaW5nOiA2NHB4IDAgMDtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9faGVhZGVyQW5kSWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19oZWFkZXIsXFxyXFxuLmJvcmRlclRvcEhlYWRlcl9faWNvbixcXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19ibG9ja1RleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19oZWFkZXIge1xcclxcbiAgbWF4LXdpZHRoOiA3MjhweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2hlYWRlci0tb3JhbmdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA3MXB4O1xcclxcbiAgY29sb3I6ICNGRjcyMzY7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9faWNvbiB7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19ibG9jayB7XFxyXFxuICB3aWR0aDogNDklO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMCAxNTBweCAwIDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19ibG9ja1RleHQge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ib3JkZXJUb3BIZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBOzs7RUFHRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib3JkZXJUb3BIZWFkZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMDk1cHg7XFxyXFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlci0tcGFkZGluZ1RvcC1iaWcge1xcclxcbiAgcGFkZGluZzogNDRweCAwIDQ0cHg7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDAgMDtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMEYwMDFFO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19jb250ZW50LS1wYWRkaW5nVG9wLWJpZyB7XFxyXFxuICBwYWRkaW5nOiA2NHB4IDAgMDtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9faGVhZGVyQW5kSWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19oZWFkZXIsXFxyXFxuLmJvcmRlclRvcEhlYWRlcl9faWNvbixcXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19ibG9ja1RleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19oZWFkZXIge1xcclxcbiAgbWF4LXdpZHRoOiA3MjhweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2hlYWRlci0tb3JhbmdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA3MXB4O1xcclxcbiAgY29sb3I6ICNGRjcyMzY7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9faWNvbiB7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19ibG9jayB7XFxyXFxuICB3aWR0aDogNDklO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMCAxNTBweCAwIDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19ibG9ja1RleHQge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNoYXQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYwMDFFO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43NXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuXFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG4uY2hhdC0tb3BlbiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcbi5jaGF0X19jbG9zZUJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIG1hcmdpbjogMzZweCAwIDAgYXV0bztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uY2hhdF9fY2xvc2VCdXR0b25JY29uIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jaGF0X19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAzNnB4IDc0cHggMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uY2hhdF9fbGF5b3V0IHtcXHJcXG4gIC8qIG1heC13aWR0aDogNTAlOyAqL1xcclxcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcclxcbn1cXHJcXG4uY2hhdF9faGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBJbnB1dCBNb25vO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTExJTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmNoYXRfX2Zvcm0ge1xcclxcbiAgbWFyZ2luOiA4MHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcblxcclxcbn1cXHJcXG4uZm9ybV9fY29udGFpbmVyIHtcXHJcXG5cXHJcXG59XFxyXFxuLmZvcm1fX2NvbnRhaW5lci0tY29sdW1uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dENvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCAwIDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LXNpemU6IDA7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dENvbnRhaW5lci0tY29sdW1uLTIge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1fX2lucHV0LFxcclxcbi5mb3JtX19sYWJlbC0tcGxhY2Vob2xkZXIsXFxyXFxuLmZvcm1fX2Vycm9yTWVzc2FnZSB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcXHJcXG4gfVxcclxcbi5mb3JtX19pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGRkZGO1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDExMSU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dC0tdGV4dGFyZWEge1xcclxcbiAgbWluLWhlaWdodDogNzBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG4uZm9ybV9faW5wdXQtLWVycm9yIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkYwNzA3O1xcclxcbn1cXHJcXG4uZm9ybV9fbGFiZWwge1xcclxcbiAgXFxyXFxufVxcclxcbi5mb3JtX19sYWJlbC0tcGxhY2Vob2xkZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDExMSU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBvcGFjaXR5OiAwLjM1O1xcclxcbn1cXHJcXG4uZm9ybV9fbGFiZWwtLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzc0NEQyO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dDphY3RpdmUgKyAuZm9ybV9fbGFiZWwtLWJ1dHRvbiB7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dDpmb2N1cyArIC50cmlnZ2VyX19saW5rIC50cmlnZ2VyX19saW5rVGV4dENvbnRhaW5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xcclxcbn1cXHJcXG4uZm9ybV9faW5wdXQ6Zm9jdXMgKyAuZm9ybV9fbGFiZWwtLXBsYWNlaG9sZGVyLFxcclxcbi5mb3JtX19pbnB1dC0tZmlsbGVkICsgLmZvcm1fX2xhYmVsLS1wbGFjZWhvbGRlcixcXHJcXG4uaXMtb3BlbiArIC5mb3JtX19sYWJlbC0tcGxhY2Vob2xkZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NSUpIHNjYWxlKDAuOCk7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dC0tZXJyb3IgKyAuZm9ybV9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiAjRkYwNzA3O1xcclxcbn1cXHJcXG4uZm9ybV9fbGFiZWwtLWNoZWNrYm94IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcbi5mb3JtX19jaGVja2JveCxcXHJcXG4uZm9ybV9fY2hlY2tib3hDaXJjbGVJbm5lciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcbi5mb3JtX19jaGVja2JveCB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMCAxNHB4IDAgMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3NDREMjtcXHJcXG59XFxyXFxuLmZvcm1fX2NoZWNrYm94Q2lyY2xlSW5uZXIge1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuLmZvcm1fX2lucHV0OmZvY3VzICsgLmZvcm1fX2xhYmVsLS1jaGVja2JveCB7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dDpjaGVja2VkICsgLmZvcm1fX2xhYmVsIC5mb3JtX19jaGVja2JveENpcmNsZUlubmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5mb3JtX19jaGVja2JveFRleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmZvcm1fX2Vycm9yTWVzc2FnZSB7XFxyXFxuICBtYXJnaW46IDhweCBhdXRvIDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxMTElO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIGNvbG9yOiAjRkYwNzA3O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuLmZvcm1fX2lucHV0LS1lcnJvciB+IC5mb3JtX19lcnJvck1lc3NhZ2Uge1xcclxcbiAgb3BhY2l0eTogMC4zNTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1fX3NlbGVjdEljb24ge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dC0tc2hvd0Ryb3Bkb3duIH4gLmZvcm1fX3NlbGVjdEljb24sXFxyXFxuLmlzLW9wZW4gfiAuZm9ybV9fc2VsZWN0SWNvbiB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1fX2xhYmVsLS1idXR0b24gLmZvcm1fX3N1Ym1pdFRleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hvaWNlcyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5jaG9pY2VzX19pbm5lciB7XFxyXFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTExJTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmNob2ljZXNfX2xpc3QtLXNpbmdsZSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4uY2hvaWNlc19fbGlzdC0tZHJvcGRvd24geyAgXFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXHJcXG59XFxyXFxuLmNob2ljZXNfX2xpc3QtLWRyb3Bkb3duIC5jaG9pY2VzX19saXN0IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xcclxcbn1cXHJcXG4uY2hvaWNlc19fbGlzdC0tZHJvcGRvd24gLmNob2ljZXNfX2l0ZW0sXFxyXFxuLmNob2ljZXNfX2lucHV0LFxcclxcbi5jaG9pY2VzW2RhdGEtdHlwZSo9c2VsZWN0LW9uZV0gLmNob2ljZXNfX2lucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDI0cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDExMSU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5jaG9pY2VzW2RhdGEtdHlwZSo9c2VsZWN0LW9uZV06YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NoYXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLDJCQUEyQjs7RUFFM0IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOzs7RUFHRSw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdDQUFnQzs7RUFFaEMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsNkJBQTZCOztFQUU3Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7OztFQUdFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7O0VBR0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNoYXQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XFxyXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYwMDFFO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43NXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuXFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG4uY2hhdC0tb3BlbiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcbi5jaGF0X19jbG9zZUJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIG1hcmdpbjogMzZweCAwIDAgYXV0bztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uY2hhdF9fY2xvc2VCdXR0b25JY29uIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jaGF0X19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAzNnB4IDc0cHggMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uY2hhdF9fbGF5b3V0IHtcXHJcXG4gIC8qIG1heC13aWR0aDogNTAlOyAqL1xcclxcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcclxcbn1cXHJcXG4uY2hhdF9faGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBJbnB1dCBNb25vO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTExJTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmNoYXRfX2Zvcm0ge1xcclxcbiAgbWFyZ2luOiA4MHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcblxcclxcbn1cXHJcXG4uZm9ybV9fY29udGFpbmVyIHtcXHJcXG5cXHJcXG59XFxyXFxuLmZvcm1fX2NvbnRhaW5lci0tY29sdW1uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dENvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCAwIDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LXNpemU6IDA7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dENvbnRhaW5lci0tY29sdW1uLTIge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1fX2lucHV0LFxcclxcbi5mb3JtX19sYWJlbC0tcGxhY2Vob2xkZXIsXFxyXFxuLmZvcm1fX2Vycm9yTWVzc2FnZSB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluLW91dDtcXHJcXG4gfVxcclxcbi5mb3JtX19pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkZGRkZGO1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDExMSU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dC0tdGV4dGFyZWEge1xcclxcbiAgbWluLWhlaWdodDogNzBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG4uZm9ybV9faW5wdXQtLWVycm9yIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkYwNzA3O1xcclxcbn1cXHJcXG4uZm9ybV9fbGFiZWwge1xcclxcbiAgXFxyXFxufVxcclxcbi5mb3JtX19sYWJlbC0tcGxhY2Vob2xkZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDExMSU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBvcGFjaXR5OiAwLjM1O1xcclxcbn1cXHJcXG4uZm9ybV9fbGFiZWwtLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzc0NEQyO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dDphY3RpdmUgKyAuZm9ybV9fbGFiZWwtLWJ1dHRvbiB7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dDpmb2N1cyArIC50cmlnZ2VyX19saW5rIC50cmlnZ2VyX19saW5rVGV4dENvbnRhaW5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xcclxcbn1cXHJcXG4uZm9ybV9faW5wdXQ6Zm9jdXMgKyAuZm9ybV9fbGFiZWwtLXBsYWNlaG9sZGVyLFxcclxcbi5mb3JtX19pbnB1dC0tZmlsbGVkICsgLmZvcm1fX2xhYmVsLS1wbGFjZWhvbGRlcixcXHJcXG4uaXMtb3BlbiArIC5mb3JtX19sYWJlbC0tcGxhY2Vob2xkZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NSUpIHNjYWxlKDAuOCk7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dC0tZXJyb3IgKyAuZm9ybV9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiAjRkYwNzA3O1xcclxcbn1cXHJcXG4uZm9ybV9fbGFiZWwtLWNoZWNrYm94IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcbi5mb3JtX19jaGVja2JveCxcXHJcXG4uZm9ybV9fY2hlY2tib3hDaXJjbGVJbm5lciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcbi5mb3JtX19jaGVja2JveCB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMCAxNHB4IDAgMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3NDREMjtcXHJcXG59XFxyXFxuLmZvcm1fX2NoZWNrYm94Q2lyY2xlSW5uZXIge1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuLmZvcm1fX2lucHV0OmZvY3VzICsgLmZvcm1fX2xhYmVsLS1jaGVja2JveCB7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dDpjaGVja2VkICsgLmZvcm1fX2xhYmVsIC5mb3JtX19jaGVja2JveENpcmNsZUlubmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5mb3JtX19jaGVja2JveFRleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmZvcm1fX2Vycm9yTWVzc2FnZSB7XFxyXFxuICBtYXJnaW46IDhweCBhdXRvIDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxMTElO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIGNvbG9yOiAjRkYwNzA3O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuLmZvcm1fX2lucHV0LS1lcnJvciB+IC5mb3JtX19lcnJvck1lc3NhZ2Uge1xcclxcbiAgb3BhY2l0eTogMC4zNTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1fX3NlbGVjdEljb24ge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxufVxcclxcbi5mb3JtX19pbnB1dC0tc2hvd0Ryb3Bkb3duIH4gLmZvcm1fX3NlbGVjdEljb24sXFxyXFxuLmlzLW9wZW4gfiAuZm9ybV9fc2VsZWN0SWNvbiB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1fX2xhYmVsLS1idXR0b24gLmZvcm1fX3N1Ym1pdFRleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hvaWNlcyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5jaG9pY2VzX19pbm5lciB7XFxyXFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTExJTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmNob2ljZXNfX2xpc3QtLXNpbmdsZSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4uY2hvaWNlc19fbGlzdC0tZHJvcGRvd24geyAgXFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXHJcXG59XFxyXFxuLmNob2ljZXNfX2xpc3QtLWRyb3Bkb3duIC5jaG9pY2VzX19saXN0IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xcclxcbn1cXHJcXG4uY2hvaWNlc19fbGlzdC0tZHJvcGRvd24gLmNob2ljZXNfX2l0ZW0sXFxyXFxuLmNob2ljZXNfX2lucHV0LFxcclxcbi5jaG9pY2VzW2RhdGEtdHlwZSo9c2VsZWN0LW9uZV0gLmNob2ljZXNfX2lucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDI0cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDExMSU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5jaG9pY2VzW2RhdGEtdHlwZSo9c2VsZWN0LW9uZV06YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2xpZW50cyB7XFxyXFxuXFxyXFxufVxcclxcbi5jbGllbnRzX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE4NnB4IDExMnB4IDE2NnB4O1xcclxcbn1cXHJcXG4uY2xpZW50c19fYm9yZGVyVG9wSGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWVudHNfX3BhcmFsbGF4IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmNsaWVudHNfX3BhcmFsbGF4QmxvY2sge1xcclxcbiAgaGVpZ2h0OiA5MnB4O1xcclxcbiAgd2lkdGg6IDIwMCU7XFxyXFxuICB3aWR0aDogMjAwdnc7XFxyXFxuICBwYWRkaW5nOiA1MHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uY2xpZW50c19fbG9nb0ltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDQ2cHg7XFxyXFxufVxcclxcblxcclxcbi5jbGllbnRzX190cmlnZ2VySW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jbGllbnRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7QUFFQTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2xpZW50cyB7XFxyXFxuXFxyXFxufVxcclxcbi5jbGllbnRzX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE4NnB4IDExMnB4IDE2NnB4O1xcclxcbn1cXHJcXG4uY2xpZW50c19fYm9yZGVyVG9wSGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWVudHNfX3BhcmFsbGF4IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmNsaWVudHNfX3BhcmFsbGF4QmxvY2sge1xcclxcbiAgaGVpZ2h0OiA5MnB4O1xcclxcbiAgd2lkdGg6IDIwMCU7XFxyXFxuICB3aWR0aDogMjAwdnc7XFxyXFxuICBwYWRkaW5nOiA1MHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uY2xpZW50c19fbG9nb0ltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDQ2cHg7XFxyXFxufVxcclxcblxcclxcbi5jbGllbnRzX190cmlnZ2VySW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vc3RhdGljL2NvbnRhY3RzQkdfMngucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhY3RzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLmNsaWVudHNfX3RvcEdyYWRpZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODIuNTVkZWcsICMwMENERkYgMCUsICM3NzQ0RDIgMzkuMSUsICNGRjNDMDEgNjcuMTclLCAjRkZDNzAwIDk2LjI0JSk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG59XFxyXFxuLmNvbnRhY3RzX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEyMHB4IDExMnB4IDA7XFxyXFxufVxcclxcbi5jb250YWN0c19fY29udGVudCB7XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbn1cXHJcXG4uY29udGFjdHNfX2hlYWRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxcclxcbn1cXHJcXG4uY29udGFjdHNfX2hlYWRlckltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDQ2cHg7XFxyXFxuICBtYXJnaW46IDAgMjZweCAwIDA7XFxyXFxufVxcclxcbi5jb250YWN0c19faGVhZGVyVGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDgycHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0c19fY29udGFjdHNDb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAxMDRweCAwIDIyNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzX19jb250YWN0IHtcXHJcXG4gIHdpZHRoOiA0MiU7XFxyXFxuICBwYWRkaW5nOiAwIDAgNzVweDtcXHJcXG59XFxyXFxuLmNvbnRhY3Qge1xcclxcblxcclxcbn1cXHJcXG4uY29udGFjdF9faGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMCAwIDM4cHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG4uY29udGFjdF9fdGV4dCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjhweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xcclxcbn1cXHJcXG4uY29udGFjdF9fdGV4dC0taGlnaHRsaWdodCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19ib3JkZXJUb3BDb250YWluZXIge1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNGRkZGRkY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOTBweDtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fY29udGVudENvbnRhaW5lciB7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcbi5mb290ZXJfX3RleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fdGV4dC0tbGF5b3V0LWxlZnQge1xcclxcbiAgbWFyZ2luOiAwIDk4cHggMCAwO1xcclxcbn1cXHJcXG4uZm9vdGVyX190ZXh0LS1sYXlvdXQtY2VudGVyIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDAgMDtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fbGluayB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG4uZm9vdGVyX19saW5rVGV4dCB7XFxyXFxuICBtYXJnaW46IDAgOHB4IDAgMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi5mb290ZXJfX21hcmt3ZWJlckxvZ28ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY29udGFjdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1EQUE4QztFQUM5QywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGdHQUFnRztFQUNoRywwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhY3RzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vc3RhdGljL2NvbnRhY3RzQkdfMngucG5nXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLmNsaWVudHNfX3RvcEdyYWRpZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODIuNTVkZWcsICMwMENERkYgMCUsICM3NzQ0RDIgMzkuMSUsICNGRjNDMDEgNjcuMTclLCAjRkZDNzAwIDk2LjI0JSk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG59XFxyXFxuLmNvbnRhY3RzX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEyMHB4IDExMnB4IDA7XFxyXFxufVxcclxcbi5jb250YWN0c19fY29udGVudCB7XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbn1cXHJcXG4uY29udGFjdHNfX2hlYWRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxcclxcbn1cXHJcXG4uY29udGFjdHNfX2hlYWRlckltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDQ2cHg7XFxyXFxuICBtYXJnaW46IDAgMjZweCAwIDA7XFxyXFxufVxcclxcbi5jb250YWN0c19faGVhZGVyVGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDgycHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0c19fY29udGFjdHNDb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAxMDRweCAwIDIyNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzX19jb250YWN0IHtcXHJcXG4gIHdpZHRoOiA0MiU7XFxyXFxuICBwYWRkaW5nOiAwIDAgNzVweDtcXHJcXG59XFxyXFxuLmNvbnRhY3Qge1xcclxcblxcclxcbn1cXHJcXG4uY29udGFjdF9faGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMCAwIDM4cHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG4uY29udGFjdF9fdGV4dCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjhweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xcclxcbn1cXHJcXG4uY29udGFjdF9fdGV4dC0taGlnaHRsaWdodCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19ib3JkZXJUb3BDb250YWluZXIge1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNGRkZGRkY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOTBweDtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fY29udGVudENvbnRhaW5lciB7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcbi5mb290ZXJfX3RleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fdGV4dC0tbGF5b3V0LWxlZnQge1xcclxcbiAgbWFyZ2luOiAwIDk4cHggMCAwO1xcclxcbn1cXHJcXG4uZm9vdGVyX190ZXh0LS1sYXlvdXQtY2VudGVyIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDAgMDtcXHJcXG59XFxyXFxuLmZvb3Rlcl9fbGluayB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG4uZm9vdGVyX19saW5rVGV4dCB7XFxyXFxuICBtYXJnaW46IDAgOHB4IDAgMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi5mb290ZXJfX21hcmt3ZWJlckxvZ28ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3N0YXRpYy9CRy0tYmlnLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZXJvU2VjdGlvbiB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyAqL1xcclxcbn1cXHJcXG4uaGVyb1NlY3Rpb25fX0JHIHtcXHJcXG4gIC8qIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlOyAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5oZXJvU2VjdGlvbl9faW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNjgwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMCAxMTJweCAxNjZweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG4uaGVyb1NlY3Rpb25fX2Jsb2NrIHtcXHJcXG5cXHJcXG59XFxyXFxuLmhlcm9TZWN0aW9uX19ibG9jay0tbGVmdCB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbn1cXHJcXG4uaGVyb0Jsb2NrTGVmdF9faGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDFweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG4uaGVyb0Jsb2NrTGVmdF9fY29sb3JUZXh0IHtcXHJcXG4gIGNvbG9yOiAjNzc0NEQyO1xcclxcbn1cXHJcXG4uaGVyb0Jsb2NrTGVmdF9fdGV4dCB7XFxyXFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcclxcbiAgbWFyZ2luOiAyNnB4IDAgNDRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5oZXJvQmxvY2tMZWZ0X19saW5rIHtcXHJcXG4gIHdpZHRoOiAyODBweDtcXHJcXG4gIG1hcmdpbjogMCAwIDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvU2VjdGlvbl9fYmxvY2stLXJpZ2h0IHtcXHJcXG4gIHdpZHRoOiAzODZweDtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMEYwMDFFO1xcclxcbn1cXHJcXG4uaGVyb0Jsb2NrUmlnaHRfX2hlYWRlciB7XFxyXFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja1JpZ2h0X19ncmFkaWVudFRleHQge1xcclxcbiAgbWFyZ2luOiAxMHB4IDAgMDtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja1JpZ2h0X190ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xcclxcbiAgY29sb3I6ICM1MDUwNTA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVyb1NlY3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRTtpQkFDZTtFQUNmLGtCQUFrQjtFQUNsQixtREFBd0M7RUFDeEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZXJvU2VjdGlvbiB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyAqL1xcclxcbn1cXHJcXG4uaGVyb1NlY3Rpb25fX0JHIHtcXHJcXG4gIC8qIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlOyAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9zdGF0aWMvQkctLWJpZy5zdmdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5oZXJvU2VjdGlvbl9faW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNjgwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMCAxMTJweCAxNjZweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG4uaGVyb1NlY3Rpb25fX2Jsb2NrIHtcXHJcXG5cXHJcXG59XFxyXFxuLmhlcm9TZWN0aW9uX19ibG9jay0tbGVmdCB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbn1cXHJcXG4uaGVyb0Jsb2NrTGVmdF9faGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDFweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG4uaGVyb0Jsb2NrTGVmdF9fY29sb3JUZXh0IHtcXHJcXG4gIGNvbG9yOiAjNzc0NEQyO1xcclxcbn1cXHJcXG4uaGVyb0Jsb2NrTGVmdF9fdGV4dCB7XFxyXFxuICBtYXgtd2lkdGg6IDQ4MHB4O1xcclxcbiAgbWFyZ2luOiAyNnB4IDAgNDRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5oZXJvQmxvY2tMZWZ0X19saW5rIHtcXHJcXG4gIHdpZHRoOiAyODBweDtcXHJcXG4gIG1hcmdpbjogMCAwIDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvU2VjdGlvbl9fYmxvY2stLXJpZ2h0IHtcXHJcXG4gIHdpZHRoOiAzODZweDtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMEYwMDFFO1xcclxcbn1cXHJcXG4uaGVyb0Jsb2NrUmlnaHRfX2hlYWRlciB7XFxyXFxuICBtYXJnaW46IDMwcHggMCAwIDA7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja1JpZ2h0X19ncmFkaWVudFRleHQge1xcclxcbiAgbWFyZ2luOiAxMHB4IDAgMDtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja1JpZ2h0X190ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xcclxcbiAgY29sb3I6ICM1MDUwNTA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ob3dJdFdvcmtzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX190b3BHcmFkaWVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4Mi41NWRlZywgcmdiYSgwLCAyMDUsIDI1NSwgMC42KSAwJSwgcmdiYSgxMTksIDY4LCAyMTAsIDAuNikgMzkuMSUsIHJnYmEoMjU1LCA2MCwgMSwgMC42KSA2Ny4xNyUsIHJnYmEoMjU1LCAxOTksIDAsIDAuNikgOTYuMjQlKTtcXHJcXG4gIGZpbHRlcjogYmx1cigxMDRweCk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2lubmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMCAxMTJweCAxOTJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5TVF9fQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uU1RfX2NvbnRlbnRDb250YWluZXItLXN0YWdlIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDE0NnB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uU1RfX2NvbnRlbnRDb250YWluZXItLWxlZnQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19zcGhlcmUge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcbi5TVF9fc3RhZ2VJbWdDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uU1RfX3N0YWdlSW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5TVF9fY29udGVudENvbnRhaW5lci0tcmlnaHQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogMCAwIDAgYXV0bztcXHJcXG59XFxyXFxuLlNUX19jb250ZW50QmxvY2stLXJpZ2h0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogMCAwIDAgYXV0bztcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2NvbnRlbnRDb250YWluZXItLXN0YWdlLFxcclxcbi5ob3dJdFdvcmtzX19jb250ZW50Q29udGFpbmVyLS1yaWdodCB7XFxyXFxuICB3aWR0aDogMzglO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3RhZ2VJbmRpY2F0b3JIZWFkZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IElucHV0IE1vbm87XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxuICBjb2xvcjogIzIxQzVFRDtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX3N0YWdlSW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTEyJTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX3N0YWdlSW1nLS10cmFuc2xhdGUtcmlnaHQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQlKTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2NvbnRlbnRDb250YWluZXItLXJpZ2h0IHtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2NvbnRlbnRCbG9jay0tcmlnaHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19zdGFnZUhlYWRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDQwMnB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IElucHV0IE1vbm87XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3RhZ2VIZWFkZXItLWJpZyB7XFxyXFxuICBmb250LXNpemU6IDY2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNzZweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19zdGFnZVRleHQge1xcclxcbiAgbWF4LXdpZHRoOiA1NDZweDtcXHJcXG4gIG1hcmdpbjogNTBweCAwIDA7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjlweDtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3RhZ2VUZXh0LS13aGl0ZSB7XFxyXFxuICBtYXgtd2lkdGg6IDM3MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhvd0l0V29ya3NfX2xpbmtDb250YWluZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fbGluayB7XFxyXFxuICBtYXJnaW46IDE0cHggYXV0byAwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hvd0l0V29ya3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0SkFBNEo7RUFDNUosbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsVUFBVTtBQUNaOzs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob3dJdFdvcmtzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX190b3BHcmFkaWVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4Mi41NWRlZywgcmdiYSgwLCAyMDUsIDI1NSwgMC42KSAwJSwgcmdiYSgxMTksIDY4LCAyMTAsIDAuNikgMzkuMSUsIHJnYmEoMjU1LCA2MCwgMSwgMC42KSA2Ny4xNyUsIHJnYmEoMjU1LCAxOTksIDAsIDAuNikgOTYuMjQlKTtcXHJcXG4gIGZpbHRlcjogYmx1cigxMDRweCk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2lubmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMCAxMTJweCAxOTJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5TVF9fQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uU1RfX2NvbnRlbnRDb250YWluZXItLXN0YWdlIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDE0NnB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uU1RfX2NvbnRlbnRDb250YWluZXItLWxlZnQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19zcGhlcmUge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcbi5TVF9fc3RhZ2VJbWdDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uU1RfX3N0YWdlSW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5TVF9fY29udGVudENvbnRhaW5lci0tcmlnaHQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogMCAwIDAgYXV0bztcXHJcXG59XFxyXFxuLlNUX19jb250ZW50QmxvY2stLXJpZ2h0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogMCAwIDAgYXV0bztcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2NvbnRlbnRDb250YWluZXItLXN0YWdlLFxcclxcbi5ob3dJdFdvcmtzX19jb250ZW50Q29udGFpbmVyLS1yaWdodCB7XFxyXFxuICB3aWR0aDogMzglO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3RhZ2VJbmRpY2F0b3JIZWFkZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IElucHV0IE1vbm87XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxuICBjb2xvcjogIzIxQzVFRDtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX3N0YWdlSW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTEyJTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX3N0YWdlSW1nLS10cmFuc2xhdGUtcmlnaHQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQlKTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2NvbnRlbnRDb250YWluZXItLXJpZ2h0IHtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2NvbnRlbnRCbG9jay0tcmlnaHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19zdGFnZUhlYWRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDQwMnB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IElucHV0IE1vbm87XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3RhZ2VIZWFkZXItLWJpZyB7XFxyXFxuICBmb250LXNpemU6IDY2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNzZweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19zdGFnZVRleHQge1xcclxcbiAgbWF4LXdpZHRoOiA1NDZweDtcXHJcXG4gIG1hcmdpbjogNTBweCAwIDA7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjlweDtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3RhZ2VUZXh0LS13aGl0ZSB7XFxyXFxuICBtYXgtd2lkdGg6IDM3MHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhvd0l0V29ya3NfX2xpbmtDb250YWluZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fbGluayB7XFxyXFxuICBtYXJnaW46IDE0cHggYXV0byAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9zdGF0aWMvZm9udHMvSW5wdXRNb25vLU1lZGl1bS53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL3N0YXRpYy9mb250cy9JbnB1dE1vbm8tQm9sZC53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX01lZGl1bS53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuLi9zdGF0aWMvZm9udHMvUFQgUm9vdCBVSV9NZWRpdW0ud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fIGZyb20gXCIuLi9zdGF0aWMvZm9udHMvUFQgUm9vdCBVSV9Cb2xkLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gZnJvbSBcIi4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX0JvbGQud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fIGZyb20gXCIuLi9zdGF0aWMvZm9udHMvUFQgUm9vdCBVSV9MaWdodC53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fIGZyb20gXCIuLi9zdGF0aWMvZm9udHMvUFQgUm9vdCBVSV9MaWdodC53b2ZmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnSW5wdXQgTW9ubyc7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuXFx0c3JjOiBsb2NhbCgnSW5wdXQgTW9ubycpLFxcclxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnSW5wdXQgTW9ubyc7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0c3JjOiBsb2NhbCgnSW5wdXQgTW9ubycpLFxcclxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUFQgUm9vdCBVSSc7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuXFx0c3JjOiBsb2NhbCgnUFQgUm9vdCBVSScpLFxcclxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG5cXHRcXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1BUIFJvb3QgVUknO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRzcmM6IGxvY2FsKCdQVCBSb290IFVJJyksXFxyXFxuXFx0XFx0dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUFQgUm9vdCBVSSc7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcblxcdHNyYzogbG9jYWwoJ1BUIFJvb3QgVUknKSxcXHJcXG5cXHRcXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuXFx0XFx0dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG59XFxyXFxuaHRtbCwgYm9keSwgI3Jvb3QsIC5hcHAge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG4udmlzdWFsbHloaWRkZW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxyXFxuICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xcclxcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XFxyXFxuICBjbGlwOiByZWN0KDAgMCAwIDApICFpbXBvcnRhbnQ7XFxyXFxuICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoNTAlKSAhaW1wb3J0YW50O1xcclxcbiAgY2xpcC1wYXRoOiBpbnNldCg1MCUpICFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXI6IDAgIWltcG9ydGFudDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmJ1dHRvbixcXHJcXG4uZmllbGRzZXQsXFxyXFxuLmlucHV0LFxcclxcbi5mb3JtLFxcclxcbi5saW5rIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uYnV0dG9uLFxcclxcbi5saW5rIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbjpob3ZlcixcXHJcXG4uYnV0dG9uOmZvY3VzLFxcclxcbi5saW5rOmhvdmVyLFxcclxcbi5saW5rOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAuNjtcXHJcXG59XFxyXFxuLmJ1dHRvbjphY3RpdmUsXFxyXFxuLmxpbms6YWN0aXZlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFja2dvdW5kTG9nbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5iYWNrZ291bmRMb2dvX19pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7d0RBQzREO0FBQzdEO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsa0JBQWtCO0VBQ2pCLGlCQUFpQjtDQUNsQjt3REFDMEQ7QUFDM0Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25COzt3REFFNkQ7QUFDOUQ7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCOzt3REFFMkQ7QUFDNUQ7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCOzt3REFFNEQ7QUFDN0Q7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix3Q0FBd0M7RUFDeEMsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQiw4QkFBOEI7QUFDaEM7QUFDQTs7Ozs7RUFLRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsd0NBQXdDO0FBQzFDO0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjtBQUNBOzs7O0VBSUUsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBOztFQUVFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtBQUNmOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnSW5wdXQgTW9ubyc7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuXFx0c3JjOiBsb2NhbCgnSW5wdXQgTW9ubycpLFxcclxcblxcdFxcdHVybCgnLi4vc3RhdGljL2ZvbnRzL0lucHV0TW9uby1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0lucHV0IE1vbm8nO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdHNyYzogbG9jYWwoJ0lucHV0IE1vbm8nKSxcXHJcXG5cXHRcXHR1cmwoJy4uL3N0YXRpYy9mb250cy9JbnB1dE1vbm8tQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUFQgUm9vdCBVSSc7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuXFx0c3JjOiBsb2NhbCgnUFQgUm9vdCBVSScpLFxcclxcblxcdFxcdHVybCgnLi4vc3RhdGljL2ZvbnRzL1BUIFJvb3QgVUlfTWVkaXVtLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG5cXHRcXHR1cmwoJy4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX01lZGl1bS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUFQgUm9vdCBVSSc7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdHNyYzogbG9jYWwoJ1BUIFJvb3QgVUknKSxcXHJcXG5cXHRcXHR1cmwoJy4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX0JvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcblxcdFxcdHVybCgnLi4vc3RhdGljL2ZvbnRzL1BUIFJvb3QgVUlfQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUFQgUm9vdCBVSSc7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcblxcdHNyYzogbG9jYWwoJ1BUIFJvb3QgVUknKSxcXHJcXG5cXHRcXHR1cmwoJy4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX0xpZ2h0LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG5cXHRcXHR1cmwoJy4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX0xpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG59XFxyXFxuaHRtbCwgYm9keSwgI3Jvb3QsIC5hcHAge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG4udmlzdWFsbHloaWRkZW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxyXFxuICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDFweCAhaW1wb3J0YW50O1xcclxcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XFxyXFxuICBjbGlwOiByZWN0KDAgMCAwIDApICFpbXBvcnRhbnQ7XFxyXFxuICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoNTAlKSAhaW1wb3J0YW50O1xcclxcbiAgY2xpcC1wYXRoOiBpbnNldCg1MCUpICFpbXBvcnRhbnQ7XFxyXFxuICBib3JkZXI6IDAgIWltcG9ydGFudDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmJ1dHRvbixcXHJcXG4uZmllbGRzZXQsXFxyXFxuLmlucHV0LFxcclxcbi5mb3JtLFxcclxcbi5saW5rIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uYnV0dG9uLFxcclxcbi5saW5rIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbjpob3ZlcixcXHJcXG4uYnV0dG9uOmZvY3VzLFxcclxcbi5saW5rOmhvdmVyLFxcclxcbi5saW5rOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAuNjtcXHJcXG59XFxyXFxuLmJ1dHRvbjphY3RpdmUsXFxyXFxuLmxpbms6YWN0aXZlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFja2dvdW5kTG9nbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5iYWNrZ291bmRMb2dvX19pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5saW5rIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi5saW5rLS1CRy1wdXJwbGV7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbn1cXHJcXG4ubGlua19fdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9saW5rLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5saW5rIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi5saW5rLS1CRy1wdXJwbGV7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbn1cXHJcXG4ubGlua19fdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvZHktLXNjcm9sbC1sb2NrIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG4ubWVudSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjAwMUU7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjc1cyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxufVxcclxcbi5tZW51LS1vcGVuIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG59XFxyXFxuLm1lbnVfX2lubmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogNTcwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyNjBweCAxMTJweCAxODBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tZW51X19saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm1lbnVfX2xpbmsge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgb3BhY2l0eTogMC4zNTtcXHJcXG59XFxyXFxuLm1lbnVfX2xpbms6aG92ZXIsXFxyXFxuLm1lbnVfX2xpbms6Zm9jdXMge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuLm1lbnVfX2xpbms6YWN0aXZlIHtcXHJcXG4gIG9wYWNpdHk6IDAuMzU7XFxyXFxufVxcclxcbi5tZW51X19saW5rSWNvbiB7XFxyXFxuICBtYXJnaW46IDAgMCAwIDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19jb250YWN0cyB7XFxyXFxuICBtYXgtd2lkdGg6IDM2NHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG4ubWVudV9fY29udGFjdCB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMCA0OHB4O1xcclxcbn1cXHJcXG4ubWVudV9fY29udGFjdC0tcGFkZGluZy0wIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi5tZW51X19jb250YWN0SGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMCAwIDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbn1cXHJcXG4ubWVudV9fY29udGFjdFRleHQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIG9wYWNpdHk6IDAuMzU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixzQ0FBc0M7RUFDdEMsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvZHktLXNjcm9sbC1sb2NrIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG4ubWVudSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogY29udGFpbjtcXHJcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjAwMUU7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjc1cyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxufVxcclxcbi5tZW51LS1vcGVuIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG59XFxyXFxuLm1lbnVfX2lubmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogNTcwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyNjBweCAxMTJweCAxODBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tZW51X19saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm1lbnVfX2xpbmsge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgb3BhY2l0eTogMC4zNTtcXHJcXG59XFxyXFxuLm1lbnVfX2xpbms6aG92ZXIsXFxyXFxuLm1lbnVfX2xpbms6Zm9jdXMge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuLm1lbnVfX2xpbms6YWN0aXZlIHtcXHJcXG4gIG9wYWNpdHk6IDAuMzU7XFxyXFxufVxcclxcbi5tZW51X19saW5rSWNvbiB7XFxyXFxuICBtYXJnaW46IDAgMCAwIDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19jb250YWN0cyB7XFxyXFxuICBtYXgtd2lkdGg6IDM2NHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG4ubWVudV9fY29udGFjdCB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMCA0OHB4O1xcclxcbn1cXHJcXG4ubWVudV9fY29udGFjdC0tcGFkZGluZy0wIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi5tZW51X19jb250YWN0SGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMCAwIDIwcHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbn1cXHJcXG4ubWVudV9fY29udGFjdFRleHQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIG9wYWNpdHk6IDAuMzU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZCYXIge1xcclxcblxcclxcbn1cXHJcXG4ubmF2QmFyX19pbm5lciB7XFxyXFxuICBoZWlnaHQ6IDExMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTEycHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5uYXZCYXJfX2xvZ29zQ29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogNzZweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLm5hdkJhcl9fbG9nbyB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLm5hdkJhcl9fbG9nby0tbGlnaHQge1xcclxcblxcclxcbn1cXHJcXG4ubmF2QmFyX19sb2dvLS1kYXJrIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcbi5uYXZCYXJfX2xvZ28tLW9wYWNpdHktMCB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG4ubmF2QmFyX19idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5tZW51QnV0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLm1lbnVCdXRvbi0tYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG4ubWVudUJ1dG9uX19pY29uIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tZW51QnV0b25fX2ljb25MaW5lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzBGMDAxRTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcXHJcXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5tZW51QnV0b25fX2ljb25MaW5lLS1hY3RpdmUge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcXHJcXG59XFxyXFxuLm1lbnVCdXRvbl9faWNvbkxpbmUtLXRyYW5zZm9ybS1kb3duIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpIHRyYW5zbGF0ZVkoLTdweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuLm1lbnVCdXRvbl9faWNvbkxpbmUtLXRyYW5zZm9ybS11cCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KSB0cmFuc2xhdGVZKDdweCkgcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcbi5tZW51QnV0b25fX3RleHQge1xcclxcbiAgbWFyZ2luOiAwIDAgMCAxNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG4ubmF2QmFyX19jaGF0QnV0b24ge1xcclxcbiAgd2lkdGg6IDcwcHg7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5uYXZCYXJfX2NoYXRCdXR0b25Mb2dvIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG4gIC8qIGJhY2tncm91bmQ6IHVybChcXFwiLi4vc3RhdGljL2NoYXRMb2dvLnN2Z1xcXCIgKTsgKi9cXHJcXG59XFxyXFxuLm5hdkJhcl9fY2hhdEJ1dHRvbkxvZ28tLWdyYWRpZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL3N0YXRpYy9jaGF0TG9nby0tZ3JhZGllbnQuc3ZnXFxcIiApOyAqL1xcclxcbn1cXHJcXG4ubmF2QmFyX19idXR0b25zR2FwIHtcXHJcXG4gIHdpZHRoOiAyMHZ3O1xcclxcbiAgbWluLXdpZHRoOiAyMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxOTdweDtcXHJcXG59XFxyXFxuLnNjcm9sbC1zZWN0aW9ucy1ob3Jpc29udGFsX19uYXZCYXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyNnB4O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiAxNjgwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbmF2YmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7QUFFQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0FBQ1Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5REFBeUQ7QUFDM0Q7QUFDQTtFQUNFLHlEQUF5RDtBQUMzRDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLDBEQUEwRDtBQUM1RDtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdkJhciB7XFxyXFxuXFxyXFxufVxcclxcbi5uYXZCYXJfX2lubmVyIHtcXHJcXG4gIGhlaWdodDogMTEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgcGFkZGluZzogMCAxMTJweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm5hdkJhcl9fbG9nb3NDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiA3NnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ubmF2QmFyX19sb2dvIHtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4ubmF2QmFyX19sb2dvLS1saWdodCB7XFxyXFxuXFxyXFxufVxcclxcbi5uYXZCYXJfX2xvZ28tLWRhcmsge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuLm5hdkJhcl9fbG9nby0tb3BhY2l0eS0wIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbi5uYXZCYXJfX2J1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLm1lbnVCdXRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4ubWVudUJ1dG9uLS1hY3RpdmUge1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi5tZW51QnV0b25fX2ljb24ge1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDEycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm1lbnVCdXRvbl9faWNvbkxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMEYwMDFFO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xcclxcbiAgdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLm1lbnVCdXRvbl9faWNvbkxpbmUtLWFjdGl2ZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xcclxcbn1cXHJcXG4ubWVudUJ1dG9uX19pY29uTGluZS0tdHJhbnNmb3JtLWRvd24ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCkgdHJhbnNsYXRlWSgtN3B4KSByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG4ubWVudUJ1dG9uX19pY29uTGluZS0tdHJhbnNmb3JtLXVwIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpIHRyYW5zbGF0ZVkoN3B4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuLm1lbnVCdXRvbl9fdGV4dCB7XFxyXFxuICBtYXJnaW46IDAgMCAwIDE2cHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcbi5uYXZCYXJfX2NoYXRCdXRvbiB7XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLm5hdkJhcl9fY2hhdEJ1dHRvbkxvZ28ge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xcclxcbiAgLyogYmFja2dyb3VuZDogdXJsKFxcXCIuLi9zdGF0aWMvY2hhdExvZ28uc3ZnXFxcIiApOyAqL1xcclxcbn1cXHJcXG4ubmF2QmFyX19jaGF0QnV0dG9uTG9nby0tZ3JhZGllbnQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIC8qIGJhY2tncm91bmQ6IHVybChcXFwiLi4vc3RhdGljL2NoYXRMb2dvLS1ncmFkaWVudC5zdmdcXFwiICk7ICovXFxyXFxufVxcclxcbi5uYXZCYXJfX2J1dHRvbnNHYXAge1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBtaW4td2lkdGg6IDIwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDE5N3B4O1xcclxcbn1cXHJcXG4uc2Nyb2xsLXNlY3Rpb25zLWhvcmlzb250YWxfX25hdkJhciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDI2cHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjcm9sbC1zZWN0aW9ucy1ob3Jpc29udGFsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLnNjcm9sbC1zZWN0aW9ucy1ob3Jpc29udGFsX19wYW5lbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2Nyb2xsLXNlY3Rpb25zLWhvcmlzb250YWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uc2Nyb2xsLXNlY3Rpb25zLWhvcmlzb250YWxfX3BhbmVsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc29sdXRpb25zIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcbi5zb2x1dGlvbnNfX2lubmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTUwcHggMTEycHggMDtcXHJcXG59XFxyXFxuLnNvbHV0aW9uc19faGVhZGVyIHtcXHJcXG4gIG1heC13aWR0aDogMzkycHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hY2NvcmRpb25TZWN0aW9uIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwdnc7XFxyXFxuICBtYXJnaW46IDEwMHB4IDAgMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5hY2NvcmRpb25TZWN0aW9uX19pbWFnZXNDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmFjY29yZGlvblNlY3Rpb25fX2ltZ0NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGhlaWdodDogNjB2dztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiAwIDEwMHB4IDAgMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uU2VjdGlvbl9faW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjY29yZGlvblNlY3Rpb25fX2FjY29yZGlvbiB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjb3JkaW9uIHtcXHJcXG5cXHJcXG59XFxyXFxuLmFjY29yZGlvbl9faW5uZXIge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwRjAwMUU7XFxyXFxufVxcclxcbi5hY2NvcmRpb25fX2Jsb2NrIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMEYwMDFFO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19ibG9jay0tYWN0aXZlIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFjY29yZGlvbl9faGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19oZWFkZXJUZXh0IHtcXHJcXG4gIG1hcmdpbjogMzhweCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19ibG9jay0tYWN0aXZlIC5hY2NvcmRpb25fX2hlYWRlclRleHQge1xcclxcbiAgY29sb3I6ICM3NzQ0RDI7XFxyXFxufVxcclxcbi5hY2NvcmRpb25fX2hlYWRlckljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19pY29uTGluZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjAwMUU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19ibG9jay0tYWN0aXZlIFxcclxcbi5hY2NvcmRpb25fX2ljb25MaW5lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NzQ0RDI7XFxyXFxufVxcclxcblxcclxcbi5hY2NvcmRpb25fX2ljb25MaW5lLS1wbHVzIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxyXFxufVxcclxcbi5hY2NvcmRpb25fX2Jsb2NrLS1hY3RpdmUgLmFjY29yZGlvbl9faWNvbkxpbmUtLXBsdXMge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hY2NvcmRpb25fX2NvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm51bUxpc3Qge1xcclxcbiAgY291bnRlci1yZXNldDogbGk7IFxcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDsgXFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4ubnVtTGlzdF9faXRlbSB7XFxyXFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG59XFxyXFxuLm51bUxpc3RfX2l0ZW06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6Y291bnRlcihsaSk7XFxyXFxuICBjb3VudGVyLWluY3JlbWVudDpsaTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFjY29yZGlvbl9fbnVtTGlzdCB7XFxyXFxuICBwYWRkaW5nOiAwIDAgNDZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5hY2NvcmRpb25fX251bUxpc3RJdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDAgMCAwIDM2cHg7XFxyXFxufVxcclxcbi5hY2NvcmRpb25fX251bUxpc3RJdGVtOmJlZm9yZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICB0b3A6IC02cHg7XFxyXFxuICBmb250LWZhbWlseTogSW5wdXQgTW9ubztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDJweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zb2x1dGlvbnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7O0FBRUE7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7O0FBRUE7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5QjtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNvbHV0aW9ucyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG4uc29sdXRpb25zX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE1MHB4IDExMnB4IDA7XFxyXFxufVxcclxcbi5zb2x1dGlvbnNfX2hlYWRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDM5MnB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYWNjb3JkaW9uU2VjdGlvbiB7XFxyXFxuICBtaW4taGVpZ2h0OiA2MHZ3O1xcclxcbiAgbWFyZ2luOiAxMDBweCAwIDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjb3JkaW9uU2VjdGlvbl9faW1hZ2VzQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5hY2NvcmRpb25TZWN0aW9uX19pbWdDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxuICBoZWlnaHQ6IDYwdnc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG1hcmdpbjogMCAxMDBweCAwIDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuLmFjY29yZGlvblNlY3Rpb25fX2ltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5hY2NvcmRpb25TZWN0aW9uX19hY2NvcmRpb24ge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogMCAwIDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFjY29yZGlvbiB7XFxyXFxuXFxyXFxufVxcclxcbi5hY2NvcmRpb25fX2lubmVyIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMEYwMDFFO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19ibG9jayB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBGMDAxRTtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9fYmxvY2stLWFjdGl2ZSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5hY2NvcmRpb25fX2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9faGVhZGVyVGV4dCB7XFxyXFxuICBtYXJnaW46IDM4cHggMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzRweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9fYmxvY2stLWFjdGl2ZSAuYWNjb3JkaW9uX19oZWFkZXJUZXh0IHtcXHJcXG4gIGNvbG9yOiAjNzc0NEQyO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19oZWFkZXJJY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9faWNvbkxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYwMDFFO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9fYmxvY2stLWFjdGl2ZSBcXHJcXG4uYWNjb3JkaW9uX19pY29uTGluZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjb3JkaW9uX19pY29uTGluZS0tcGx1cyB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19ibG9jay0tYWN0aXZlIC5hY2NvcmRpb25fX2ljb25MaW5lLS1wbHVzIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYWNjb3JkaW9uX19jb250ZW50IHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5udW1MaXN0IHtcXHJcXG4gIGNvdW50ZXItcmVzZXQ6IGxpOyBcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7IFxcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLm51bUxpc3RfX2l0ZW0ge1xcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcbi5udW1MaXN0X19pdGVtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OmNvdW50ZXIobGkpO1xcclxcbiAgY291bnRlci1pbmNyZW1lbnQ6bGk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hY2NvcmRpb25fX251bUxpc3Qge1xcclxcbiAgcGFkZGluZzogMCAwIDQ2cHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjZweDtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19udW1MaXN0SXRlbSB7XFxyXFxuICBwYWRkaW5nOiAwIDAgMCAzNnB4O1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19udW1MaXN0SXRlbTpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgdG9wOiAtNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IElucHV0IE1vbm87XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQycHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcGhlcmVfX2NhbnZhcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnNwaGVyZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zcGhlcmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zcGhlcmVfX2NhbnZhcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnNwaGVyZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNwaGVyZVNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLnNwaGVyZVNlY3Rpb25fX2lubmVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zcGhlcmVTZWN0aW9uX19zcGhlcmUge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4vKiDQn9Ce0JTQmtCb0K7Qp9CY0KLQrCDQqNCg0JjQpNCiICovXFxyXFxuLnNwaGVyZVNlY3Rpb25fX2hlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgZm9udC1mYW1pbHk6IElucHV0IE1vbm87XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zcGhlcmVTZWN0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBLHFCQUFxQjtBQUNyQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3BoZXJlU2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4uc3BoZXJlU2VjdGlvbl9faW5uZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNwaGVyZVNlY3Rpb25fX3NwaGVyZSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi8qINCf0J7QlNCa0JvQrtCn0JjQotCsINCo0KDQmNCk0KIgKi9cXHJcXG4uc3BoZXJlU2VjdGlvbl9faGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBmb250LWZhbWlseTogSW5wdXQgTW9ubztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9zdGF0aWMvQkctLXRyaWdnZXIuc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRyaWdnZXIge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbn1cXHJcXG4udHJpZ2dlcl9faW5uZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogODBweCA5MnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4udHJpZ2dlcl9faGVhZGVyLFxcclxcbi50cmlnZ2VyX190ZXh0IHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi50cmlnZ2VyX19oZWFkZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuLnRyaWdnZXJfX3RleHQge1xcclxcbiAgbWF4LXdpZHRoOiA4MjFweDtcXHJcXG4gIHBhZGRpbmc6IDM0cHggMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxufVxcclxcbi50cmlnZ2VyX19saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDAgMzRweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi50cmlnZ2VyX19saW5rOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi50cmlnZ2VyX19saW5rVGV4dENvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG59XFxyXFxuLnRyaWdnZXJfX2xpbms6aG92ZXIgLnRyaWdnZXJfX2xpbmtUZXh0Q29udGFpbmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XFxyXFxufVxcclxcblxcclxcbi50cmlnZ2VyX19saW5rVGV4dCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgXFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1LjY2ZGVnLCAjMDBDREZGIDEuMTMlLCAjNzc0NEQyIDQxLjMlLCAjRkYzQzAxIDcwLjE0JSwgI0ZGQzcwMCAxMDAlKTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3RyaWdnZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbURBQTRDO0VBQzVDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCOztFQUV2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtHQUFrRztFQUNsRyw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudHJpZ2dlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9CRy0tdHJpZ2dlci5zdmcnKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbn1cXHJcXG4udHJpZ2dlcl9faW5uZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogODBweCA5MnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4udHJpZ2dlcl9faGVhZGVyLFxcclxcbi50cmlnZ2VyX190ZXh0IHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi50cmlnZ2VyX19oZWFkZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuLnRyaWdnZXJfX3RleHQge1xcclxcbiAgbWF4LXdpZHRoOiA4MjFweDtcXHJcXG4gIHBhZGRpbmc6IDM0cHggMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxufVxcclxcbi50cmlnZ2VyX19saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDAgMzRweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi50cmlnZ2VyX19saW5rOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi50cmlnZ2VyX19saW5rVGV4dENvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG59XFxyXFxuLnRyaWdnZXJfX2xpbms6aG92ZXIgLnRyaWdnZXJfX2xpbmtUZXh0Q29udGFpbmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XFxyXFxufVxcclxcblxcclxcbi50cmlnZ2VyX19saW5rVGV4dCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgXFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1LjY2ZGVnLCAjMDBDREZGIDEuMTMlLCAjNzc0NEQyIDQxLjMlLCAjRkYzQzAxIDcwLjE0JSwgI0ZGQzcwMCAxMDAlKTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9zdGF0aWMvQkctLXF1ZXN0aW9uLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53aGF0SXNCbG9jayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi53aGF0SXNCbG9ja19faW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNjgwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxODZweCAxMTJweCAxNjZweDtcXHJcXG59XFxyXFxuLndoYXRJc0Jsb2NrX19kb2xsYXJTZWN0aW9uIHtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ud2hhdElzQmxvY2tfX3NsaWRlclNlY3Rpb24ge1xcclxcblxcclxcbn1cXHJcXG4ud2hhdElzQmxvY2tfX3NsaWRlcklubmVyIHtcXHJcXG4gIHBhZGRpbmc6IDE3NnB4IDAgMTc2cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcbi53aGF0SXNCbG9ja19fc2xpZGVySGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMTJweCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogNjZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4M3B4O1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi53aGF0SXNCbG9ja19fdGV4dCB7XFxyXFxuICBtYXgtd2lkdGg6IDQ5MHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMzRweCAwO1xcclxcbiAgXFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLndoYXRJc0Jsb2NrX190cmlnZ2VyU2VjdGlvbklubmVyIHtcXHJcXG4gIHBhZGRpbmc6IDg2cHggMCAwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3doYXRJc0Jsb2NrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbURBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZUFBZTs7RUFFZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndoYXRJc0Jsb2NrIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLndoYXRJc0Jsb2NrX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE4NnB4IDExMnB4IDE2NnB4O1xcclxcbn1cXHJcXG4ud2hhdElzQmxvY2tfX2RvbGxhclNlY3Rpb24ge1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi53aGF0SXNCbG9ja19fc2xpZGVyU2VjdGlvbiB7XFxyXFxuXFxyXFxufVxcclxcbi53aGF0SXNCbG9ja19fc2xpZGVySW5uZXIge1xcclxcbiAgcGFkZGluZzogMTc2cHggMCAxNzZweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL3N0YXRpYy9CRy0tcXVlc3Rpb24uc3ZnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG4ud2hhdElzQmxvY2tfX3NsaWRlckhlYWRlciB7XFxyXFxuICBtYXJnaW46IDEycHggMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDY2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogODNweDtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4ud2hhdElzQmxvY2tfX3RleHQge1xcclxcbiAgbWF4LXdpZHRoOiA0OTBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDM0cHggMDtcXHJcXG4gIFxcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi53aGF0SXNCbG9ja19fdHJpZ2dlclNlY3Rpb25Jbm5lciB7XFxyXFxuICBwYWRkaW5nOiA4NnB4IDAgMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndoeSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG4ud2h5X19iYWNrZ291bmRMb2dvSW1nIHtcXHJcXG4gIHRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuLndoeV9faW5uZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWF4LXdpZHRoOiAxNjgwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyNjBweCAxMTJweCAxNjBweDtcXHJcXG59XFxyXFxuLndoeV9fYm9yZGVyVG9wSGVhZGVyIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndoeV9fcGFyYWxsYXhTZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDk2cHggMCAxOTJweDtcXHJcXG59XFxyXFxuLndoeVBhcmFsbGF4X19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDEwOTBweDtcXHJcXG4gIG1hcmdpbjogMCAwIDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ud2h5UGFyYWxsYXhfX2NvbnRlbnRCbG9jayB7XFxyXFxuICBtYXgtd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuLndoeVBhcmFsbGF4X19ibG9jayB7XFxyXFxuICBtYXgtd2lkdGg6IDQ2MHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTM2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbi53aHlQYXJhbGxheF9faWNvbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDU2cHg7XFxyXFxufVxcclxcbi53aHlQYXJhbGxheF9faGVhZGVyLFxcclxcbi53aHlQYXJhbGxheF9fdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4ud2h5UGFyYWxsYXhfX2hlYWRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLndoeVBhcmFsbGF4X190ZXh0IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjZweDtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLndoeV9fcGFydG5lcnNJbm5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2h5X19jb250ZW50Q29udGFpbmVyIHtcXHJcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi53aHlfX3BhcnRuZXJzSGVhZGVyIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLndoeV9fcGFydG5lcnNDb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDk0cHggMCAwIDI0JTtcXHJcXG59XFxyXFxuLndoeV9fcGFydG5lcnNUZXh0Q29udGVudCB7XFxyXFxuXFxyXFxufVxcclxcbi53aHlfX3BhcnRuZXJzVGV4dCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwIDAgNTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jYXNlTGluayB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jYXNlTGlua19fY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NzQ0RDI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogLjI1cztcXHJcXG59XFxyXFxuLmNhc2VMaW5rOmhvdmVyIC5jYXNlTGlua19fY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uY2FzZUxpbmtfX3RleHRDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5jYXNlTGlua19fdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wOWVtO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjNzc0NEQyO1xcclxcbiAgdHJhbnNpdGlvbjogLjNzO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xcclxcbn1cXHJcXG4uY2FzZUxpbms6aG92ZXIgLmNhc2VMaW5rX190ZXh0IHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxyXFxufVxcclxcblxcclxcbi53aHlfX3BhcnRuZXJzQ291bnRlckNvbnRhaW5lciB7XFxyXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ud2h5X19wYXJ0bmVyc0NvdW50ZXJIZWFkZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG4ud2h5X19wYXJ0bmVyc0NvdW50ZXIge1xcclxcbiAgbWFyZ2luOiAwIDAgLTI4cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjAycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjU1cHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICM3NzQ0RDI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi53aHlfX3BhcnRuZXJzTG9nb3Mge1xcclxcbiAgaGVpZ2h0OiA5MnB4O1xcclxcbiAgbWFyZ2luOiAxMzRweCAwIDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ud2h5X19wYXJ0bmVyc0xvZ29JbWdDb250YWluZXIge1xcclxcbiAgbWluLXdpZHRoOiAyNDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMCA2OHB4IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLndoeV9fcGFydG5lcnNMb2dvSW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvd2h5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFNBQVM7O0VBRVQsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUdBOztBQUVBOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7Ozs7QUFLQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53aHkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLndoeV9fYmFja2dvdW5kTG9nb0ltZyB7XFxyXFxuICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcbi53aHlfX2lubmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMjYwcHggMTEycHggMTYwcHg7XFxyXFxufVxcclxcbi53aHlfX2JvcmRlclRvcEhlYWRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi53aHlfX3BhcmFsbGF4U2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiA5NnB4IDAgMTkycHg7XFxyXFxufVxcclxcbi53aHlQYXJhbGxheF9faW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMDkwcHg7XFxyXFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLndoeVBhcmFsbGF4X19jb250ZW50QmxvY2sge1xcclxcbiAgbWF4LXdpZHRoOiA1MCU7XFxyXFxufVxcclxcbi53aHlQYXJhbGxheF9fYmxvY2sge1xcclxcbiAgbWF4LXdpZHRoOiA0NjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEzNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG4ud2h5UGFyYWxsYXhfX2ljb24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xcclxcbn1cXHJcXG4ud2h5UGFyYWxsYXhfX2hlYWRlcixcXHJcXG4ud2h5UGFyYWxsYXhfX3RleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLndoeVBhcmFsbGF4X19oZWFkZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzRweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcbi53aHlQYXJhbGxheF9fdGV4dCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbi53aHlfX3BhcnRuZXJzSW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLndoeV9fY29udGVudENvbnRhaW5lciB7XFxyXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2h5X19wYXJ0bmVyc0hlYWRlciB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi53aHlfX3BhcnRuZXJzQ29udGVudCB7XFxyXFxuICBwYWRkaW5nOiA5NHB4IDAgMCAyNCU7XFxyXFxufVxcclxcbi53aHlfX3BhcnRuZXJzVGV4dENvbnRlbnQge1xcclxcblxcclxcbn1cXHJcXG4ud2h5X19wYXJ0bmVyc1RleHQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMCAwIDUwcHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjZweDtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FzZUxpbmsge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMCAzMHB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY2FzZUxpbmtfX2NpcmNsZSB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IC4yNXM7XFxyXFxufVxcclxcbi5jYXNlTGluazpob3ZlciAuY2FzZUxpbmtfX2NpcmNsZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmNhc2VMaW5rX190ZXh0Q29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uY2FzZUxpbmtfX3RleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDllbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogIzc3NDREMjtcXHJcXG4gIHRyYW5zaXRpb246IC4zcztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcXHJcXG59XFxyXFxuLmNhc2VMaW5rOmhvdmVyIC5jYXNlTGlua19fdGV4dCB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2h5X19wYXJ0bmVyc0NvdW50ZXJDb250YWluZXIge1xcclxcbiAgZmxleC1iYXNpczogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLndoeV9fcGFydG5lcnNDb3VudGVySGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuLndoeV9fcGFydG5lcnNDb3VudGVyIHtcXHJcXG4gIG1hcmdpbjogMCAwIC0yOHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDIwMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1NXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjNzc0NEQyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ud2h5X19wYXJ0bmVyc0xvZ29zIHtcXHJcXG4gIGhlaWdodDogOTJweDtcXHJcXG4gIG1hcmdpbjogMTM0cHggMCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLndoeV9fcGFydG5lcnNMb2dvSW1nQ29udGFpbmVyIHtcXHJcXG4gIG1pbi13aWR0aDogMjQwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgNjhweCAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi53aHlfX3BhcnRuZXJzTG9nb0ltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib3JkZXJUb3BIZWFkZXIuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGF0LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2xpZW50cy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3RzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVyb1NlY3Rpb24uY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob3dJdFdvcmtzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saW5rLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njcm9sbC1zZWN0aW9ucy1ob3Jpc29udGFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc29sdXRpb25zLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3BoZXJlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3BoZXJlU2VjdGlvbi5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RyaWdnZXIuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aGF0SXNCbG9jay5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3doeS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvanMvaW5kZXguanNcIixcInZlbmRvcnNcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSAoKSA9PiB7XG5cbn07XG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHR9XG5cdGNodW5rTG9hZGluZ0dsb2JhbCA9IGNodW5rTG9hZGluZ0dsb2JhbC5zbGljZSgpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtMb2FkaW5nR2xvYmFsLmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0xvYWRpbmdHbG9iYWxbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtBaWxldFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtBaWxldFwiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=