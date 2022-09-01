const formEl = document.querySelector('.login-form');
const btnSubmitEl = document.querySelector('button');

formEl.addEventListener('submit', (event) => {
    const { elements: { email, password } } = event.target;

    event.preventDefault();
    const userData = {
        [email.name]: email.value,
        [password.name]: password.value
    }

    if (email.value.length === 0 || password.value.length === 0) {
        alert('Всі поля повинні бути заповнені!')
        return
    } 
     
      console.log(userData);

    event.currentTarget.reset();
})