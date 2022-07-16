
let wrapper = document.querySelector('.wrapper');


let pageSlider = new Swiper('.page', {
    // свои классы
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    //вертикальный слайдер
    direction: 'vertical',

    //количество слайдов для показа
    slidesPerView: 'auto',

    //включаем параллакс
    parallax: true,
    //управление клавиатурой
    Keyboard: {
        //вкл-выкл
        enabled: true,
        onlyViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity:1,
    },
    watchOverflow: true,
    speed: 1100,
    observed: true,
    observeParents: true,
    observeSlideChildren: true,
// навигация
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet-active",    
    },
// скролл
    scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag-scroll",
        draggable: true,
    },

    init: false,

    // события
    on: {
        init: function () {
            menuSlider();
            setScrollType();
            wrapper.classList.add('_loaded');
        },
        slideChange: function () {
            menuSliderRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        },
        resize: function () {
            setScrollType();
        }
    },
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index];
            menuLink.addEventListener("click", function (e) {
                menuSliderRemove();
                pageSlider.slideTo(index, 1100);
                menuLink.classList.add('_active');                
                e.preventDefault();
            });
        }
    }
}

function menuSliderRemove() {
    let menuLinkActive = document.querySelector('.menu__link._active');

    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}
    function setScrollType() {

    if(wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
    }

        for (let index = 0; index < pageSlider.slides.length; index++) {
            const pageSlide = pageSlider.slides[index];
            const pageSlideContent = pageSlide.querySelector('.screen__content');

            if (pageSlideContent) {
                const pageSlideContentHeight = pageSlideContent.offsetHeight;
                if (pageSlideContentHeight > window.innerHeight){
                    wrapper.classList.add('_free');
                    pageSlider.params.freeMode = true;
                    break;
                }
            }
        }
    }



pageSlider.init();