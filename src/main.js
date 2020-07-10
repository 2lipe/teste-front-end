/* eslint-disable no-undef */
const usersProfiles = document.getElementById('profile');
const url = 'https://reqres.in/api/users';

const getUsers = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.status);
    }
    const profile = await res.json();
    return profile;
  } catch (error) {
    return error;
  }
};

function showUsers(users) {
  let output = '';

  users.forEach((user) => {
    output += `<div class="column">
    <div class="card">
    <img class="ico" src="./assets/icon-edit.svg" />
    <img class="avatar" src="${user.avatar}" />
    <h1>${user.first_name} ${user.last_name}</h1>
    <p>${user.email}</p>
    </div>
    </div>`;
  });

  usersProfiles.innerHTML = output;
}

window.addEventListener('load', () => {
  getUsers().then((res) => showUsers(res.data));
});
