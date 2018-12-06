document.getElementById("getPeeps").addEventListener("click", getPeeps)

function getPeeps () {

  function showPeeps(peeps) {
    for(var i = 0; i < peeps.length; i++){
      peep = document.createElement('div')
      peep.innerHTML = peeps[i].body
      document.getElementById("peeps").appendChild(peep)
    }
  }

  fetch('https://chitter-backend-api.herokuapp.com/peeps')
  .then(function(response) {
    return response.json();
  })
  .then(function(peeps) {
    showPeeps(peeps)
  })
  .catch(function(error) {
    console.error("Error", error)
  });
};
