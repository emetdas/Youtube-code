let loader = document.querySelector('.loader');
setTimeout(() => {
  loader.classList.add('active');
}, 1000);

let heading = document.querySelector('.heading');
let year = document.querySelector('.year');
let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minutes');
let second = document.querySelector('.second');

let currentYear = new Date().getFullYear();
let newYearTime = new Date(`january 01 ${currentYear + 1} 00:00:00`);
heading.innerText = `New Year: ${currentYear + 1}`;
function updateCounter() {
  let currentTime = new Date();
  let diff = newYearTime - currentTime;
  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor((diff / 1000 / 60 / 60) % 24);
  let m = Math.floor((diff / 1000 / 60) % 60);
  let s = Math.floor((diff / 1000) % 60);
  day.innerText = d;
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
}

setInterval(updateCounter, 1000);
