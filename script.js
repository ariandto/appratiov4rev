var km = document.getElementById('kilometertempuh');
var awal = document.getElementById('kmawal');
var akhir = document.getElementById('kmakhir');
var liter = document.getElementById('totalliter');
var hasilnya = document.getElementById('hasilratio');
const tombol = document.querySelector('button');
document.getElementById('hasilratio').disabled = true;
document.getElementById('kilometertempuh').disabled = true;

function fratio() {
  hasilnya.value = Number(km.value) / Number(liter.value);
  km.value = Number(kmakhir.value) - Number(kmawal.value);
  var liter = document.getElementById('totalliter');
  if (liter == '') {
    alert = 'Slahkan masukkan jumlah liter bbm terlebih dahulu';
  }
}

tombol.addEventListener('click', function (e) {
  e.preventDefault();
  hasilnya.value = Number(km.value) / Number(liter.value);
});

var typeArmada = document.getElementById('armada');
