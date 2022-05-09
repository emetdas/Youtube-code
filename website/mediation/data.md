## Reset
```css
@import url('https://fonts.googleapis.com/css2?family=Ramaraja&family=Roboto:wght@400;500;700&display=swap');
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}

:root {
  --primary: #824FF1;
  --logo: #0A1B32;
  --text-dark: #1B0A42;
  --text-light: #9A9A9A;
  --white: #ffffff;
  --container: 122rem;
  --nav-height: 7rem;
}

html {
  font-size: 62.5%;
  font-family: 'Roboto', sans-serif;
}

body {
  font-size: 1.6rem;
}

::-webkit-scrollbar {
  width: 1.2rem;
}

 ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

 ::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 1.2rem;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 1rem;
}
```