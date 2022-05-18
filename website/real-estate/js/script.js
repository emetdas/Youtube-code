let icon = document.querySelector('.mobile_menu_icon');
let icon_toggle = document.querySelector('.mobile_menu_toggle');
let mobile_menu = document.querySelector('.nav_menu');
let section_counter = document.querySelector('.counter-container');
let counters = document.querySelectorAll('.counter .text-dark');
let sectionAll = document.querySelectorAll('section[id]');
let nav_menu_links = document.querySelectorAll('.nav_links li a');
let scroll_btn = document.querySelector('.scroll-btn');
let year = document.querySelector('.year');
// Mobile Navigation-start
icon.addEventListener('click', () => {
  icon_toggle.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    document.querySelector('header').classList.add('sticky');
  } else {
    document.querySelector('header').classList.remove('sticky');
  }
});
// Mobile Navigation-end
// active nav link-start
window.addEventListener('scroll', () => {
  let current = '';
  sectionAll.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }

  });
  nav_menu_links.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  })
});
// active nav link-end
// Counter-start
let Observer = new IntersectionObserver((entries, observe) => {
  let [entry] = entries;
  if (!entry.isIntersecting) return;
  const speed = 200;
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.trunc(target / speed);
      if (count < target && target > 0) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    }
    updateCount();
  })
}, {
  root: null,
  threshold: window.innerWidth > 768 ? 0.4 : 0.3
});
Observer.observe(section_counter);
// Counter-end
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scroll_btn.classList.add('active');
  } else {
    scroll_btn.classList.remove('active');
  }
});
scroll_btn.addEventListener('click', () => {
  document.documentElement.scrollIntoView({
    behavior: 'smooth'
  });
});
let year_Date = new Date().getFullYear();
year.innerText = `${year_Date}`;