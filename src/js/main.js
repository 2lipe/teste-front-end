/* eslint-disable no-undef */
import axios from 'axios';
import logoUppersoft from '../assets/img/logo-uppersoft.svg';

const logo = document.querySelector('.logo');

const getUsers = async () => {
  try {
    const usersProfiles = document.querySelector('#profile');
    const footerNumber = document.querySelector('#footer');
    const url = 'https://reqres.in/api/users';

    if (localStorage.getItem('token') === null) return;

    await axios(url).then((res) => {
      const apiResponse = res.data;
      const users = apiResponse.data;
      const numbers = apiResponse;

      users.forEach((user) => {
        usersProfiles.innerHTML += `<div class="column">
          <div class="card">
          <div class="ico"></div>
          <img class="avatar" src="${user.avatar}" />
          <h1>${user.first_name} ${user.last_name}</h1>
          <p>${user.email}</p>
          </div>
          </div>`;
      });

      footerNumber.innerHTML = `<span>Mostrando ${numbers.per_page} de ${numbers.total}</span>`;
    }).catch((err) => {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
};

function insertLogo() {
  const img = new Image();
  img.src = logoUppersoft;
  return img;
}
logo.appendChild(insertLogo());

window.addEventListener('load', () => {
  getUsers();
});
