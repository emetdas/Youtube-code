# New Year Countdown Timer | Javascript Project

![thumbnail](thumbnail.png)

[▶ video link](https://youtu.be/h6r-40Zl2vs)

----------

# Code Snippets

## HTML5
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Year Countdown Timer</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="loader">
        <div class="loader-icon"></div>
    </div>
    <div class="container">
      <h1 class="heading">New Year</h1>
      <div class="timer-box">
        <div class="box">
          <h2 class="day">00</h2>
          <span>Day</span>
        </div>
        <div class="box">
          <h2 class="hour">00</h2>
          <span>Hours</span>
        </div>
        <div class="box">
          <h2 class="minutes">00</h2>
          <span>Minutes</span>
        </div>
        <div class="box">
          <h2 class="second">00</h2>
          <span>Seconds</span>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
## CSS3
```css
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;800&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Rubik', sans-serif;
}
.loader {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader.active {
  opacity: 0;
  visibility: hidden;
  display: none;
  transition: all 0.5s ease-in-out;
}
.loader-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border-bottom: 0.3rem solid rgb(96, 94, 243);
  border-top: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-right: 0.3rem solid transparent;
  animation: loader 0.5s linear infinite;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(350deg);
  }
}
.container {
  padding: 2rem;
  width: 100%;
  height: 100vh;
  background: rgb(96, 94, 243);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
}
.heading {
  font-size: 4rem;
}
.timer-box {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
}
.timer-box .box {
  text-align: center;
  background: #5d19fc;
  padding: 1rem;
  border-radius: 0.24rem;
}
.timer-box h2 {
  font-size: 3rem;
  text-shadow: 0 0 0.1rem rgb(247, 247, 247);
}
.timer-box span {
  font-size: 2.3rem;
  font-weight: bold;
}

@media (max-width: 470px) {
  .heading {
    font-size: 2.4rem;
    margin-top: 4rem;
  }
  .container {
    height: 100%;
    padding-bottom: 2rem;
  }
  .timer-box {
    flex-direction: column;
  }
}
@media (max-width: 820px) {
  .container {
    width: 100%;
    height: 100%;
  }
}
```
## Javascript
```javascript
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
```