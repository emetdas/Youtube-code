## Starter HTML & CSS

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.2/d3.min.js"
  integrity="sha512-oKI0pS1ut+mxQZdqnD3w9fqArLyILRsT3Dx0B+8RVEXzEk3aNK3J3pWlaGJ8MtTs1oiwyXDAH6hG6jy1sY0YqA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

```css
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
  --black: #333;
  --gray: gray;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
}

.container {
  max-width: var(--container);
  padding: 4rem 2rem;
  margin: 0 auto;
}
```
