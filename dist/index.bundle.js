/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/*! namespace exports */
/*! export Accordion [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => /* binding */ Accordion
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Accordion = /*#__PURE__*/function () {
  function Accordion() {
    _classCallCheck(this, Accordion);

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
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline().to(block.content, this.blockContentStateON).to(block.img, this.blockImgStateON, 0);
    }
  }, {
    key: "blockTurnON",
    value: function blockTurnON(block, index) {
      block.block.classList.add('accordion__block--active');
      var turnONTimeline = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();
      turnONTimeline.to(block.content, this.blockContentStateON).to(block.img, this.blockImgStateON, 0);
    }
  }, {
    key: "blockTurnOFF",
    value: function blockTurnOFF(block, index) {
      block.block.classList.remove('accordion__block--active');
      var turnOFFTimeline = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();
      turnOFFTimeline.to(block.content, this.blockContentStateOFF).to(block.img, this.blockImgStateOFF, 0);
    }
  }]);

  return Accordion;
}();

/***/ }),

/***/ "./src/js/hero.js":
/*!************************!*\
  !*** ./src/js/hero.js ***!
  \************************/
/*! namespace exports */
/*! export Hero [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": () => /* binding */ Hero
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
var Hero = /*#__PURE__*/function () {
  function Hero() {
    _classCallCheck(this, Hero);

    this.backgroundTimeline = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();
    this.sphereTimeline = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();
    this.heroContainer = document.querySelector(".scroll-sections-horisontal");
    this.BGLogo = document.querySelector('.backgoundLogo__img');
    this.sphereSection = document.querySelector('.sphereSection');
    this.heroSection = document.querySelector('.heroSection');
  }

  _createClass(Hero, [{
    key: "init",
    value: function init() {
      this.setUpBGLogo();
      this.setUpHorisontalScrollSection();
    }
  }, {
    key: "setUpBGLogo",
    value: function setUpBGLogo() {
      var _this = this;

      this.backgroundTimeline.to(this.BGLogo, {
        opacity: 1,
        xPercent: 0,
        duration: 1
      }).to(this.BGLogo, {
        opacity: 1,
        xPercent: -100,
        duration: 2
      });
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
        trigger: this.heroContainer,
        pin: this.BGLogo,
        anticipatePin: 1,
        animation: this.backgroundTimeline,
        scrub: 1,
        start: 'top top',
        end: function end() {
          return "+=" + _this.heroContainer.offsetWidth;
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(this.BGLogo, {
        opacity: 0
      });
    }
  }, {
    key: "setUpHorisontalScrollSection",
    value: function setUpHorisontalScrollSection() {
      var _this2 = this;

      this.sphereTimeline.to(this.sphereSection, {
        xPercent: -100
      }).to(this.heroSection, {
        xPercent: -100
      }, 0);
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
        trigger: this.heroContainer,
        pin: true,
        anticipatePin: 1,
        animation: this.sphereTimeline,
        scrub: 1,
        start: 'top top',
        end: function end() {
          return "+=" + _this2.heroContainer.offsetWidth;
        }
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
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowItWorks": () => /* binding */ HowItWorks
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
var HowItWorks = /*#__PURE__*/function () {
  function HowItWorks() {
    _classCallCheck(this, HowItWorks);

    this.backgroundTimeline = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();
    this.Stages = ['Ailet AI', 'Stage 1', 'Stage 2'];
    this.StageContent = document.querySelector('.howItWorks__stageIndicatorHeader');
    this.stageImages = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray('.ST__stageImgContainer');
    this.Blocks = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray('.ST__contentBlock--right');
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
        var fadeOut = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();

        if (i > 0) {
          _this.addFadeOutAnimToRightBlock(fadeOut, block);

          _this.addFadeOutAnimToStageImg(fadeOut, _this.stageImages[i - 1]);
        }

        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
          trigger: block,
          start: 'top 50%',
          end: 'top 10%',
          animation: fadeOut,
          scrub: 1,
          onEnter: i > 0 && _this.stageIncAnim.bind(_this),
          onLeaveBack: i > 0 && _this.stageDecAnim.bind(_this)
        });
        /* FADEIN */

        var fadeIn = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();

        if (i < _this.Blocks.length - 1) {
          _this.addFadeInAnimToRightBlock(fadeIn, block);
        }

        if (i > 0 && i < _this.stageImages.length) {
          _this.addFadeInAnimToStageImg(fadeIn, _this.stageImages[i - 1]);
        }

        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
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
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline().to(this.StageContent, {
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
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline().to(this.StageContent, {
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
      var blocksArr = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray('.ST__contentBlock--right');
      blocksArr.shift();
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(blocksArr, {
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(this.stageImages, {
        autoAlpha: 0,
        yPercent: 10
      });
    }
  }, {
    key: "pinLeftSide",
    value: function pinLeftSide() {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
        trigger: this.Container,
        start: 'top top',
        end: 'bottom bottom',
        pin: this.LeftContent,
        anticipatePin: 1
      });
    }
  }, {
    key: "pinStageIndicator",
    value: function pinStageIndicator() {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
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
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _hero_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.js */ "./src/js/hero.js");
/* harmony import */ var _css_link_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/link.css */ "./src/css/link.css");
/* harmony import */ var _css_sphere_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/sphere.css */ "./src/css/sphere.css");
/* harmony import */ var _css_sphereSection_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/sphereSection.css */ "./src/css/sphereSection.css");
/* harmony import */ var _css_scroll_sections_horisontal_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/scroll-sections-horisontal.css */ "./src/css/scroll-sections-horisontal.css");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/navbar.css */ "./src/css/navbar.css");
/* harmony import */ var _menuButon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menuButon.js */ "./src/js/menuButon.js");
/* harmony import */ var _menuButon_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_menuButon_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_heroSection_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/heroSection.css */ "./src/css/heroSection.css");
/* harmony import */ var _css_whatIsBlock_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/whatIsBlock.css */ "./src/css/whatIsBlock.css");
/* harmony import */ var _whatIs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./whatIs.js */ "./src/js/whatIs.js");
/* harmony import */ var _css_borderTopHeader_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/borderTopHeader.css */ "./src/css/borderTopHeader.css");
/* harmony import */ var _css_trigger_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/trigger.css */ "./src/css/trigger.css");
/* harmony import */ var _css_howItWorks_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/howItWorks.css */ "./src/css/howItWorks.css");
/* harmony import */ var _howItWorks_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./howItWorks.js */ "./src/js/howItWorks.js");
/* harmony import */ var _css_solutions_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/solutions.css */ "./src/css/solutions.css");
/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./accordion.js */ "./src/js/accordion.js");
/* harmony import */ var _css_why_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../css/why.css */ "./src/css/why.css");
/* harmony import */ var _why_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./why.js */ "./src/js/why.js");
 //import './sphere.js';



















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
  var Hero = new _hero_js__WEBPACK_IMPORTED_MODULE_1__.Hero();
  Hero.init();
  var WhatIs = new _whatIs_js__WEBPACK_IMPORTED_MODULE_10__.WhatIs();
  WhatIs.init();
  var HowItWorks = new _howItWorks_js__WEBPACK_IMPORTED_MODULE_14__.HowItWorks();
  HowItWorks.init();
  var Accordion = new _accordion_js__WEBPACK_IMPORTED_MODULE_16__.Accordion();
  Accordion.init();
  var Why = new _why_js__WEBPACK_IMPORTED_MODULE_18__.Why();
  Why.init();
  /* document.querySelector('.preloaderCover').style.display = 'none'; */
}

/***/ }),

/***/ "./src/js/menuButon.js":
/*!*****************************!*\
  !*** ./src/js/menuButon.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

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
  document.querySelector('.menuButon').addEventListener('click', menuButonClickHandler);
}

;

function toggleMenu() {
  var lineTop, lineBottom;
  return function toggleMenuLineClass(e) {
    if (!lineTop || !lineBottom) {
      var button = e.currentTarget;
      lineTop = button.querySelector('.menuButon__iconLine--top');
      lineBottom = button.querySelector('.menuButon__iconLine--bottom');
    }

    lineTop.classList.toggle('menuButon__iconLine--transform-down');
    lineBottom.classList.toggle('menuButon__iconLine--transform-up');
  };
}

var menuButonClickHandler = toggleMenu();

/***/ }),

/***/ "./src/js/whatIs.js":
/*!**************************!*\
  !*** ./src/js/whatIs.js ***!
  \**************************/
