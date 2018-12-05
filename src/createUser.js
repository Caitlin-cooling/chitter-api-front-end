document.getElementById("createUser").addEventListener("submit", createUser)

function createUser(e) {
  e.preventDefault();

  var handle = document.getElementById('new_handle').value;
  var password = document.getElementById('new_password').value;
  function welcomeUser(json) {
    document.getElementById('signUp').innerHTML = `Welcome, ${json.handle}`
  }
  function invalidSignUp() {
    document.getElementById('error').innerHTML = 'That handle already exists, please log in or try another'
  }

  fetch('https://chitter-backend-api.herokuapp.com/users', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({user: {handle: handle, password: password}})
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    if(!json.ok){
      invalidSignUp();
    } else  {
      welcomeUser(json);
    }
  })
  .catch(function(error) {
    console.error("Error", error)
  });
};
