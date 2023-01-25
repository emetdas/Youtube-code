Nike Air Force 1'07
Nike Pegasus 39
Nike Tempo

# CSS Starter

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@600&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --container: 144rem;
  --m-auto: 0 auto;
  --white: #fff;
  --btn: rgb(102, 65, 224);
  --btn-active: rgb(67, 37, 168);
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  font-family: 'Roboto', sans-serif;
}

body {
  font-size: 1.6rem;
}

.container {
  max-width: var(--container);
  margin: var(--m-auto);
  padding: 0 2rem;
}
```
