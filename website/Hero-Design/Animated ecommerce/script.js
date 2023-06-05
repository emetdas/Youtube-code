const tl = gsap.timeline({ default: { ease: 'power1.Out' } });

tl.to('.popup-bg', {
  y: 0,
  height: '100%',
  duration: 1.5,
  dealy: 0.5,
  stagger: 0.25,
})
  .to('.text-area', {
    opacity: 1,
    duration: 1.5,
  })
  .to('.hide', {
    opacity: 1,
    duration: 1,
  })
  .to('.text', {
    transform: 'translateY(0)',
    duration: 1,
    dealy: 0.2,
    stagger: 0.5,
  })
  .to('.text', {
    transform: 'translateY(100%)',
    duration: 1,
    dealy: 0.2,
    stagger: 0.5,
  })
  .to('.hide', {
    opacity: 0,
    duration: 1,
  })
  .to('.text-area', {
    opacity: 0,
    duration: 0.3,
  })
  .to('.popup-bg', {
    y: 0,
    height: '0%',
    duration: 1.5,
    dealy: 0.5,
    stagger: 0.25,
  })
  .to('header', {
    y: 0,
    duration: 1,
  })
  .to(
    '.hero-container',
    {
      y: '7rem',
      duration: 3,
      ease: Elastic.easeOut.config(1, 3),
      clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0)',
    },
    '-=1'
  );
tl.play();

let nav_menu = document.querySelector('.nav_menu'),
  menu_toggle = document.querySelector('.menu_toggle');

menu_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_menu.classList.contains('active')
    ? menu_toggle.setAttribute('name', 'close-outline')
    : menu_toggle.setAttribute('name', 'menu-outline');
});
