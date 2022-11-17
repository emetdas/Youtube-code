document.addEventListener('DOMContentLoaded', function() {
    let menu_toggle = document.querySelector('.mobile_menu_toggle'),
        menu_toggle_icon = document.querySelector('.menu_toggle_icon'),
        nav_menu = document.querySelector('.nav_menu');
    menu_toggle.addEventListener('click', () => {
        nav_menu.classList.toggle('active');
        nav_menu.classList.contains('active') ?
            menu_toggle_icon.setAttribute('name', 'close-outline') :
            menu_toggle_icon.setAttribute('name', 'menu-outline');
    });
});