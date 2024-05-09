//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-bild')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-bild');

      if (slider.classList.contains('_swiper_scroll')) {
        let sliderScroll = document.createElement('div');
        sliderScroll.classList.add('swiper-scrollbar');
        slider.appendChild(sliderScroll);
      }
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
  for (let index = 0; index < sliderScrollItems.length; index++) {
    const sliderScrollItem = sliderScrollItems[index];
    const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
    const sliderScroll = new Swiper(sliderScrollItem, {
      observer: true,
      observeParents: true,
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: sliderScrollBar,
        draggable: true,
        snapOnRelease: false,
      },
      mousewheel: {
        releaseOnEdges: true,
      },
    });
    sliderScroll.scrollbar.updateSize();
  }
}

function sliders_bild_callback(params) {}

let sliderHome = new Swiper('.home-slider__body', {
  /*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
  observer: true,
  observeParents: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoHeight: true,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //	el: '.slider-quality__pagging',
  //	clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: '.home-slider__controls.controls-slider .controls-slider__arrow_next ',
    prevEl: '.home-slider__controls.controls-slider .controls-slider__arrow_prev ',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.17,
      spaceBetween: 16,
      autoHeight: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1180: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
  // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},
});
let sliderGeneralInfo = new Swiper('.slider-general-info__body', {
  /*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
  observer: true,
  observeParents: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoHeight: true,
  speed: 800,
  watchSlidesProgress: true,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //	el: '.slider-quality__pagging',
  //	clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: '.slider-general-info__controls.controls-slider .controls-slider__arrow_next ',
    prevEl: '.slider-general-info__controls.controls-slider .controls-slider__arrow_prev ',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.17,
      spaceBetween: 20,
      autoHeight: true,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },

  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
  // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},
});
//========================================================================================================================================================
let sliderGeneralInfoDetail = new Swiper('.slider-general-plan__body ', {
  /*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoHeight: true,
  speed: 800,
  watchSlidesProgress: true,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //	el: '.slider-quality__pagging',
  //	clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: '.slider-general-plan__controls.controls-slider .controls-slider__arrow_next ',
    prevEl: '.slider-general-plan__controls.controls-slider .controls-slider__arrow_prev ',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.17,
      spaceBetween: 20,
      autoHeight: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
  // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},
});
//========================================================================================================================================================
let sliderNavGallery;
if (document.querySelector('.slider-nav-gallery')) {
  sliderNavGallery = new Swiper('.slider-nav-gallery', {
    observeParents: true,
    observer: true,
    slidesPerView: 5,
    spaceBetween: 8,
    loopedSlides: 5,
    freeMode: true,
    direction: 'vertical',
    speed: 800,
    slideToClickedSlide: true,
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    mousewheel: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 8,
        loopedSlides: 2,
        direction: 'horizontal',
      },
      500: {
        slidesPerView: 2.8,
        spaceBetween: 8,
        loopedSlides: 2.8,
        direction: 'horizontal',
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 8,
        loopedSlides: 3,
        direction: 'horizontal',
      },
      959.98: {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 8,
        loopedSlides: 4,
      },
      1250: {
        slidesPerView: 5,
        spaceBetween: 8,
        loopedSlides: 5,
      },
    },
    scrollbar: {
      el: '.gallery__scrollbar',
      draggable: true,
    },

    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
  const sliderNav = document.querySelector('.slider-nav-gallery');
  if (sliderNav) {
    if (window.innerWidth > 1250) {
      sliderNav.setAttribute('data-pc', '');
    } else if (sliderNav.hasAttribute('data-pc')) {
      sliderNav.removeAttribute('data-pc');
    }
    window.addEventListener('resize', function (e) {
      if (window.innerWidth >= 1250 && !sliderNav.hasAttribute('data-pc')) {
        sliderNav.setAttribute('data-pc', '');
        sliderNavGallery.changeDirection('vertical', true);
      }
      if (window.innerWidth < 1250 && sliderNav.hasAttribute('data-pc')) {
        sliderNavGallery.changeDirection('horizontal', true);
        sliderNav.removeAttribute('data-pc');
      }
    });
  }
}

let sliderMainGallery;
if (document.querySelector('.slider-main-gallery')) {
  sliderMainGallery = new Swiper('.slider-main-gallery', {
    observeParents: true,
    observer: true,
    slidesPerView: 1,
    spaceBetween: 8,
    speed: 800,
    grabCursor: true,
    thumbs: {
      swiper: sliderNavGallery,
    },
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    //Arrows
    320: {
      spaceBetween: 8,
      loopedSlides: 2,
    },
    500: {
      spaceBetween: 8,
      loopedSlides: 2.8,
    },
    768: {
      spaceBetween: 8,
      loopedSlides: 3,
    },
    959.98: {
      spaceBetween: 8,
      loopedSlides: 4,
    },
    1250: {
      spaceBetween: 8,
      loopedSlides: 5,
    },
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
//========================================================================================================================================================
let sliderMenuOptions;
if (document.querySelector('.slider-menu-options__body')) {
  sliderMenuOptions = new Swiper('.slider-menu-options__body ', {
    /*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    autoHeight: true,
    speed: 800,
    //freeMode: false,
    //watchSlidesProgress: true,
    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    //pagination: {
    //	el: '.slider-quality__pagging',
    //	clickable: true,
    //},
    // Arrows
    navigation: {
      nextEl: '.slider-menu-options__controls.menu-options-controls .menu-options-controls__arrow_next ',
      prevEl: '.slider-menu-options__controls.menu-options-controls .menu-options-controls__arrow_prev ',
    },

    breakpoints: {
      320: {
        freeMode: {
          enabled: true,
          sticky: false,
        },
      },
      768: {
        freeMode: false,
      },
    },

    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
    // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},
  });
}
// ===================================================
let sliderUnscrupulousAnalyst;
if (document.querySelector('.slider-unscrupulous-analyst__body')) {
  sliderUnscrupulousAnalyst = new Swiper('.slider-unscrupulous-analyst__body', {
    //observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    //Arrows

    navigation: {
      nextEl: '.slider-unscrupulous-analyst__arrow_next',
      prevEl: '.slider-unscrupulous-analyst__arrow_prev',
    },
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
// ===================================================
let footerSliderAnalyst;
if (document.querySelector('.footer-slider-unscrupulous-analyst__body')) {
  footerSliderAnalyst = new Swiper('.footer-slider-unscrupulous-analyst__body', {
    //observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    //loop: true,
    //autoHeight: true,
    watchOverflow: true,
    simulateTouch: false,
    navigation: {
      nextEl: '.footer-slider-unscrupulous-analyst__arrow_next',
      prevEl: '.footer-slider-unscrupulous-analyst__arrow_prev',
    },
    pagination: {
      el: '.footer-slider-unscrupulous-analyst__dotts',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        autoHeight: true,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    on: {
      lazyImageReady: function () {
        ibg();
      },
    },
  });
}
if (document.querySelector('.footer-slider-unscrupulous-analyst__body') && document.querySelector('.slider-unscrupulous-analyst__body')) {
  sliderUnscrupulousAnalyst.controller.control = footerSliderAnalyst;
  footerSliderAnalyst.controller.control = sliderUnscrupulousAnalyst;
}