/*! namespace exports */
/*! export WhatIs [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatIs": () => /* binding */ WhatIs
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
var WhatIs = /*#__PURE__*/function () {
  function WhatIs() {
    _classCallCheck(this, WhatIs);

    this.headers = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray('.whatIsBlock__sliderHeader');
  }

  _createClass(WhatIs, [{
    key: "init",
    value: function init() {
      this.setUpwhatIsBlock();
    }
  }, {
    key: "getTween",
    value: function getTween(element, isLeftLayout) {
      return gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(element, {
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

        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
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
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Why": () => /* binding */ Why
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
var Why = /*#__PURE__*/function () {
  function Why() {
    _classCallCheck(this, Why);

    this.contentBlocks = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray('.whyParallax__contentBlock');
  }

  _createClass(Why, [{
    key: "init",
    value: function init() {
      this.setScrollTrigerToAllContentBlocks();
    }
  }, {
    key: "setScrollTrigerToAllContentBlocks",
    value: function setScrollTrigerToAllContentBlocks() {
      this.contentBlocks.forEach(function (sideBlock, i) {
        var leftLayout = i % 2 > 0 ? false : true;
        var tween = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.fromTo(sideBlock, {
          yPercent: leftLayout ? -10 : 10
        }, {
          yPercent: leftLayout ? 10 : -10
        });
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({
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

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".borderTopHeader {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.borderTopHeader--paddingTop-big {\r\n  padding: 44px 0 44px;\r\n}\r\n.borderTopHeader__content {\r\n  width: 1095px;\r\n  padding: 40px 0 0;\r\n  border-top: 2px solid #0F001E;\r\n}\r\n.borderTopHeader__content--paddingTop-big {\r\n  padding: 64px 0 0;\r\n}\r\n.borderTopHeader__headerAndIcon {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n}\r\n.borderTopHeader__header,\r\n.borderTopHeader__icon,\r\n.borderTopHeader__blockText {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 41px;\r\n  letter-spacing: 0.02em;\r\n  color: #0F001E;\r\n}\r\n.borderTopHeader__header {\r\n  max-width: 728px;\r\n  margin: 0;\r\n  text-transform: uppercase;\r\n}\r\n.borderTopHeader__header--orange {\r\n  font-size: 56px;\r\n  line-height: 71px;\r\n  color: #FF7236;\r\n  text-transform: none;\r\n}\r\n.borderTopHeader__icon {\r\n  font-weight: normal;\r\n}\r\n.borderTopHeader__block {\r\n  width: 49%;\r\n  display: inline-block;\r\n  padding: 0 150px 0 0;\r\n  box-sizing: border-box;\r\n}\r\n.borderTopHeader__blockText {\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #0F001E;\r\n}", "",{"version":3,"sources":["webpack://./src/css/borderTopHeader.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,6BAA6B;AAC/B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;AACnB;AACA;;;EAGE,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,qBAAqB;EACrB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB","sourcesContent":[".borderTopHeader {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.borderTopHeader--paddingTop-big {\r\n  padding: 44px 0 44px;\r\n}\r\n.borderTopHeader__content {\r\n  width: 1095px;\r\n  padding: 40px 0 0;\r\n  border-top: 2px solid #0F001E;\r\n}\r\n.borderTopHeader__content--paddingTop-big {\r\n  padding: 64px 0 0;\r\n}\r\n.borderTopHeader__headerAndIcon {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n}\r\n.borderTopHeader__header,\r\n.borderTopHeader__icon,\r\n.borderTopHeader__blockText {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 41px;\r\n  letter-spacing: 0.02em;\r\n  color: #0F001E;\r\n}\r\n.borderTopHeader__header {\r\n  max-width: 728px;\r\n  margin: 0;\r\n  text-transform: uppercase;\r\n}\r\n.borderTopHeader__header--orange {\r\n  font-size: 56px;\r\n  line-height: 71px;\r\n  color: #FF7236;\r\n  text-transform: none;\r\n}\r\n.borderTopHeader__icon {\r\n  font-weight: normal;\r\n}\r\n.borderTopHeader__block {\r\n  width: 49%;\r\n  display: inline-block;\r\n  padding: 0 150px 0 0;\r\n  box-sizing: border-box;\r\n}\r\n.borderTopHeader__blockText {\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #0F001E;\r\n}"],"sourceRoot":""}]);
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

"use strict";
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

"use strict";
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

"use strict";
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
/* harmony import */ var _static_fonts_PT_Root_UI_Medium_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Medium.ttf */ "./src/static/fonts/PT Root UI_Medium.ttf");
/* harmony import */ var _static_fonts_PT_Root_UI_Medium_eot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Medium.eot */ "./src/static/fonts/PT Root UI_Medium.eot");
/* harmony import */ var _static_fonts_PT_Root_UI_Bold_woff2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Bold.woff2 */ "./src/static/fonts/PT Root UI_Bold.woff2");
/* harmony import */ var _static_fonts_PT_Root_UI_Bold_woff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Bold.woff */ "./src/static/fonts/PT Root UI_Bold.woff");
/* harmony import */ var _static_fonts_PT_Root_UI_Bold_ttf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Bold.ttf */ "./src/static/fonts/PT Root UI_Bold.ttf");
/* harmony import */ var _static_fonts_PT_Root_UI_Bold_eot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/fonts/PT Root UI_Bold.eot */ "./src/static/fonts/PT Root UI_Bold.eot");
// Imports













var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_InputMono_Medium_woff__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_InputMono_Bold_woff__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Medium_woff2__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Medium_woff__WEBPACK_IMPORTED_MODULE_6__);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Medium_ttf__WEBPACK_IMPORTED_MODULE_7__);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Medium_eot__WEBPACK_IMPORTED_MODULE_8__);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Bold_woff2__WEBPACK_IMPORTED_MODULE_9__);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Bold_woff__WEBPACK_IMPORTED_MODULE_10__);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Bold_ttf__WEBPACK_IMPORTED_MODULE_11__);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_fonts_PT_Root_UI_Bold_eot__WEBPACK_IMPORTED_MODULE_12__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n\tfont-family: 'Input Mono';\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tsrc: local('Input Mono'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'Input Mono';\r\n\tfont-style: normal;\r\n  font-weight: bold;\r\n\tsrc: local('Input Mono'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'PT Root UI';\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tsrc: local('PT Root UI'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), \r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('ttf'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('eot');\r\n}\r\n@font-face {\r\n\tfont-family: 'PT Root UI';\r\n\tfont-style: normal;\r\n\tfont-weight: bold;\r\n\tsrc: local('PT Root UI'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff2'), \r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('ttf'),\r\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('eot');\r\n}\r\nhtml, body, #root, .app {\r\n\twidth: 100%;\r\n}\r\nbody {\r\n  min-height: 100%;\r\n  margin: 0;\r\n  background-color: #FFFFFF;\r\n}\r\n.visuallyhidden {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0 0 0 0);\r\n  -webkit-clip-path: inset(50%);\r\n  clip-path: inset(50%);\r\n  border: 0;\r\n  white-space: nowrap;\r\n}\r\n.button,\r\n.fieldset,\r\n.input,\r\n.form,\r\n.link {\r\n  margin: 0;\r\n  padding: 0;\r\n  appearance: none;\r\n  border: none;\r\n  background: none;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.button,\r\n.link {\r\n  cursor: pointer;\r\n}\r\n.button:hover,\r\n.button:focus,\r\n.link:hover,\r\n.link:focus {\r\n  outline: none;\r\n  opacity: .6;\r\n}\r\n.button:active,\r\n.link:active {\r\n  opacity: 1;\r\n}\r\n.input:focus {\r\n  outline: none;\r\n}\r\n\r\n\r\n.backgoundLogo {\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  overflow: hidden;\r\n}\r\n.backgoundLogo__img {\r\n  max-width: 100%;\r\n  margin: 0 0 0 auto;\r\n  display: block;\r\n  transform: translateX(100%);\r\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,mBAAmB;CACnB;wDAC4D;AAC7D;AACA;CACC,yBAAyB;CACzB,kBAAkB;EACjB,iBAAiB;CAClB;wDAC0D;AAC3D;AACA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,mBAAmB;CACnB;;;;uDAI2D;AAC5D;AACA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,iBAAiB;CACjB;;;;uDAIyD;AAC1D;AACA;CACC,WAAW;AACZ;AACA;EACE,gBAAgB;EAChB,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;EAC7B,qBAAqB;EACrB,SAAS;EACT,mBAAmB;AACrB;AACA;;;;;EAKE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,qBAAqB;EACrB,wCAAwC;AAC1C;AACA;;EAEE,eAAe;AACjB;AACA;;;;EAIE,aAAa;EACb,WAAW;AACb;AACA;;EAEE,UAAU;AACZ;AACA;EACE,aAAa;AACf;;;AAGA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,cAAc;EACd,2BAA2B;AAC7B","sourcesContent":["@font-face {\r\n\tfont-family: 'Input Mono';\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tsrc: local('Input Mono'),\r\n\t\turl('../static/fonts/InputMono-Medium.woff') format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'Input Mono';\r\n\tfont-style: normal;\r\n  font-weight: bold;\r\n\tsrc: local('Input Mono'),\r\n\t\turl('../static/fonts/InputMono-Bold.woff') format('woff');\r\n}\r\n@font-face {\r\n\tfont-family: 'PT Root UI';\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tsrc: local('PT Root UI'),\r\n\t\turl('../static/fonts/PT Root UI_Medium.woff2') format('woff2'), \r\n\t\turl('../static/fonts/PT Root UI_Medium.woff') format('woff'),\r\n\t\turl('../static/fonts/PT Root UI_Medium.ttf') format('ttf'),\r\n\t\turl('../static/fonts/PT Root UI_Medium.eot') format('eot');\r\n}\r\n@font-face {\r\n\tfont-family: 'PT Root UI';\r\n\tfont-style: normal;\r\n\tfont-weight: bold;\r\n\tsrc: local('PT Root UI'),\r\n\t\turl('../static/fonts/PT Root UI_Bold.woff2') format('woff2'), \r\n\t\turl('../static/fonts/PT Root UI_Bold.woff') format('woff'),\r\n\t\turl('../static/fonts/PT Root UI_Bold.ttf') format('ttf'),\r\n\t\turl('../static/fonts/PT Root UI_Bold.eot') format('eot');\r\n}\r\nhtml, body, #root, .app {\r\n\twidth: 100%;\r\n}\r\nbody {\r\n  min-height: 100%;\r\n  margin: 0;\r\n  background-color: #FFFFFF;\r\n}\r\n.visuallyhidden {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0 0 0 0);\r\n  -webkit-clip-path: inset(50%);\r\n  clip-path: inset(50%);\r\n  border: 0;\r\n  white-space: nowrap;\r\n}\r\n.button,\r\n.fieldset,\r\n.input,\r\n.form,\r\n.link {\r\n  margin: 0;\r\n  padding: 0;\r\n  appearance: none;\r\n  border: none;\r\n  background: none;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.button,\r\n.link {\r\n  cursor: pointer;\r\n}\r\n.button:hover,\r\n.button:focus,\r\n.link:hover,\r\n.link:focus {\r\n  outline: none;\r\n  opacity: .6;\r\n}\r\n.button:active,\r\n.link:active {\r\n  opacity: 1;\r\n}\r\n.input:focus {\r\n  outline: none;\r\n}\r\n\r\n\r\n.backgoundLogo {\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  overflow: hidden;\r\n}\r\n.backgoundLogo__img {\r\n  max-width: 100%;\r\n  margin: 0 0 0 auto;\r\n  display: block;\r\n  transform: translateX(100%);\r\n}"],"sourceRoot":""}]);
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

"use strict";
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _static_chatLogo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/chatLogo.svg */ "./src/static/chatLogo.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_static_chatLogo_svg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navBar {\r\n\r\n}\r\n.navBar__inner {\r\n  height: 110px;\r\n  width: 100%;\r\n  max-width: 1680px;\r\n  padding: 0 112px;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.navBar__buttons {\r\n  display: flex;\r\n}\r\n.menuButon {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.menuButon__icon {\r\n  width: 32px;\r\n  height: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.menuButon__iconLine {\r\n  width: 100%;\r\n  border: 1px solid #0F001E;\r\n  transform-origin: 0% 50%;\r\n  transition: .25s ease-in-out;\r\n}\r\n.menuButon__iconLine--transform-down {\r\n  transform: translateX(4px) translateY(-7px) rotate(45deg);\r\n}\r\n.menuButon__iconLine--transform-up {\r\n  transform: translateX(4px) translateY(7px) rotate(-45deg);\r\n}\r\n.menuButon__text {\r\n  margin: 0 0 0 16px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #0F001E;\r\n}\r\n.navBar__chatButon {\r\n  width: 70px;\r\n  height: 70px;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + " );\r\n}\r\n.navBar__buttonsGap {\r\n  width: 20vw;\r\n  min-width: 20px;\r\n  max-width: 197px;\r\n}\r\n.scroll-sections-horisontal__navBar {\r\n  position: absolute;\r\n  top: 26px;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  max-width: 1680px;\r\n  margin: auto;\r\n}", "",{"version":3,"sources":["webpack://./src/css/navbar.css"],"names":[],"mappings":"AAAA;;AAEA;AACA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,WAAW;EACX,yBAAyB;EACzB,wBAAwB;EACxB,4BAA4B;AAC9B;AACA;EACE,yDAAyD;AAC3D;AACA;EACE,yDAAyD;AAC3D;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;EACZ,oDAA0C;AAC5C;AACA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,YAAY;AACd","sourcesContent":[".navBar {\r\n\r\n}\r\n.navBar__inner {\r\n  height: 110px;\r\n  width: 100%;\r\n  max-width: 1680px;\r\n  padding: 0 112px;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.navBar__buttons {\r\n  display: flex;\r\n}\r\n.menuButon {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.menuButon__icon {\r\n  width: 32px;\r\n  height: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n.menuButon__iconLine {\r\n  width: 100%;\r\n  border: 1px solid #0F001E;\r\n  transform-origin: 0% 50%;\r\n  transition: .25s ease-in-out;\r\n}\r\n.menuButon__iconLine--transform-down {\r\n  transform: translateX(4px) translateY(-7px) rotate(45deg);\r\n}\r\n.menuButon__iconLine--transform-up {\r\n  transform: translateX(4px) translateY(7px) rotate(-45deg);\r\n}\r\n.menuButon__text {\r\n  margin: 0 0 0 16px;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  color: #0F001E;\r\n}\r\n.navBar__chatButon {\r\n  width: 70px;\r\n  height: 70px;\r\n  background: url(\"../static/chatLogo.svg\" );\r\n}\r\n.navBar__buttonsGap {\r\n  width: 20vw;\r\n  min-width: 20px;\r\n  max-width: 197px;\r\n}\r\n.scroll-sections-horisontal__navBar {\r\n  position: absolute;\r\n  top: 26px;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  max-width: 1680px;\r\n  margin: auto;\r\n}"],"sourceRoot":""}]);
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

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".scroll-sections-horisontal {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  overflow: hidden;\r\n}\r\n.scroll-sections-horisontal__panel {\r\n  width: 100%;\r\n  flex-shrink: 0;\r\n  position: relative;\r\n}", "",{"version":3,"sources":["webpack://./src/css/scroll-sections-horisontal.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;AACpB","sourcesContent":[".scroll-sections-horisontal {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  overflow: hidden;\r\n}\r\n.scroll-sections-horisontal__panel {\r\n  width: 100%;\r\n  flex-shrink: 0;\r\n  position: relative;\r\n}"],"sourceRoot":""}]);
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".trigger {\r\n  background-color: #7744D2;\r\n  border-radius: 7px;\r\n}\r\n.trigger__inner {\r\n  margin: auto;\r\n  padding: 80px 92px;\r\n  text-align: center;\r\n}\r\n.trigger__header,\r\n.trigger__text {\r\n  margin: auto;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  text-align: center;\r\n  color: #FFFFFF;\r\n}\r\n.trigger__header {\r\n  margin: auto;\r\n  font-weight: bold;\r\n  font-size: 48px;\r\n  line-height: 60px;\r\n}\r\n.trigger__text {\r\n  max-width: 821px;\r\n  padding: 34px 0;\r\n  font-weight: 500;\r\n  font-size: 24px;\r\n  line-height: 30px;\r\n  letter-spacing: 0.02em;\r\n}\r\n.trigger__link {\r\n  display: inline-block;\r\n  margin: 0;\r\n  padding: 0 34px;\r\n  overflow: hidden;\r\n}\r\n.trigger__link:hover {\r\n  opacity: 1;\r\n}\r\n.trigger__linkTextContainer {\r\n  height: 100%;\r\n  transition: 0.5s ease-in-out;\r\n  transform: translateY(0%);\r\n}\r\n.howItWorks__link:hover .trigger__linkTextContainer {\r\n  transform: translateY(-200%);\r\n}\r\n\r\n.trigger__linkText {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  \r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  background: linear-gradient(135.66deg, #00CDFF 1.13%, #7744D2 41.3%, #FF3C01 70.14%, #FFC700 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  color: transparent;\r\n}", "",{"version":3,"sources":["webpack://./src/css/trigger.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;AACA;;EAEE,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,UAAU;AACZ;AACA;EACE,YAAY;EACZ,4BAA4B;EAC5B,yBAAyB;AAC3B;AACA;EACE,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;;EAEnB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kGAAkG;EAClG,6BAA6B;EAC7B,oCAAoC;EACpC,kBAAkB;AACpB","sourcesContent":[".trigger {\r\n  background-color: #7744D2;\r\n  border-radius: 7px;\r\n}\r\n.trigger__inner {\r\n  margin: auto;\r\n  padding: 80px 92px;\r\n  text-align: center;\r\n}\r\n.trigger__header,\r\n.trigger__text {\r\n  margin: auto;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  text-align: center;\r\n  color: #FFFFFF;\r\n}\r\n.trigger__header {\r\n  margin: auto;\r\n  font-weight: bold;\r\n  font-size: 48px;\r\n  line-height: 60px;\r\n}\r\n.trigger__text {\r\n  max-width: 821px;\r\n  padding: 34px 0;\r\n  font-weight: 500;\r\n  font-size: 24px;\r\n  line-height: 30px;\r\n  letter-spacing: 0.02em;\r\n}\r\n.trigger__link {\r\n  display: inline-block;\r\n  margin: 0;\r\n  padding: 0 34px;\r\n  overflow: hidden;\r\n}\r\n.trigger__link:hover {\r\n  opacity: 1;\r\n}\r\n.trigger__linkTextContainer {\r\n  height: 100%;\r\n  transition: 0.5s ease-in-out;\r\n  transform: translateY(0%);\r\n}\r\n.howItWorks__link:hover .trigger__linkTextContainer {\r\n  transform: translateY(-200%);\r\n}\r\n\r\n.trigger__linkText {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  \r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n  background: linear-gradient(135.66deg, #00CDFF 1.13%, #7744D2 41.3%, #FF3C01 70.14%, #FFC700 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  color: transparent;\r\n}"],"sourceRoot":""}]);
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

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".whatIsBlock {\r\n  /* height: 100vh;\r\n  width: 100vw; */\r\n  position: relative;\r\n\r\n  /* background: url(\"../static/BG--big.svg\"); */\r\n  background-position-x: 100%;\r\n  background-repeat: no-repeat;\r\n  /* background-color: #FFFFFF; */\r\n}\r\n.whatIsBlock__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 186px 112px 166px;\r\n}\r\n.whatIsBlock__dollarSection {\r\n  \r\n}\r\n\r\n.whatIsBlock__sliderSection {\r\n\r\n}\r\n.whatIsBlock__sliderInner {\r\n  padding: 176px 0 176px;\r\n  text-align: center;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n.whatIsBlock__sliderHeader {\r\n  margin: 12px 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 66px;\r\n  line-height: 83px;\r\n  color: #0F001E;\r\n}\r\n.whatIsBlock__text {\r\n  max-width: 490px;\r\n  margin: 0;\r\n  padding: 34px 0;\r\n  \r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 41px;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.whatIsBlock__triggerSectionInner {\r\n  padding: 86px 0 0;\r\n}", "",{"version":3,"sources":["webpack://./src/css/whatIsBlock.css"],"names":[],"mappings":"AAAA;EACE;iBACe;EACf,kBAAkB;;EAElB,8CAA8C;EAC9C,2BAA2B;EAC3B,4BAA4B;EAC5B,+BAA+B;AACjC;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;AAC5B;AACA;;AAEA;;AAEA;;AAEA;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,mDAA6C;EAC7C,4BAA4B;EAC5B,2BAA2B;AAC7B;AACA;EACE,cAAc;EACd,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,SAAS;EACT,eAAe;;EAEf,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".whatIsBlock {\r\n  /* height: 100vh;\r\n  width: 100vw; */\r\n  position: relative;\r\n\r\n  /* background: url(\"../static/BG--big.svg\"); */\r\n  background-position-x: 100%;\r\n  background-repeat: no-repeat;\r\n  /* background-color: #FFFFFF; */\r\n}\r\n.whatIsBlock__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 186px 112px 166px;\r\n}\r\n.whatIsBlock__dollarSection {\r\n  \r\n}\r\n\r\n.whatIsBlock__sliderSection {\r\n\r\n}\r\n.whatIsBlock__sliderInner {\r\n  padding: 176px 0 176px;\r\n  text-align: center;\r\n  background: url(\"../static/BG--question.svg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n.whatIsBlock__sliderHeader {\r\n  margin: 12px 0;\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 66px;\r\n  line-height: 83px;\r\n  color: #0F001E;\r\n}\r\n.whatIsBlock__text {\r\n  max-width: 490px;\r\n  margin: 0;\r\n  padding: 34px 0;\r\n  \r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n  line-height: 41px;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.whatIsBlock__triggerSectionInner {\r\n  padding: 86px 0 0;\r\n}"],"sourceRoot":""}]);
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

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".why {\r\n  background-color: #ffffff;\r\n}\r\n.why__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 260px 112px 0;\r\n}\r\n.why__contentHeader {\r\n  width: 100%;\r\n}\r\n\r\n.why__parallaxSection {\r\n  padding: 96px 0 358px;\r\n}\r\n.whyParallax__inner {\r\n  max-width: 1090px;\r\n  margin: 0 0 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.whyParallax__contentBlock {\r\n  max-width: 50%;\r\n}\r\n.whyParallax__block {\r\n  max-width: 460px;\r\n  margin-bottom: 136px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n.whyParallax__icon {\r\n  margin-right: 56px;\r\n}\r\n.whyParallax__header,\r\n.whyParallax__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  color: #0F001E;\r\n}\r\n.whyParallax__header {\r\n  margin: 0;\r\n\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 34px;\r\n  text-transform: uppercase;\r\n}\r\n.whyParallax__text {\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 26px;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n\r\n.why__borderTopHeader {\r\n  justify-content: flex-start;\r\n}\r\n.why__partnersHeader {\r\n  max-width: 728px;\r\n}\r\n\r\n.why__partnersContent {\r\n\r\n}\r\n.why__partnersTextContent {\r\n\r\n}\r\n.why__partnersText {\r\n  max-width: 547px;\r\n}\r\n\r\n\r\n.caseLink {\r\n\r\n}\r\n.caseLink__circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #7744D2;\r\n  border-radius: 50%;\r\n}\r\n.caseLink__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  letter-spacing: 0.09em;\r\n  text-transform: uppercase;\r\n  color: #7744D2;\r\n}", "",{"version":3,"sources":["webpack://./src/css/why.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,SAAS;;EAET,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;;;;AAIA;EACE,2BAA2B;AAC7B;AACA;EACE,gBAAgB;AAClB;;AAEA;;AAEA;AACA;;AAEA;AACA;EACE,gBAAgB;AAClB;;;AAGA;;AAEA;AACA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;EACzB,cAAc;AAChB","sourcesContent":[".why {\r\n  background-color: #ffffff;\r\n}\r\n.why__inner {\r\n  max-width: 1680px;\r\n  margin: auto;\r\n  padding: 260px 112px 0;\r\n}\r\n.why__contentHeader {\r\n  width: 100%;\r\n}\r\n\r\n.why__parallaxSection {\r\n  padding: 96px 0 358px;\r\n}\r\n.whyParallax__inner {\r\n  max-width: 1090px;\r\n  margin: 0 0 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.whyParallax__contentBlock {\r\n  max-width: 50%;\r\n}\r\n.whyParallax__block {\r\n  max-width: 460px;\r\n  margin-bottom: 136px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n.whyParallax__icon {\r\n  margin-right: 56px;\r\n}\r\n.whyParallax__header,\r\n.whyParallax__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  color: #0F001E;\r\n}\r\n.whyParallax__header {\r\n  margin: 0;\r\n\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 34px;\r\n  text-transform: uppercase;\r\n}\r\n.whyParallax__text {\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  line-height: 26px;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n\r\n.why__borderTopHeader {\r\n  justify-content: flex-start;\r\n}\r\n.why__partnersHeader {\r\n  max-width: 728px;\r\n}\r\n\r\n.why__partnersContent {\r\n\r\n}\r\n.why__partnersTextContent {\r\n\r\n}\r\n.why__partnersText {\r\n  max-width: 547px;\r\n}\r\n\r\n\r\n.caseLink {\r\n\r\n}\r\n.caseLink__circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #7744D2;\r\n  border-radius: 50%;\r\n}\r\n.caseLink__text {\r\n  font-family: PT Root UI;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  line-height: 22px;\r\n  letter-spacing: 0.09em;\r\n  text-transform: uppercase;\r\n  color: #7744D2;\r\n}"],"sourceRoot":""}]);
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

