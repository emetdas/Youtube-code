let links = document.querySelectorAll('.list .link');
let sections = document.querySelectorAll('section[id]');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let href = link.getAttribute('href');
    document.querySelector(`${href}`).scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    const sectionId = section.getAttribute('id');
    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      document
        .querySelector(`.list a[href*="${sectionId}"]`)
        .parentElement.classList.add('active');
    } else {
      document
        .querySelector(`.list a[href*="${sectionId}"]`)
        .parentElement.classList.remove('active');
    }
  });
});
