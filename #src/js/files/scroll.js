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
