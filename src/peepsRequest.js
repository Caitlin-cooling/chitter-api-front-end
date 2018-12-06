/* global document, fetch */

function getPeeps() {
  function showPeeps(peeps) {
    for (let i = 0; i < peeps.length; i += 1) {
      const peep = document.createElement('div');
      peep.innerHTML = peeps[i].body;
      document.getElementById('peeps').appendChild(peep);
    }
  }

  fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(response => response.json())
    .then((peeps) => {
      showPeeps(peeps);
    })
    .catch((error) => {
      console.error('Error', error);
    });
}

document.getElementById('getPeeps').addEventListener('click', getPeeps);
