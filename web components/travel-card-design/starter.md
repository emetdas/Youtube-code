## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>card</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body></body>
</html>
```

## CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');
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
  --card-shadow: 0 0 8rem rgba(220, 234, 255, 0.183);
  --popup-shadow: 0 0 2rem rgba(0, 0, 0, 0.183);
  --text-dark: #080809;
  --text-light: #84829a;
  --icon-bg: #f5f5f5;
  --white: #fff;
  --progress-bg: #f5f5f5;
  --progress-fill-bg: #4475f2;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.6rem;
  text-rendering: optimizeLegibility;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(18, 3, 62);
}
```
