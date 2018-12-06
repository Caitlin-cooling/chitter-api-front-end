document.getElementById('createSession').addEventListener("submit", createSession)

function createSession(e) {
  e.preventDefault();

  var handle = document.getElementById('handle').value;
  var password = document.getElementById('password').value;
  function setLocalStorage(json) {
    localStorage.setItem('user_id', json.user_id)
    localStorage.setItem('session_key', json.session_key)
  }

  fetch('https://chitter-backend-api.herokuapp.com/sessions', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({session: {handle: handle, password: password}})
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    if(json.errors !== undefined) {
      document.getElementById('error').innerHTML = 'Invalid username or password'
    } else {
      setLocalStorage(json)
    }
  })
  .catch(function(error) {
    console.error("Error", error)
  });
};
