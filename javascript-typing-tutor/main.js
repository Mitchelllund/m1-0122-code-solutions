var $typing = document.querySelector('.typing');
var text = 'grumpy wizards make toxic brew';

var characters = text.split('').map(char => {
  var span = document.createElement('span');
  span.innerText = char;
  $typing.appendChild(span);
  return span;
});

var index = 0;
var charatcerIndex = characters[index];
charatcerIndex.classList.add('cursor');
document.addEventListener('keydown', ({ key }) => {
  if (key === charatcerIndex.innerText) {
    charatcerIndex.classList.remove('cursor');
    charatcerIndex.classList.remove('incorrect');
    charatcerIndex.classList.add('correct');
    charatcerIndex = characters[++index];
    charatcerIndex.classList.add('cursor');
  } else if (key !== charatcerIndex.innerText) {
    charatcerIndex.classList.add('incorrect');
  }
});
