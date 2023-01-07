# icon

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

## starter css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --container: 144rem;
  --m-auto: 0 auto;
  --text-primary: #212b36;
  --text-secondary: #637381;
  --star: #ffa645;
}

html {
  font-size: 62.5%;
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
}

.container {
  max-width: var(--container);
  margin: var(--m-auto);
  padding: 0 1rem;
}
```
