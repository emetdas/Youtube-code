## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mountains</title>
    <link rel="shortcut icon" href="assets/logo.svg" type="image/x-icon" />
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
    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
```

## CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}

:root {
  --container: 142rem;
  --white: #fff;
  --text-dark: #050f36;
  --icon-bg: linear-gradient(90deg, #f857a6 0%, #ff5858 100%);
  --navigation-bg: rgb(20, 11, 60);
  --transition: all 0.5s ease-in-out;
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
```
