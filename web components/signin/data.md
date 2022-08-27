[Design Link](https://www.figma.com/community/file/1131080737838362198)


```html

<ion-icon name="close-circle-outline"></ion-icon>

<ion-icon name="eye-off-outline"></ion-icon>
<ion-icon name="eye-outline"></ion-icon>


email:-
 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
 title="Please Enter Valid Email Id"

password:-
 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
 title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"


<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
```

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
*,
*::before,
*::after{
 margin:0;
 padding:0;
 box-sizing:border-box;
}
html{
 font-size:62.5%;
 font-family: 'Inter', sans-serif;
}
body{
 font-size:1.6rem;
}
:root{
 --primary:#5429FF;
 --secondary:#CBCCE8;
 --text-dark:#344054;
 --text-light:#667085;
}
```