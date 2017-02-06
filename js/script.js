document.getElementById('first').addEventListener('keyup', firstName)

function firstName() {
  var x = document.getElementById('first').value
  document.getElementById('spanFirst').innerHTML = x
}

document.getElementById('last').addEventListener('keyup', lastName)

function lastName() {
  var x = document.getElementById('last').value
  document.getElementById('spanLast').innerHTML = x
}

document.getElementById('bio').addEventListener('keyup', bioGraph)

function bioGraph() {
  var x = document.getElementById('bio').value
  document.getElementById('describeYourself').innerHTML = x
}
document.getElementById('email').addEventListener('keyup', addressEmail)

function addressEmail() {
  var x = document.getElementById('email').value
  document.getElementById('emailOut').innerHTML = x
}

document.getElementById('phone').addEventListener('keyup', numberPhone)

function numberPhone() {
  var x = document.getElementById('phone').value
  document.getElementById('phoneOut').innerHTML = x
}
