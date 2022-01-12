let theme_switcher = document.querySelector('.theme-switcher');
let theme = localStorage.getItem('theme');
let icon = localStorage.getItem('icon');
setTheme(theme, icon);
theme_switcher.addEventListener('click', () => {
  if (theme_switcher.getAttribute('name') == 'sunny-outline') {
    setTheme('dark', 'moon-outline');
    theme_switcher.setAttribute('name', 'moon-outline');
  } else {
    setTheme('light', 'sunny-outline');
    theme_switcher.setAttribute('name', 'sunny-outline');
  }
});

function setTheme(theme, icon) {
  document.documentElement.className = theme;
  theme_switcher.setAttribute('name', icon);
  localStorage.setItem('theme', theme);
  localStorage.setItem('icon', icon);
  if (
    (theme_switcher.getAttribute('name') == '' && theme == '') ||
    (theme == null && icon == null) ||
    (theme == 'null' && icon == 'null')
  ) {
    theme_switcher.setAttribute('name', 'sunny-outline');
  }
}
