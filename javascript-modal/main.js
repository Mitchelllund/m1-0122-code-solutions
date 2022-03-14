var $modalButton = document.querySelector('.modal-button');
var $modalBg = document.querySelector('.modal-background');
var $modalClose = document.querySelector('.modal-close');

$modalButton.addEventListener('click', function () {
  $modalBg.classList.add('modal-active');
});

$modalClose.addEventListener('click', function () {
  $modalBg.classList.remove('modal-active');
});
