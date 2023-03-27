const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = loginForm.elements;

  if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const formValue = {
      email: email.value,
      password: password.value,
    };
    console.log(formValue);
    loginForm.reset();
  }
});
