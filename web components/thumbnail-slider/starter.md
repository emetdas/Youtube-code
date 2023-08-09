## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nike</title>
    <!-- Link Swiper's CSS -->
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
    />

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
    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
```

## CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-decoration: none;
}

:root {
  --primary-text: #394452;
  --btn-bg: #5d63ff;
  --overlay: rgba(16, 4, 25, 0.299);
  --modal-bg: rgba(238, 236, 243, 0.962);
  --white: #fff;
  --transition: all 1s ease;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
}

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
}
```
