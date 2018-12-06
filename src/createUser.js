/* global document, fetch */

function createUser(e) {
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
    .then(response => response.json())
    .then((json) => {
      if (!json.ok) {
        invalidSignUp();
      } else {
        welcomeUser(json);
      }
    })
    .catch((error) => {
      console.error('Error', error);
    });
}

document.getElementById('createUser').addEventListener('submit', createUser);
