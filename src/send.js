/* eslint-disable no-undef */
const form = document.getElementById('request-form');
const url = 'https://reqres.in/api/login';

const postForm = async () => {
  const formData = new FormData(form);
  const searchParams = new URLSearchParams();

  // eslint-disable-next-line no-restricted-syntax
  for (const pair of formData) {
    searchParams.append(pair[0], pair[1]);
  }
  try {
    const res = await fetch(url, {
      method: 'post',
      body: searchParams,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

function submitForm() {
  form.addEventListener('submit', () => {
    postForm();
  });
}

submitForm();
