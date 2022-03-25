var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      $tab[i].classList.remove('active');
      event.target.classList.add('active');
    }
  }
  var dataView = event.target.getAttribute('data-view');

  for (var ind = 0; ind < $view.length; ind++) {
    if ($view[ind].getAttribute('data-view') === dataView) {
      $view[ind].classList.remove('hidden');
    } else {
      $view[ind].classList.add('hidden');
    }
  }
}

$tabContainer.addEventListener('click', handleClick);
