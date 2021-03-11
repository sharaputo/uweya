// Header burger menu open & close
const menuOpenBtn = document.querySelector('#burger_open');
const menuCloseBtn = document.querySelector('#burger_close');
const headerMenu = document.querySelector('#navigation');

menuOpenBtn.addEventListener('click', function () {
  headerMenu.classList.add('active');
});

menuCloseBtn.addEventListener('click', function () {
  headerMenu.classList.remove('active');
});

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    headerMenu.classList.remove('active');
  }
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
