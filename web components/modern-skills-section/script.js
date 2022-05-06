let progress = document.querySelectorAll('.progress');
let progress_text = document.querySelectorAll('.data-progress');

progress.forEach((pro) => {
  let percentage = pro.getAttribute('data-value');
  let color = pro.getAttribute('data-stroke');
  let animateTime = pro.getAttribute('data-time');
  let radius = pro.r.baseVal.value;
  let circumference = radius * 2 * Math.PI;
  let stroke = circumference - (circumference * percentage) / 100;
  pro.style.setProperty('--stroke-dashoffset', stroke);
  pro.style.setProperty('--stroke-dasharray', circumference);
  pro.style.setProperty('--stroke', color);
  pro.style.setProperty('--animation-time', `${animateTime * 100}ms`);
})

progress_text.forEach((text) => {
  let data = text.getAttribute('data-value');
  let progress_value = 0;
  let progress_bar = setInterval(() => {
    progress_value++;
    text.innerText = `${progress_value}%`;
    if (progress_value == data) {
      clearInterval(progress_bar);
    }
  }, 100);
})