```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animated | Ecommerce Shop</title>
    <link rel="shortcut icon" href="images/favicon.svg" type="image/x-icon" />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
```

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;800&family=Yellowtail&display=swap');
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
  --container: 142rem;
  --m-auto: 0 auto;
  --white: #fff;
  --primary: #68a47f;
  --secondary: #efd372;
  --text-dark: #274c5b;
  --gray: gray;
  --transition: all 0.5s cubic-bezier(0.23, 0.63, 0.36, 1);
  --popup-bg: rgb(23, 8, 72);
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
}
::-webkit-scrollbar {
  width: 0;
}
.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 2rem;
}

.subheading {
  font-family: 'Yellowtail', cursive;
  color: var(--primary);
  font-size: 3rem;
}

.heading {
  color: var(--text-dark);
  font-size: 4rem;
  font-weight: 800;
}

.btn-primary {
  padding: 0.9rem 2rem;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: var(--secondary);
  color: var(--text-dark);
  transition: var(--transition);
}

.btn-primary:hover {
  background: var(--text-dark);
  color: var(--secondary);
}

.btn-primary ion-icon {
  font-size: 2.4rem;
}
```

```javascript
const tl = gsap.timeline({ default: { ease: 'power1.Out' } });
```
