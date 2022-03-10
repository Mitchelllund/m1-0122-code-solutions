var numTimesClicked = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');

function buttonClick(event) {
  numTimesClicked++;
  $clickcount.textContent = 'Clicks: ' + numTimesClicked;
  if (numTimesClicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numTimesClicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numTimesClicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numTimesClicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numTimesClicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', buttonClick);
