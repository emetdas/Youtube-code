# HTML Starter

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Camping</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
    <script src="script.js"></script>
  </body>
</html>
```

# CSS Starter

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
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
  --primary: #f4f0ea;
  --btn: #ff6524;
  --tooltip: #ea3223;
  --text-dark: #000;
  --text-light: #7d7d7d;
  --border: rgba(196, 196, 196, 0.4);
}

@font-face {
  font-family: 'Gilroy-Heavy';
  font-style: normal;
  font-weight: normal;
  src: local('Gilroy-Heavy'), url('webfont/Gilroy-Heavy.woff') format('woff');
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
}

.container {
  max-width: var(--container);
  margin: var(--m-auto);
}
```
