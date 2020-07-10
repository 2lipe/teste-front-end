(function() {
  const usersProfiles = document.getElementById('profile');
  const url = 'https://reqres.in/api/users?page=1';

  async function getUsers() {
    const usersResponse = await fetch(url);
    const profile = usersResponse.json();
    return profile;
  }

  function showUsers() {
    
  }

  window.addEventListener('load', (e) => {
    getUsers().then(res => console.log(res));
  });
})();
