let nav_menu = document.querySelector('.nav_menu');
let nav_toggle = document.querySelector('.mobile_toggle');
let toggle_icon = nav_toggle.querySelector('img');

nav_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_menu.classList.contains('active')
    ? toggle_icon.setAttribute('src', 'images/menu-close.svg')
    : toggle_icon.setAttribute('src', 'images/menu-open.svg');
});
