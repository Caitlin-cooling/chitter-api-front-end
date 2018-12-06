/* global document,localStorage, fetch , $ */

$(document).ready(() => {
  $('#createSession').submit((e) => {
    e.preventDefault();

    const handle = document.getElementById('handle').value;
    const password = document.getElementById('password').value;
    function setLocalStorage(json) {
      localStorage.setItem('user_id', json.user_id);
      localStorage.setItem('session_key', json.session_key);
    }
    function welcomeUser(json) {
      document.getElementById('signUp').innerHTML = `Welcome!`;
    }

    fetch('https://chitter-backend-api.herokuapp.com/sessions', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ session: { handle, password } }),
    })
      .then(response => response.json())
      .then((json) => {
        if (json.errors !== undefined) {
          document.getElementById('error').innerHTML = 'Invalid username or password';
        } else {
          welcomeUser(json)
          setLocalStorage(json);
        }
      })
      .catch((error) => {
        console.error('Error', error);
      });
  });
});
