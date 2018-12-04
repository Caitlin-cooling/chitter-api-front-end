document.getElementById("getPeeps").addEventListener("click", getPeeps)

function getPeeps () {
  fetch('https://chitter-backend-api.herokuapp.com/peeps')
  .then(function(response) {
    return response.json();
  })
  .then(function(peeps) {
    for(var i = 0; i < peeps.length; i++){
      // console.log(peeps[i].body)
      document.getElementById("peeps").innerHTML = 'Peeps'
    }
  })
  .catch(function(error) {
    console.error("Error", error)
  });
};
