var km = document.getElementById('kilometertempuh');
var liter = document.getElementById('totalliter');
var hasilnya = document.getElementById('hasilratio');
const tombol = document.querySelector('button');
document.getElementById('hasilratio').disabled = true;

function fratio() {
  hasilnya.value = Number(km.value) / Number(liter.value);
}

tombol.addEventListener('click', function (e) {
  e.preventDefault();
  hasilnya.value = Number(km.value) / Number(liter.value);
});

var typeArmada = document.getElementById('armada');
