function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
  return is_ie;
}
if (isIE()) {
  document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
  document.querySelector('html').classList.add('_touch');
}

// Получить цифры из строки
//parseInt(itemContactpagePhone.replace(/[^\d]/g, ''))

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
  if (support === true) {
    document.querySelector('html').classList.add('_webp');
  } else {
    document.querySelector('html').classList.add('_no-webp');
  }
});

function ibg() {
  if (isIE()) {
    let ibg = document.querySelectorAll('._ibg');
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
        ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }
}
ibg();

window.addEventListener('load', function () {
  if (document.querySelector('.wrapper')) {
    setTimeout(function () {
      document.querySelector('.wrapper').classList.add('_loaded');
    }, 0);
  }
});

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
  const hsh = location.hash.replace('#', '');
  if (document.querySelector('.popup_' + hsh)) {
    popup_open(hsh);
  } else if (document.querySelector('div.' + hsh)) {
    _goto(document.querySelector('.' + hsh), 500, '');
  }
}
//=================
//Menu
let iconMenu = document.querySelector('.burger');
let header = document.querySelector('.header');
if (iconMenu != null) {
  let delay = 500;
  let menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener('click', function (e) {
    if (unlock) {
      body_lock(delay);
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      header.classList.toggle('_active');
    }
  });
}
function menu_close() {
  let iconMenu = document.querySelector('.burger');
  let menuBody = document.querySelector('.menu__body');
  let header = document.querySelector('.header');
  iconMenu.classList.remove('_active');
  menuBody.classList.remove('_active');
  header.classList.remove('_active');
}
//========================================================================================================================================================

// const headerHeight = header.offsetHeight;
// const defaultOffset = 400;
// const first = document.querySelector('.page');
// const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
// const containFixed = () => header.classList.contains('header_fixed');
// let lastScrollTop = 0;

// window.addEventListener('scroll', () => {
// 	console.log(headerHeight);
//   let scrollDistance = window.scrollY;
//   if (scrollDistance > lastScrollTop && containFixed()) {
//     header.classList.remove('header_fixed');
// 	 first.style.marginTop = null;
//   } else if (scrollDistance < lastScrollTop && !containFixed() && scrollPosition() > defaultOffset) {
//     header.classList.add('header_fixed');
// 	 first.style.marginTop = `${headerHeight}px`;
//   }
//   if (scrollDistance === 0 ) {
//     header.classList.remove('header_fixed');
// 	  first.style.marginTop = null;
//   }

//   lastScrollTop = scrollDistance;
// });

// const headerr = document.querySelector('header.header');
// const headerShow = headerr.hasAttribute('data-scroll-show'); // Добавить
// const headerShowTimer = headerr.dataset.scrollShow ? headerr.dataset.scrollShow : 500;
// const startPoint = headerr.dataset.scroll ? headerr.dataset.scroll : 1;

// window.addEventListener('scroll', function (e) {
//   const scrollTop = window.scrollY;
//   let scrollDirection = 0;
//   let timer;

//   clearTimeout(timer);
//   if (scrollTop >= startPoint) {
//     !headerr.classList.contains('_header-scroll') ? headerr.classList.add('_header-scroll') : null;
//     if (headerShow) {
//       if (scrollTop > scrollDirection) {
//         // downscroll code
//         headerr.classList.contains('_header-show') ? headerr.classList.remove('_header-show') : null;
//       } else {
//         // upscroll code
//         !headerr.classList.contains('_header-show') ? headerr.classList.add('_header-show') : null;
//       }
//       timer = setTimeout(() => {
//         !headerr.classList.contains('_header-show') ? headerr.classList.add('_header-show') : null;
//       }, headerShowTimer);
//     }
//   } else {
//     headerr.classList.contains('_header-scroll') ? headerr.classList.remove('_header-scroll') : null;
//     if (headerShow) {
//       headerr.classList.contains('_header-show') ? headerr.classList.remove('_header-show') : null;
//     }
//   }
//   scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
// });

//=================
//BodyLock
function body_lock(delay) {
  let body = document.querySelector('body');
  if (body.classList.contains('_lock')) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}
function body_lock_remove(delay) {
  let body = document.querySelector('body');
  if (unlock) {
    let lock_padding = document.querySelectorAll('._lp');
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');
    }, delay);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
function body_lock_add(delay) {
  let body = document.querySelector('body');
  if (unlock) {
    let lock_padding = document.querySelectorAll('._lp');
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }
    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.classList.add('_lock');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
//=================
// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
  for (let index = 0; index < title.length; index++) {
    let el = title[index];
    let txt = el.innerHTML;
    let txt_words = txt.replace('  ', ' ').split(' ');
    let new_title = '';
    for (let index = 0; index < txt_words.length; index++) {
      let txt_word = txt_words[index];
      let len = txt_word.length;
      new_title = new_title + '<p>';
      for (let index = 0; index < len; index++) {
        let it = txt_word.substr(index, 1);
        if (it == ' ') {
          it = '&nbsp;';
        }
        new_title = new_title + '<span>' + it + '</span>';
      }
      el.innerHTML = new_title;
      new_title = new_title + '&nbsp;</p>';
    }
  }
}
//=================
//Tabs
let tabs = document.querySelectorAll('._tabs');
for (let index = 0; index < tabs.length; index++) {
  let tab = tabs[index];
  let tabs_items = tab.querySelectorAll('._tabs-item');
  let tabs_blocks = tab.querySelectorAll('._tabs-block');
  for (let index = 0; index < tabs_items.length; index++) {
    let tabs_item = tabs_items[index];
    tabs_item.addEventListener('click', function (e) {
      for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.classList.remove('_active');
        tabs_blocks[index].classList.remove('_active');
      }
      tabs_item.classList.add('_active');
      tabs_blocks[index].classList.add('_active');
      e.preventDefault();
    });
  }
}
//=================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/

// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
  // Получение обычных слойлеров
  const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
    return !item.dataset.spollers.split(',')[0];
  });
  // Инициализация обычных слойлеров
  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  }

  // Получение слойлеров с медиа запросами
  const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
    return item.dataset.spollers.split(',')[0];
  });

  // Инициализация слойлеров с медиа запросами
  if (spollersMedia.length > 0) {
    const breakpointsArray = [];
    spollersMedia.forEach((item) => {
      const params = item.dataset.spollers;
      const breakpoint = {};
      const paramsArray = params.split(',');
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });

    // Получаем уникальные брейкпоинты
    let mediaQueries = breakpointsArray.map(function (item) {
      return '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type;
    });
    mediaQueries = mediaQueries.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    });

    // Работаем с каждым брейкпоинтом
    mediaQueries.forEach((breakpoint) => {
      const paramsArray = breakpoint.split(',');
      const mediaBreakpoint = paramsArray[1];
      const mediaType = paramsArray[2];
      const matchMedia = window.matchMedia(paramsArray[0]);

      // Объекты с нужными условиями
      const spollersArray = breakpointsArray.filter(function (item) {
        if (item.value === mediaBreakpoint && item.type === mediaType) {
          return true;
        }
      });
      // Событие
      matchMedia.addListener(function () {
        initSpollers(spollersArray, matchMedia);
      });
      initSpollers(spollersArray, matchMedia);
    });
  }
  // Инициализация
  function initSpollers(spollersArray, matchMedia = false) {
    spollersArray.forEach((spollersBlock) => {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add('_init');
        initSpollerBody(spollersBlock);
        spollersBlock.addEventListener('click', setSpollerAction);
      } else {
        spollersBlock.classList.remove('_init');
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener('click', setSpollerAction);
      }
    });
  }
  // Работа с контентом
  function initSpollerBody(spollersBlock, hideSpollerBody = true) {
    const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
    if (spollerTitles.length > 0) {
      spollerTitles.forEach((spollerTitle) => {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute('tabindex');
          if (!spollerTitle.classList.contains('_active')) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute('tabindex', '-1');
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }
  function setSpollerAction(e) {
    const el = e.target;
    if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
      const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
      const spollersBlock = spollerTitle.closest('[data-spollers]');
      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
      if (!spollersBlock.querySelectorAll('._slide').length) {
        if (oneSpoller && !spollerTitle.classList.contains('_active')) {
          hideSpollersBody(spollersBlock);
        }
        spollerTitle.classList.toggle('_active');
        _slideToggle(spollerTitle.nextElementSibling, 500);
      }
      e.preventDefault();
    }
  }
  function hideSpollersBody(spollersBlock) {
    const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
    if (spollerActiveTitle) {
      spollerActiveTitle.classList.remove('_active');
      _slideUp(spollerActiveTitle.nextElementSibling, 500);
    }
  }
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
  gallery_init();
}
function gallery_init() {
  for (let index = 0; index < gallery.length; index++) {
    const el = gallery[index];
    lightGallery(el, {
      counter: false,
      selector: 'a',
      download: false,
    });
  }
}
//=================
//SearchInList
function search_in_list(input) {
  let ul = input.parentNode.querySelector('ul');
  let li = ul.querySelectorAll('li');
  let filter = input.value.toUpperCase();

  for (i = 0; i < li.length; i++) {
    let el = li[i];
    let item = el;
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  }
}
//=================
//DigiFormat
function digi(str) {
  var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
  if (digi_animate.length > 0) {
    for (let index = 0; index < digi_animate.length; index++) {
      const el = digi_animate[index];
      const el_to = parseInt(el.innerHTML.replace(' ', ''));
      if (!el.classList.contains('_done')) {
        digi_animate_value(el, 0, el_to, 1500);
      }
    }
  }
}
function digi_animate_value(el, start, end, duration) {
  var obj = el;
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));

  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);

  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - remaining * range);
    obj.innerHTML = digi(value);
    if (value == end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();

  el.classList.add('_done');
}
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
  const el = popup_link[index];
  el.addEventListener('click', function (e) {
    if (unlock) {
      let item = el.getAttribute('href').replace('#', '');
      let video = el.getAttribute('data-video');
      popup_open(item, video);
    }
    e.preventDefault();
  });
}
for (let index = 0; index < popups.length; index++) {
  const popup = popups[index];
  popup.addEventListener('click', function (e) {
    if (!e.target.closest('.popup__body')) {
      popup_close(e.target.closest('.popup'));
    }
  });
}
function popup_open(item, video = '') {
  let activePopup = document.querySelectorAll('.popup._active');
  if (activePopup.length > 0) {
    popup_close('', false);
  }
  let curent_popup = document.querySelector('.popup_' + item);
  if (curent_popup && unlock) {
    if (video != '' && video != null) {
      let popup_video = document.querySelector('.popup_video');
      popup_video.querySelector('.popup__video').innerHTML =
        '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }
    if (!document.querySelector('.menu__body._active')) {
      body_lock_add(500);
    }
    curent_popup.classList.add('_active');
    history.pushState('', '', '#' + item);
  }
}
function popup_close(item, bodyUnlock = true) {
  if (unlock) {
    if (!item) {
      for (let index = 0; index < popups.length; index++) {
        const popup = popups[index];
        let video = popup.querySelector('.popup__video');
        if (video) {
          video.innerHTML = '';
        }
        popup.classList.remove('_active');
      }
    } else {
      let video = item.querySelector('.popup__video');
      if (video) {
        video.innerHTML = '';
      }
      item.classList.remove('_active');
    }
    if (!document.querySelector('.menu__body._active') && bodyUnlock) {
      body_lock_remove(500);
    }
    history.pushState('', '', window.location.href.split('#')[0]);
  }
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
  for (let index = 0; index < popup_close_icon.length; index++) {
    const el = popup_close_icon[index];
    el.addEventListener('click', function () {
      popup_close(el.closest('.popup'));
    });
  }
}
document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    popup_close();
  }
});

