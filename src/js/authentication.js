/* eslint-disable no-undef */
import axios from 'axios';

const buttom = document.querySelector('#send-request');

const auth = async () => {
  try {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const url = 'https://reqres.in/api/login';
    const usersList = '/lista-usuarios.html';

    await axios.post(url, {
      email: email.value,
      password: password.value,
    }).then((res) => {
      if (res.status === 200) {
        window.location.href = usersList;
        localStorage.setItem('token', res.data.token);
      } else {
        console.log('Falha na autenticação');
      }

      return res.data;
    }).catch((err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
};

buttom.addEventListener('click', (e) => {
  e.preventDefault();
  auth();
});
