function login() {
  document.getElementById("bienvenida").innerHTML = "Bienvenido " + document.getElementById('username').value;
}

function bsDollar() {
  var bs = document.getElementById('bob').value;
  var res = bs/6.96;
  document.getElementById("usd").value = Number(res).toFixed(2);
}

function dollarBs() {
  var usd = document.getElementById('usd').value;
  var res = usd*6.96;
  document.getElementById("bob").value = Number(res).toFixed(2);
}

function clean() {
  document.getElementById("bob").value = "";
  document.getElementById("usd").value = "";
}
