/* eslint-disable */
import axios from 'axios';

export default class GetUsers {
  constructor() {
    this.profiles = document.querySelector('#profile');
    this.pageNumber = document.querySelector('#footer');
  }

  init() {
    this.events();
  }

  events() {
    window.addEventListener('load', e => {
      const hasToken = localStorage.getItem('token');

      if (!hasToken) this.redirect();
      if (hasToken) this.showProfiles();
    });
  }

  async showProfiles() {
    try {
      const url = 'https://reqres.in/api/users';
  
      await axios(url).then((res) => {
        const apiResponse = res.data;
        const users = apiResponse.data;
        const numbers = apiResponse;
  
        users.forEach((user) => {
          this.profiles.innerHTML += `<div class="column">
            <div class="card">
            <div class="ico"></div>
            <img class="avatar" src="${user.avatar}" />
            <h1>${user.first_name} ${user.last_name}</h1>
            <p>${user.email}</p>
            </div>
            </div>`;
        });
  
        this.pageNumber.innerHTML = `<span>Mostrando ${numbers.per_page} de ${numbers.total}</span>`;
      }).catch((err) => {
        console.log(err);
      });
    } catch (err) {
      console.log(err);
    };
  }

  redirect() {
    this.errorMsg();
    this.redirectButton();
  }

  errorMsg() {
    const titleMsg = document.querySelector('.users-title');
    const erroMsg = 'Você precisa estar logado para acessar a lista de usuários.';
    titleMsg.innerHTML = erroMsg;
  }

  redirectButton() {
    const button = document.createElement('button');
    const page = document.querySelector('.center');
    button.innerText = 'Retornar'

    page.appendChild(button);
    button.className = 'redirect-button';

    button.addEventListener('click', () => {
      window.location.href = 'index.html';
    })
  }

}
