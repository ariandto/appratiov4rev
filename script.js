var km = document.getElementById('kilometertempuh');
var liter = document.getElementById('totalliter');
var hasilnya = document.getElementById('hasilratio');
document.getElementById('hasilratio').disabled = true;
const tombol = document.querySelector('button');

function fratio() {
  hasilnya.value = Number(km.value) / Number(liter.value);
}

tombol.addEventListener('click', function (e) {
  e.preventDefault();
  hasilnya.value = Number(km.value) / Number(liter.value);
});
