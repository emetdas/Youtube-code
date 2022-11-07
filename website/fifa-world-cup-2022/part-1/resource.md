## Starter

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

:root {
  --bg: rgb(227, 232, 255);
  --card-bg: rgb(244, 245, 247);
  --white: #fff;
  --shadow: rgba(235, 240, 250, 0.731);
  --text-dark: rgb(5, 29, 49);
  --badge-text: #343483;
  --btn-bg: rgb(82, 84, 221);
  --scrollbar-bg: rgb(250, 248, 255);
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  font-family: 'Poppins', sans-serif;
}

body {
  font-size: 1.6rem;
  background: var(--bg);
}

::-webkit-scrollbar {
  width: 1.2rem;
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-bg);
  box-shadow: inset 0 0 0.3rem var(--bg);
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 1.2rem;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.container {
  max-width: 144rem;
  padding: 0 2rem;
  margin: 0 auto;
}
```

```javascript
<div class="match">
  <div class="match-info">
    <h4 class="group">${}</h4>
    <h4>
      Match Number<span class="badge">${}</span>{' '}
    </h4>
  </div>
  <div class="flags">
    <div class="home-flag">
      <img src="${}" alt="${}" class="flag" />
      <h3 class="home-team">${}</h3>
    </div>
    <span class="vs">VS</span>
    <div class="away-flag">
      <img src="${}" alt="${}" class="flag" />
      <h3 class="home-team">${}</h3>
    </div>
  </div>
  <div class="time-area">
    <div class="time">
      <h4 class="month">${}</h4>
      <h4 class="day">${}</h4>
      <h4 class="day">${}</h4>
    </div>
    <h4 class="match-time">${}</h4>
  </div>
</div>
```
