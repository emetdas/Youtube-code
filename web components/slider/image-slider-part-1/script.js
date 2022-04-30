let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let slide_img = document.querySelectorAll('.slide img');

let width = slides[0].getBoundingClientRect().width;

window.addEventListener('resize', () => {
  width = slides[0].getBoundingClientRect().width;
});

let slide_length = slide_img.length;
let index = 0;

next.addEventListener('click', () => {
  if (index === slide_length - 1) {
    setTimeout(() => {
      index = 0;
      slider.style.transform = `translate(0px)`;
      slider.style.transition = 'none';
    }, 300);
  } else {
    index++;
    slider.style.transform = `translate(-${width * index}px)`;
    slider.style.transition = 'transform 0.5s ease-in-out';
  }
});
prev.addEventListener('click', () => {
  if (index === 0) {
    setTimeout(() => {
      index = slide_length - 1;
      slider.style.transition = 'none';
      slider.style.transform = `translate(-${width * index}px)`;
    }, 300);
  } else {
    index--;
    slider.style.transform = `translate(-${width * index}px)`;
    slider.style.transition = 'transform 0.5s ease-in-out';
  }
})