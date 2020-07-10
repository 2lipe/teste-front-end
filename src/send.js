/* eslint-disable no-undef */
const form = document.getElementById('request-form');
const url = 'https://reqres.in/api/login';

function submitForm() {
  const formData = new FormData(form);
  const searchParams = new URLSearchParams();

  for (const pair of formData) {
    searchParams.append(pair[0], pair[1]);
  };

  fetch(url, {
    method: 'post',
    body: searchParams,
  }).then((data) => {
    return data.json();
  }).then((res) => {
    return res;
  }).catch((error) => {
    return error;
  });
}

form.addEventListener('submit', () => {
  submitForm();
});