"use strict";
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

/***/ "./src/css/heroSection.css":
/*!*********************************!*\
  !*** ./src/css/heroSection.css ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/css/navbar.css":
/*!****************************!*\
  !*** ./src/css/navbar.css ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
module.exports = __webpack_require__.p + "083a60ee83521e756fb8.svg";

/***/ }),

/***/ "./src/static/chatLogo.svg":
/*!*********************************!*\
  !*** ./src/static/chatLogo.svg ***!
  \*********************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "06058559b05f44c08008.svg";

/***/ }),

/***/ "./src/static/fonts/InputMono-Bold.woff":
/*!**********************************************!*\
  !*** ./src/static/fonts/InputMono-Bold.woff ***!
  \**********************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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

"use strict";
module.exports = __webpack_require__.p + "e7399fa01cea1b5a65c7.woff";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Bold.eot":
/*!**********************************************!*\
  !*** ./src/static/fonts/PT Root UI_Bold.eot ***!
  \**********************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "94617d3fe69bfca0e926.eot";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Bold.ttf":
/*!**********************************************!*\
  !*** ./src/static/fonts/PT Root UI_Bold.ttf ***!
  \**********************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f52fcf2cdd7d55b8bef0.ttf";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Bold.woff":
/*!***********************************************!*\
  !*** ./src/static/fonts/PT Root UI_Bold.woff ***!
  \***********************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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

"use strict";
module.exports = __webpack_require__.p + "605d5b6a7bdf8b7ddc75.woff2";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Medium.eot":
/*!************************************************!*\
  !*** ./src/static/fonts/PT Root UI_Medium.eot ***!
  \************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "318615d55485a1d243a2.eot";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Medium.ttf":
/*!************************************************!*\
  !*** ./src/static/fonts/PT Root UI_Medium.ttf ***!
  \************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4a2a3e56d0413fd5455f.ttf";

/***/ }),

