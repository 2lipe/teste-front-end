/* eslint-disable */
import axios from 'axios';

export default class Authentication {
  constructor() {
    this.form = document.querySelector('#request-form');
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.auth();
    });
  }

  async auth() {
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
          this.createError('Falha na autenticação');
        }

        return res.data;
      }).catch((err) => {
        if (err) {
          this.createError('Usuário ou senha inválidos');
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  createError(msg) {
    const p = document.querySelector('.error-msg');
    p.innerHTML = msg;
  }
}
