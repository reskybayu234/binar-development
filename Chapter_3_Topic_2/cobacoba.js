function tambah(angka1, angka2) {
  return angka1 + angka2;
}

// function hasil(callback, angka1, angka2) {
//   let hasil = callback(angka1, angka2);
//   return hasil;
// }
const hasil = (callback, angka1, angka2) => {
  let hasil = callback(angka1, angka2);
  return hasil;
};
console.log(hasil(tambah, 1, 2));
