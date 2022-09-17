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
}

function alertEmpty() {
  var inputs = document.getElementById('kilometertempuh');
  var result = [];
  for (var i = 0; i < inputs.length; i += 1) {
    result[i] = inputs[i].value;

    if (inputs[i].value == '') {
      alert('harus isi liter bbm terlebih dahulu!!');
    }
  }
  document.getElementById('hasilratio').innerHTML = result[0];
}
tombol.addEventListener('click', function (e) {
  e.preventDefault();
  hasilnya.value = Number(km.value) / Number(liter.value);
});
