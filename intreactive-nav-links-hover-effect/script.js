let marker = document.querySelector('#marker');
let nav_links = document.querySelectorAll('nav ul li a');

function indicator(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}
nav_links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    indicator(e.target);
  });
});
