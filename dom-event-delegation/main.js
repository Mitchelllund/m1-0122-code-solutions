function handleClick(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.matches('button')) {
    var closestElement = event.target.closest('.task-list-item');
    console.log('Closest: ', closestElement);
    closestElement.remove();
  }
}

var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);
