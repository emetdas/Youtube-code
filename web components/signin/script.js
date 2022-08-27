let signin_form = document.querySelector('.signin_form');
let email = document.querySelector('#email');
let email_clear = document.querySelector('.email-clear');
let password = document.querySelector('#password');
let password_toggle = document.querySelector('.password-toggle');


email_clear.addEventListener('click', () => {
  email.value = '';
});

password_toggle.addEventListener('click', () => {
  if (password_toggle.getAttribute('name') === "eye-off-outline") {
    password_toggle.setAttribute('name', 'eye-outline');
    password.type = 'text';
  } else {
    password_toggle.setAttribute('name', 'eye-off-outline');
    password.type = 'password';
  }
});
signin_form.addEventListener('submit', (e) => {
  e.preventDefault();
  let form_data = {
    Email: email.value,
    Password: password.value
  }
  console.log(form_data);
  signin_form.reset();
});