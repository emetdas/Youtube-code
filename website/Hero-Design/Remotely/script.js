let menu_icon_toggle = document.querySelector('.mobile_menu_toggle');
let nav_menu = document.querySelector('.nav_menu');
menu_icon_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active_menu');
});