## Swiper CDN

```html
<!-- Link Swiper's CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
/>

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
```

## Css Starter

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --container: 112rem;
  --m-auto: 0 auto;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: var(--container);
  padding: 0 2rem;
  margin: var(--m-auto);
}
```