//=================
//SlideToggle
// let _slideUp = (target, duration = 500) => {
//   if (!target.classList.contains('_slide')) {
//     target.classList.add('_slide');
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.height = target.offsetHeight + 'px';
//     target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     window.setTimeout(() => {
//       target.hidden = true;
//       target.style.removeProperty('height');
//       target.style.removeProperty('padding-top');
//       target.style.removeProperty('padding-bottom');
//       target.style.removeProperty('margin-top');
//       target.style.removeProperty('margin-bottom');
//       target.style.removeProperty('overflow');
//       target.style.removeProperty('transition-duration');
//       target.style.removeProperty('transition-property');
//       target.classList.remove('_slide');
//     }, duration);
//   }
// };
// let _slideDown = (target, duration = 500) => {
//   if (!target.classList.contains('_slide')) {
//     target.classList.add('_slide');
//     if (target.hidden) {
//       target.hidden = false;
//     }
//     let height = target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     target.offsetHeight;
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.height = height + 'px';
//     target.style.removeProperty('padding-top');
//     target.style.removeProperty('padding-bottom');
//     target.style.removeProperty('margin-top');
//     target.style.removeProperty('margin-bottom');
//     window.setTimeout(() => {
//       target.style.removeProperty('height');
//       target.style.removeProperty('overflow');
//       target.style.removeProperty('transition-duration');
//       target.style.removeProperty('transition-property');
//       target.classList.remove('_slide');
//     }, duration);
//   }
// };
// let _slideToggle = (target, duration = 500) => {
//   if (target.hidden) {
//     return _slideDown(target, duration);
//   } else {
//     return _slideUp(target, duration);
//   }
// };

//SlideToggle
let _slideUp = (target, duration = 300) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};
let _slideDown = (target, duration = 300) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (target.hidden) {
      target.hidden = false;
    }
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};
let _slideToggle = (target, duration = 300) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
//========================================
//Wrap
function _wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
  for (var i = 0; i < el.length; i++) {
    el[i].classList.remove(class_name);
  }
}
//========================================
//IsHidden
function _is_hidden(el) {
  return el.offsetParent === null;
}
// ShowMore Beta ========================
let moreBlocks = document.querySelectorAll('._more-block');
if (moreBlocks.length > 0) {
  let wrapper = document.querySelector('.wrapper');
  for (let index = 0; index < moreBlocks.length; index++) {
    const moreBlock = moreBlocks[index];
    let items = moreBlock.querySelectorAll('._more-item');
    if (items.length > 0) {
      let itemsMore = moreBlock.querySelector('._more-link');
      let itemsContent = moreBlock.querySelector('._more-content');
      let itemsView = itemsContent.getAttribute('data-view');
      if (getComputedStyle(itemsContent).getPropertyValue('transition-duration') === '0s') {
        itemsContent.style.cssText = 'transition-duration: 1ms';
      }
      itemsMore.addEventListener('click', function (e) {
        if (itemsMore.classList.contains('_active')) {
          setSize();
        } else {
          setSize('start');
        }
        itemsMore.classList.toggle('_active');
        e.preventDefault();
      });

      let isScrollStart;
      function setSize(type) {
        let resultHeight;
        let itemsContentHeight = 0;
        let itemsContentStartHeight = 0;

        for (let index = 0; index < items.length; index++) {
          if (index < itemsView) {
            itemsContentHeight += items[index].offsetHeight;
          }
          itemsContentStartHeight += items[index].offsetHeight;
        }
        resultHeight = type === 'start' ? itemsContentStartHeight : itemsContentHeight;
        isScrollStart = window.innerWidth - wrapper.offsetWidth;
        itemsContent.style.height = `${resultHeight}px`;
      }

      itemsContent.addEventListener('transitionend', updateSize, false);

      function updateSize() {
        let isScrollEnd = window.innerWidth - wrapper.offsetWidth;
        if ((isScrollStart === 0 && isScrollEnd > 0) || (isScrollStart > 0 && isScrollEnd === 0)) {
          if (itemsMore.classList.contains('_active')) {
            setSize('start');
          } else {
            setSize();
          }
        }
      }
      window.addEventListener('resize', function (e) {
        if (!itemsMore.classList.contains('_active')) {
          setSize();
        } else {
          setSize('start');
        }
      });
      setSize();
    }
  }
}
//==RATING======================================
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}
// Основная функция
function initRatings() {
  let ratingActive, ratingValue;
  // "Бегаем" по всем рейтингам на странице
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  // Инициализируем конкретный рейтинг
  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  }

  // Инициализайция переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }
  // Изменяем ширину активных звезд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
  // Возможность указать оценку
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener('mouseenter', function (e) {
        // Обновление переменных
        initRatingVars(rating);
        // Обновление активных звезд
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        // Обновление активных звезд
        setRatingActiveWidth();
      });
      ratingItem.addEventListener('click', function (e) {
        // Обновление переменных
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          // "Отправить" на сервер
          setRatingValue(ratingItem.value, rating);
        } else {
          // Отобразить указанную оцнку
          ratingValue.innerHTML = index + 1;
          setRatingActiveWidth();
        }
      });
    }
  }

  async function setRatingValue(value, rating) {
    if (!rating.classList.contains('rating_sending')) {
      rating.classList.add('rating_sending');

      // Отправика данных (value) на сервер
      let response = await fetch('rating.json', {
        method: 'GET',

        //body: JSON.stringify({
        //	userRating: value
        //}),
        //headers: {
        //	'content-type': 'application/json'
        //}
      });
      if (response.ok) {
        const result = await response.json();

        // Получаем новый рейтинг
        const newRating = result.newRating;

        // Вывод нового среднего результата
        ratingValue.innerHTML = newRating;

        // Обновление активных звезд
        setRatingActiveWidth();

        rating.classList.remove('rating_sending');
      } else {
        alert('Ошибка');

        rating.classList.remove('rating_sending');
      }
    }
  }
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}
function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;
    else return (2 - timing(2 * (1 - timeFraction))) / 2;
  };
}
function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}
function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();

const rationFilterJs = document.querySelectorAll('._ration-filter-js');
if (rationFilterJs) {
  for (let index = 0; index < rationFilterJs.length; index++) {
    const elementFilter = rationFilterJs[index];
    elementFilter.addEventListener('click', function (e) {
      const targetElement = e.target;
      const itemRationMainActive = document.querySelector('.item-form-ration__main._active');
      const itemRationButtonActive = document.querySelector('.item-form-ration__button._active');
      if ((itemRationMainActive && !targetElement.closest('.item-form-ration__main')) || targetElement.closest('.item-form-ration__btn')) {
        itemRationMainActive.classList.remove('_active');
        itemRationButtonActive.classList.remove('_active');
      }

      if (targetElement.closest('.item-form-ration__button ')) {
        const itemRationButton = targetElement.classList.contains('item-form-ration__button')
          ? targetElement
          : targetElement.closest('.item-form-ration__button');

        itemRationButton.classList.toggle('_active');
        targetElement.closest('.item-form-ration').querySelector('.item-form-ration__main').classList.toggle('_active');
        e.preventDefault();
      }
      if (targetElement == itemRationButtonActive) {
        targetElement.closest('.item-form-ration').querySelector('.item-form-ration__main').classList.remove('_active');
        targetElement.closest('.item-form-ration').querySelector('.item-form-ration__button').classList.remove('_active');
      }
    });
  }
}
//========================================================================================================================================================

//========================================================================================================================================================

