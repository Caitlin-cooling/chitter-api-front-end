document.getElementById('createSession').addEventListener("submit", createSession)

function createSession(e) {
  e.preventDefault();

  var handle = document.getElementById('handle').value;
  var password = document.getElementById('password').value;

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
    console.log(json);
  })
  .catch(function(error) {
    console.error("Error", error)
  });
};
