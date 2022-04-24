let theme_toggle = document.querySelector('.theme_toggle');
let theme_icon = document.querySelector('.theme_icon');
let theme__icon = document.querySelector('.theme__icon');
let theme_name = document.querySelector('.theme_name');

theme_toggle.addEventListener('click', () => {
  theme_icon.classList.toggle('active');
  if (theme_icon.classList.contains('active')) {
    theme__icon.setAttribute('name', 'moon-outline');
    theme_name.innerText = 'Night';
    theme_toggle.classList.add('night');
    theme_icon.classList.remove('day');
  } else {
    theme__icon.setAttribute('name', 'sunny-outline');
    theme_name.innerText = 'Day';
    theme_icon.classList.add('day');
    theme_toggle.classList.remove('night');
  }
});
