document.getElementById('first').addEventListener('keyup', firstName)

function firstName() {
  var x = document.getElementById('first').value
  document.getElementById('spanFirst').innerHTML = x
  updateProfile()
}

document.getElementById('last').addEventListener('keyup', lastName)

function lastName() {
  var x = document.getElementById('last').value
  document.getElementById('spanLast').innerHTML = x
  updateProfile()
}

document.getElementById('bio').addEventListener('keyup', bioGraph)

function bioGraph() {
  var x = document.getElementById('bio').value
  document.getElementById('describeYourself').innerHTML = x
  updateProfile()
}
document.getElementById('email').addEventListener('keyup', addressEmail)

function addressEmail() {
  var x = document.getElementById('email').value
  document.getElementById('emailOut').innerHTML = x
  document.getElementById('emailOut').href = 'mailto:' + x;
  updateProfile()
}

document.getElementById('phone').addEventListener('keyup', numberPhone)

function numberPhone() {
  var x = document.getElementById('phone').value
  document.getElementById('phoneOut').innerHTML = x
  document.getElementById('phoneOut').href = 'tel:' + x;
  updateProfile()
}

function updateProfile() {
  var firstName = document.getElementById('first').value
  var lastName = document.getElementById('last').value
  var bioGraph = document.getElementById('bio').value
  var email = document.getElementById('email').value
  var phone = document.getElementById('phone').value

  var profile = firstName + ' ' + lastName + ' ' + bioGraph + ' ' + email + ' ' + phone
  document.getElementById('preCode').textContent = profile
}
