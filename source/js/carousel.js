let carousel = document.querySelector('.js-carousel');
let btnBack = carousel.querySelector('.js-back');
let btnForth = carousel.querySelector('.js-forth');
let listCarousel = carousel.querySelector('.js-list');
let shiftCurrent = 0;
let shift = listCarousel.querySelector('li').getBoundingClientRect().width + 20;
let count = listCarousel.querySelectorAll('li').length;
btnBack.disabled = true;

btnBack.hidden = true;
btnForth.hidden = true;

if (shift * count > document.querySelector('.container').offsetWidth) {
  btnBack.hidden = false;
  btnForth.hidden = false;
  btnForth.addEventListener('click', function() {
    btnBack.disabled = false;
    shiftCurrent+=shift;
    if (shiftCurrent >= shift  * (count - 1)) {
      btnForth.disabled = true;
    }
    console.log(shiftCurrent);
    listCarousel.style.right = shiftCurrent + 'px';
  });
  btnBack.addEventListener('click', function() {
    btnForth.disabled = false;
    shiftCurrent-=shift;
    if (shiftCurrent <= 0) {
      btnBack.disabled = true;
    }
    listCarousel.style.right = shiftCurrent + 'px';
  });
}
