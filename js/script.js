/*

I am getting errors here so that is why i decided not to use eventlistener
document.getElementById("bio").addEventListener("keyup", myFunction);

function lastName(inID, outID) {
  var targetTag = document.getElementById(inID)
  var x = targetTag.value
  document.getElementById(outID).innerHTML = x[0].toUpperCase() + x.slice(1)
}
lastName('last', "spanLast")
*/
//var global = ''
function firstName() {
  var targetTag = document.getElementById('first')
  var x = targetTag.value
  document.getElementById('spanFirst').innerHTML = x[0].toUpperCase() + x.slice(1)
  var textInside = document.getElementById('spanFirst').textContent
  document.getElementById('preCode').textContent = '<h4>' + textInside + '</h4>'
}

function lastName() {
  var targetTag = document.getElementById('last')
  var x = targetTag.value
  document.getElementById('spanLast').innerHTML = x[0].toUpperCase() + x.slice(1)
  var textInside = document.getElementById('spanLast').textContent
  document.getElementById('preCode').textContent = '<h4>' + textInside + '</h4>'
}

function bio() {
  var targetTag = document.getElementById('bio')
  var x = targetTag.value
  document.getElementById('describeYourself').innerHTML = x[0].toUpperCase() + x.slice(1)
  var textInside = document.getElementById('describeYourself').textContent
  //global = global + test
  document.getElementById('preCode').textContent = '<p>' + textInside + '</p>'
}

function emailAddress() {
  var targetTag = document.getElementById('email')
  var x = targetTag.value
  document.getElementById('emailOut').innerHTML = x
  var textInside = document.getElementById('emailOut').textContent
  document.getElementById('preCode').textContent = '<a>' + textInside + '</a>'
}

function phoneNumber() {
  var targetTag = document.getElementById('phone')
  var x = targetTag.value
  document.getElementById('phoneOut').innerHTML = x
  var textInside = document.getElementById('phoneOut').textContent
  document.getElementById('preCode').textContent = '<a>' + textInside + '</a>'
}
