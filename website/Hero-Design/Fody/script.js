let mobile_menu_toggle_icon = document.querySelector('.mobile_menu_icon');
let nav_menu = document.querySelector('.nav_menu');
let nav_links = document.querySelectorAll('.nav_link');
let cart_btn = document.querySelector('.cart-btn');
let header = document.querySelector('.header');


mobile_menu_toggle_icon.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  mobile_menu_toggle_icon.classList.toggle('active');
});

nav_links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    nav_links.forEach((link) => {
      link.classList.remove('active');
    });
    link.classList.add('active');
    nav_menu.classList.remove('active');
    mobile_menu_toggle_icon.classList.remove('active');
  });
});

cart_btn.addEventListener('click', () => {
  cart_btn.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});