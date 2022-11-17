# icon setup

```html
<script
  type="module"
  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
></script>

<ion-icon name="menu-outline"></ion-icon>

<ion-icon name="search-outline"></ion-icon>

<ion-icon name="play-outline"></ion-icon>
```

# Basic Starter

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}
:root {
  --nav-shadow: 0 0.5rem 4rem rgba(0, 0, 0, 0.05);
  --primary: rgba(117, 79, 254, 0.8);
  --secondary: #29baf9;
  --text-dark: #121212;
  --text-dark-light: #030303;
  --text-light: #2f2f2f;
  --white: #fff;
}

html {
  font-family: 'Poppins', sans-serif;
  font-size: 62.5%;
  scroll-behavior: smooth;
}
body {
  font-size: 1.6rem;
}
```
