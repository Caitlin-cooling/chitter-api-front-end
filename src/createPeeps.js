/* global document, localStorage, fetch, $ */

$(document).ready(() => {
  $('#createPeep').submit((e) => {
    e.preventDefault();

    const body = document.getElementById('body').value;
    const userId = localStorage.getItem('user_id');
    const sessionKey = localStorage.getItem('session_key');

    fetch('https://chitter-backend-api.herokuapp.com/peeps', {
      method: 'post',
      headers: {
        Authorization: `Token token=${sessionKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ peep: { user_id: userId, body } }),
    })
      .then(response => response.json())
      .then(() => {
        document.getElementById('confirmation').innerHTML = 'Peep created! Click the button below to check it out';
      })
      .catch((error) => {
        console.error('Error', error);
      });
  });
});
