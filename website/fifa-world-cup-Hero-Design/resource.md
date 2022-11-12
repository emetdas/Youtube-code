```html
https://world-cup-matches.codsfli.com/

<script
  type="module"
  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
></script>
```

# Starter Css

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}

:root {
  --container: 144rem;
  --m-auto: 0 auto;
  --white: #fff;
  --primary: #8a1538;
  --secondary: #eeeee4;
  --gr-1: rgba(138, 21, 56, 0.607);
  --gr-2: rgba(138, 21, 56, 0.665);
  --nav: rgba(225, 225, 225, 0.045);
  --mobile-nav: #7d3e59;
  --count-down-bg: rgba(238, 235, 235, 0.295);
  --timer-before-bg: rgb(218, 201, 109);
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  font-family: 'Poppins', sans-serif;
}

::-webkit-scrollbar {
  width: 0;
}

body {
  font-size: 1.6rem;
}

.container {
  max-width: var(--container);
  padding: 0 2rem;
  margin: var(--m-auto);
}
```
