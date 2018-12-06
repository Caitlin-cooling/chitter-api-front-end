document.getElementById("createPeep").addEventListener("submit", createPeep)

function createPeep(e) {
  e.preventDefault();

  var body = document.getElementById('body').value;
  var user_id = localStorage.getItem('user_id')
  var session_key = localStorage.getItem('session_key')

  fetch('https://chitter-backend-api.herokuapp.com/peeps', {
    method: 'post',
    headers: {
      "Authorization": `Token token=${session_key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({peep: {user_id: user_id, body: body}})
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    document.getElementById('confirmation').innerHTML = 'Peep created! Click the button below to check it out'
  })
  .catch(function(error) {
    console.error("Error", error)
  });
};
