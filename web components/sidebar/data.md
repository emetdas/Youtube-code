``` content

Teams.co

Aman
Product Designer


Dashboard
Teams
Payments
Attendance
Settings

Create Teams
Increase your speed with more members

```

<!-- reset -->
```scss
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*,
*:before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}
html {
  scroll-behavior: smooth;
}
body {
  background: $bg;
  font-family: 'Poppins', sans-serif;
}
```
<!-- reset -->
```scss
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*,
*:before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}
html {
  scroll-behavior: smooth;
}
body {
  background: $bg;
  font-family: 'Poppins', sans-serif;
}
```
<!-- variables & Mixins -->
```scss
$white: #fff;
$white-40: rgba(255, 255, 255, 0.4);
$bg: #28283f;
$sidebar-bg: #2e2e48;
$sidebar-active-bg: rgba(23, 23, 37, 0.8);
$border: #7e73ff;
$transition: all 0.5s ease-in-out;

@mixin link-active {
  filter: drop-shadow(0px 4.01974px 34.1678px rgba(0, 0, 0, 0.28));
}
@mixin account-bg {
  background: linear-gradient(
    230.04deg,
    #483fbd 2.11%,
    rgba(46, 46, 72, 0) 102.63%
  );
  filter: drop-shadow(0rem 0.4rem 3.3rem rgba(0, 0, 0, 0.25));
}
```