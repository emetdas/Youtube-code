## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pricing Table</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body></body>
</html>
```

## CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

:root {
  --container: 142rem;
  --primary: #3056d3;
  --text-dark: #212b36;
  --light-dark: #637381;
  --box-shadow: 0 3.9rem 2.3rem -2.7rem rgba(0, 0, 0, 0.04);
  --box-border: rgba(48, 86, 211, 0.09);
  --btn-border: #d4deff;
  --devider: 0.1rem solid #f2f2f2;
  --transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
  text-rendering: optimizeLegibility;
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 2rem;
}
```
