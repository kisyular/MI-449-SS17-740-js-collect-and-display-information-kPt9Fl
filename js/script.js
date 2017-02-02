/*

I am getting errors here so that is why i decided not to use eventlistener
document.getElementById("bio").addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById("bio").value;
  document.getElementById("describeYourself").innerHTML = x;
}
*/
function bio() {
  var targetTag = document.getElementById('bio')
  var x = targetTag.value
  document.getElementById('describeYourself').innerHTML = x[0].toUpperCase() + x.slice(1)
}

function firstName() {
  var targetTag = document.getElementById('first')
  var x = targetTag.value
  document.getElementById('spanFirst').innerHTML = x[0].toUpperCase() + x.slice(1)
}

function lastName() {
  var targetTag = document.getElementById('last')
  var x = targetTag.value
  document.getElementById('spanLast').innerHTML = x[0].toUpperCase() + x.slice(1)
}

function emailAddress() {
  var targetTag = document.getElementById('email')
  var x = targetTag.value
  document.getElementById('emailOut').innerHTML = x
}

function phoneNumber() {
  var targetTag = document.getElementById('phone')
  var x = targetTag.value
  document.getElementById('phoneOut').innerHTML = x
}
