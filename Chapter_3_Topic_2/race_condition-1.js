getNama = (callback) => {
  setTimeout(() => {
    let nama = "bayu";
    callback(nama);
  }, 1000);
};

function printNama() {
  let nama = getNama(console.log);
}

printNama();
