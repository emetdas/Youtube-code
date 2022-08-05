let menu = document.querySelector('.nav_menu');
let nav_menu_toggle = document.querySelector('.nav_menu_toggle');
let nav_menu_toggle_icon = document.querySelector('.nav_menu_toggle ion-icon');

nav_menu_toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav_menu_toggle_icon.setAttribute('name', menu.classList.contains('active') ? 'close-outline' : 'menu-outline');
});