## Css Reset
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}

:root {
  --primary: #8a3ffc;
  --primary-border: rgba(138, 63, 252, 0.2);
  --white: #fff;
  --black: #0e0b3d;
  --container: 120rem;
  --nav-height: 6rem;
}
.container {
  max-width: var(--container);
  width: calc(100% - 2rem);
  padding: 0 1rem;
  margin: 0 auto;
}
html {
  font-size: 62.5%;
}
body {
  font-family: 'Outfit', sans-serif;
}
```