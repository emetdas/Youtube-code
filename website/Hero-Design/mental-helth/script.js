let menu_toggle = document.querySelector('.nav_menu_toggle');
let menu_toggle_icon = document.querySelector('.nav_menu_toggle ion-icon');
let nav_menu = document.querySelector('.nav_menu');

menu_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_menu.classList.contains('active')
    ? menu_toggle_icon.setAttribute('name', 'close-outline')
    : menu_toggle_icon.setAttribute('name', 'options-outline');
});
