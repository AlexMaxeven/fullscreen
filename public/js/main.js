/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("\r\nlet wrapper = document.querySelector('.wrapper');\r\n\r\n\r\nlet pageSlider = new Swiper('.page', {\r\n    // свои классы\r\n    wrapperClass: \"page__wrapper\",\r\n    slideClass: \"page__screen\",\r\n\r\n    //вертикальный слайдер\r\n    direction: 'vertical',\r\n\r\n    //количество слайдов для показа\r\n    slidesPerView: 'auto',\r\n\r\n    //включаем параллакс\r\n    parallax: 'true',\r\n    //управление клавиатурой\r\n    Keyboard: {\r\n        //вкл-выкл\r\n        enabled: true,\r\n        onlyViewport: true,\r\n        pageUpDown: true,\r\n    },\r\n    mousewheel: {\r\n        sensitivity:1,\r\n    },\r\n    watchOverflow: true,\r\n    speed: 800,\r\n    observed: true,\r\n    observeParents: true,\r\n    observeSlideChildren: true,\r\n// навигация\r\n    pagination: {\r\n        el: '.page__pagination',\r\n        type: 'bullets',\r\n        clickable: true,\r\n        bulletClass: \"page__bullet\",\r\n        bulletActiveClass: \"page__bullet-active\",    \r\n    },\r\n// скролл\r\n    scrollbar: {\r\n        el: '.page__scroll',\r\n        dragClass: \"page__drag-scroll\",\r\n        draggable: true,\r\n    },\r\n\r\n    init: false,\r\n\r\n    // события\r\n    on: {\r\n        init: function () {\r\n            menuSlider();\r\n            setScrollType();\r\n            wrapper.classList.add('_loaded');\r\n        },\r\n        slideChange: function () {\r\n            menuSliderRemove();\r\n            menuLinks[pageSlider.realIndex].classList.add('_active');\r\n        },\r\n        resize: function () {\r\n            setScrollType();\r\n        }\r\n    },\r\n});\r\n\r\nlet menuLinks = document.querySelectorAll('.menu__link');\r\n\r\nfunction menuSlider() {\r\n    if (menuLinks.length > 0) {\r\n        menuLinks[pageSlider.realIndex].classList.add('_active');\r\n        for (let index = 0; index < menuLinks.length; index++) {\r\n            const menuLink = menuLinks[index];\r\n            menuLink.addEventListener(\"click\", function (e) {\r\n                menuSliderRemove();\r\n                pageSlider.slideTo(index, 800);\r\n                menuLink.classList.add('_active');                \r\n                e.preventDefault();\r\n            });\r\n        }\r\n    }\r\n}\r\n\r\nfunction menuSliderRemove() {\r\n    let menuLinkActive = document.querySelector('.menu__link._active');\r\n\r\n    if (menuLinkActive) {\r\n        menuLinkActive.classList.remove('_active');\r\n    }\r\n}\r\n    function setScrollType() {\r\n\r\n    if(wrapper.classList.contains('_free')) {\r\n        wrapper.classList.remove('_free');\r\n        pageSlider.params.freeMode = false;\r\n    }\r\n\r\n        for (let index = 0; index < pageSlider.slides.length; index++) {\r\n            const pageSlide = pageSlider.slides[index];\r\n            const pageSlideContent = pageSlide.querySelector('.screen__content');\r\n\r\n            if (pageSlideContent) {\r\n                const pageSlideContentHeight = pageSlideContent.offsetHeight;\r\n                if (pageSlideContentHeight > window.innerHeight){\r\n                    wrapper.classList.add('_free');\r\n                    pageSlider.params.freeMode = true;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n\r\npageSlider.init();\n\n//# sourceURL=webpack://new-pr--gl/./src/js/main.js?");

/***/ }),

/***/ "./src/js/plagins.js":
/*!***************************!*\
  !*** ./src/js/plagins.js ***!
  \***************************/
/***/ (function() {

eval("// - - - Slick-Carousel - - - - \r\n// ---\r\n// import $ from \"jquery\";\r\n// import \"slick-carousel\";\r\n\r\n// $(\".carousel\").slick({\r\n//     dots: true\r\n// });\r\n\r\n\r\n// - - - Function - - -\r\n// $(function () {\r\n//     $('.header__btn-menu').on('click', function () {\r\n//         $('.menu__list').toggleClass('menu--open');\r\n//     });\r\n// });\n\n//# sourceURL=webpack://new-pr--gl/./src/js/plagins.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/plagins.js"]();
/******/ 	
/******/ })()
;