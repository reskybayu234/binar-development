getNama = (callback) => {
  setTimeout(() => {
    let nama = "bayu";
    return nama;
  }, 1000);
};

getNamaDepan = (nama) => {
  setTimeout(() => {
    let namaDepan = "Depan " + nama;
  }, 1000);
};

function printNama() {
  let nama = getNama();
  let namaDepan = getNamaDepan(nama);
  console.log(namaDepan);
}

printNama();
