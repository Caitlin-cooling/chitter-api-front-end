/* global document, fetch, $ */

$(document).ready(() => {
  $('#createUser').submit((e) => {
    e.preventDefault();

    const handle = document.getElementById('new_handle').value;
    const password = document.getElementById('new_password').value;
    function welcomeUser(json) {
      document.getElementById('signUp').innerHTML = `Welcome, ${json.handle}`;
    }
    function invalidSignUp() {
      document.getElementById('error').innerHTML = 'That handle already exists, please log in or try another';
    }

    fetch('https://chitter-backend-api.herokuapp.com/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { handle, password } }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => {
        console.log(json);
        if (json !== undefined) {
          welcomeUser(json);
        } else {
          invalidSignUp();
        }
      })
      .catch((error) => {
        console.error('Error', error);
      });
  });
});
