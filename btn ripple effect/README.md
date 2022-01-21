# Button Ripple effect (Html css & javascript)

![btn-ripple-effect](Btn-Ripple-effect.png)

[▶ video-link](https://youtu.be/aWcpnJsCQck)

# Code snippets

## HTML5 & Javascript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Btn Ripple effect</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <button class="btn">Click Me</button>
    </div>
    <script>
      let btn = document.querySelector('.btn');
      btn.addEventListener('click', function (e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        const Ripple = document.createElement('span');
        Ripple.classList.add('ripple');
        Ripple.style.left = x + 'px';
        Ripple.style.top = y + 'px';
        btn.appendChild(Ripple);
        setTimeout(() => Ripple.remove(), 1000);
      });
    </script>
  </body>
</html>
```
## CSS3
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  background: #131d41;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
.btn {
  font-size: 1.6rem;
  padding: 0.7rem 2.4rem;
  outline: none;
  border: none;
  border-radius: 2rem;
  color: #fff;
  font-weight: 600;
  background-image: linear-gradient(83deg, #8a78ec 50%, #526ed6);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.ripple{
  position: absolute;
  background: rgb(255, 255, 255);
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: rippleEffect 1s linear infinite;
}
@keyframes rippleEffect {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  100% {
    width: 20rem;
    height: 20rem;
    opacity: 0;
  }
}
```