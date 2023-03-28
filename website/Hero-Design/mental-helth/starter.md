# HTML Starter

## icon

```html
<ion-icon name="options-outline"></ion-icon>

<ion-icon name="close-outline"></ion-icon>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Deep Mind</title>
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
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
    <script src="script.js"></script>
  </body>
</html>
```

# CSS Starter

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  outline: none;
}

:root {
  --container: 144rem;
  --m-auto: 0 auto;
  --bg: linear-gradient(90deg, #fff7eb 7.8%, rgba(255, 247, 235, 0) 74.23%);
  --nav-bg: #fff7eb;
  --dark: #000;
  --light: #fff;
  --btn: #ff6524;
  --btn-shadow: 0px 20px 45px rgba(255, 101, 36, 0.2);
  --border: rgba(0, 0, 0, 0.09);
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: var(--container);
  margin: var(--m-auto);
  padding: 0 2rem;
}

.heading {
  font-size: clamp(2.8rem, 5vw, 5.5rem);
  line-height: clamp(4.2rem, 6vw, 7rem);
  color: var(--dark);
  padding: 3rem 0;
}
```
