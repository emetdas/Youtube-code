# Portfolio Filter | HTML5 CSS3 Javascript

![project-filter](project-filter.png)

[Watch on youtube]()
# Code Snippet

----------
## HTML5
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project Filter</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div class="filter-menu">
        <li class="filter-btn active" data-project="all">All</li>
        <li class="filter-btn" data-project="web">Web</li>
        <li class="filter-btn" data-project="app">App</li>
        <li class="filter-btn" data-project="software">Software</li>
        <li class="filter-btn" data-project="game">Game</li>
      </div>
      <div class="filter-project-items">
        <div class="filter-project-item" data-project="web">
          <img src="image/website-01.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="web">
          <img src="image/website-02.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="app">
          <img src="image/app-01.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="software">
          <img src="image/software-01.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="web">
          <img src="image/website-03.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="game">
          <img src="image/game-01.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="software">
          <img src="image/software-02.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="app">
          <img src="image/app-02.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="game">
          <img src="image/game-02.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="software">
          <img src="image/software-03.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="game">
          <img src="image/game-03.png" alt="Project" />
        </div>
        <div class="filter-project-item" data-project="app">
          <img src="image/app-03.png" alt="Project" />
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
## CSS3
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  list-style-type: none;
  text-decoration: none;
}
:root {
  --container: 112rem;
  --m-auto: 0 auto;
  --white: #fff;
  --white-light: rgb(243, 243, 243);
  --black: #333;
  --primary: #7d6be8;
  --dark-light: #f1f1f1;
}
html {
  font-family: 'Roboto', sans-serif;
  font-size: 62.5%;
  scroll-behavior: smooth;
}
body {
  font-size: 1.6rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 0;
}
.container {
  max-width: var(--container);
  margin: var(--m-auto);
  padding: 0 1rem;
}
.filter-project-items {
  padding: 1rem 0 3rem 0;
}
.filter-project-items::after {
  content: '';
  display: block;
  clear: both;
}
.filter-menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  text-align: center;
}
.filter-btn {
  padding: 0.8rem 4rem;
  background: var(--white-light);
  color: var(--primary);
  display: inline-block;
  cursor: pointer;
  transition: all 0.5s ease;
}
.filter-btn.active {
  background: var(--primary);
  color: var(--white);
  border-radius: 0.2rem;
  transition: all 0.5s ease;
}
.filter-project-item {
  width: 50%;
  float: left;
  height: 30rem;
  text-align: center;
  background: var(--dark-light);
  outline: 0.5rem solid var(--white);
}
.filter-project-item img {
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  -webkit-aspect-ratio: 1/1;
  object-fit: contain;
}
.filter-project-item.show {
  width: 50%;
  height: 30rem;
  padding: 1rem;
  transition-delay: 0.5s;
  backface-visibility: visible;
  visibility: visible;
}
.filter-project-item.hide {
  width: 0%;
  height: 0;
  padding: 0;
  backface-visibility: hidden;
  visibility: hidden;
}
@media (min-width: 900px) {
  .filter-project-item {
    width: calc(100% / 3);
  }
  .filter-project-item.show {
    width: calc(100% / 3);
  }
}
@media (max-width: 605px) {
  .filter-menu {
    gap: 0.5rem;
  }
  .filter-btn {
    flex: calc(50% - 1rem);
  }
}
@media (max-width: 500px) {
  .filter-project-item {
    width: 100%;
  }
  .filter-project-item.show {
    width: 100%;
  }
}
```
## Javascript
```javascript
let filter_btns = document.querySelectorAll('.filter-btn');
let projects = document.querySelectorAll('.filter-project-item');

filter_btns.forEach((filter_btn) => {
  filter_btn.addEventListener('click', () => {
    filter_btns.forEach((filter_btn) => {
      filter_btn.classList.remove('active');
    });
    filter_btn.classList.add('active');
    let selected = filter_btn.getAttribute('data-project');
    projects.forEach((project, index) => {
      let project_length = projects.length;
      if (
        project.getAttribute('data-project') === selected ||
        selected === 'all'
      ) {
        if (project.style.transition) {
          project.style.transition = '';
        } else {
          project.style.transition = `width 0.5s ease ${
            index / project_length + 0.6
          }s,height 0.5s ease ${index / project_length + 0.6}s`;
        }
        project.classList.add('show');
        project.classList.remove('hide');
      } else {
        project.style.transition = `width 0.5s ease ${
          index / project_length + 0.6
        }s,height 0.5s ease ${index / project_length + 0.6}s`;
        project.classList.remove('show');
        project.classList.add('hide');
      }
    });
  });
});
```