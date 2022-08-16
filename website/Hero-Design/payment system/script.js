let nav_menu = document.querySelector('.nav_menu_main');
let nav_menu_toggle = document.querySelector('.nav_menu_toggle');
let nav_menu_toggle_icon = document.querySelector('.menu_toggle_icon');

nav_menu_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_menu_toggle_icon.setAttribute('name', nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline');
});

// Animation

let sr = ScrollReveal({
  distance: '50px',
  delay: 400,
  duration: 2500
});

sr.reveal('.logo', {
  origin: 'bottom'
});
sr.reveal('.nav_menu', {
  origin: 'top'
});

sr.reveal('.nav_list', {
  interval: 200,
  origin: 'top',
  mobile: false
});

sr.reveal('.heading', {
  origin: 'bottom'
});
sr.reveal('.hero-content .paragraph', {
  origin: 'bottom',
  delay: 600
});
sr.reveal('.btns', {
  origin: 'bottom',
  delay: 700
});
sr.reveal('.hero-image img', {
  origin: 'top',
  delay: 700
});
sr.reveal('.features-item', {
  interval: 200,
  origin: 'top'
});