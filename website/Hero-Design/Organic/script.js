let nav_links = document.querySelectorAll('.nav_link');
let nav_menu = document.querySelector('.nav_menu');
let hilight_dot = document.querySelector('.hilight-dot');
let mobile_menu_toggle_icon = document.querySelector('.mobile_menu_toggle_icon');
let toggle_icon = mobile_menu_toggle_icon.querySelector('ion-icon');

mobile_menu_toggle_icon.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  if (nav_menu.classList.contains('acitve')) {
    toggle_icon.setAttribute('name', 'close-outline');
  } else {
    toggle_icon.setAttribute('name', 'menu-outline');

  }
});

// Active Link
let hilight = nav_links[0].getBoundingClientRect();
let menu_rect = nav_menu.getBoundingClientRect();

let coords = {
  top: hilight.top - menu_rect.top + 22,
  left: hilight.left - menu_rect.left + hilight.width / 2,
};
hilight_dot.style.transform = `translate(${coords.left}px,${coords.top}px)`;
nav_links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let dot = link.getBoundingClientRect();
    let menu_rect = nav_menu.getBoundingClientRect();
    let coords = {
      top: dot.top - menu_rect.top + 22,
      left: dot.left - menu_rect.left + dot.width / 2,
    };
    hilight_dot.style.transform = `translate(${coords.left}px,${coords.top}px)`;
  });
});
// Active Link

// Slider
const swiper = new Swiper('.swiper', {
  sliderPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
});