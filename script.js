var km = document.getElementById('kilometertempuh');
var awal = document.getElementById('kmawal');
var akhir = document.getElementById('kmakhir');
var liter = document.getElementById('totalliter');
var hasilnya = document.getElementById('hasilratio');
const tombol = document.querySelector('button');
document.getElementById('hasilratio').disabled = true;
document.getElementById('kilometertempuh').disabled = true;
document.getElementById('kilometertempuh').style.backgroundColor = 'silver';
document.getElementById('hasilratio').style.backgroundColor = 'silver';

function fratio() {
  var isiliter = document.getElementById('totalliter').value;
  var opsiarmada = document.getElementById('armada').value;
  if (isiliter == '') {
    alert('Isi liter masih kosong!!');
    document.getElementById('kmawal').reset();
    document.getElementById('kmaakhir').reset();
  } else if (opsiarmada !== 'Pilih Armada') {
    km.value = Number(kmakhir.value) - Number(kmawal.value);
  } else {
    hasilnya.value = Number(km.value) / Number(liter.value);
  }
}

// function resetAll() {
//   document.getElementById('resetbutton').reset();
// }

tombol.addEventListener('click', function (e) {
  e.preventDefault();
  hasilnya.value = Number(km.value) / Number(liter.value);
  km.value = Number(kmakhir.value) - Number(kmawal.value);
});
