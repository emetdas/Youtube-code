## Content

> Home <br>
> Campaigns<br>
> Flows<br>
> Forms<br>

> Audience

- Audience 1
- Audience 2
- Audience 3

> Content

- Design
- Development
- Cloud

> Analytics

- Day
- Month
- Yeary

> Chats

> Settings

- Ketan’s Studio
- koriigami@gmail.com

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Side Bar</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <script src="script.js"></script>
  </body>
</html>
```

## CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  outline: none;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 0;
}

body {
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
  background: url('images/bg.png') no-repeat center/cover;
  height: 100vh;
  --bg: #fff;
  --text: #475569;
  --active-link: #edeef3;
  --divider: 0.1rem solid #d9d9da;
  --profile-text-1: #000;
  --profile-text-2: #8a8b8c;
  --dropdown-bg: rgb(245, 245, 245);
}

body.dark {
  --bg: #1a2037;
  --text: #ededed;
  --active-link: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ), #1a2037;
  --divider: 0.1rem solid #d9d9da;
  --profile-text-1: #e0e0e0;
  --profile-text-2: #bfbfbf;
  --dropdown-bg: rgb(31, 44, 76);
}

.container {
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
}
```

## Light & Dark Mode | Javascript

```javascript
const body = document.body;

function enableDarkMode() {
  body.classList.add('dark');
}

function enableLightMode() {
  body.classList.remove('dark');
}

function toggleColorMode() {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  if (prefersDarkMode) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

toggleColorMode(); // Initial call to set the color mode based on system theme

// Listen for changes in system theme preference
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', toggleColorMode);
```
