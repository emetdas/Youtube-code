let sidebar = document.querySelector('.sidebar');
let lists = document.querySelectorAll('.list');
let dropdown_lists = document.querySelectorAll('.dropdown-list');
let toggle_icon = document.querySelector('.sidebar-toggle-icon');
const body = document.body;

function enableDarkMode() {
  body.classList.add('dark');
}

function enableLightMode() {
  body.classList.remove('dark');
}

function toggleColorMode() {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  if (prefersDarkMode) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

toggleColorMode(); // Initial call to set the color mode based on system theme

// Listen for changes in system theme preference
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', toggleColorMode);

toggle_icon.addEventListener('click', () => {
  toggle_icon.classList.toggle('active');
  sidebar.classList.toggle('active');
  document
    .querySelectorAll('.dropdown')
    .forEach((dropdown) => dropdown.classList.remove('active'));
  dropdown_lists.forEach((list) => list.classList.remove('active'));
});

lists.forEach((list) => {
  list.addEventListener('click', (e) => {
    e.preventDefault();
    lists.forEach((list) => list.classList.remove('active'));
    list.classList.add('active');
    document
      .querySelectorAll('.dropdown')
      .forEach((dropdown) => dropdown.classList.remove('active'));
    dropdown_lists.forEach((list) => list.classList.remove('active'));
  });
});

dropdown_lists.forEach((dropdown_list) => {
  dropdown_list.addEventListener('click', () => {
    toggle_icon.classList.toggle('active');
    sidebar.classList.remove('active');
    lists.forEach((list) => list.classList.remove('active'));

    let dropdown = dropdown_list.querySelector('.dropdown');
    let links = dropdown_list.querySelectorAll('.dropdown .dropdown-link');
    dropdown_list.classList.toggle('active');
    dropdown.classList.toggle('active');

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.stopPropagation();
        links.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
      });
    });
  });
});
