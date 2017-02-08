document.getElementById('first').addEventListener('keyup', firstName)

function firstName() {
  updateProfile()
}

document.getElementById('last').addEventListener('keyup', lastName)

function lastName() {
  updateProfile()
}

document.getElementById('bio').addEventListener('keyup', bioGraph)

function bioGraph() {
  updateProfile()
}
document.getElementById('email').addEventListener('keyup', addressEmail)

function addressEmail() {
  updateProfile()
}

document.getElementById('phone').addEventListener('keyup', numberPhone)

function numberPhone() {
  updateProfile()
}

function updateProfile() {
  var firstName = document.getElementById('first').value
  var lastName = document.getElementById('last').value
  var bioGraph = document.getElementById('bio').value
  var email = document.getElementById('email').value
  var phone = document.getElementById('phone').value

  var profile = '<h4>Hi, my name is ' + firstName + ' ' + lastName + '</h4>' + '<p>' + ' ' + bioGraph + '</p>' + ' ' + '<p> If you\'re interested in a date, you can email me at' + ' ' + '<a id="emailOut" target="_blank">' + email + '</a>' + ' ' + 'or give me a call at' + ' ' + '<a id="phoneOut" target="_blank">' + phone + '</a>' + '</p>'
  document.getElementById('preCode').textContent = profile
  document.getElementById('preview').innerHTML = profile
  document.getElementById('emailOut').href = 'mailto:' + email;
  document.getElementById('phoneOut').href = 'tel:' + phone;
}
