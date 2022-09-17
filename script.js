var km = document.getElementById('kilometertempuh');
var awal = document.getElementById('kmawal');
var akhir = document.getElementById('kmakhir');
var liter = document.getElementById('totalliter');
var hasilnya = document.getElementById('hasilratio');
const tombol = document.querySelector('button');
document.getElementById('hasilratio').disabled = true;
document.getElementById('kilometertempuh').disabled = true;

function fratio() {
  var isiliter = document.getElementById('totalliter').value;
  var opsiarmada = document.getElementById('armada').value;
  if (isiliter =="" || opsiarmada == "Pilih Armada"){
    alert("Pilih armada dahulu / isi liter masih kosong!!")
  }else{
    hasilnya.value = Number(km.value) / Number(liter.value);
    km.value = Number(kmakhir.value) - Number(kmawal.value);
}

tombol.addEventListener('click', function (e) {
  e.preventDefault();
  hasilnya.value = Number(km.value) / Number(liter.value);
  km.value = Number(kmakhir.value) - Number(kmawal.value);
});
}