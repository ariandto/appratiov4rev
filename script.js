var km = document.getElementById('kilometertempuh');
var liter = document.getElementById('totalliter');
var hasilnya = document.getElementById('hasilratio');

function fratio() {
  hasilnya.value = Number(km.value) / Number(liter.value);
}
