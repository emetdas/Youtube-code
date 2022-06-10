## web icon
```html
<script
  type="module"
  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
></script>
```

Home
About us
How it works
Services
Contact
Join now

Work <span>Remotely</span> <br> from your home or <br> any other places

We curate the best digital jobs for those who are <br> looking to start their career in designing.

Get Started

## css reset
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
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
  --primary: rgb(0, 97, 254);
  --white: rgb(255, 255, 255);
  --text-dark: rgb(30, 37, 94);
  --text-light: rgba(30, 37, 94, 0.7);
  --input-bg: rgba(0, 97, 254, 0.1);
  --hero-img-bg: rgba(0, 97, 254, 0.06);
  --bg: rgb(247, 247, 249);
  --container: 144rem;
  --transition: all 0.5s ease-in-out;
}

html {
  font-family: 'Poppins', sans-serif;
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  font-size: 1.6rem;
  background: var(--bg);
}

::-webkit-scrollbar {
  width: 1.2rem;
}

::-webkit-scrollbar-thumb {
  background: var(--text-dark);
  border-radius: 1.2rem;
}

::-webkit-scrollbar-track {
  background: var(--btn-light);
}
```