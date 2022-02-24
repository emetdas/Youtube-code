let mobile_icon = document.querySelector('.mobile_icon');
let mobile_icon_line = document.querySelector('.line');
let mobile_menu = document.querySelector('.nav_menu');
let marker = document.querySelector('#marker');
var nav_links = document.querySelectorAll('nav li a');

mobile_icon.addEventListener('click', () => {
  mobile_icon_line.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

function indicator(e) {
  marker.style.left = `${e.offsetLeft - 20}px`;
  marker.style.top = `${e.offsetTop - 4}px`;
  marker.style.width = `${e.offsetWidth + 40}px`;
  marker.style.height = `${e.offsetHeight + 12}px`;
}
nav_links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    nav_links.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
    indicator(e.target);
  });
});
document.addEventListener('DOMContentLoaded', init);
function init() {
  let textElement = document.querySelector('.txt-type');
  let words = JSON.parse(textElement.getAttribute('data-words'));
  let wait = parseInt(textElement.getAttribute('data-wait'));
  let txt = '';
  let wordIndex = 0;
  let isDeleting = false;
  function type() {
    const current = wordIndex % words.length;
    const fullTxt = words[current];
    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1);
    } else {
      txt = fullTxt.substring(0, txt.length + 1);
    }
    textElement.innerHTML = `${txt}`;
    let typeSpeed = 500;
    if (isDeleting) {
      typeSpeed /= 2;
    }
    if (!isDeleting && txt === fullTxt) {
      typeSpeed = wait;
      isDeleting = true;
    } else if (isDeleting && txt === '') {
      isDeleting = false;
      wordIndex++;
      typeSpeed = 500;
    }
    setTimeout(() => type(), typeSpeed);
  }
  type();
}
