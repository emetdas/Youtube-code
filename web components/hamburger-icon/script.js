let hamburger = document.querySelector('.mobile_hamburger');
let hamburger_line = document.querySelector('.hamburger_line');

hamburger.addEventListener('click', () => {
  hamburger_line.classList.toggle('active');
});
