window.addEventListener('DOMContentLoaded', function (e) {
  document.querySelector('header-image').onclick = handlePresentationClick;
})

function handlePresentationClick(e) {
  var header = document.querySelector('header-image.unclicked');
  var nav = document.querySelector('navigation-links.unclicked');
  var body = document.querySelector('main-body');
  header.classList.remove('unclicked');
  header.classList.add('clicked');
  nav.classList.remove('unclicked');
  nav.classList.add('clicked');
  body.classList.remove('unclicked');
  body.classList.add('clicked');
}
