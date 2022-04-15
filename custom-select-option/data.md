## ionicons
```html
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
```
## Basic Css Reset
```css
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
    list-style-type: none;
    }
    :root {
    --primary: #fe8769;
    --secondary: #f9d8d0;
    --border: #f3f3f3;
    --white: #fff;
    --black: #06033c;
    --container: 112rem;
    --m-auto: 0 auto;
    --transition: all 0.5s ease-in-out;
    }
    html {
    font-size: 62.5%;
    }
    body {
    font-size: 1.6rem;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    background: var(--primary);
    }
```
https://restcountries.com/v3.1/all