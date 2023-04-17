# HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fly</title>
    <link rel="shortcut icon" href="images/favicon.svg" type="image/x-icon" />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- Home-start -->
    <!-- Navigation-start -->
    <!-- Navigation-end -->
    <!-- Home-content-start -->
    <!-- Home-content-end -->
    <!-- Home-end -->
    <script src="script.js"></script>
  </body>
</html>
```

## CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  outline: none;
}

:root {
  --white: #fff;
  --dark: #151828;
  --accent: #3056d3;
  --heading: #2e2e2e;
  --paragraph: #676767;
  --bg-before: #f8f8f8;
  --btn-bg: rgba(48, 86, 211, 0.102);
  --btn-shadow: 0px 0.6rem 2.2rem rgba(0, 0, 0, 0.1);
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 142rem;
  padding: 0 1rem;
  margin: 0 auto;
}
```
