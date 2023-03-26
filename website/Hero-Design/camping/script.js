let toogle_btn = document.querySelector('.menu_toggle_btn');
let toogle_icon = document.querySelector('.menu_toggle_btn ion-icon');
let nav_menu = document.querySelector('.nav_menu');
toogle_btn.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_menu.classList.contains('active')
    ? toogle_icon.setAttribute('name', 'close-outline')
    : toogle_icon.setAttribute('name', 'grid-outline');
});
