var km = document.getElementById('kilometertempuh');
var liter = document.getElementById('totalliter');
var hasilnya = document.getElementById('hasilratio');

function fratio() {
  hasilnya.value = Number(km.value) / Number(liter.value);
}
// hasilnya.addEventListener('onclick', function (e) {
//   e.preventDefault();
//   hasilnya.value = Number(km.value) / Number(liter.value);
// });
