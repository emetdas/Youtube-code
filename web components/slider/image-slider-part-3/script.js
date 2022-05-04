let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');

// Dot
let width = slides[0].getBoundingClientRect().width;
window.addEventListener('resize', () => {
  width = slides[0].getBoundingClientRect().width;
});
let index = 0;

slider.insertAdjacentHTML('afterbegin', slides[slides.length - 1].outerHTML);
slider.insertAdjacentHTML('beforeend', slides[0].outerHTML);
slider.style.transform = `translateX(-${width}px)`;


slides.forEach(() => {
  let dot = document.createElement('li');
  dot.classList.add('dot');
  document.querySelector('.slider-controler').appendChild(dot);
})
let dots = document.querySelectorAll('.dot');
dots[0].classList.add('active');

// Refactor
function SlideMove(i) {
  if (i) {
    slider.style.transform = `translateX(-${width * (i + 1)}px)`;
  } else {
    slider.style.transform = `translateX(-${width}px)`;
  }
}

function transition(yes) {
  if (yes) {
    slider.style.transition = `transform 0.5s ease-in-out`;
  } else {
    slider.style.transition = 'none';
  }
}

function removeDot() {
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
}

function activeDot(i) {
  dots[i].classList.add('active');
}

// Sliding

next.addEventListener('click', () => {
  index++;
  transition("yes")
  SlideMove(index);
  removeDot();
  if (index > slides.length - 1) {
    setTimeout(() => {
      index = 0;
      SlideMove();
      activeDot(index);
      transition();
    }, 500);
  } else {
    activeDot(index);
  }
});

prev.addEventListener('click', () => {
  index--;
  transition("yes")
  SlideMove(index);
  removeDot();
  if (index < 0) {
    setTimeout(() => {
      index = slides.length - 1;
      SlideMove(index);
      transition()
      activeDot(index);
    }, 500);
  } else {
    activeDot(index);
  }
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    removeDot();
    index = i;
    dot.classList.add('active');
    transition("yes")
    SlideMove(index);
  });
});