let menu_toggle = document.querySelector('.menu_toggle'),
  menu_toggle_icon = menu_toggle.querySelector('.menu_toggle_icon'),
  nav_menu = document.querySelector('.nav_menu'),
  nav_list = document.querySelectorAll('.nav_list');

menu_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('nav_active');

  if (nav_menu.classList.contains('nav_active')) {
    menu_toggle_icon.setAttribute('name', 'close-outline');

    // navigation-outside-click
    document.onclick = function (e) {
      let tar = e.target.classList;
      if (
        !tar.contains('nav_menu') &&
        !tar.contains('header') &&
        !tar.contains('menu_toggle_icon')
      ) {
        nav_menu.classList.remove('nav_active');
        menu_toggle_icon.setAttribute('name', 'menu-outline');
        nav_list.forEach((list) => {
          list.classList.remove('nav_list_active');
        });
      }
    };
    // navigation-outside-click

    // link-transition
    nav_list.forEach((list, index) => {
      setTimeout(() => {
        list.classList.add('nav_list_active');
      }, (index + 1) * 200);
    });
    // link-transition
  } else {
    menu_toggle_icon.setAttribute('name', 'menu-outline');
    nav_list.forEach((list) => {
      list.classList.remove('nav_list_active');
    });
  }
});

let sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal('.logo', { origin: 'top', distance: '40px' });
sr.reveal('.menu_toggle', { origin: 'top', distance: '40px' });

nav_list.forEach((list, index) => {
  sr.reveal(list, {
    origin: 'top',
    mobile: false,
    distance: '40px',
    delay: 250 * index,
  });
});

sr.reveal('.hero-container .heading', {
  origin: 'top',

  delay: 200,
});
sr.reveal('.hero-container .paragraph', {
  origin: 'top',

  delay: 250,
});
sr.reveal('.hero-container .btns', {
  origin: 'bottom',

  delay: 300,
});