//========================================================================================================================================================
const spolsArray = document.querySelectorAll('[data-spols]');
if (spolsArray.length > 0) {
  // Получение обычных слойлеров
  const spolsRegular = Array.from(spolsArray).filter(function (item, index, self) {
    return !item.dataset.spols.split(',')[0];
  });
  // Инициализация обычных слойлеров
  if (spolsRegular.length > 0) {
    initspols(spolsRegular);
  }
  // Инициализация
  function initspols(spolsArray, matchMedia = false) {
    spolsArray.forEach((spolsBlock) => {
      spolsBlock = matchMedia ? spolsBlock.item : spolsBlock;
      if (matchMedia.matches || !matchMedia) {
        spolsBlock.classList.add('_init');
        initSpolBody(spolsBlock);
        spolsBlock.addEventListener('click', setSpolAction);
      } else {
        spolsBlock.classList.remove('_init');
        initSpolBody(spolsBlock, false);
        spolsBlock.removeEventListener('click', setSpolAction);
      }
    });
  }
  // Работа с контентом
  function initSpolBody(spolsBlock, hideSpollerBody = true) {
    const spolTitles = spolsBlock.querySelectorAll('[data-spol]');
    if (spolTitles.length > 0) {
      spolTitles.forEach((spolTitle) => {
        if (hideSpollerBody) {
          spolTitle.removeAttribute('tabindex');
          if (!spolTitle.classList.contains('_active')) {
            spolTitle.nextElementSibling.hidden = true;
          }
        } else {
          spolTitle.setAttribute('tabindex', '-1');
          spolTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }
  function setSpolAction(e) {
    const el = e.target;
    if (el.hasAttribute('data-spol') || el.closest('[data-spol]')) {
      const spolTitle = el.hasAttribute('data-spol') ? el : el.closest('[data-spol]');
      const spolsBlock = spolTitle.closest('[data-spols]');
      //const spollersItemsEffectiveItem = spolTitle.closest('.spollers-items-effective__item');
      const oneSpoller = spolsBlock.hasAttribute('data-one-spoller') ? true : false;
      if (!spolsBlock.querySelectorAll('._slide').length) {
        if (oneSpoller && !spolTitle.classList.contains('_active')) {
          hidespolsBody(spolsBlock);
        }
        spolTitle.closest('.spollers-items-effective__item').classList.toggle('_active');
        spolTitle.classList.toggle('_active');
        _slideToggle(spolTitle.nextElementSibling, 500);
      }
      e.preventDefault();
    }
  }
  function hidespolsBody(spolsBlock) {
    const spolActiveTitle = spolsBlock.querySelector('[data-spol]._active');
    if (spolActiveTitle) {
      spolActiveTitle.classList.remove('_active');
      _slideUp(spolActiveTitle.nextElementSibling, 500);
    }
  }
}
//========================================================================================================================================================
const optionsCards = document.querySelectorAll('._options-cards');
if (optionsCards) {
  for (let index = 0; index < optionsCards.length; index++) {
    const optionsCard = optionsCards[index];
    optionsCard.addEventListener('click', function (e) {
      const targetElement = e.target;
      if (targetElement.classList.contains('options-card-diet__item') || targetElement.closest('.options-card-diet__item')) {
        const newPropsCardsButtonsActive = optionsCard.querySelector('.options-card-diet__item._active');
        if (newPropsCardsButtonsActive) {
          newPropsCardsButtonsActive.classList.remove('_active');
        }
        const newPropsCardsButtonsItem = targetElement.classList.contains('options-card-diet__item')
          ? targetElement
          : targetElement.closest('.options-card-diet__item');
        newPropsCardsButtonsItem.classList.toggle('_active');
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================
const counterInputs = document.querySelectorAll('._counter-input');
if (counterInputs.length > 0) {
  counterInputs.forEach((counterInput) => {
    counterInput.addEventListener('keyup', function (e) {
      const inputValue = counterInput.value.length;
      const inputValueSpan = counterInput.closest('.input').querySelector('._counter-value')
        ? counterInput
        : counterInput.closest('.form-comments-comment').querySelector('._counter-value');
      const inputValueSpanValue = counterInput.getAttribute('maxlength');
      const inputValueResults = inputValueSpanValue - inputValue;
      inputValueSpan.innerHTML = inputValueResults;
    });
  });
}
//========================================================================================================================================================
const counterInputs2 = document.querySelectorAll('._counter-input-2');
if (counterInputs2.length > 0) {
  counterInputs2.forEach((counterInput) => {
    counterInput.addEventListener('keyup', function (e) {
      const inputValue = counterInput.value.length;
      const inputValueSpan = counterInput.closest('.input').querySelector('._counter-value');
      const inputValueSpanValue = counterInput.getAttribute('maxlength');
      const inputValueResults = inputValue;
      inputValueSpan.innerHTML = inputValueResults;
    });
  });
}
//========================================================================================================================================================
//COMMENTS
const commentsAll = document.querySelectorAll('.comments');
const commentsBodyAll = document.querySelectorAll('.body-comments');

if (commentsAll.length || commentsBodyAll.length) {
  if (commentsAll.length) {
    for (let index = 0; index < commentsAll.length; index++) {
      const comments = commentsAll[index];
      comments.addEventListener('click', commentsActions);
    }
  } else {
    for (let index = 0; index < commentsBodyAll.length; index++) {
      const commentsBody = commentsBodyAll[index];

      commentsBody.addEventListener('click', commentsActions);
    }
  }

  function commentsActions(e) {
    const targetElement = e.target;
    if (targetElement.classList.contains('comment__reply') && !targetElement.closest('.comment-answers')) {
      const curentComment = targetElement.closest('.item-comment');
      const curentCommentAnswers = curentComment.querySelector('.item-comment__answer-form');
      if (!curentCommentAnswers.classList.contains('_slide')) {
        targetElement.classList.toggle('_active');
        _slideToggle(curentCommentAnswers);
      }
      e.preventDefault();
    }
    if (targetElement.classList.contains('comment__reply') && targetElement.closest('.comment-answers')) {
      const commentAnswers = targetElement.closest('.comment-answers');
      const commentAnswersAnswers = commentAnswers.querySelector('.comment-answers__answers-form');
      if (!commentAnswersAnswers.classList.contains('_slide')) {
        targetElement.classList.toggle('_active');
        _slideToggle(commentAnswersAnswers);
      }
      e.preventDefault();
    }
    if (targetElement.classList.contains('form-comments-comment__cancel') && !targetElement.closest('.comment-answers')) {
      const curentComment = targetElement.closest('.item-comment');
      const curentCommentAnswers = curentComment.querySelector('.item-comment__answer-form');
      const button = curentComment.querySelector('.comment__reply');
      if (!curentCommentAnswers.classList.contains('_slide')) {
        button.classList.toggle('_active');
        _slideUp(curentCommentAnswers);
      }
      e.preventDefault();
    }
    if (targetElement.classList.contains('form-comments-comment__cancel') && targetElement.closest('.comment-answers')) {
      const commentAnswers = targetElement.closest('.comment-answers');
      const commentAnswersAnswers = commentAnswers.querySelector('.comment-answers__answers-form');
      const button = commentAnswers.querySelector('.comment__reply');
      if (!commentAnswersAnswers.classList.contains('_slide')) {
        button.classList.remove('_active');
        _slideUp(commentAnswersAnswers);
      }
      e.preventDefault();
    }
  }
}

//========================================================================================================================================================
const paymentMethodCards = document.querySelectorAll('._payment-method-cards');
if (paymentMethodCards) {
  for (let index = 0; index < paymentMethodCards.length; index++) {
    const elementCards = paymentMethodCards[index];
    elementCards.addEventListener('click', function (e) {
      const targetElement = e.target;
      if (targetElement.closest('.card-main-payment')) {
        const paymentMethodCardsActive = elementCards.querySelector('.card-main-payment._active');
        if (paymentMethodCardsActive) {
          paymentMethodCardsActive.classList.remove('_active');
        }
        const paymentMethodCardsItem = targetElement.classList.contains('card-main-payment')
          ? targetElement
          : targetElement.closest('.card-main-payment');
        paymentMethodCardsItem.classList.toggle('_active');
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================
const paymentMethods = document.querySelectorAll('.payment-methods');
if (paymentMethods) {
  for (let index = 0; index < paymentMethods.length; index++) {
    const elementButton = paymentMethods[index];
    elementButton.addEventListener('click', function (e) {
      const targetElement = e.target;
      if (targetElement.closest('.item-payment-method')) {
        const paymentMethodsActive = elementButton.querySelector('.item-payment-method._active');
        if (paymentMethodsActive) {
          paymentMethodsActive.classList.remove('_active');
        }
        const paymentMethodsItem = targetElement.classList.contains('item-payment-method')
          ? targetElement
          : targetElement.closest('.item-payment-method');
        paymentMethodsItem.classList.toggle('_active');
        e.preventDefault();
      }
    });
  }
}
//========================================================================================================================================================

const circles = document.querySelectorAll('.progress-reviews__circle');
if (circles.length > 0) {
  circles.forEach((el) => {
    if (el.dataset.percentage == 'true') {
      let progress = el.querySelector('.progress');
      let valueBlock = el.querySelector('.progress-reviews__value');
      let radius = progress.getAttribute('r');
      let circleLength = 2 * Math.PI * radius;
      let full = el.dataset.full;
      let value = el.dataset.value;
      let percentageProgress = Math.floor((value / full) * 100);
      valueBlock.textContent = value;
      progress.setAttribute('stroke-dasharray', circleLength);
      progress.setAttribute('stroke-dashoffset', circleLength - (circleLength * percentageProgress) / 100);
    }
  });
}

let progressLineReviews = document.querySelectorAll('.progress-line-reviews');
if (progressLineReviews.length > 0) {
  progressLineReviews.forEach((element) => {
    const stringValue = element.querySelector('.progress-line-reviews__value').innerHTML;
    const value = parseInt(stringValue);
    const line = element.querySelector('.progress-line-reviews__line > span');
    line.style.cssText = `width: ${value}%`;
  });
}
//========================================================================================================================================================
//nlist коллекция объектов по которым нужно бегать ;
function cycleAddClass(nlist) {
  for (let i = 0; i < nlist.length; i++) {
    // if div is active, that class name will be removed
    if (nlist[i].className.includes('_active')) {
      nlist[i].classList.remove('_active');
      // check wheter you're at the end of nodeList
      const nextIndex = i < nlist.length - 1 ? i + 1 : 0;
      // and add the class that makes next (or first) div visible
      nlist[nextIndex].classList.add('_active');
      // exit the loop
      break;
    }
  }
}
function filterActiveLink(nlist, target) {
  for (let index = 0; index < nlist.length; index++) {
    const element = nlist[index];
    element.classList.remove('_active');
    if (!target.classList.contains('_active')) {
      target.classList.add('_active');
    }
  }
}

//========================================================================================================================================================
document.addEventListener('click', documentActions);
function documentActions(e) {
  const targetElement = e.target;
  if (document.querySelector('.days-main-menu') && targetElement.closest('.days-main-menu')) {
    const daysMainMenu = document.querySelector('.days-main-menu');
    const daysMainMenuButton = daysMainMenu.querySelector('.days-main-menu__button');
    const daysMainMenuLink = document.querySelectorAll('.days-main-menu__link');
    if (targetElement == daysMainMenuButton) {
      cycleAddClass(daysMainMenuLink);
      e.preventDefault();
    }
    if (targetElement.closest('.days-main-menu__link')) {
      filterActiveLink(daysMainMenuLink, targetElement);
      e.preventDefault();
    }
  }
  if (targetElement.closest('.item-editng-meals__button_open')) {
    const buttonsItem = targetElement.closest('.item-editng-meals').querySelectorAll('.item-editng-meals__button_open');
    const descrItem = targetElement.closest('.items-menu-options__item').querySelector('.items-menu-options__desc');
    if (!descrItem.classList.contains('_slide')) {
      for (const buttonItem of buttonsItem) {
        buttonItem.classList.toggle('_active');
      }
    }
    _slideToggle(descrItem);
    e.preventDefault();
  }
  if (
    document.querySelector('.item-form-ration__button') &&
    document.querySelector('.item-form-ration__button._active') &&
    document.querySelector('.item-form-ration__main._active') &&
    !targetElement.classList.contains('item-form-ration__button') &&
    !targetElement.closest('.item-form-ration__main')
  ) {
    document.querySelector('.item-form-ration__button._active').classList.remove('_active');
    document.querySelector('.item-form-ration__main._active').classList.remove('_active');
  }
  if (document.querySelector('.item-form-ration__button') && targetElement.closest('.item-form-ration__btn')) {
    document.querySelector('.item-form-ration__button').classList.remove('_active');
    document.querySelector('.item-form-ration__main').classList.remove('_active');
  }

  if (targetElement.closest('._mobile-filter-button')) {
    targetElement.classList.toggle('_active');
    _slideToggle(targetElement.closest('._mobile-filter-block').querySelector('._mobile-filter-items'));
    e.preventDefault();
  }

  const navigation = document.querySelector('.navigation');
  if (navigation) {
    if (targetElement.classList.contains('navigation__button') || targetElement.closest('.navigation__button')) {
      navigation.querySelector('.navigation__button').classList.toggle('_active');
      navigation.querySelector('.navigation__list').classList.toggle('_active');
      e.preventDefault();
    }
  }
  const headerBlock = document.querySelector('.header');
  const notificationHeaderActive = headerBlock.querySelector('.notification-actions-header._active');
  if (notificationHeaderActive && !targetElement.closest('.notification-actions-header')) {
    notificationHeaderActive.classList.remove('_active');
  }
  if (targetElement.classList.contains('actions-header__link')) {
    const notificationHeader = targetElement.closest('.actions-header__item').querySelector('.notification-actions-header');
    if (notificationHeader) {
      notificationHeader.classList.toggle('_active');
    }
    e.preventDefault();
  } else {
    if (notificationHeaderActive && !targetElement.closest('.notification-actions-header')) {
      notificationHeaderActive.classList.remove('_active');
    }
  }
  const  menuDown = document.querySelector('.menu-down');
  const notifHeaderActive = menuDown.querySelector('.notification-actions-header._active');
  if (targetElement.classList.contains('menu-down__link') || targetElement.closest('.menu-down__link')) {
    const notificationHeader = targetElement.closest('.menu-down__item').querySelector('.notification-actions-header');
    if (notificationHeader) {
      if (notificationHeader) {
        notificationHeader.classList.toggle('_active');
      }
    }
    e.preventDefault();
  } else {
    if (notifHeaderActive && !targetElement.closest('.notification-actions-header')) {
      notifHeaderActive.classList.remove('_active');
    }
  }
  let menuUserActive = document.querySelector('.menu-user._active');
  if (targetElement.classList.contains('authorized-users__name') || targetElement.closest('.authorized-users__name')) {
    const menuUser = targetElement.closest('.users-header').querySelector('.menu-user');
    if (menuUser) {
      menuUser.classList.toggle('_active');
    }
    e.preventDefault();
  } else {
    if (menuUserActive) {
      menuUserActive.classList.remove('_active');
    }
  }

  if (targetElement.closest('._listener-js')) {
    if (targetElement.closest('._item-js')) {
      const itemJsActive = targetElement.closest('._item-js').querySelector('._item-js._active');
      if (itemJsActive) {
        itemJsActive.classList.remove('_active');
      }
      const itemJs = targetElement.classList.contains('_item-js') ? targetElement : targetElement.closest('._item-js');
      itemJs.classList.toggle('_active');
      e.preventDefault();
    }
  }
  if (targetElement.closest('.header-editng-meals__arrow')) {
    const editngBody = targetElement.closest('.header-editng-meals').querySelector('.header-editng-meals__body');
    const headerList = targetElement.closest('.header-editng-meals').querySelector('.header-editng-meals__list');

    if (headerList && editngBody) {
      editngBody.classList.toggle('_active');
      targetElement.classList.toggle('_active');
      _slideToggle(headerList);
      e.preventDefault();
    }
  }
  if (targetElement.closest('.main-editng-meals__button_add')) {
    targetElement.classList.toggle('_hidden');
    const addDish = targetElement.closest('.main-editng-meals__body').querySelector('.main-editng-meals__add-dish ');
    if (addDish) {
      _slideToggle(addDish);
    }
    e.preventDefault();
  }
  if (targetElement.closest('.form-add-dish__cancellation')) {
    const addDish = targetElement.closest('.main-editng-meals__body').querySelector('.main-editng-meals__add-dish ');
    const addButtonHidden = targetElement.closest('.main-editng-meals__body').querySelector('.main-editng-meals__button_add._hidden');

    if (addDish) {
      _slideUp(addDish);
    }
    if (addButtonHidden) {
      addButtonHidden.classList.remove('_hidden');
    }
    e.preventDefault();
  }
  if (targetElement.closest('._button-favorites')) {
    if (targetElement.closest('._button-favorites').classList.contains('_active')) {
      targetElement.closest('._button-favorites').classList.remove('_active');
    } else {
      targetElement.closest('._button-favorites').classList.add('_active');
    }
    e.preventDefault();
  }
}
//========================================================================================================================================================

const image = document.getElementById('image');
if (image) {
  const options = {
    background: false,
    modal: true,
    scalable: true,
    zoomable: true,
    zoomOnTouch: true,
    toggleDragModeOnDblclick: true,
    viewMode: 1,
  };
  let cropper;
  cropper = new Cropper(image, options);
}



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
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener('submit', form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest('form');
	let error = form_validate(form);
	if (error == 0) {
		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
		const message = form.getAttribute('data-message');
		const ajax = form.getAttribute('data-ajax');

		//SendForm
		if (ajax) {
			e.preventDefault();
			let formData = new FormData(form);
			form.classList.add('_sending');
			let response = await fetch(formAction, {
				method: formMethod,
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				form.classList.remove('_sending');
				if (message) {
					popup_open(message + '-message');
				}
				form_clean(form);
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		}
		// If test
		if (form.hasAttribute('data-test')) {
			e.preventDefault();
			if (message) {
				popup_open(message + '-message');
			}
			form_clean(form);
		}
	} else {
		let form_error = form.querySelectorAll('._error');
		if (form_error && form.classList.contains('_goto-error')) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}
function form_validate(form) {
  let error = 0;
  let form_req = form.querySelectorAll('._req');
  if (form_req.length > 0) {
    for (let index = 0; index < form_req.length; index++) {
      const el = form_req[index];
      if (!_is_hidden(el)) {
        error += form_validate_input(el);
      }
    }
  }
  return error;
}
function form_validate_input(input) {
  let error = 0;
  let input_g_value = input.getAttribute('data-value');

  if (input.getAttribute('name') == 'email' || input.classList.contains('_email')) {
    if (input.value != input_g_value) {
      let em = input.value.replace(' ', '');
      input.value = em;
    }
    if (email_test(input) || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  } else if (input.getAttribute('type') == 'checkbox' && input.checked == false) {
    form_add_error(input);
    error++;
  } else {
    if (input.value == '' || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  }
  return error;
}
function form_add_error(input) {
  input.classList.add('_error');
  input.parentElement.classList.add('_error');

  let input_error = input.parentElement.parentElement.querySelector('.input__error');
  if (input_error) {
    input.parentElement.parentElement.removeChild(input_error);
  }
  let input_error_text = input.getAttribute('data-error');
  if (input_error_text && input_error_text != '') {
    input.parentElement.parentElement.insertAdjacentHTML('beforeend', '<div class="input__error">' + input_error_text + '</div>');
  }
}
function form_remove_error(input) {
  input.classList.remove('_error');
  input.parentElement.classList.remove('_error');

  let input_error = input.parentElement.parentElement.querySelector('.input__error');
  if (input_error) {
    input.parentElement.parentElement.removeChild(input_error);
  }
}
function form_clean(form) {
  let inputs = form.querySelectorAll('input,textarea');
  for (let index = 0; index < inputs.length; index++) {
    const el = inputs[index];
    el.parentElement.classList.remove('_focus');
    el.classList.remove('_focus');
    el.value = el.getAttribute('data-value');
  }
  let checkboxes = form.querySelectorAll('.checkbox__input');
  if (checkboxes.length > 0) {
    for (let index = 0; index < checkboxes.length; index++) {
      const checkbox = checkboxes[index];
      checkbox.checked = false;
    }
  }
  let selects = form.querySelectorAll('select');
  if (selects.length > 0) {
    for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      const select_default_value = select.getAttribute('data-default');
      select.value = select_default_value;
      select_item(select);
    }
  }
}

//viewPass
let viewPass = document.querySelectorAll('._viewpass');
for (let index = 0; index < viewPass.length; index++) {
	const element = viewPass[index];
	element.addEventListener("click", function (e) {
		if (element.classList.contains('_active')) {
			element.parentElement.querySelector('input').setAttribute("type", "password");
		} else {
			element.parentElement.querySelector('input').setAttribute("type", "text");
		}
		element.classList.toggle('_active');
	});
}

//Select
// let selects = document.getElementsByTagName('select');
// if (selects.length > 0) {
// 	selects_init();
// }
// function selects_init() {
// 	for (let index = 0; index < selects.length; index++) {
// 		const select = selects[index];
// 		select_init(select);
// 	}
// 	//select_callback();
// 	document.addEventListener('click', function (e) {
// 		selects_close(e);
// 	});
// 	document.addEventListener('keydown', function (e) {
// 		if (e.code === 'Escape') {
// 			selects_close(e);
// 		}
// 	});
// }
// function selects_close(e) {
// 	const selects = document.querySelectorAll('.select');
// 	if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_body_options = select.querySelector('.select__options');
// 			select.classList.remove('_active');
// 			_slideUp(select_body_options, 100);
// 		}
// 	}
// }
// function select_init(select) {
// 	const select_parent = select.parentElement;
// 	const select_modifikator = select.getAttribute('class');
// 	const select_selected_option = select.querySelector('option:checked');
// 	select.setAttribute('data-default', select_selected_option.value);
// 	select.style.display = 'none';

// 	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

// 	let new_select = select.parentElement.querySelector('.select');
// 	new_select.appendChild(select);
// 	select_item(select);
// }
// function select_item(select) {
// 	const select_parent = select.parentElement;
// 	const select_items = select_parent.querySelector('.select__item');
// 	const select_options = select.querySelectorAll('option');
// 	const select_selected_option = select.querySelector('option:checked');
// 	const select_selected_text = select_selected_option.text;
// 	const select_type = select.getAttribute('data-type');

// 	if (select_items) {
// 		select_items.remove();
// 	}

// 	let select_type_content = '';
// 	if (select_type == 'input') {
// 		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
// 	} else {
// 		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
// 	}

// 	select_parent.insertAdjacentHTML('beforeend',
// 		'<div class="select__item">' +
// 		'<div class="select__title">' + select_type_content + '</div>' +
// 		'<div hidden class="select__options">' + select_get_options(select_options) + '</div>' +
// 		'</div></div>');

// 	select_actions(select, select_parent);
// }
// function select_actions(original, select) {
// 	const select_item = select.querySelector('.select__item');
// 	const selectTitle = select.querySelector('.select__title');
// 	const select_body_options = select.querySelector('.select__options');
// 	const select_options = select.querySelectorAll('.select__option');
// 	const select_type = original.getAttribute('data-type');
// 	const select_input = select.querySelector('.select__input');

// 	selectTitle.addEventListener('click', function (e) {
// 		selectItemActions();
// 	});

// 	function selectMultiItems() {
// 		let selectedOptions = select.querySelectorAll('.select__option');
// 		let originalOptions = original.querySelectorAll('option');
// 		let selectedOptionsText = [];
// 		for (let index = 0; index < selectedOptions.length; index++) {
// 			const selectedOption = selectedOptions[index];
// 			originalOptions[index].removeAttribute('selected');
// 			if (selectedOption.classList.contains('_selected')) {
// 				const selectOptionText = selectedOption.innerHTML;
// 				selectedOptionsText.push(selectOptionText);
// 				originalOptions[index].setAttribute('selected', 'selected');
// 			}
// 		}
// 		select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
// 	}
// 	function selectItemActions(type) {
// 		if (!type) {
// 			let selects = document.querySelectorAll('.select');
// 			for (let index = 0; index < selects.length; index++) {
// 				const select = selects[index];
// 				const select_body_options = select.querySelector('.select__options');
// 				if (select != select_item.closest('.select')) {
// 					select.classList.remove('_active');
// 					_slideUp(select_body_options, 100);
// 				}
// 			}
// 			_slideToggle(select_body_options, 100);
// 			select.classList.toggle('_active');
// 		}
// 	}
// 	for (let index = 0; index < select_options.length; index++) {
// 		const select_option = select_options[index];
// 		const select_option_value = select_option.getAttribute('data-value');
// 		const select_option_text = select_option.innerHTML;

// 		if (select_type == 'input') {
// 			select_input.addEventListener('keyup', select_search);
// 		} else {
// 			if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
// 				select_option.style.display = 'none';
// 			}
// 		}
// 		select_option.addEventListener('click', function () {
// 			for (let index = 0; index < select_options.length; index++) {
// 				const el = select_options[index];
// 				el.style.display = 'block';
// 			}
// 			if (select_type == 'input') {
// 				select_input.value = select_option_text;
// 				original.value = select_option_value;
// 			} else {
// 				if (original.hasAttribute('multiple')) {
// 					select_option.classList.toggle('_selected');
// 					selectMultiItems();
// 				} else {
// 					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
// 					original.value = select_option_value;
// 					select_option.style.display = 'none';
// 				}
// 			}
// 			let type;
// 			if (original.hasAttribute('multiple')) {
// 				type = 'multiple';
// 			}
// 			selectItemActions(type);
// 		});
// 	}
// }
// function select_get_options(select_options) {
// 	if (select_options) {
// 		let select_options_content = '';
// 		for (let index = 0; index < select_options.length; index++) {
// 			const select_option = select_options[index];
// 			const select_option_value = select_option.value;
// 			if (select_option_value != '') {
// 				const select_option_text = select_option.innerHTML;
// 				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
// 			}
// 		}
// 		return select_options_content;
// 	}
// }
// function select_search(e) {
// 	let select_block = e.target.closest('.select ').querySelector('.select__options');
// 	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
// 	let select_search_text = e.target.value.toUpperCase();

// 	for (let i = 0; i < select_options.length; i++) {
// 		let select_option = select_options[i];
// 		let select_txt_value = select_option.textContent || select_option.innerText;
// 		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
// 			select_option.style.display = "";
// 		} else {
// 			select_option.style.display = "none";
// 		}
// 	}
// }
// function selects_update_all() {
// 	let selects = document.querySelectorAll('select');
// 	if (selects) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			select_item(select);
// 		}
// 	}
// }


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
  selects_init();
}
function selects_init() {
  for (let index = 0; index < selects.length; index++) {
    const select = selects[index];
    select_init(select);
  }
  //select_callback();
  document.addEventListener('click', function (e) {
    selects_close(e);
  });
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      selects_close(e);
    }
  });
}
function selects_close(e) {
  const selects = document.querySelectorAll('.select');
  if (!e.target.closest('.select') && !e.target.classList.contains('_option')) {
    for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      const select_body_options = select.querySelector('.select__options');
      select.classList.remove('_active');
      _slideUp(select_body_options, 100);
    }
  }
}
function select_init(select) {
  const select_parent = select.parentElement;
  const select_modifikator = select.getAttribute('class');
  const select_selected_option = select.querySelector('option:checked');
  select.setAttribute('data-default', select_selected_option.value);
  select.setAttribute('tabindex', '-1');

  select_parent.insertAdjacentHTML('beforeend', `<div class="select select_${select_modifikator}"></div>`);

  let new_select = select.parentElement.querySelector('.select');
  new_select.appendChild(select);
  select_item(select);
}
function select_item(select) {
  const select_parent = select.parentElement;
  const select_items = select_parent.querySelector('.select__item');
  const select_options = select.querySelectorAll('option');
  const select_selected_option = select.querySelector('option:checked');
  const select_selected_text = select_selected_option.text;
  const select_type = select.getAttribute('data-type');

  let disabled = select.disabled ? 'disabled' : '';

  if (select_items) {
    select_items.remove();
  }

  let select_type_content = '';
  if (select_type == 'input') {
    select_type_content =
      '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' +
      select_selected_text +
      '" data-error="Ошибка" data-value="' +
      select_selected_text +
      '" class="select__input"></div>';
  } else {
    const select_option_discount = select_selected_option.dataset.discount
      ? `<small class="_success">${select_selected_option.dataset.discount}</small>`
      : '';
    const select_selected_icon = select_selected_option.dataset.icon ? ' ' + select_selected_option.dataset.icon : '';
    select_type_content =
      '<div class="select__value"><span class="' + select_selected_icon + '">' + select_selected_text + select_option_discount + '</span></div>';
    if (select_selected_option.hasAttribute('data-image')) {
      select_type_content =
        '<div class="select__value"><img class="select__image" src="' +
        select_selected_option.dataset.image +
        '" alt=""><span class="' +
        select_selected_icon +
        '">' +
        select_selected_text +
        select_option_discount +
        '</span></div>';
    }
  }

  select_parent.insertAdjacentHTML(
    'beforeend',
    '<div class="select__item">' +
      '<button ' +
      disabled +
      ' type="button" class="select__title">' +
      select_type_content +
      '</button>' +
      '<div hidden class="select__options">' +
      select_get_options(select_options) +
      '</div>' +
      '</div></div>'
  );

  select_actions(select, select_parent);
}
function select_actions(original, select) {
  const select_item = select.querySelector('.select__item');
  const selectTitle = select.querySelector('.select__title');
  const select_body_options = select.querySelector('.select__options');
  const select_options = select.querySelectorAll('.select__option');
  const select_type = original.getAttribute('data-type');
  const select_input = select.querySelector('.select__input');

  selectTitle.addEventListener('click', function (e) {
    selectItemActions();
  });

  function selectMultiItems() {
    let selectedOptions = select.querySelectorAll('.select__option');
    let originalOptions = original.querySelectorAll('option');
    let selectedOptionsText = [];
    for (let index = 0; index < selectedOptions.length; index++) {
      const selectedOption = selectedOptions[index];
      originalOptions[index].removeAttribute('selected');
      if (selectedOption.classList.contains('_selected')) {
        const selectOptionText = selectedOption.innerHTML;
        selectedOptionsText.push(selectOptionText);
        originalOptions[index].setAttribute('selected', 'selected');
      }
    }
    select.querySelector('.select__value').innerHTML = '<span>' + selectedOptionsText + '</span>';
  }
  function selectItemActions(type) {
    if (!type) {
      let selects = document.querySelectorAll('.select');
      for (let index = 0; index < selects.length; index++) {
        const select = selects[index];
        const select_body_options = select.querySelector('.select__options');
        if (select != select_item.closest('.select')) {
          select.classList.remove('_active');
          _slideUp(select_body_options, 100);
        }
      }
      _slideToggle(select_body_options, 100);
      select.classList.toggle('_active');
    }
  }
  for (let index = 0; index < select_options.length; index++) {
    const select_option = select_options[index];
    const select_option_value = select_option.getAttribute('data-value');
    const select_option_text = select_option.innerHTML;

    if (select_type == 'input') {
      select_input.addEventListener('keyup', select_search);
    } else {
      if (select_option.getAttribute('data-value') == original.value && !original.hasAttribute('multiple')) {
        select_option.style.display = 'none';
      }
    }
    select_option.addEventListener('click', function () {
      for (let index = 0; index < select_options.length; index++) {
        const el = select_options[index];
        el.style.display = 'flex';
      }
      if (select_type == 'input') {
        select_input.value = select_option_text;
        original.value = select_option_value;
      } else {
        if (original.hasAttribute('multiple')) {
          select_option.classList.toggle('_selected');
          selectMultiItems();
        } else {
          select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
          original.value = select_option_value;
          select_option.style.display = 'none';
        }
      }
      let type;
      if (original.hasAttribute('multiple')) {
        type = 'multiple';
      }
      selectItemActions(type);
    });
  }
}
function select_get_options(select_options) {
  if (select_options) {
    let select_options_content = '';
    for (let index = 0; index < select_options.length; index++) {
      const select_option = select_options[index];
      const select_option_value = select_option.value;
      const select_option_image = select_option.hasAttribute('data-image');
      if (select_option_value != '' && !select_option_image) {
        const select_option_text = select_option.innerHTML;
        const select_option_discount = select_option.dataset.discount ? `<small class="_success">${select_option.dataset.discount}</small>` : '';
        const select_option_icon = select_option.dataset.icon ? ' ' + select_option.dataset.icon + ' ' : '';
        select_options_content =
          select_options_content +
          '<button type="button" data-value="' +
          select_option_value +
          '" class="select__option"><span class="' +
          select_option_icon +
          '">' +
          select_option_text +
          select_option_discount +
          '</span></button>';
      } else {
        const select_option_text = select_option.innerHTML;
        const select_option_discount = select_option.dataset.discount ? `<small class="_success">${select_option.dataset.discount}</small>` : '';
        const select_option_icon = select_option.dataset.icon ? ' ' + select_option.dataset.icon + ' ' : '';
        select_options_content = select_options_content + '<button type="button" data-value="' + select_option_value +'" class="select__option"><img class="select__image" src="' + select_option.dataset.image + '" alt=""><span class="' + select_option_icon + '">' +select_option_text + select_option_discount +'</span></button>';
		}
    }
    return select_options_content;
  }
}
function select_search(e) {
  let select_block = e.target.closest('.select ').querySelector('.select__options');
  let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
  let select_search_text = e.target.value.toUpperCase();

  for (let i = 0; i < select_options.length; i++) {
    let select_option = select_options[i];
    let select_txt_value = select_option.textContent || select_option.innerText;
    if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
      select_option.style.display = '';
    } else {
      select_option.style.display = 'none';
    }
  }
}
function selects_update_all() {
  let selects = document.querySelectorAll('select');
  if (selects) {
    for (let index = 0; index < selects.length; index++) {
      const select = selects[index];
      select_item(select);
    }
  }
}

//======================================================================================================================================================ыз


//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass") {
					if (input.parentElement.querySelector('._viewpass')) {
						if (!input.parentElement.querySelector('._viewpass').classList.contains('_active')) {
							input.setAttribute('type', 'password');
						}
					} else {
						input.setAttribute('type', 'password');
					}
				}
				if (input.classList.contains('_date')) {
					/*
					input.classList.add('_mask');
					Inputmask("99.99.9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
					*/
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+375 (99) 9999999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital-r')) {
					input.classList.add('_mask');
					Inputmask('9{1,} ₽', {
            placeholder: '',
            clearIncomplete: true,
            clearMaskOnLostFocus: true,
            onincomplete: function () {
              input_clear_mask(input, input_g_value);
            },
          }).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				const calendarItem = datepicker(input, {
					customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					overlayButton: 'Применить',
					overlayPlaceholder: 'Год (4 цифры)',
					startDay: 1,
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
				const dataFrom = input.getAttribute('data-from');
				const dataTo = input.getAttribute('data-to');
				if (dataFrom) {
					calendarItem.setMin(new Date(dataFrom));
				}
				if (dataTo) {
					calendarItem.setMax(new Date(dataTo));
				}
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}

//QUANTITY
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//RANGE
const priceSlider = document.querySelector('.price-filter__slider');
if (priceSlider) {

	let textFrom = priceSlider.getAttribute('data-from');
	let textTo = priceSlider.getAttribute('data-to');

	noUiSlider.create(priceSlider, {
		start: [0, 200000],
		connect: true,
		tooltips: [wNumb({ decimals: 0, prefix: textFrom + ' ' }), wNumb({ decimals: 0, prefix: textTo + ' ' })],
		range: {
			'min': [0],
			'max': [200000]
		}
	});

	/*
	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', setPriceValues);
	priceEnd.addEventListener('change', setPriceValues);
	*/

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != '') {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != '') {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelector('._side-wrapper');
let scr_absolut_block = document.querySelector('._absolut-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

let currentScroll;

//resize
window.addEventListener('resize', function () {
  if (scr_fix_block && header !== null) {
    currentScroll = Math.round(pageYOffset);
    fix_block(scr_fix_block, currentScroll);
  }
});
//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
  let src_value = Math.round((currentScroll = pageYOffset));
  let header = document.querySelector('header.header');

  if (header !== null) {
    const mainHeader = document.querySelector('.main-header ');
    const topHeader = document.querySelector('.top-header');
    let mainHeaderHeight = mainHeader.offsetHeight;
    let topHeaderHeight = topHeader.offsetHeight;

    if (src_value > scrollDirection) {
      // downscroll code
      mainHeader.classList.add('scroll-down');
      mainHeader.classList.remove('scroll-up');

      moveHeader(mainHeaderHeight, src_value, mainHeader);
    } else if (scrollDirection - src_value >= 10) {
      mainHeader.classList.remove('scroll-down');
      mainHeader.classList.add('scroll-up');
      moveHeader(mainHeaderHeight, src_value, mainHeader);
    } else if (src_value <= scrollDirection && window.innerWidth < 992 && src_value < mainHeaderHeight) {
      mainHeader.classList.remove('scroll-down');
      mainHeader.classList.add('scroll-up');
      moveHeader(mainHeaderHeight, src_value, mainHeader);
    } else if (src_value <= scrollDirection && window.innerWidth > 992 && src_value < mainHeaderHeight) {
      mainHeader.classList.remove('scroll-down');
      mainHeader.classList.add('scroll-up');
      moveHeader(mainHeaderHeight, src_value, mainHeader);
    } else {
      // upscroll code
      // mainHeader.classList.remove('scroll-down');
      // mainHeader.classList.add('scroll-up');
      // moveHeader(mainHeaderHeight, src_value, mainHeader);
    }
    if (src_value == 0) {
      mainHeader.classList.remove('scroll-down');
      mainHeader.classList.remove('scroll-up');
      mainHeader.classList.remove('main-header_fix');
      mainHeader.classList.remove('main-header_down');
      mainHeader.setAttribute('data-true', 'false');
    }
    if (mainHeader.classList.contains('main-header_down') && mainHeader.classList.contains('scroll-up')) {
      mainHeader.style.cssText = `top: 0px;`;
    }
    if (src_value > mainHeaderHeight - topHeaderHeight && window.screen.width > 992) {
      header.classList.add('_scroll');
    } else {
      header.classList.remove('_scroll');
    }
    if (src_value > mainHeaderHeight && window.screen.width < 992) {
      header.classList.add('_scroll');
    } else {
      header.classList.remove('_scroll');
    }
    if (src_value > mainHeaderHeight && window.screen.width < 992 && scr_fix_block) {
      header.classList.add('_no-shadow');
    } else {
      header.classList.remove('_no-shadow');
    }
  }

  if (scr_blocks.length > 0) {
    for (let index = 0; index < scr_blocks.length; index++) {
      let block = scr_blocks[index];
      let block_offset = offset(block).top;
      let block_height = block.offsetHeight;

      /*
			if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
				let scrProcent = (src_value - block_offset) / block_height * 100;
				scrParallax(block, scrProcent, block_height);
			}
			*/

      if (pageYOffset > block_offset - window.innerHeight / 1.5 && pageYOffset < block_offset + block_height - window.innerHeight / 5) {
        block.classList.add('_scr-sector_active');
      } else {
        if (block.classList.contains('_scr-sector_active')) {
          block.classList.remove('_scr-sector_active');
        }
      }
      if (pageYOffset > block_offset - window.innerHeight / 2 && pageYOffset < block_offset + block_height - window.innerHeight / 5) {
        if (!block.classList.contains('_scr-sector_current')) {
          block.classList.add('_scr-sector_current');
        }
      } else {
        if (block.classList.contains('_scr-sector_current')) {
          block.classList.remove('_scr-sector_current');
        }
      }
    }
  }
  if (scr_items.length > 0) {
    for (let index = 0; index < scr_items.length; index++) {
      let scr_item = scr_items[index];
      let scr_item_offset = offset(scr_item).top;
      let scr_item_height = scr_item.offsetHeight;

      let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
      if (window.innerHeight > scr_item_height) {
        scr_item_point = window.innerHeight - scr_item_height / 3;
      }

      if (src_value > scr_item_offset - scr_item_point && src_value < scr_item_offset + scr_item_height) {
        scr_item.classList.add('_active');
        scroll_load_item(scr_item);
      } else {
        scr_item.classList.remove('_active');
      }
      if (src_value > scr_item_offset - window.innerHeight) {
        if (scr_item.querySelectorAll('._lazy').length > 0) {
          scroll_lazy(scr_item);
        }
      }
    }
  }
  if (scr_fix_block && header !== null) {
    fix_block(scr_fix_block, currentScroll);
  }
  if (scr_absolut_block && header !== null) {
    absolut_block(scr_absolut_block, src_value);
  }
  let custom_scroll_line = document.querySelector('._custom-scroll__line');
  if (custom_scroll_line) {
    let window_height = window.innerHeight;
    let content_height = document.querySelector('.wrapper').offsetHeight;
    let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
    let custom_scroll_line_height = custom_scroll_line.offsetHeight;
    custom_scroll_line.style.transform = 'translateY(' + ((window_height - custom_scroll_line_height) / 100) * scr_procent + 'px)';
  }
  if (src_value > scrollDirection) {
    // downscroll code
    // console.log('downscroll code');
  } else {
    // upscroll code
    // console.log('upscroll code');
  }

  scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
  //document.addEventListener("DOMContentLoaded", scroll_scroll);
  scroll_scroll();
}, 100);

function moveHeader(mainHeaderHeight, src_value, mainHeader) {
  if (mainHeader.classList.contains('main-header_down') && mainHeader.classList.contains('scroll-up')) {
    //  console.log('scroll-up');
    mainHeader.style.cssText = `top: 0px;`;
  }
  if (src_value > mainHeaderHeight) {
    // console.log('scroll-down');
    mainHeader.style.top = `-${mainHeaderHeight}px`;
    if (!mainHeader.classList.contains('main-header_down')) {
      mainHeader.classList.add('main-header_down');
      mainHeader.style.opacity = '0';
      mainHeader.setAttribute('data-true', 'true');
    }
    mainHeader.classList.remove('main-header_fix');
  } else {
    mainHeader.style.cssText = `top: -${src_value}px;`;
    mainHeader.classList.remove('main-header_down');
    mainHeader.classList.add('main-header_fix');
    if (mainHeader.getAttribute('data-true') === 'true') {
      mainHeader.classList.add('main-header_down');
    }
  }
}

function scroll_load_item(scr_item) {
  if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
    let map_item = document.getElementById('map');
    if (map_item) {
      scr_item.classList.add('_loaded-map');
      map();
    }
  }
}
function scrParallax(block, scrProcent, blockHeight) {
  let prlxItems = block.querySelectorAll('._prlx-item');
  if (prlxItems.length > 0) {
    for (let index = 0; index < prlxItems.length; index++) {
      const prlxItem = prlxItems[index];
      let prlxItemAttr = prlxItem.dataset.prlx ? prlxItem.dataset.prlx : 3;
      const prlxItemValue = -1 * (((blockHeight / 100) * scrProcent) / prlxItemAttr);
      prlxItem.style.cssText = `transform: translateY(${prlxItemValue}px);`;
    }
  }
}
//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
  disableScroll();
  window.addEventListener('wheel', full_scroll);

  let swiperScrolls = document.querySelectorAll('._swiper_scroll');

  if (swiperScrolls.length > 0) {
    for (let index = 0; index < swiperScrolls.length; index++) {
      const swiperScroll = swiperScrolls[index];
      swiperScroll.addEventListener('mouseenter', function (e) {
        window.removeEventListener('wheel', full_scroll);
      });
      swiperScroll.addEventListener('mouseleave', function (e) {
        window.addEventListener('wheel', full_scroll);
      });
    }
  }
}
function getPrevBlockPos(current_block_prev) {
  let viewport_height = window.innerHeight;
  let current_block_prev_height = current_block_prev.offsetHeight;
  let block_pos = offset(current_block_prev).top;

  if (current_block_prev_height >= viewport_height) {
    block_pos = block_pos + (current_block_prev_height - viewport_height);
  }
  return block_pos;
}
function full_scroll(e) {
  let viewport_height = window.innerHeight;
  if (viewport_height >= scr_min_height) {
    if (scrolling_full) {
      let current_block = document.querySelector('._scr-sector._scr-sector_current');
      let current_block_pos = offset(current_block).top;
      let current_block_height = current_block.offsetHeight;
      let current_block_next = current_block.nextElementSibling;
      let current_block_prev = current_block.previousElementSibling;
      if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
        if (current_block_height <= viewport_height) {
          if (current_block_prev) {
            full_scroll_to_sector(getPrevBlockPos(current_block_prev));
          }
        } else {
          enableScroll();
          if (currentScroll <= current_block_pos) {
            if (current_block_prev) {
              full_scroll_to_sector(getPrevBlockPos(current_block_prev));
            }
          }
        }
      } else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
        if (current_block_height <= viewport_height) {
          if (current_block_next) {
            let block_pos = offset(current_block_next).top;
            full_scroll_to_sector(block_pos);
          }
        } else {
          enableScroll();
          if (current_block_next) {
            let block_pos = offset(current_block_next).top;
            if (currentScroll >= block_pos - viewport_height) {
              full_scroll_to_sector(block_pos);
            }
          }
        }
      }
    } else {
      disableScroll();
    }
  } else {
    enableScroll();
  }
}
function full_scroll_to_sector(pos) {
  disableScroll();
  scrolling_full = false;
  _goto(pos, 800);

  let scr_pause = 500;
  if (navigator.appVersion.indexOf('Mac') != -1) {
    scr_pause = 1000;
  }
  setTimeout(function () {
    scrolling_full = true;
  }, scr_pause);
}
function full_scroll_pagestart() {}
function full_scroll_pageend() {}

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
  let blocks = [];
  for (let index = 0; index < link.length; index++) {
    let el = link[index];
    let block_name = el.getAttribute('href').replace('#', '');
    if (block_name != '' && !~blocks.indexOf(block_name)) {
      blocks.push(block_name);
    }
    el.addEventListener('click', function (e) {
      if (document.querySelector('.navigation__button._active') && document.querySelector('.navigation__list._active')) {
        document.querySelector('.navigation__button._active').classList.remove('_active');
        document.querySelector('.navigation__list._active').classList.remove('_active');
      }
      let target_block_class = el.getAttribute('href').replace('#', '');
      let target_block = document.querySelector('.' + target_block_class);

      _goto(target_block, 300);
      e.preventDefault();
    });
  }
  window.addEventListener('scroll', function (el) {
    let old_current_link = document.querySelectorAll('._goto-block._active');
    const navigationBlock = document.querySelector('.navigation._side-block');
    let navigationContent;
    if (navigationBlock) {
      navigationContent = navigationBlock.querySelector('.navigation__content-button');
    }

    if (old_current_link) {
      for (let index = 0; index < old_current_link.length; index++) {
        let el = old_current_link[index];
        el.classList.remove('_active');
      }
    }
    for (let index = 0; index < blocks.length; index++) {
      let block = blocks[index];
      let block_item = document.querySelector('.' + block);
      if (block_item) {
        let block_offset = offset(block_item).top;
        let block_height = block_item.offsetHeight;
        if (pageYOffset > block_offset - window.innerHeight / 3 && pageYOffset < block_offset + block_height - window.innerHeight / 3) {
          let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
          for (let index = 0; index < current_links.length; index++) {
            let current_link = current_links[index];
            let current_link_html = current_link.innerHTML;
            navigationContent.innerHTML = current_link_html;
            current_link.classList.add('_active');
          }
        }
      }
    }
  });
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
  for (let index = 0; index < goto_links.length; index++) {
    let goto_link = goto_links[index];
    goto_link.addEventListener('click', function (e) {
      let target_block_class = goto_link.getAttribute('href').replace('#', '');
      let target_block = document.querySelector('.' + target_block_class);
      _goto(target_block, 300);
      e.preventDefault();
    });
  }
}
function _goto(target_block, speed, offset = 0) {
  //OffsetHeader

  let header = '';
  let headerHeight = parseInt(document.querySelector('.main-header').offsetHeight);
  let navigationHeight = parseInt(document.querySelector('._side-block ').offsetHeight);

  if (window.innerWidth < 992) {
    header = '';
    offset = headerHeight + navigationHeight + 15;
  } else {
    header = '.top-header';
    offset = headerHeight;
  }
  let options = {
    speedAsDuration: true,
    speed: 800,
    header: header,
    offset: offset,
    easing: 'easeOutQuad',
  };
  let scr = new SmoothScroll();
  scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
  if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
  /*if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}*/
}

function fix_block(scr_fix_block, scr_value) {
  let window_width = parseInt(window.innerWidth);
  let window_height = parseInt(window.innerHeight);
  let top_header_height = parseInt(document.querySelector('.top-header').offsetHeight) + 15;
  let mainHeader = document.querySelector('.main-header');
  let mainHeaderHeight = parseInt(mainHeader.offsetHeight) + 15;
  let placeholder = document.createElement('div');
  let block = scr_fix_block;
  let block_left = offset(block).left;
  const item = block.querySelector('._side-block');
  const itemDimensions = item.getBoundingClientRect();
  let itemHeaight = itemDimensions.height;
  placeholder.style.cssText = `width: 100%; height:${itemHeaight}px;`;
  placeholder.classList.add('_placeholder-nav');

  if (window_width > 992) {
    if (item.classList.contains('_fixed')) {
      item.classList.remove('_fixed');
    }
    if (item.offsetHeight < window_height - (top_header_height + 30)) {
      if (scr_value > offset(block).top - top_header_height && mainHeader.classList.contains('scroll-down')) {
        if (!item.hasAttribute('data-go')) {
          item.setAttribute('data-go', '');
          item.style.cssText =
            'position:fixed;bottom:auto;top:' +
            top_header_height +
            'px;width:' +
            block.offsetWidth +
            'px;left:' +
            block_left +
            'px; transition: top 0s ease-out 0s;';
        }
        item.style.cssText =
          'position:fixed;bottom:auto;top:' +
          top_header_height +
          'px;width:' +
          block.offsetWidth +
          'px;left:' +
          block_left +
          'px; transition: top 0.5s ease-out 0s;';
      } else if (scr_value > offset(block).top - mainHeaderHeight && mainHeader.classList.contains('scroll-up')) {
        if (item.hasAttribute('data-go')) {
          item.style.cssText =
            'position:fixed;bottom:auto;top:' +
            mainHeaderHeight +
            'px;width:' +
            block.offsetWidth +
            'px;left:' +
            block_left +
            'px; transition: top 0.4s ease-out 0s;';
        }
        item.style.cssText =
          'position:fixed;bottom:auto;top:' +
          mainHeaderHeight +
          'px;width:' +
          block.offsetWidth +
          'px;left:' +
          block_left +
          'px; transition: top 0s ease-out 0s;';
      } else {
        gotoRelative(item);
      }
      if (scr_value > block.offsetHeight + offset(block).top - (item.offsetHeight + (top_header_height + 15))) {
        block.style.cssText = 'position:relative;';
        item.style.cssText = 'position:absolute;bottom:0;top:auto;left:0px;width:100%';
      }
    } else {
      gotoRelative(item);
    }
  } else {
    if (scr_value >= offset(block).top - 20 && mainHeader.classList.contains('scroll-down')) {
      if (!item.hasAttribute('data-go')) {
        item.setAttribute('data-go', '');
        item.classList.add('_fixed');
        item.style.cssText = `position:fixed;bottom:auto;left:0;top:0;width:100%;transition: top 0.0s linear 0s;`;
      }
      if (!item.parentElement.querySelector('._placeholder-nav')) {
        item.parentElement.insertBefore(placeholder, item);
      }
      item.style.cssText = `position:fixed;bottom:auto;left:0;top:0;width:100%;transition: top 0.3s linear 0s;z-index:56;`;
    } else if (scr_value >= offset(block).top - 20 && mainHeader.classList.contains('scroll-up')) {
      item.style.cssText = `position:fixed;bottom:auto;left:0;top:${mainHeaderHeight - 15}px;width:100%;transition: top 0.3s linear 0.15s;`;
      if (item.hasAttribute('data-go')) {
        item.removeAttribute('data-go');
      }
    } else if (scr_value < offset(block).top - mainHeaderHeight) {
      gotoRelative(item);
    }
  }

  function gotoRelative(item) {
    if (item.hasAttribute('data-go')) {
      item.removeAttribute('data-go');
    }
    if (item.classList.contains('_fixed')) {
      item.classList.remove('_fixed');
    }
    if (item.parentElement.querySelector('._placeholder-nav')) {
      item.parentElement.querySelector('._placeholder-nav').remove();
    }
    item.style.cssText = 'position:relative;bottom:auto;top:0px;left:0px;';
  }
}
function absolut_block(scr_absolut_block, scr_value) {
  const header = document.querySelector('.main-header');
  let top_header = document.querySelector('.top-header').offsetHeight;
  let placeholder = document.createElement('div');
  // let shadowBlock = document.createElement('div');
  // shadowBlock.classList.add('shadowBlock');
  const block = scr_absolut_block;
  const item = block.querySelector('._absolut-block');
  const itemDimensions = item.getBoundingClientRect();
  let itemHeaight = itemDimensions.height;
  let itemWidth = itemDimensions.width;
  let currentItem = Math.abs(offset(block).top - scr_value - top_header);
  let currentItemMob = Math.abs(offset(block).top - scr_value);
  let currentBlock = Math.round(currentItem);
  let currentBlockMob = Math.round(currentItemMob);
  let bottomPosition = Math.round(block.offsetHeight + offset(block).top - item.offsetHeight - 32);
  let bottomPositionMob = Math.round(block.offsetHeight + offset(block).top - item.offsetHeight);
  const sumValue = 5;
  placeholder.style.cssText = `width: ${itemWidth}px; height:${itemHeaight}px;`;
  //shadowBlock.style.cssText = `width: 100%; height:${itemHeaight}px;`;
  if (scr_value > offset(block).top - top_header && header.classList.contains('scroll-down') && window.innerWidth >= 992) {
    if (!item.classList.contains('_absolute')) {
      item.classList.add('_absolute');
      item.style.cssText = `position:absolute;bottom:auto;left: 0;`;
      block.style.position = 'relative';
      item.parentElement.insertBefore(placeholder, item);
      // scr_body.prepend(shadowBlock);
      // shadowBlock.style.top = top_header + 'px';
      item.removeAttribute('data-relative');
    }
    item.style.top = currentBlock + 'px';
  } else if (scr_value > offset(block).top && header.classList.contains('scroll-down') && window.innerWidth < 992) {
    if (!item.classList.contains('_absolute')) {
      item.classList.add('_absolute');
      item.style.cssText = 'position:absolute;bottom:auto;left: 0;';
      item.parentElement.insertBefore(placeholder, item);
      //scr_body.prepend(shadowBlock);
      //shadowBlock.style.top = 0 + 'px';
      item.removeAttribute('data-relative');
    }
    item.style.top = currentBlockMob + 'px';
  } else {
    gotoRelative(item);
  }
  if (scr_value > bottomPosition - sumValue && header.classList.contains('scroll-down') && window.innerWidth >= 992) {
    item.style.cssText = 'position:absolute;bottom:0;top:auto;left:0px;';
    // shadowBlock = document.querySelector('.shadowBlock');
    let variable = Math.round(bottomPosition - scr_value + top_header);
    //shadowBlock ?
    //  (shadowBlock.style.cssText = `transition: all 0.0s ease 0s; width:100%; height:${itemHeaight}px; top: ${variable - sumValue}px`)
    //  : null;
  }
  if (scr_value > bottomPositionMob - sumValue && header.classList.contains('scroll-down') && window.innerWidth < 992) {
    item.style.cssText = 'position:absolute;bottom:auto;left: 0;transition: all 0.4s ease 0s; opacity:0;';
    item.style.top = currentBlockMob + 'px';
    //  item.style.cssText = 'position:absolute;bottom:0;top:auto;left:0px;';
    //  shadowBlock = document.querySelector('.shadowBlock');
    //  let variable = Math.round(bottomPositionMob - scr_value);
    //  shadowBlock ? (shadowBlock.style.cssText = `transition: all 0.0s ease 0s; width:100%; height:${itemHeaight}px; top: ${variable}px`) : null;
  }

  function gotoRelative(item) {
    if (item.classList.contains('_absolute')) {
      item.parentElement.firstElementChild.remove();
      // scr_body.querySelector('.shadowBlock').remove();
    }
    if (!item.hasAttribute('data-relative')) {
      item.setAttribute('data-relative', '');
      item.style.cssText = 'position:relative;bottom:auto;top:0px;left:0px;transition: all 0.0s ease 0s;';
      item.classList.remove('_absolute');
    }
  }
}

if (!isMobile.any()) {
  //custom_scroll();
  /*
	window.addEventListener('wheel', scroll_animate, {
		capture: true,
		passive: true
	});
	window.addEventListener('resize', custom_scroll, {
		capture: true,
		passive: true
	});
	*/
}
function custom_scroll(event) {
  scr_body.style.overflow = 'hidden';
  let window_height = window.innerHeight;
  let custom_scroll_line = document.querySelector('._custom-scroll__line');
  let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
  let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
  if (custom_scroll_content_height > window_height) {
    if (!custom_scroll_line) {
      let custom_scroll = document.createElement('div');
      custom_scroll_line = document.createElement('div');
      custom_scroll.setAttribute('class', '_custom-scroll');
      custom_scroll_line.setAttribute('class', '_custom-scroll__line');
      custom_scroll.appendChild(custom_scroll_line);
      scr_body.appendChild(custom_scroll);
    }
    custom_scroll_line.style.height = custom_cursor_height + 'px';
  }
}

let new_pos = pageYOffset;
function scroll_animate(event) {
  let window_height = window.innerHeight;
  let content_height = document.querySelector('.wrapper').offsetHeight;
  let start_position = pageYOffset;
  let pos_add = 100;

  if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
    new_pos = new_pos - pos_add;
  } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
    new_pos = new_pos + pos_add;
  }
  if (new_pos > content_height - window_height) new_pos = content_height - window_height;
  if (new_pos < 0) new_pos = 0;

  if (scrolling) {
    scrolling = false;
    _goto(new_pos, 1000);

    let scr_pause = 100;
    if (navigator.appVersion.indexOf('Mac') != -1) {
      scr_pause = scr_pause * 2;
    }
    setTimeout(function () {
      scrolling = true;
      _goto(new_pos, 1000);
    }, scr_pause);
  }
  //If native scroll
  //disableScroll();
}


tippy('[data-tippy-content]', {
  allowHTML: true,
  interactive: true,
  maxWidth: 300,
  placement: 'bottom-end',
  offset: [15, 8],
  arrow: false,
  appendTo: () => document.body,
  //trigger: 'click',
});


