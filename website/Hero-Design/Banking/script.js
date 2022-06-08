let menu_toggle_icon = document.querySelector('.mobile_menu_toggle');
let nav_menu = document.querySelector('.nav_menu');
menu_toggle_icon.addEventListener('click', () => {
  nav_menu.classList.toggle('active_menu');
});