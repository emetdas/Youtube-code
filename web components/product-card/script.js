let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

const end = new Date('May 13,2022 12:00:00').getTime();

function time() {
  requestAnimationFrame(time);
  const current = new Date().getTime();
  const remaining = end - current;
  const s = 1000,
    m = s * 60,
    h = m * 60,
    d = h * 60;
  let totalDay = Math.floor(remaining / d);
  let totalHour = Math.floor((remaining % d) / h);
  let totalMin = Math.floor((remaining % h) / m);
  let totalSec = Math.floor((remaining % m) / s);
  days.innerText = `${totalDay < 10 ? '0' + totalDay : totalDay} D`;
  hours.innerText = `${totalHour < 10 ? '0' + totalHour : totalHour} H`;
  minutes.innerText = `${totalMin < 10 ? '0' + totalMin : totalMin} M`;
  seconds.innerText = `${totalSec < 10 ? '0' + totalSec : totalSec} S`;

  if (remaining < 0) {
    document.querySelector('.offer-time-container').innerHTML = `<span class="time-expire">Time is Expire</span>`;
    cancelAnimationFrame(time);
  }
}
time();