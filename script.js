function openZoom(gambarYangDiklik) {
  const overlay = document.getElementById('zoomOverlay');
  const zoomedImg = document.getElementById('zoomedImage');

  zoomedImg.src = gambarYangDiklik.src;
  overlay.style.display = 'flex';
}

function closeZoom() {
  const overlay = document.getElementById('zoomOverlay');
  overlay.style.display = 'none';
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    closeZoom();
  }
});



function kirimWA(){

let nama=document.getElementById("nama").value;
let email=document.getElementById("email").value;
let nomor=document.getElementById("nomor").value;
let alamat=document.getElementById("alamat").value;
let tujuan=document.getElementById("tujuan").value;


let pesan=`Halo admin, Saya ingin memesan tour guide

            Nama: ${nama}
            Email:${email}
            Nomor:${nomor}
            Alamat:${alamat}
            Tujuan Perjalanan:${tujuan}`;

            let link= `https://wa.me/082283150836?text=${encodeURIComponent(pesan)}`;

            window.open(link,'blank');
}