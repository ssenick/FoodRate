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
