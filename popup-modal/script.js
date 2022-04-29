let btn_open = document.querySelector('.btn-open-modal');
let btn_close = document.querySelector('.btn-close');
let modal_container = document.querySelector('.modal-container');

btn_open.addEventListener('click', () => {
  modal_container.classList.add('active');
});
btn_close.addEventListener('click', () => {
  modal_container.classList.remove('active');
});
modal_container.addEventListener('click', (e) => {
  if (e.target.closest("modal-inner")) {
    modal_container.classList.add('active');
  } else {
    e.target.classList.remove('active')
  }
})