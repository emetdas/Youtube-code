## Web Font
```html
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
```
## reset
```css
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --container: 120rem;
  --m-auto: 0 auto;
  --white: #fff;
  --bg: rgb(238, 238, 241);
  --arrow-bg: rgb(254, 254, 254);
  --dot:rgb(231, 225, 225);
  --dot-active:rgb(135, 89, 214);
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  font-size: 1.6rem;
}
```