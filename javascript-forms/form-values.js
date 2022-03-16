var $contactForm = document.querySelector('#contact-form');

function bSubmit(event) {
  event.preventDefault();
  var obj = {};
  obj.name = $contactForm.name.value;
  obj.email = $contactForm.email.value;
  obj.message = $contactForm.message.value;
  console.log(obj);
  document.getElementById('contact-form').reset();
}

$contactForm.addEventListener('submit', bSubmit);
