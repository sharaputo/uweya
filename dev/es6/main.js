// SVG Inline Injector
const mySVGsToInject = document.querySelectorAll('img.inject-me');
SVGInjector(mySVGsToInject);

// Header burger menu open & close
const menuSwitcher = document.querySelector('#burger_menu');
const headerMenu = document.querySelector('#navigation');

menuSwitcher.addEventListener('click', function () {
  this.classList.toggle('active');
  headerMenu.classList.toggle('active');
});
