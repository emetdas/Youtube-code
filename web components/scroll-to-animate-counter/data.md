## Css Reset
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
:root {
  --container: 112rem;
  --m-auto: 0 auto;
  --white: #fff;
  --bg-hero: #251c5a;
  --bg-counter: #2f2371;
  --bg-item: #5d46e2;
}
html {
  font-family: 'Poppins', sans-serif;
  font-size: 62.5%;
  scroll-behavior: smooth;
}
body {
  color: var(--white);
  font-size: 1.6rem;
  box-sizing: border-box;
}
.container {
  max-width: var(--container);
  margin: var(--m-auto);
  padding: 0 1rem;
}
```