/***/ "./src/static/fonts/PT Root UI_Medium.woff":
/*!*************************************************!*\
  !*** ./src/static/fonts/PT Root UI_Medium.woff ***!
  \*************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9qcy9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvanMvaGVyby5qcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9qcy9ob3dJdFdvcmtzLmpzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2pzL21lbnVCdXRvbi5qcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9qcy93aGF0SXMuanMiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvanMvd2h5LmpzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9ib3JkZXJUb3BIZWFkZXIuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9oZXJvU2VjdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL2hvd0l0V29ya3MuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL2xpbmsuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9uYXZiYXIuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbC5jc3MiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL3NvbHV0aW9ucy5jc3MiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL3NwaGVyZS5jc3MiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL3NwaGVyZVNlY3Rpb24uY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy90cmlnZ2VyLmNzcyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3Mvd2hhdElzQmxvY2suY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy93aHkuY3NzIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9ib3JkZXJUb3BIZWFkZXIuY3NzPzE1M2YiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL2hlcm9TZWN0aW9uLmNzcz85NGVlIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9ob3dJdFdvcmtzLmNzcz9kZDQ1Iiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3MvbGluay5jc3M/NWM5YiIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3MvbmF2YmFyLmNzcz8yMmE3Iiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbC5jc3M/MGNmMyIsIndlYnBhY2s6Ly9BaWxldC8uL3NyYy9jc3Mvc29sdXRpb25zLmNzcz82NDM2Iiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy9zcGhlcmUuY3NzPzQxMjciLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL3NwaGVyZVNlY3Rpb24uY3NzP2UzMjUiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL3RyaWdnZXIuY3NzPzRjNWIiLCJ3ZWJwYWNrOi8vQWlsZXQvLi9zcmMvY3NzL3doYXRJc0Jsb2NrLmNzcz8zZDJiIiwid2VicGFjazovL0FpbGV0Ly4vc3JjL2Nzcy93aHkuY3NzPzVkMDkiLCJ3ZWJwYWNrOi8vQWlsZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQWlsZXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQWlsZXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FpbGV0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQWlsZXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9BaWxldC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9BaWxldC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9BaWxldC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiY3VyckJsb2NrQWN0aXZlIiwiYWNjb3JkaW9uSW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWNjb3JkaW9uQmxvY2tzIiwiZ2V0QWNjb3JkaW9uQmxvY2tzIiwiYmxvY2tDb250ZW50QW5pbWF0aW9uRHVyYXRpb24iLCJibG9ja0ltZ0FuaW1hdGlvbkR1cmF0aW9uIiwiYmxvY2tDb250ZW50U3RhdGVPTiIsImhlaWdodCIsImR1cmF0aW9uIiwiYmxvY2tDb250ZW50U3RhdGVPRkYiLCJibG9ja0ltZ1N0YXRlT04iLCJvcGFjaXR5IiwiYmxvY2tJbWdTdGF0ZU9GRiIsImFjY29yZGlvbl9IZWFkZXJfQ2xpY2tfSGFuZGxlciIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyc1RvSGVhZGVycyIsInNldDFCbG9ja0luaXRTdGF0ZSIsImN1cnJCbG9jayIsImkiLCJibG9jayIsImhlYWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiaW1nIiwiZGF0YXNldCIsImFjY29yZGlvbkluZGV4IiwiZWxlbWVudHMiLCJBcnJheSIsImZyb20iLCJtYXAiLCJjcmVhdGVCbG9jayIsImZvckVhY2giLCJhZGRDbGlja0xpc3RlbmVyVG9IZWFkZXJzIiwiZWxlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJibG9ja1R1cm5PTiIsImJsb2NrVHVybk9GRiIsImdzYXAiLCJ0byIsImluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwidHVybk9OVGltZWxpbmUiLCJyZW1vdmUiLCJ0dXJuT0ZGVGltZWxpbmUiLCJTY3JvbGxUcmlnZ2VyIiwiSGVybyIsImJhY2tncm91bmRUaW1lbGluZSIsInNwaGVyZVRpbWVsaW5lIiwiaGVyb0NvbnRhaW5lciIsIkJHTG9nbyIsInNwaGVyZVNlY3Rpb24iLCJoZXJvU2VjdGlvbiIsInNldFVwQkdMb2dvIiwic2V0VXBIb3Jpc29udGFsU2Nyb2xsU2VjdGlvbiIsInhQZXJjZW50IiwidHJpZ2dlciIsInBpbiIsImFudGljaXBhdGVQaW4iLCJhbmltYXRpb24iLCJzY3J1YiIsInN0YXJ0IiwiZW5kIiwib2Zmc2V0V2lkdGgiLCJIb3dJdFdvcmtzIiwiU3RhZ2VzIiwiU3RhZ2VDb250ZW50Iiwic3RhZ2VJbWFnZXMiLCJCbG9ja3MiLCJDb250YWluZXIiLCJMZWZ0Q29udGVudCIsIlN0YWdlSW5kaWNhdG9yQ29udGFpbmVyIiwiY3VycmVuU3RhZ2UiLCJwaW5MZWZ0U2lkZSIsInBpblN0YWdlSW5kaWNhdG9yIiwiZmFkZU91dCIsImFkZEZhZGVPdXRBbmltVG9SaWdodEJsb2NrIiwiYWRkRmFkZU91dEFuaW1Ub1N0YWdlSW1nIiwib25FbnRlciIsInN0YWdlSW5jQW5pbSIsIm9uTGVhdmVCYWNrIiwic3RhZ2VEZWNBbmltIiwiZmFkZUluIiwibGVuZ3RoIiwiYWRkRmFkZUluQW5pbVRvUmlnaHRCbG9jayIsImFkZEZhZGVJbkFuaW1Ub1N0YWdlSW1nIiwic2V0QmxvY2tzSW5pdFN0YXRlIiwiYXV0b0FscGhhIiwiY2FsbCIsInN0YWdlSW5jIiwic3RhZ2VEZWMiLCJ1bmRlZmluZWQiLCJpbm5lckhUTUwiLCJibG9ja3NBcnIiLCJzaGlmdCIsInlQZXJjZW50IiwidGltZWxpbmUiLCJlbGVtZW50IiwiZnJvbVRvIiwiRE9NcmVhZHkiLCJyZWFkeVN0YXRlIiwiRE9NQ29udGVudExvYWRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbml0IiwiSGVyb01vZHVsZSIsIldoYXRJcyIsIldoYXRJc01vZHVsZSIsIkhvd0l0V29ya3NNb2R1bGUiLCJBY2NvcmRpb25Nb2R1bGUiLCJXaHkiLCJXaHlNb2R1bGUiLCJtZW51QnV0b25DbGlja0hhbmRsZXIiLCJ0b2dnbGVNZW51IiwibGluZVRvcCIsImxpbmVCb3R0b20iLCJ0b2dnbGVNZW51TGluZUNsYXNzIiwiZSIsImJ1dHRvbiIsInRvZ2dsZSIsImhlYWRlcnMiLCJzZXRVcHdoYXRJc0Jsb2NrIiwiaXNMZWZ0TGF5b3V0IiwibGVmdExheW91dCIsInR3ZWVuIiwiZ2V0VHdlZW4iLCJ0b2dnbGVBY3Rpb25zIiwiY29udGVudEJsb2NrcyIsInNldFNjcm9sbFRyaWdlclRvQWxsQ29udGVudEJsb2NrcyIsInNpZGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsU0FBYjtBQUNFLHVCQUFlO0FBQUE7O0FBQ2IsU0FBS0MsZUFBTCxHQUF1QixDQUF2QixFQUNBLEtBQUtDLGVBQUwsR0FBdUJDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUNBQTFCLENBRHZCO0FBRUEsU0FBS0MsZUFBTCxHQUF1QixLQUFLQyxrQkFBTCxDQUF3QkgsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBeEIsQ0FBdkIsRUFHQSxLQUFLRyw2QkFBTCxHQUFxQyxJQUhyQyxFQUlBLEtBQUtDLHlCQUFMLEdBQWlDLEdBSmpDO0FBTUEsU0FBS0MsbUJBQUwsR0FBMkI7QUFDekJDLFlBQU0sRUFBRSxNQURpQjtBQUV6QkMsY0FBUSxFQUFFLEtBQUtKO0FBRlUsS0FBM0I7QUFLQSxTQUFLSyxvQkFBTCxHQUE0QjtBQUMxQkYsWUFBTSxFQUFFLENBRGtCO0FBRTFCQyxjQUFRLEVBQUUsS0FBS0o7QUFGVyxLQUE1QjtBQUtBLFNBQUtNLGVBQUwsR0FBdUI7QUFDckJDLGFBQU8sRUFBRSxDQURZO0FBRXJCSCxjQUFRLEVBQUUsS0FBS0g7QUFGTSxLQUF2QjtBQUtBLFNBQUtPLGdCQUFMLEdBQXdCO0FBQ3RCRCxhQUFPLEVBQUUsQ0FEYTtBQUV0QkgsY0FBUSxFQUFFLEtBQUtIO0FBRk8sS0FBeEI7QUFNQSxTQUFLUSw4QkFBTCxHQUFzQyxLQUFLQSw4QkFBTCxDQUFvQ0MsSUFBcEMsQ0FBeUMsSUFBekMsQ0FBdEM7QUFDRDs7QUFoQ0g7QUFBQTtBQUFBLDJCQWtDVTtBQUNOLFdBQUtDLDBCQUFMO0FB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QTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BLDJCOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLCtCQUErQjtXQUM5QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSwrQzs7OztVQzFGQTtVQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbiB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy5jdXJyQmxvY2tBY3RpdmUgPSAwLFxyXG4gICAgdGhpcy5hY2NvcmRpb25JbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uU2VjdGlvbl9faW1nQ29udGFpbmVyJyk7XHJcbiAgICB0aGlzLmFjY29yZGlvbkJsb2NrcyA9IHRoaXMuZ2V0QWNjb3JkaW9uQmxvY2tzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2Jsb2NrJykpLFxyXG4gICAgXHJcblxyXG4gICAgdGhpcy5ibG9ja0NvbnRlbnRBbmltYXRpb25EdXJhdGlvbiA9IDAuMzUsXHJcbiAgICB0aGlzLmJsb2NrSW1nQW5pbWF0aW9uRHVyYXRpb24gPSAwLjc7XHJcblxyXG4gICAgdGhpcy5ibG9ja0NvbnRlbnRTdGF0ZU9OID0ge1xyXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgZHVyYXRpb246IHRoaXMuYmxvY2tDb250ZW50QW5pbWF0aW9uRHVyYXRpb24sXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYmxvY2tDb250ZW50U3RhdGVPRkYgPSB7XHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgICAgZHVyYXRpb246IHRoaXMuYmxvY2tDb250ZW50QW5pbWF0aW9uRHVyYXRpb24sXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYmxvY2tJbWdTdGF0ZU9OID0ge1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICBkdXJhdGlvbjogdGhpcy5ibG9ja0ltZ0FuaW1hdGlvbkR1cmF0aW9uLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmJsb2NrSW1nU3RhdGVPRkYgPSB7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmJsb2NrSW1nQW5pbWF0aW9uRHVyYXRpb24sXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB0aGlzLmFjY29yZGlvbl9IZWFkZXJfQ2xpY2tfSGFuZGxlciA9IHRoaXMuYWNjb3JkaW9uX0hlYWRlcl9DbGlja19IYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBpbml0ICgpIHtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnNUb0hlYWRlcnMoKTtcclxuXHJcbiAgICB0aGlzLnNldDFCbG9ja0luaXRTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQmxvY2sgKGN1cnJCbG9jaywgaSkge1xyXG4gICAgY29uc3QgYmxvY2sgPSB7IFxyXG4gICAgICBibG9jazogY3VyckJsb2NrLFxyXG4gICAgICBoZWFkZXI6IGN1cnJCbG9jay5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19oZWFkZXInKSxcclxuICAgICAgY29udGVudDogY3VyckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2NvbnRlbnQnKSxcclxuICAgICAgaW1nOiB0aGlzLmFjY29yZGlvbkltYWdlc1tpXX07XHJcbiAgICBcclxuICAgIGJsb2NrLmhlYWRlci5kYXRhc2V0LmFjY29yZGlvbkluZGV4ID0gaTtcclxuXHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG5cclxuICBnZXRBY2NvcmRpb25CbG9ja3MgKGVsZW1lbnRzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAodGhpcy5jcmVhdGVCbG9jay5iaW5kKHRoaXMpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50TGlzdGVuZXJzVG9IZWFkZXJzICgpIHtcclxuICAgIHRoaXMuYWNjb3JkaW9uQmxvY2tzLmZvckVhY2godGhpcy5hZGRDbGlja0xpc3RlbmVyVG9IZWFkZXJzLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2xpY2tMaXN0ZW5lclRvSGVhZGVycyAoZWxlbSkge1xyXG4gICAgZWxlbS5oZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjY29yZGlvbl9IZWFkZXJfQ2xpY2tfSGFuZGxlcik7XHJcbiAgfVxyXG4gIFxyXG4gIGFjY29yZGlvbl9IZWFkZXJfQ2xpY2tfSGFuZGxlciAoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmN1cnJCbG9ja0FjdGl2ZSA9PT0gK2V2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hY2NvcmRpb25JbmRleCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuY3VyckJsb2NrQWN0aXZlID0gK2V2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hY2NvcmRpb25JbmRleDtcclxuXHJcbiAgICB0aGlzLmFjY29yZGlvbkJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJCbG9ja0FjdGl2ZSA9PT0gaSBcclxuICAgICAgICA/IHRoaXMuYmxvY2tUdXJuT04oYmxvY2ssIGkpXHJcbiAgICAgICAgOiB0aGlzLmJsb2NrVHVybk9GRihibG9jaywgaSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldDFCbG9ja0luaXRTdGF0ZSAoKSB7XHJcbiAgICBsZXQgYmxvY2sgPSB0aGlzLmFjY29yZGlvbkJsb2Nrc1swXTtcclxuICAgIGdzYXAudGltZWxpbmUoKVxyXG4gICAgLnRvKGJsb2NrLmNvbnRlbnQsIHRoaXMuYmxvY2tDb250ZW50U3RhdGVPTilcclxuICAgIC50byhibG9jay5pbWcsIHRoaXMuYmxvY2tJbWdTdGF0ZU9OLCAwKTtcclxuICB9XHJcblxyXG4gIGJsb2NrVHVybk9OIChibG9jaywgaW5kZXgpIHtcclxuICAgIGJsb2NrLmJsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9fYmxvY2stLWFjdGl2ZScpO1xyXG5cclxuICAgIGxldCB0dXJuT05UaW1lbGluZSA9IGdzYXAudGltZWxpbmUoKTtcclxuICAgIHR1cm5PTlRpbWVsaW5lXHJcbiAgICAgIC50byhibG9jay5jb250ZW50LCB0aGlzLmJsb2NrQ29udGVudFN0YXRlT04pXHJcbiAgICAgIC50byhibG9jay5pbWcsIHRoaXMuYmxvY2tJbWdTdGF0ZU9OLCAwKTtcclxuICB9XHJcblxyXG4gIGJsb2NrVHVybk9GRiAoYmxvY2ssIGluZGV4KSB7XHJcbiAgICBibG9jay5ibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2Jsb2NrLS1hY3RpdmUnKTtcclxuXHJcbiAgICBsZXQgdHVybk9GRlRpbWVsaW5lID0gZ3NhcC50aW1lbGluZSgpO1xyXG4gICAgdHVybk9GRlRpbWVsaW5lXHJcbiAgICAgIC50byhibG9jay5jb250ZW50LCB0aGlzLmJsb2NrQ29udGVudFN0YXRlT0ZGKVxyXG4gICAgICAudG8oYmxvY2suaW1nLCB0aGlzLmJsb2NrSW1nU3RhdGVPRkYsIDApO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcclxuXHJcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm8ge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRUaW1lbGluZSA9IGdzYXAudGltZWxpbmUoKTtcclxuICAgIHRoaXMuc3BoZXJlVGltZWxpbmUgPSBnc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgdGhpcy5oZXJvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbFwiKTtcclxuICAgIHRoaXMuQkdMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tnb3VuZExvZ29fX2ltZycpO1xyXG4gICAgdGhpcy5zcGhlcmVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaGVyZVNlY3Rpb24nKTtcclxuICAgIHRoaXMuaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb1NlY3Rpb24nKTtcclxuICB9XHJcblxyXG4gIGluaXQgKCkge1xyXG4gICAgdGhpcy5zZXRVcEJHTG9nbygpO1xyXG4gICAgdGhpcy5zZXRVcEhvcmlzb250YWxTY3JvbGxTZWN0aW9uKCk7XHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBzZXRVcEJHTG9nbyAoKSB7XHJcbiAgICB0aGlzLmJhY2tncm91bmRUaW1lbGluZVxyXG4gICAgLnRvKFxyXG4gICAgICB0aGlzLkJHTG9nbyxcclxuICAgICAgeyBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHhQZXJjZW50OiAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxIH0pXHJcbiAgICAgIC50byhcclxuICAgICAgICB0aGlzLkJHTG9nbyxcclxuICAgICAgICB7IG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICB4UGVyY2VudDogLTEwMCxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyIH0pO1xyXG5cclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgdHJpZ2dlcjogdGhpcy5oZXJvQ29udGFpbmVyLFxyXG4gICAgICBwaW46IHRoaXMuQkdMb2dvLFxyXG4gICAgICBhbnRpY2lwYXRlUGluOiAxLFxyXG4gICAgICBhbmltYXRpb246IHRoaXMuYmFja2dyb3VuZFRpbWVsaW5lLFxyXG4gICAgICBzY3J1YjogMSxcclxuICAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcclxuICAgICAgZW5kOiAoKSA9PiBcIis9XCIgKyB0aGlzLmhlcm9Db250YWluZXIub2Zmc2V0V2lkdGgsXHJcbiAgICB9KTtcclxuXHJcbiAgICBnc2FwLnNldCh0aGlzLkJHTG9nbywge29wYWNpdHk6IDB9KTtcclxuICB9XHJcblxyXG4gIHNldFVwSG9yaXNvbnRhbFNjcm9sbFNlY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuc3BoZXJlVGltZWxpbmVcclxuICAgICAgLnRvKFxyXG4gICAgICAgIHRoaXMuc3BoZXJlU2VjdGlvbixcclxuICAgICAgICB7eFBlcmNlbnQ6IC0xMDB9KVxyXG4gICAgICAudG8oXHJcbiAgICAgICAgdGhpcy5oZXJvU2VjdGlvbixcclxuICAgICAgICB7eFBlcmNlbnQ6IC0xMDB9LFxyXG4gICAgICAgIDApO1xyXG5cclxuICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgdHJpZ2dlcjogdGhpcy5oZXJvQ29udGFpbmVyLFxyXG4gICAgICBwaW46IHRydWUsXHJcbiAgICAgIGFudGljaXBhdGVQaW46IDEsXHJcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5zcGhlcmVUaW1lbGluZSxcclxuICAgICAgc2NydWI6IDEsXHJcbiAgICAgIHN0YXJ0OiAndG9wIHRvcCcsXHJcbiAgICAgIGVuZDogKCkgPT4gXCIrPVwiICsgdGhpcy5oZXJvQ29udGFpbmVyLm9mZnNldFdpZHRoLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb3dJdFdvcmtzIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kVGltZWxpbmUgPSBnc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgdGhpcy5TdGFnZXMgPSBbJ0FpbGV0IEFJJywgJ1N0YWdlIDEnLCAnU3RhZ2UgMiddO1xyXG4gICAgdGhpcy5TdGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG93SXRXb3Jrc19fc3RhZ2VJbmRpY2F0b3JIZWFkZXInKTtcclxuICAgIHRoaXMuc3RhZ2VJbWFnZXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoJy5TVF9fc3RhZ2VJbWdDb250YWluZXInKTtcclxuICAgIHRoaXMuQmxvY2tzID0gZ3NhcC51dGlscy50b0FycmF5KCcuU1RfX2NvbnRlbnRCbG9jay0tcmlnaHQnKTtcclxuICAgIHRoaXMuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlNUX19Db250YWluZXInKTtcclxuICAgIHRoaXMuTGVmdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU1RfX2NvbnRlbnRDb250YWluZXItLWxlZnQnKTtcclxuICAgIHRoaXMuU3RhZ2VJbmRpY2F0b3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuU1RfX2NvbnRlbnRDb250YWluZXItLXN0YWdlJyk7XHJcbiAgICBcclxuXHJcbiAgICB0aGlzLmN1cnJlblN0YWdlID0gMDtcclxuICB9XHJcblxyXG4gIGluaXQgKCkge1xyXG4gICAgdGhpcy5waW5MZWZ0U2lkZSgpO1xyXG4gIFxyXG4gICAgdGhpcy5waW5TdGFnZUluZGljYXRvcigpO1xyXG4gICAgXHJcbiAgICB0aGlzLkJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSk9PntcclxuXHJcbiAgICAgIC8qIEZBREVPVVQgKi9cclxuICAgICAgbGV0IGZhZGVPdXQgPSBnc2FwLnRpbWVsaW5lKCk7XHJcbiAgXHJcbiAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgIHRoaXMuYWRkRmFkZU91dEFuaW1Ub1JpZ2h0QmxvY2soZmFkZU91dCwgYmxvY2spO1xyXG4gICAgICAgIHRoaXMuYWRkRmFkZU91dEFuaW1Ub1N0YWdlSW1nKGZhZGVPdXQsIHRoaXMuc3RhZ2VJbWFnZXNbaSAtIDFdKTtcclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgdHJpZ2dlcjogYmxvY2ssXHJcbiAgICAgICAgc3RhcnQ6ICd0b3AgNTAlJyxcclxuICAgICAgICBlbmQ6ICd0b3AgMTAlJyxcclxuICAgICAgICBhbmltYXRpb246IGZhZGVPdXQsXHJcbiAgICAgICAgc2NydWI6IDEsXHJcbiAgICAgICAgb25FbnRlcjogaSA+IDAgJiYgdGhpcy5zdGFnZUluY0FuaW0uYmluZCh0aGlzKSxcclxuICAgICAgICBvbkxlYXZlQmFjazogaSA+IDAgJiYgdGhpcy5zdGFnZURlY0FuaW0uYmluZCh0aGlzKSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIC8qIEZBREVJTiAqL1xyXG4gICAgICBsZXQgZmFkZUluID0gZ3NhcC50aW1lbGluZSgpO1xyXG4gIFxyXG4gICAgICBpZiAoaSA8IHRoaXMuQmxvY2tzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLmFkZEZhZGVJbkFuaW1Ub1JpZ2h0QmxvY2soZmFkZUluLCBibG9jayk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKGkgPiAwICYmIGkgPCB0aGlzLnN0YWdlSW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuYWRkRmFkZUluQW5pbVRvU3RhZ2VJbWcoZmFkZUluLCB0aGlzLnN0YWdlSW1hZ2VzW2kgLSAxXSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGJsb2NrLFxyXG4gICAgICAgIHN0YXJ0OiAnYm90dG9tIDkwJScsXHJcbiAgICAgICAgZW5kOiAnYm90dG9tIDUwJScsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4sXHJcbiAgICAgICAgc2NydWI6IDEsXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICB0aGlzLnNldEJsb2Nrc0luaXRTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhZ2VJbmNBbmltICgpIHtcclxuICAgIGdzYXAudGltZWxpbmUoKVxyXG4gICAgICAudG8odGhpcy5TdGFnZUNvbnRlbnQsIHthdXRvQWxwaGE6IDAsIGR1cmF0aW9uOiAwLjJ9KVxyXG4gICAgICAuY2FsbCh0aGlzLnN0YWdlSW5jLmJpbmQodGhpcykpXHJcbiAgICAgIC50byh0aGlzLlN0YWdlQ29udGVudCwge2F1dG9BbHBoYTogMSwgZHVyYXRpb246IDAuMn0pO1xyXG4gIH1cclxuICBzdGFnZURlY0FuaW0gKCkge1xyXG4gICAgZ3NhcC50aW1lbGluZSgpXHJcbiAgICAgIC50byh0aGlzLlN0YWdlQ29udGVudCwge2F1dG9BbHBoYTogMCwgZHVyYXRpb246IDAuMn0pXHJcbiAgICAgIC5jYWxsKHRoaXMuc3RhZ2VEZWMuYmluZCh0aGlzKSlcclxuICAgICAgLnRvKHRoaXMuU3RhZ2VDb250ZW50LCB7YXV0b0FscGhhOiAxLCBkdXJhdGlvbjogMC4yfSk7XHJcbiAgfVxyXG4gIHN0YWdlSW5jICgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlblN0YWdlICsgMSA+IHRoaXMuU3RhZ2VzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgaWYgKHRoaXMuU3RhZ2VzWysrdGhpcy5jdXJyZW5TdGFnZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5TdGFnZUNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5TdGFnZXNbdGhpcy5jdXJyZW5TdGFnZV07XHJcbiAgfVxyXG4gIHN0YWdlRGVjICgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlblN0YWdlIC0gMSA8IC0xKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5TdGFnZXNbLS10aGlzLmN1cnJlblN0YWdlXSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICB0aGlzLlN0YWdlQ29udGVudC5pbm5lckhUTUwgPSB0aGlzLlN0YWdlc1t0aGlzLmN1cnJlblN0YWdlXTtcclxuICB9XHJcblxyXG4gIHNldEJsb2Nrc0luaXRTdGF0ZSAoKSB7XHJcbiAgICBsZXQgYmxvY2tzQXJyID0gZ3NhcC51dGlscy50b0FycmF5KCcuU1RfX2NvbnRlbnRCbG9jay0tcmlnaHQnKTtcclxuICBcclxuICAgIGJsb2Nrc0Fyci5zaGlmdCgpO1xyXG4gIFxyXG4gICAgZ3NhcC5zZXQoXHJcbiAgICAgIGJsb2Nrc0FycixcclxuICAgICAge29wYWNpdHk6IDB9XHJcbiAgICApO1xyXG4gIFxyXG4gICAgZ3NhcC5zZXQoXHJcbiAgICAgIHRoaXMuc3RhZ2VJbWFnZXMsIFxyXG4gICAgICB7IGF1dG9BbHBoYTogMCxcclxuICAgICAgICB5UGVyY2VudDogMTAgfSk7XHJcbiAgfVxyXG5cclxuICBwaW5MZWZ0U2lkZSAoKSB7XHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgIHRyaWdnZXI6IHRoaXMuQ29udGFpbmVyLFxyXG4gICAgICBzdGFydDogJ3RvcCB0b3AnLFxyXG4gICAgICBlbmQ6ICdib3R0b20gYm90dG9tJyxcclxuICAgICAgcGluOiB0aGlzLkxlZnRDb250ZW50LFxyXG4gICAgICBhbnRpY2lwYXRlUGluOiAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwaW5TdGFnZUluZGljYXRvciAoKSB7XHJcbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgIHRyaWdnZXI6IHRoaXMuQ29udGFpbmVyLFxyXG4gICAgICBzdGFydDogJ3RvcCB0b3AnLFxyXG4gICAgICBlbmQ6ICdib3R0b20gYm90dG9tJyxcclxuICAgICAgcGluOiB0aGlzLlN0YWdlSW5kaWNhdG9yQ29udGFpbmVyLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRGYWRlT3V0QW5pbVRvUmlnaHRCbG9jayAodGltZWxpbmUsIGVsZW1lbnQpIHtcclxuICAgIHRpbWVsaW5lLmZyb21UbyhcclxuICAgICAgZWxlbWVudCxcclxuICAgICAgeyBvcGFjaXR5OiAwIH0sXHJcbiAgICAgIHsgb3BhY2l0eTogMSxcclxuICAgICAgICBkdXJhdGlvbjogMiB9KTtcclxuICB9XHJcblxyXG4gIGFkZEZhZGVPdXRBbmltVG9TdGFnZUltZyAodGltZWxpbmUsIGVsZW1lbnQpIHtcclxuICAgIHRpbWVsaW5lXHJcbiAgICAgIC5mcm9tVG8oXHJcbiAgICAgICAgZWxlbWVudCwgXHJcbiAgICAgICAgeyBhdXRvQWxwaGE6IDAgfSxcclxuICAgICAgICB7IGF1dG9BbHBoYTogMSxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxIH0sIDApXHJcbiAgICAgIC5mcm9tVG8oXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB7IHlQZXJjZW50OiAxMCB9LFxyXG4gICAgICAgIHsgeVBlcmNlbnQ6IDAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMiB9LCAwKTtcclxuICB9XHJcblxyXG4gIGFkZEZhZGVJbkFuaW1Ub1JpZ2h0QmxvY2sgKHRpbWVsaW5lLCBlbGVtZW50KSB7XHJcbiAgICB0aW1lbGluZS5mcm9tVG8oXHJcbiAgICAgIGVsZW1lbnQsXHJcbiAgICAgIHsgb3BhY2l0eTogMSB9LFxyXG4gICAgICB7IG9wYWNpdHk6IDAsXHJcbiAgICAgICAgZHVyYXRpb246IDIgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZEZhZGVJbkFuaW1Ub1N0YWdlSW1nICh0aW1lbGluZSwgZWxlbWVudCkge1xyXG4gICAgdGltZWxpbmVcclxuICAgICAgLmZyb21UbyhcclxuICAgICAgICBlbGVtZW50LCBcclxuICAgICAgICB7IGF1dG9BbHBoYTogMSB9LFxyXG4gICAgICAgIHsgYXV0b0FscGhhOiAwLFxyXG4gICAgICAgICAgZHVyYXRpb246IDEgfSwgMClcclxuICAgICAgLmZyb21UbyhcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIHsgeVBlcmNlbnQ6IDAgfSxcclxuICAgICAgICB7IHlQZXJjZW50OiAtMTAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMiB9LCAwKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJztcclxuLy9pbXBvcnQgJy4vc3BoZXJlLmpzJztcclxuaW1wb3J0IHtIZXJvIGFzIEhlcm9Nb2R1bGV9IGZyb20gJy4vaGVyby5qcyc7XHJcbmltcG9ydCAnLi4vY3NzL2xpbmsuY3NzJztcclxuaW1wb3J0ICcuLi9jc3Mvc3BoZXJlLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL3NwaGVyZVNlY3Rpb24uY3NzJztcclxuaW1wb3J0ICcuLi9jc3Mvc2Nyb2xsLXNlY3Rpb25zLWhvcmlzb250YWwuY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbmF2YmFyLmNzcyc7XHJcbmltcG9ydCAnLi9tZW51QnV0b24uanMnO1xyXG5pbXBvcnQgJy4uL2Nzcy9oZXJvU2VjdGlvbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy93aGF0SXNCbG9jay5jc3MnO1xyXG5pbXBvcnQge1doYXRJcyBhcyBXaGF0SXNNb2R1bGV9IGZyb20gJy4vd2hhdElzLmpzJztcclxuaW1wb3J0ICcuLi9jc3MvYm9yZGVyVG9wSGVhZGVyLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL3RyaWdnZXIuY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvaG93SXRXb3Jrcy5jc3MnO1xyXG5pbXBvcnQge0hvd0l0V29ya3MgYXMgSG93SXRXb3Jrc01vZHVsZX0gZnJvbSAnLi9ob3dJdFdvcmtzLmpzJztcclxuaW1wb3J0ICcuLi9jc3Mvc29sdXRpb25zLmNzcyc7XHJcbmltcG9ydCB7QWNjb3JkaW9uIGFzIEFjY29yZGlvbk1vZHVsZX0gZnJvbSAnLi9hY2NvcmRpb24uanMnO1xyXG5pbXBvcnQgJy4uL2Nzcy93aHkuY3NzJztcclxuaW1wb3J0IHtXaHkgYXMgV2h5TW9kdWxlfSBmcm9tICcuL3doeS5qcyc7XHJcblxyXG5ET01yZWFkeSgpO1xyXG5mdW5jdGlvbiBET01yZWFkeSgpIHtcclxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSAnbG9hZGluZycpe1xyXG4gICAgRE9NQ29udGVudExvYWRlZCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NQ29udGVudExvYWRlZCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIERPTUNvbnRlbnRMb2FkZWQgKCkge1xyXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBET01Db250ZW50TG9hZGVkKTtcclxuICBpbml0KCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuXHRjb25zdCBIZXJvID0gbmV3IEhlcm9Nb2R1bGUoKTtcclxuXHRIZXJvLmluaXQoKTtcclxuXHJcblx0Y29uc3QgV2hhdElzID0gbmV3IFdoYXRJc01vZHVsZSgpO1xyXG5cdFdoYXRJcy5pbml0KCk7XHJcblxyXG5cdGNvbnN0IEhvd0l0V29ya3MgPSBuZXcgSG93SXRXb3Jrc01vZHVsZSgpO1xyXG5cdEhvd0l0V29ya3MuaW5pdCgpO1xyXG5cclxuXHRjb25zdCBBY2NvcmRpb24gPSBuZXcgQWNjb3JkaW9uTW9kdWxlKCk7XHJcblx0QWNjb3JkaW9uLmluaXQoKTtcclxuXHJcblx0Y29uc3QgV2h5ID0gbmV3IFdoeU1vZHVsZSgpO1xyXG5cdFdoeS5pbml0KCk7XHJcblxyXG5cdC8qIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJDb3ZlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICovXHJcbn0iLCJET01yZWFkeSgpO1xyXG5mdW5jdGlvbiBET01yZWFkeSgpIHtcclxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSAnbG9hZGluZycpe1xyXG4gICAgRE9NQ29udGVudExvYWRlZCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NQ29udGVudExvYWRlZCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIERPTUNvbnRlbnRMb2FkZWQgKCkge1xyXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBET01Db250ZW50TG9hZGVkKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ1dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51QnV0b25DbGlja0hhbmRsZXIpO1xyXG59O1xyXG5mdW5jdGlvbiB0b2dnbGVNZW51ICgpIHtcclxuICBsZXQgbGluZVRvcCwgbGluZUJvdHRvbTtcclxuICByZXR1cm4gZnVuY3Rpb24gdG9nZ2xlTWVudUxpbmVDbGFzcyAoZSkge1xyXG4gICAgaWYgKCFsaW5lVG9wIHx8ICFsaW5lQm90dG9tKSB7XHJcbiAgICAgIGxldCBidXR0b24gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIGxpbmVUb3AgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLm1lbnVCdXRvbl9faWNvbkxpbmUtLXRvcCcpO1xyXG4gICAgICBsaW5lQm90dG9tID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnV0b25fX2ljb25MaW5lLS1ib3R0b20nKTtcclxuICAgIH1cclxuICAgIGxpbmVUb3AuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudUJ1dG9uX19pY29uTGluZS0tdHJhbnNmb3JtLWRvd24nKTtcclxuICAgIGxpbmVCb3R0b20uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudUJ1dG9uX19pY29uTGluZS0tdHJhbnNmb3JtLXVwJyk7XHJcbiAgfTtcclxufVxyXG5sZXQgbWVudUJ1dG9uQ2xpY2tIYW5kbGVyID0gdG9nZ2xlTWVudSgpOyIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXaGF0SXMge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuaGVhZGVycyA9IGdzYXAudXRpbHMudG9BcnJheSgnLndoYXRJc0Jsb2NrX19zbGlkZXJIZWFkZXInKTtcclxuICB9XHJcblxyXG4gIGluaXQgKCkge1xyXG4gICAgdGhpcy5zZXRVcHdoYXRJc0Jsb2NrKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUd2VlbiAoZWxlbWVudCwgaXNMZWZ0TGF5b3V0KSB7XHJcbiAgICByZXR1cm4gZ3NhcC5mcm9tVG8oZWxlbWVudCwgXHJcbiAgICAgIHsgeFBlcmNlbnQ6IGlzTGVmdExheW91dCA/IC0xMCA6IDEwXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgeFBlcmNlbnQ6IGlzTGVmdExheW91dCA/IDEwIDogLTEwLFxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFVwd2hhdElzQmxvY2sgKCkge1xyXG4gICAgdGhpcy5oZWFkZXJzLmZvckVhY2goKGhlYWRlciwgaSk9PntcclxuICAgICAgbGV0IGxlZnRMYXlvdXQgPSAoaSAlIDIgPiAwKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgbGV0IHR3ZWVuID0gdGhpcy5nZXRUd2VlbihoZWFkZXIsIGxlZnRMYXlvdXQpO1xyXG5cclxuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgIHRyaWdnZXI6IGhlYWRlcixcclxuICAgICAgICBzdGFydDogJ3RvcCBib3R0b20nLFxyXG4gICAgICAgIGVuZDogJ2JvdHRvbSB0b3AnLFxyXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6ICdyZXN0YXJ0IGNvbXBsZXRlIHJldmVyc2UgY29tcGxldGUnLFxyXG4gICAgICAgIGFuaW1hdGlvbjogdHdlZW4sXHJcbiAgICAgICAgc2NydWI6IDEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xyXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXaHkge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuY29udGVudEJsb2NrcyA9IGdzYXAudXRpbHMudG9BcnJheSgnLndoeVBhcmFsbGF4X19jb250ZW50QmxvY2snKTtcclxuICB9XHJcblxyXG4gIGluaXQgKCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGxUcmlnZXJUb0FsbENvbnRlbnRCbG9ja3MoKTtcclxuICB9XHJcblxyXG4gIHNldFNjcm9sbFRyaWdlclRvQWxsQ29udGVudEJsb2NrcyAoKSB7XHJcbiAgICB0aGlzLmNvbnRlbnRCbG9ja3MuZm9yRWFjaCgoc2lkZUJsb2NrLCBpKSA9PiB7XHJcbiAgICAgIGxldCBsZWZ0TGF5b3V0ID0gKGkgJSAyID4gMCkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgIGxldCB0d2VlbiA9IGdzYXAuZnJvbVRvKHNpZGVCbG9jaywgXHJcbiAgICAgICAgeyB5UGVyY2VudDogbGVmdExheW91dCA/IC0xMCA6IDEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHlQZXJjZW50OiBsZWZ0TGF5b3V0ID8gMTAgOiAtMTAsXHJcbiAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICB0cmlnZ2VyOiAnLndoeVBhcmFsbGF4JyxcclxuICAgICAgICBzdGFydDogJ3RvcCBib3R0b20nLFxyXG4gICAgICAgIGVuZDogJ2JvdHRvbSB0b3AnLFxyXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6ICdyZXN0YXJ0IGNvbXBsZXRlIHJldmVyc2UgY29tcGxldGUnLFxyXG4gICAgICAgIGFuaW1hdGlvbjogdHdlZW4sXHJcbiAgICAgICAgc2NydWI6IDEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYm9yZGVyVG9wSGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyLS1wYWRkaW5nVG9wLWJpZyB7XFxyXFxuICBwYWRkaW5nOiA0NHB4IDAgNDRweDtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9fY29udGVudCB7XFxyXFxuICB3aWR0aDogMTA5NXB4O1xcclxcbiAgcGFkZGluZzogNDBweCAwIDA7XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgIzBGMDAxRTtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9fY29udGVudC0tcGFkZGluZ1RvcC1iaWcge1xcclxcbiAgcGFkZGluZzogNjRweCAwIDA7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2hlYWRlckFuZEljb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9faGVhZGVyLFxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2ljb24sXFxyXFxuLmJvcmRlclRvcEhlYWRlcl9fYmxvY2tUZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDFweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9faGVhZGVyIHtcXHJcXG4gIG1heC13aWR0aDogNzI4cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19oZWFkZXItLW9yYW5nZSB7XFxyXFxuICBmb250LXNpemU6IDU2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNzFweDtcXHJcXG4gIGNvbG9yOiAjRkY3MjM2O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2ljb24ge1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9fYmxvY2sge1xcclxcbiAgd2lkdGg6IDQ5JTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAgMTUwcHggMCAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9fYmxvY2tUZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYm9yZGVyVG9wSGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7OztFQUdFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvcmRlclRvcEhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlci0tcGFkZGluZ1RvcC1iaWcge1xcclxcbiAgcGFkZGluZzogNDRweCAwIDQ0cHg7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwOTVweDtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMCAwO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwRjAwMUU7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2NvbnRlbnQtLXBhZGRpbmdUb3AtYmlnIHtcXHJcXG4gIHBhZGRpbmc6IDY0cHggMCAwO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19oZWFkZXJBbmRJY29uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2hlYWRlcixcXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19pY29uLFxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2Jsb2NrVGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2hlYWRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDcyOHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLmJvcmRlclRvcEhlYWRlcl9faGVhZGVyLS1vcmFuZ2Uge1xcclxcbiAgZm9udC1zaXplOiA1NnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDcxcHg7XFxyXFxuICBjb2xvcjogI0ZGNzIzNjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG4uYm9yZGVyVG9wSGVhZGVyX19pY29uIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2Jsb2NrIHtcXHJcXG4gIHdpZHRoOiA0OSU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwIDE1MHB4IDAgMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5ib3JkZXJUb3BIZWFkZXJfX2Jsb2NrVGV4dCB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9zdGF0aWMvQkctLWJpZy5zdmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVyb1NlY3Rpb24ge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgKi9cXHJcXG59XFxyXFxuLmhlcm9TZWN0aW9uX19CRyB7XFxyXFxuICAvKiB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTsgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4uaGVyb1NlY3Rpb25fX2lubmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMTEycHggMTY2cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuLmhlcm9TZWN0aW9uX19ibG9jayB7XFxyXFxuXFxyXFxufVxcclxcbi5oZXJvU2VjdGlvbl9fYmxvY2stLWxlZnQge1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja0xlZnRfX2hlYWRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja0xlZnRfX2NvbG9yVGV4dCB7XFxyXFxuICBjb2xvcjogIzc3NDREMjtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja0xlZnRfX3RleHQge1xcclxcbiAgbWF4LXdpZHRoOiA0ODBweDtcXHJcXG4gIG1hcmdpbjogMjZweCAwIDQ0cHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4uaGVyb0Jsb2NrTGVmdF9fbGluayB7XFxyXFxuICB3aWR0aDogMjgwcHg7XFxyXFxuICBtYXJnaW46IDAgMCAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb1NlY3Rpb25fX2Jsb2NrLS1yaWdodCB7XFxyXFxuICB3aWR0aDogMzg2cHg7XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgIzBGMDAxRTtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja1JpZ2h0X19oZWFkZXIge1xcclxcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5oZXJvQmxvY2tSaWdodF9fZ3JhZGllbnRUZXh0IHtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxyXFxufVxcclxcbi5oZXJvQmxvY2tSaWdodF9fdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTNweDtcXHJcXG4gIGNvbG9yOiAjNTA1MDUwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlcm9TZWN0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0U7aUJBQ2U7RUFDZixrQkFBa0I7RUFDbEIsbURBQXdDO0VBQ3hDLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVyb1NlY3Rpb24ge1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgKi9cXHJcXG59XFxyXFxuLmhlcm9TZWN0aW9uX19CRyB7XFxyXFxuICAvKiB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTsgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi4vc3RhdGljL0JHLS1iaWcuc3ZnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4uaGVyb1NlY3Rpb25fX2lubmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMTEycHggMTY2cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuLmhlcm9TZWN0aW9uX19ibG9jayB7XFxyXFxuXFxyXFxufVxcclxcbi5oZXJvU2VjdGlvbl9fYmxvY2stLWxlZnQge1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja0xlZnRfX2hlYWRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja0xlZnRfX2NvbG9yVGV4dCB7XFxyXFxuICBjb2xvcjogIzc3NDREMjtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja0xlZnRfX3RleHQge1xcclxcbiAgbWF4LXdpZHRoOiA0ODBweDtcXHJcXG4gIG1hcmdpbjogMjZweCAwIDQ0cHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4uaGVyb0Jsb2NrTGVmdF9fbGluayB7XFxyXFxuICB3aWR0aDogMjgwcHg7XFxyXFxuICBtYXJnaW46IDAgMCAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb1NlY3Rpb25fX2Jsb2NrLS1yaWdodCB7XFxyXFxuICB3aWR0aDogMzg2cHg7XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgIzBGMDAxRTtcXHJcXG59XFxyXFxuLmhlcm9CbG9ja1JpZ2h0X19oZWFkZXIge1xcclxcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5oZXJvQmxvY2tSaWdodF9fZ3JhZGllbnRUZXh0IHtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxyXFxufVxcclxcbi5oZXJvQmxvY2tSaWdodF9fdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTNweDtcXHJcXG4gIGNvbG9yOiAjNTA1MDUwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaG93SXRXb3JrcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fdG9wR3JhZGllbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODIuNTVkZWcsIHJnYmEoMCwgMjA1LCAyNTUsIDAuNikgMCUsIHJnYmEoMTE5LCA2OCwgMjEwLCAwLjYpIDM5LjElLCByZ2JhKDI1NSwgNjAsIDEsIDAuNikgNjcuMTclLCByZ2JhKDI1NSwgMTk5LCAwLCAwLjYpIDk2LjI0JSk7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMTA0cHgpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMTEycHggMTkycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uU1RfX0NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLlNUX19jb250ZW50Q29udGFpbmVyLS1zdGFnZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAxNDZweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlNUX19jb250ZW50Q29udGFpbmVyLS1sZWZ0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3BoZXJlIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG4uU1RfX3N0YWdlSW1nQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLlNUX19zdGFnZUltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uU1RfX2NvbnRlbnRDb250YWluZXItLXJpZ2h0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxyXFxufVxcclxcbi5TVF9fY29udGVudEJsb2NrLS1yaWdodCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19jb250ZW50Q29udGFpbmVyLS1zdGFnZSxcXHJcXG4uaG93SXRXb3Jrc19fY29udGVudENvbnRhaW5lci0tcmlnaHQge1xcclxcbiAgd2lkdGg6IDM4JTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX3N0YWdlSW5kaWNhdG9ySGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBJbnB1dCBNb25vO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xcclxcbiAgY29sb3I6ICMyMUM1RUQ7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19zdGFnZUltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDExMiU7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19zdGFnZUltZy0tdHJhbnNsYXRlLXJpZ2h0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0JSk7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19jb250ZW50Q29udGFpbmVyLS1yaWdodCB7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19jb250ZW50QmxvY2stLXJpZ2h0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3RhZ2VIZWFkZXIge1xcclxcbiAgbWF4LXdpZHRoOiA0MDJweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBJbnB1dCBNb25vO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDJweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX3N0YWdlSGVhZGVyLS1iaWcge1xcclxcbiAgZm9udC1zaXplOiA2NnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDc2cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3RhZ2VUZXh0IHtcXHJcXG4gIG1heC13aWR0aDogNTQ2cHg7XFxyXFxuICBtYXJnaW46IDUwcHggMCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX3N0YWdlVGV4dC0td2hpdGUge1xcclxcbiAgbWF4LXdpZHRoOiAzNzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzNweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5ob3dJdFdvcmtzX19saW5rQ29udGFpbmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2xpbmsge1xcclxcbiAgbWFyZ2luOiAxNHB4IGF1dG8gMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob3dJdFdvcmtzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNEpBQTRKO0VBQzVKLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFVBQVU7QUFDWjs7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaG93SXRXb3JrcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fdG9wR3JhZGllbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODIuNTVkZWcsIHJnYmEoMCwgMjA1LCAyNTUsIDAuNikgMCUsIHJnYmEoMTE5LCA2OCwgMjEwLCAwLjYpIDM5LjElLCByZ2JhKDI1NSwgNjAsIDEsIDAuNikgNjcuMTclLCByZ2JhKDI1NSwgMTk5LCAwLCAwLjYpIDk2LjI0JSk7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMTA0cHgpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMTEycHggMTkycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uU1RfX0NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLlNUX19jb250ZW50Q29udGFpbmVyLS1zdGFnZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAxNDZweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlNUX19jb250ZW50Q29udGFpbmVyLS1sZWZ0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3BoZXJlIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG4uU1RfX3N0YWdlSW1nQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLlNUX19zdGFnZUltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uU1RfX2NvbnRlbnRDb250YWluZXItLXJpZ2h0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxyXFxufVxcclxcbi5TVF9fY29udGVudEJsb2NrLS1yaWdodCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19jb250ZW50Q29udGFpbmVyLS1zdGFnZSxcXHJcXG4uaG93SXRXb3Jrc19fY29udGVudENvbnRhaW5lci0tcmlnaHQge1xcclxcbiAgd2lkdGg6IDM4JTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX3N0YWdlSW5kaWNhdG9ySGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBJbnB1dCBNb25vO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xcclxcbiAgY29sb3I6ICMyMUM1RUQ7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19zdGFnZUltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDExMiU7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19zdGFnZUltZy0tdHJhbnNsYXRlLXJpZ2h0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0JSk7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19jb250ZW50Q29udGFpbmVyLS1yaWdodCB7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19jb250ZW50QmxvY2stLXJpZ2h0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3RhZ2VIZWFkZXIge1xcclxcbiAgbWF4LXdpZHRoOiA0MDJweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBJbnB1dCBNb25vO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDJweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX3N0YWdlSGVhZGVyLS1iaWcge1xcclxcbiAgZm9udC1zaXplOiA2NnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDc2cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xcclxcbn1cXHJcXG4uaG93SXRXb3Jrc19fc3RhZ2VUZXh0IHtcXHJcXG4gIG1heC13aWR0aDogNTQ2cHg7XFxyXFxuICBtYXJnaW46IDUwcHggMCAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX3N0YWdlVGV4dC0td2hpdGUge1xcclxcbiAgbWF4LXdpZHRoOiAzNzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzNweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5ob3dJdFdvcmtzX19saW5rQ29udGFpbmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2xpbmsge1xcclxcbiAgbWFyZ2luOiAxNHB4IGF1dG8gMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vc3RhdGljL2ZvbnRzL0lucHV0TW9uby1NZWRpdW0ud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi9zdGF0aWMvZm9udHMvSW5wdXRNb25vLUJvbGQud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi9zdGF0aWMvZm9udHMvUFQgUm9vdCBVSV9NZWRpdW0ud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi4vc3RhdGljL2ZvbnRzL1BUIFJvb3QgVUlfTWVkaXVtLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyBmcm9tIFwiLi4vc3RhdGljL2ZvbnRzL1BUIFJvb3QgVUlfTWVkaXVtLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fIGZyb20gXCIuLi9zdGF0aWMvZm9udHMvUFQgUm9vdCBVSV9NZWRpdW0uZW90XCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gZnJvbSBcIi4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX0JvbGQud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyBmcm9tIFwiLi4vc3RhdGljL2ZvbnRzL1BUIFJvb3QgVUlfQm9sZC53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gZnJvbSBcIi4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX0JvbGQudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gZnJvbSBcIi4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX0JvbGQuZW90XCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdJbnB1dCBNb25vJztcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG5cXHRzcmM6IGxvY2FsKCdJbnB1dCBNb25vJyksXFxyXFxuXFx0XFx0dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdJbnB1dCBNb25vJztcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRzcmM6IGxvY2FsKCdJbnB1dCBNb25vJyksXFxyXFxuXFx0XFx0dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdQVCBSb290IFVJJztcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG5cXHRzcmM6IGxvY2FsKCdQVCBSb290IFVJJyksXFxyXFxuXFx0XFx0dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxyXFxuXFx0XFx0dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpLFxcclxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCdlb3QnKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdQVCBSb290IFVJJztcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0c3JjOiBsb2NhbCgnUFQgUm9vdCBVSScpLFxcclxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG5cXHRcXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcclxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIikgZm9ybWF0KCd0dGYnKSxcXHJcXG5cXHRcXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpIGZvcm1hdCgnZW90Jyk7XFxyXFxufVxcclxcbmh0bWwsIGJvZHksICNyb290LCAuYXBwIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLnZpc3VhbGx5aGlkZGVuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXHJcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xcclxcbiAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuLmJ1dHRvbixcXHJcXG4uZmllbGRzZXQsXFxyXFxuLmlucHV0LFxcclxcbi5mb3JtLFxcclxcbi5saW5rIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uYnV0dG9uLFxcclxcbi5saW5rIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbjpob3ZlcixcXHJcXG4uYnV0dG9uOmZvY3VzLFxcclxcbi5saW5rOmhvdmVyLFxcclxcbi5saW5rOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAuNjtcXHJcXG59XFxyXFxuLmJ1dHRvbjphY3RpdmUsXFxyXFxuLmxpbms6YWN0aXZlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5pbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmFja2dvdW5kTG9nbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5iYWNrZ291bmRMb2dvX19pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7d0RBQzREO0FBQzdEO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsa0JBQWtCO0VBQ2pCLGlCQUFpQjtDQUNsQjt3REFDMEQ7QUFDM0Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25COzs7O3VEQUkyRDtBQUM1RDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakI7Ozs7dURBSXlEO0FBQzFEO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCO0FBQ0E7Ozs7O0VBS0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHdDQUF3QztBQUMxQztBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTs7OztFQUlFLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTs7RUFFRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7QUFDZjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDJCQUEyQjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0lucHV0IE1vbm8nO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcblxcdHNyYzogbG9jYWwoJ0lucHV0IE1vbm8nKSxcXHJcXG5cXHRcXHR1cmwoJy4uL3N0YXRpYy9mb250cy9JbnB1dE1vbm8tTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdJbnB1dCBNb25vJztcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHRzcmM6IGxvY2FsKCdJbnB1dCBNb25vJyksXFxyXFxuXFx0XFx0dXJsKCcuLi9zdGF0aWMvZm9udHMvSW5wdXRNb25vLUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1BUIFJvb3QgVUknO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcblxcdHNyYzogbG9jYWwoJ1BUIFJvb3QgVUknKSxcXHJcXG5cXHRcXHR1cmwoJy4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX01lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuXFx0XFx0dXJsKCcuLi9zdGF0aWMvZm9udHMvUFQgUm9vdCBVSV9NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpLFxcclxcblxcdFxcdHVybCgnLi4vc3RhdGljL2ZvbnRzL1BUIFJvb3QgVUlfTWVkaXVtLnR0ZicpIGZvcm1hdCgndHRmJyksXFxyXFxuXFx0XFx0dXJsKCcuLi9zdGF0aWMvZm9udHMvUFQgUm9vdCBVSV9NZWRpdW0uZW90JykgZm9ybWF0KCdlb3QnKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdQVCBSb290IFVJJztcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0c3JjOiBsb2NhbCgnUFQgUm9vdCBVSScpLFxcclxcblxcdFxcdHVybCgnLi4vc3RhdGljL2ZvbnRzL1BUIFJvb3QgVUlfQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuXFx0XFx0dXJsKCcuLi9zdGF0aWMvZm9udHMvUFQgUm9vdCBVSV9Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXHJcXG5cXHRcXHR1cmwoJy4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX0JvbGQudHRmJykgZm9ybWF0KCd0dGYnKSxcXHJcXG5cXHRcXHR1cmwoJy4uL3N0YXRpYy9mb250cy9QVCBSb290IFVJX0JvbGQuZW90JykgZm9ybWF0KCdlb3QnKTtcXHJcXG59XFxyXFxuaHRtbCwgYm9keSwgI3Jvb3QsIC5hcHAge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG4udmlzdWFsbHloaWRkZW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjbGlwOiByZWN0KDAgMCAwIDApO1xcclxcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDUwJSk7XFxyXFxuICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG4uYnV0dG9uLFxcclxcbi5maWVsZHNldCxcXHJcXG4uaW5wdXQsXFxyXFxuLmZvcm0sXFxyXFxuLmxpbmsge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5idXR0b24sXFxyXFxuLmxpbmsge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYnV0dG9uOmhvdmVyLFxcclxcbi5idXR0b246Zm9jdXMsXFxyXFxuLmxpbms6aG92ZXIsXFxyXFxuLmxpbms6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IC42O1xcclxcbn1cXHJcXG4uYnV0dG9uOmFjdGl2ZSxcXHJcXG4ubGluazphY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuLmlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5iYWNrZ291bmRMb2dvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmJhY2tnb3VuZExvZ29fX2ltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpbmsge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmxpbmstLUJHLXB1cnBsZXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NzQ0RDI7XFxyXFxufVxcclxcbi5saW5rX190ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2xpbmsuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxpbmsge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuLmxpbmstLUJHLXB1cnBsZXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NzQ0RDI7XFxyXFxufVxcclxcbi5saW5rX190ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9zdGF0aWMvY2hhdExvZ28uc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdkJhciB7XFxyXFxuXFxyXFxufVxcclxcbi5uYXZCYXJfX2lubmVyIHtcXHJcXG4gIGhlaWdodDogMTEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgcGFkZGluZzogMCAxMTJweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLm5hdkJhcl9fYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ubWVudUJ1dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubWVudUJ1dG9uX19pY29uIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5tZW51QnV0b25fX2ljb25MaW5lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzBGMDAxRTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcXHJcXG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5tZW51QnV0b25fX2ljb25MaW5lLS10cmFuc2Zvcm0tZG93biB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KSB0cmFuc2xhdGVZKC03cHgpIHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcbi5tZW51QnV0b25fX2ljb25MaW5lLS10cmFuc2Zvcm0tdXAge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCkgdHJhbnNsYXRlWSg3cHgpIHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG4ubWVudUJ1dG9uX190ZXh0IHtcXHJcXG4gIG1hcmdpbjogMCAwIDAgMTZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4ubmF2QmFyX19jaGF0QnV0b24ge1xcclxcbiAgd2lkdGg6IDcwcHg7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIgKTtcXHJcXG59XFxyXFxuLm5hdkJhcl9fYnV0dG9uc0dhcCB7XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIG1pbi13aWR0aDogMjBweDtcXHJcXG4gIG1heC13aWR0aDogMTk3cHg7XFxyXFxufVxcclxcbi5zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbF9fbmF2QmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjZweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25hdmJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0FBRUE7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSx5REFBeUQ7QUFDM0Q7QUFDQTtFQUNFLHlEQUF5RDtBQUMzRDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvREFBMEM7QUFDNUM7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYXZCYXIge1xcclxcblxcclxcbn1cXHJcXG4ubmF2QmFyX19pbm5lciB7XFxyXFxuICBoZWlnaHQ6IDExMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTEycHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5uYXZCYXJfX2J1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLm1lbnVCdXRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1lbnVCdXRvbl9faWNvbiB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMTJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ubWVudUJ1dG9uX19pY29uTGluZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwRjAwMUU7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XFxyXFxuICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4ubWVudUJ1dG9uX19pY29uTGluZS0tdHJhbnNmb3JtLWRvd24ge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCkgdHJhbnNsYXRlWSgtN3B4KSByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG4ubWVudUJ1dG9uX19pY29uTGluZS0tdHJhbnNmb3JtLXVwIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpIHRyYW5zbGF0ZVkoN3B4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuLm1lbnVCdXRvbl9fdGV4dCB7XFxyXFxuICBtYXJnaW46IDAgMCAwIDE2cHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLm5hdkJhcl9fY2hhdEJ1dG9uIHtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9zdGF0aWMvY2hhdExvZ28uc3ZnXFxcIiApO1xcclxcbn1cXHJcXG4ubmF2QmFyX19idXR0b25zR2FwIHtcXHJcXG4gIHdpZHRoOiAyMHZ3O1xcclxcbiAgbWluLXdpZHRoOiAyMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxOTdweDtcXHJcXG59XFxyXFxuLnNjcm9sbC1zZWN0aW9ucy1ob3Jpc29udGFsX19uYXZCYXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyNnB4O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiAxNjgwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbF9fcGFuZWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5zY3JvbGwtc2VjdGlvbnMtaG9yaXNvbnRhbF9fcGFuZWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNvbHV0aW9ucyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG4uc29sdXRpb25zX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE1MHB4IDExMnB4IDA7XFxyXFxufVxcclxcbi5zb2x1dGlvbnNfX2hlYWRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDM5MnB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYWNjb3JkaW9uU2VjdGlvbiB7XFxyXFxuICBtaW4taGVpZ2h0OiA2MHZ3O1xcclxcbiAgbWFyZ2luOiAxMDBweCAwIDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjb3JkaW9uU2VjdGlvbl9faW1hZ2VzQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5hY2NvcmRpb25TZWN0aW9uX19pbWdDb250YWluZXIge1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxuICBoZWlnaHQ6IDYwdnc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG1hcmdpbjogMCAxMDBweCAwIDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuLmFjY29yZGlvblNlY3Rpb25fX2ltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5hY2NvcmRpb25TZWN0aW9uX19hY2NvcmRpb24ge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogMCAwIDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFjY29yZGlvbiB7XFxyXFxuXFxyXFxufVxcclxcbi5hY2NvcmRpb25fX2lubmVyIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMEYwMDFFO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19ibG9jayB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBGMDAxRTtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9fYmxvY2stLWFjdGl2ZSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5hY2NvcmRpb25fX2hlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9faGVhZGVyVGV4dCB7XFxyXFxuICBtYXJnaW46IDM4cHggMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzRweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9fYmxvY2stLWFjdGl2ZSAuYWNjb3JkaW9uX19oZWFkZXJUZXh0IHtcXHJcXG4gIGNvbG9yOiAjNzc0NEQyO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19oZWFkZXJJY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9faWNvbkxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEYwMDFFO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9fYmxvY2stLWFjdGl2ZSBcXHJcXG4uYWNjb3JkaW9uX19pY29uTGluZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjb3JkaW9uX19pY29uTGluZS0tcGx1cyB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19ibG9jay0tYWN0aXZlIC5hY2NvcmRpb25fX2ljb25MaW5lLS1wbHVzIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYWNjb3JkaW9uX19jb250ZW50IHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5udW1MaXN0IHtcXHJcXG4gIGNvdW50ZXItcmVzZXQ6IGxpOyBcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7IFxcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLm51bUxpc3RfX2l0ZW0ge1xcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcbi5udW1MaXN0X19pdGVtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OmNvdW50ZXIobGkpO1xcclxcbiAgY291bnRlci1pbmNyZW1lbnQ6bGk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hY2NvcmRpb25fX251bUxpc3Qge1xcclxcbiAgcGFkZGluZzogMCAwIDQ2cHg7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjZweDtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19udW1MaXN0SXRlbSB7XFxyXFxuICBwYWRkaW5nOiAwIDAgMCAzNnB4O1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19udW1MaXN0SXRlbTpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgdG9wOiAtNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IElucHV0IE1vbm87XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQycHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc29sdXRpb25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBOztBQUVBO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBOztBQUVBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7QUFDQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zb2x1dGlvbnMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLnNvbHV0aW9uc19faW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNjgwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxNTBweCAxMTJweCAwO1xcclxcbn1cXHJcXG4uc29sdXRpb25zX19oZWFkZXIge1xcclxcbiAgbWF4LXdpZHRoOiAzOTJweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFjY29yZGlvblNlY3Rpb24ge1xcclxcbiAgbWluLWhlaWdodDogNjB2dztcXHJcXG4gIG1hcmdpbjogMTAwcHggMCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjY29yZGlvblNlY3Rpb25fX2ltYWdlc0NvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYWNjb3JkaW9uU2VjdGlvbl9faW1nQ29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgaGVpZ2h0OiA2MHZ3O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDAgMTAwcHggMCAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbi5hY2NvcmRpb25TZWN0aW9uX19pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNjb3JkaW9uU2VjdGlvbl9fYWNjb3JkaW9uIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hY2NvcmRpb24ge1xcclxcblxcclxcbn1cXHJcXG4uYWNjb3JkaW9uX19pbm5lciB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzBGMDAxRTtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9fYmxvY2sge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwRjAwMUU7XFxyXFxufVxcclxcbi5hY2NvcmRpb25fX2Jsb2NrLS1hY3RpdmUge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYWNjb3JkaW9uX19oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5hY2NvcmRpb25fX2hlYWRlclRleHQge1xcclxcbiAgbWFyZ2luOiAzOHB4IDA7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5hY2NvcmRpb25fX2Jsb2NrLS1hY3RpdmUgLmFjY29yZGlvbl9faGVhZGVyVGV4dCB7XFxyXFxuICBjb2xvcjogIzc3NDREMjtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9faGVhZGVySWNvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcbi5hY2NvcmRpb25fX2ljb25MaW5lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGMDAxRTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5hY2NvcmRpb25fX2Jsb2NrLS1hY3RpdmUgXFxyXFxuLmFjY29yZGlvbl9faWNvbkxpbmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NDREMjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjY29yZGlvbl9faWNvbkxpbmUtLXBsdXMge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9fYmxvY2stLWFjdGl2ZSAuYWNjb3JkaW9uX19pY29uTGluZS0tcGx1cyB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFjY29yZGlvbl9fY29udGVudCB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtTGlzdCB7XFxyXFxuICBjb3VudGVyLXJlc2V0OiBsaTsgXFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwOyBcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi5udW1MaXN0X19pdGVtIHtcXHJcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbn1cXHJcXG4ubnVtTGlzdF9faXRlbTpiZWZvcmUge1xcclxcbiAgY29udGVudDpjb3VudGVyKGxpKTtcXHJcXG4gIGNvdW50ZXItaW5jcmVtZW50OmxpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYWNjb3JkaW9uX19udW1MaXN0IHtcXHJcXG4gIHBhZGRpbmc6IDAgMCA0NnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9fbnVtTGlzdEl0ZW0ge1xcclxcbiAgcGFkZGluZzogMCAwIDAgMzZweDtcXHJcXG59XFxyXFxuLmFjY29yZGlvbl9fbnVtTGlzdEl0ZW06YmVmb3JlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHRvcDogLTZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBJbnB1dCBNb25vO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3BoZXJlX19jYW52YXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5zcGhlcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3BoZXJlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3BoZXJlX19jYW52YXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5zcGhlcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcGhlcmVTZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi5zcGhlcmVTZWN0aW9uX19pbm5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc3BoZXJlU2VjdGlvbl9fc3BoZXJlIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLyog0J/QntCU0JrQm9Cu0KfQmNCi0Kwg0KjQoNCY0KTQoiAqL1xcclxcbi5zcGhlcmVTZWN0aW9uX19oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBJbnB1dCBNb25vO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNTRweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3BoZXJlU2VjdGlvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQSxxQkFBcUI7QUFDckI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNwaGVyZVNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLnNwaGVyZVNlY3Rpb25fX2lubmVyIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zcGhlcmVTZWN0aW9uX19zcGhlcmUge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4vKiDQn9Ce0JTQmtCb0K7Qp9CY0KLQrCDQqNCg0JjQpNCiICovXFxyXFxuLnNwaGVyZVNlY3Rpb25fX2hlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgZm9udC1mYW1pbHk6IElucHV0IE1vbm87XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1NHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRyaWdnZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NDREMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG59XFxyXFxuLnRyaWdnZXJfX2lubmVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDgwcHggOTJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRyaWdnZXJfX2hlYWRlcixcXHJcXG4udHJpZ2dlcl9fdGV4dCB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG4udHJpZ2dlcl9faGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxufVxcclxcbi50cmlnZ2VyX190ZXh0IHtcXHJcXG4gIG1heC13aWR0aDogODIxcHg7XFxyXFxuICBwYWRkaW5nOiAzNHB4IDA7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcclxcbn1cXHJcXG4udHJpZ2dlcl9fbGluayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwIDM0cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4udHJpZ2dlcl9fbGluazpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4udHJpZ2dlcl9fbGlua1RleHRDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxyXFxufVxcclxcbi5ob3dJdFdvcmtzX19saW5rOmhvdmVyIC50cmlnZ2VyX19saW5rVGV4dENvbnRhaW5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4udHJpZ2dlcl9fbGlua1RleHQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzUuNjZkZWcsICMwMENERkYgMS4xMyUsICM3NzQ0RDIgNDEuMyUsICNGRjNDMDEgNzAuMTQlLCAjRkZDNzAwIDEwMCUpO1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdHJpZ2dlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtHQUFrRztFQUNsRyw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudHJpZ2dlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbn1cXHJcXG4udHJpZ2dlcl9faW5uZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogODBweCA5MnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4udHJpZ2dlcl9faGVhZGVyLFxcclxcbi50cmlnZ2VyX190ZXh0IHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcbi50cmlnZ2VyX19oZWFkZXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuLnRyaWdnZXJfX3RleHQge1xcclxcbiAgbWF4LXdpZHRoOiA4MjFweDtcXHJcXG4gIHBhZGRpbmc6IDM0cHggMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxufVxcclxcbi50cmlnZ2VyX19saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDAgMzRweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi50cmlnZ2VyX19saW5rOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi50cmlnZ2VyX19saW5rVGV4dENvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG59XFxyXFxuLmhvd0l0V29ya3NfX2xpbms6aG92ZXIgLnRyaWdnZXJfX2xpbmtUZXh0Q29udGFpbmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XFxyXFxufVxcclxcblxcclxcbi50cmlnZ2VyX19saW5rVGV4dCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIFxcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNS42NmRlZywgIzAwQ0RGRiAxLjEzJSwgIzc3NDREMiA0MS4zJSwgI0ZGM0MwMSA3MC4xNCUsICNGRkM3MDAgMTAwJSk7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vc3RhdGljL0JHLS1xdWVzdGlvbi5zdmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud2hhdElzQmxvY2sge1xcclxcbiAgLyogaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dzsgKi9cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIC8qIGJhY2tncm91bmQ6IHVybChcXFwiLi4vc3RhdGljL0JHLS1iaWcuc3ZnXFxcIik7ICovXFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgKi9cXHJcXG59XFxyXFxuLndoYXRJc0Jsb2NrX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE4NnB4IDExMnB4IDE2NnB4O1xcclxcbn1cXHJcXG4ud2hhdElzQmxvY2tfX2RvbGxhclNlY3Rpb24ge1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi53aGF0SXNCbG9ja19fc2xpZGVyU2VjdGlvbiB7XFxyXFxuXFxyXFxufVxcclxcbi53aGF0SXNCbG9ja19fc2xpZGVySW5uZXIge1xcclxcbiAgcGFkZGluZzogMTc2cHggMCAxNzZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG4ud2hhdElzQmxvY2tfX3NsaWRlckhlYWRlciB7XFxyXFxuICBtYXJnaW46IDEycHggMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDY2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogODNweDtcXHJcXG4gIGNvbG9yOiAjMEYwMDFFO1xcclxcbn1cXHJcXG4ud2hhdElzQmxvY2tfX3RleHQge1xcclxcbiAgbWF4LXdpZHRoOiA0OTBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDM0cHggMDtcXHJcXG4gIFxcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi53aGF0SXNCbG9ja19fdHJpZ2dlclNlY3Rpb25Jbm5lciB7XFxyXFxuICBwYWRkaW5nOiA4NnB4IDAgMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy93aGF0SXNCbG9jay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtpQkFDZTtFQUNmLGtCQUFrQjs7RUFFbEIsOENBQThDO0VBQzlDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1EQUE2QztFQUM3Qyw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGVBQWU7O0VBRWYsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53aGF0SXNCbG9jayB7XFxyXFxuICAvKiBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3OyAqL1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgLyogYmFja2dyb3VuZDogdXJsKFxcXCIuLi9zdGF0aWMvQkctLWJpZy5zdmdcXFwiKTsgKi9cXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyAqL1xcclxcbn1cXHJcXG4ud2hhdElzQmxvY2tfX2lubmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTY4MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTg2cHggMTEycHggMTY2cHg7XFxyXFxufVxcclxcbi53aGF0SXNCbG9ja19fZG9sbGFyU2VjdGlvbiB7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLndoYXRJc0Jsb2NrX19zbGlkZXJTZWN0aW9uIHtcXHJcXG5cXHJcXG59XFxyXFxuLndoYXRJc0Jsb2NrX19zbGlkZXJJbm5lciB7XFxyXFxuICBwYWRkaW5nOiAxNzZweCAwIDE3NnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9zdGF0aWMvQkctLXF1ZXN0aW9uLnN2Z1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuLndoYXRJc0Jsb2NrX19zbGlkZXJIZWFkZXIge1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxuICBmb250LWZhbWlseTogUFQgUm9vdCBVSTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiA2NnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDgzcHg7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLndoYXRJc0Jsb2NrX190ZXh0IHtcXHJcXG4gIG1heC13aWR0aDogNDkwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAzNHB4IDA7XFxyXFxuICBcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDFweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hhdElzQmxvY2tfX3RyaWdnZXJTZWN0aW9uSW5uZXIge1xcclxcbiAgcGFkZGluZzogODZweCAwIDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53aHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLndoeV9faW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNjgwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAyNjBweCAxMTJweCAwO1xcclxcbn1cXHJcXG4ud2h5X19jb250ZW50SGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2h5X19wYXJhbGxheFNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogOTZweCAwIDM1OHB4O1xcclxcbn1cXHJcXG4ud2h5UGFyYWxsYXhfX2lubmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTA5MHB4O1xcclxcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi53aHlQYXJhbGxheF9fY29udGVudEJsb2NrIHtcXHJcXG4gIG1heC13aWR0aDogNTAlO1xcclxcbn1cXHJcXG4ud2h5UGFyYWxsYXhfX2Jsb2NrIHtcXHJcXG4gIG1heC13aWR0aDogNDYwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMzZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuLndoeVBhcmFsbGF4X19pY29uIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNTZweDtcXHJcXG59XFxyXFxuLndoeVBhcmFsbGF4X19oZWFkZXIsXFxyXFxuLndoeVBhcmFsbGF4X190ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgY29sb3I6ICMwRjAwMUU7XFxyXFxufVxcclxcbi53aHlQYXJhbGxheF9faGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG4ud2h5UGFyYWxsYXhfX3RleHQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ud2h5X19ib3JkZXJUb3BIZWFkZXIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG4ud2h5X19wYXJ0bmVyc0hlYWRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDcyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2h5X19wYXJ0bmVyc0NvbnRlbnQge1xcclxcblxcclxcbn1cXHJcXG4ud2h5X19wYXJ0bmVyc1RleHRDb250ZW50IHtcXHJcXG5cXHJcXG59XFxyXFxuLndoeV9fcGFydG5lcnNUZXh0IHtcXHJcXG4gIG1heC13aWR0aDogNTQ3cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jYXNlTGluayB7XFxyXFxuXFxyXFxufVxcclxcbi5jYXNlTGlua19fY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NDREMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuLmNhc2VMaW5rX190ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBSb290IFVJO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA5ZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICM3NzQ0RDI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvd2h5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFNBQVM7O0VBRVQsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7Ozs7QUFJQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBR0E7O0FBRUE7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndoeSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG4ud2h5X19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE2ODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDI2MHB4IDExMnB4IDA7XFxyXFxufVxcclxcbi53aHlfX2NvbnRlbnRIZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi53aHlfX3BhcmFsbGF4U2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiA5NnB4IDAgMzU4cHg7XFxyXFxufVxcclxcbi53aHlQYXJhbGxheF9faW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMDkwcHg7XFxyXFxuICBtYXJnaW46IDAgMCAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLndoeVBhcmFsbGF4X19jb250ZW50QmxvY2sge1xcclxcbiAgbWF4LXdpZHRoOiA1MCU7XFxyXFxufVxcclxcbi53aHlQYXJhbGxheF9fYmxvY2sge1xcclxcbiAgbWF4LXdpZHRoOiA0NjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEzNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG4ud2h5UGFyYWxsYXhfX2ljb24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xcclxcbn1cXHJcXG4ud2h5UGFyYWxsYXhfX2hlYWRlcixcXHJcXG4ud2h5UGFyYWxsYXhfX3RleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBjb2xvcjogIzBGMDAxRTtcXHJcXG59XFxyXFxuLndoeVBhcmFsbGF4X19oZWFkZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzRweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcbi53aHlQYXJhbGxheF9fdGV4dCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi53aHlfX2JvcmRlclRvcEhlYWRlciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcbi53aHlfX3BhcnRuZXJzSGVhZGVyIHtcXHJcXG4gIG1heC13aWR0aDogNzI4cHg7XFxyXFxufVxcclxcblxcclxcbi53aHlfX3BhcnRuZXJzQ29udGVudCB7XFxyXFxuXFxyXFxufVxcclxcbi53aHlfX3BhcnRuZXJzVGV4dENvbnRlbnQge1xcclxcblxcclxcbn1cXHJcXG4ud2h5X19wYXJ0bmVyc1RleHQge1xcclxcbiAgbWF4LXdpZHRoOiA1NDdweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNhc2VMaW5rIHtcXHJcXG5cXHJcXG59XFxyXFxuLmNhc2VMaW5rX19jaXJjbGUge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc0NEQyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG4uY2FzZUxpbmtfX3RleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFJvb3QgVUk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDllbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogIzc3NDREMjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9yZGVyVG9wSGVhZGVyLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVyb1NlY3Rpb24uY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob3dJdFdvcmtzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saW5rLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2Nyb2xsLXNlY3Rpb25zLWhvcmlzb250YWwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zb2x1dGlvbnMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGhlcmUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGhlcmVTZWN0aW9uLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHJpZ2dlci5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3doYXRJc0Jsb2NrLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2h5LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9qcy9pbmRleC5qc1wiLFwidmVuZG9yc1wiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0Y2h1bmtMb2FkaW5nR2xvYmFsID0gY2h1bmtMb2FkaW5nR2xvYmFsLnNsaWNlKCk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0xvYWRpbmdHbG9iYWwubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rTG9hZGluZ0dsb2JhbFtpXSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lLCBleGVjdXRlTW9kdWxlc10gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua0FpbGV0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua0FpbGV0XCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjazsiLCIvLyBydW4gc3RhcnR1cFxucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==