// Header burger menu open & close
const menuOpenBtn = document.querySelector('#burger_open');
const menuCloseBtn = document.querySelector('#burger_close');
const headerMenu = document.querySelector('#navigation');
const sideMenuBackdrop = document.querySelector('.side-menu__backdrop');
const targetScroll = document.querySelector('.side-menu__wrapper');

menuOpenBtn.addEventListener('click', function () {
  headerMenu.classList.add('active');
  bodyScrollLock.disableBodyScroll(targetScroll);
});

menuCloseBtn.addEventListener('click', function () {
  headerMenu.classList.remove('active');
  bodyScrollLock.enableBodyScroll(targetScroll);
});

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    headerMenu.classList.remove('active');
    bodyScrollLock.enableBodyScroll(targetScroll);
  }
});

sideMenuBackdrop.addEventListener('click', function () {
  headerMenu.classList.remove('active');
  bodyScrollLock.enableBodyScroll(targetScroll);
});

// Header transform effect
(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 40) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  };
})();

// Modal windows
const popups = new HystModal({
  linkAttributeName: 'data-hystmodal',
});
