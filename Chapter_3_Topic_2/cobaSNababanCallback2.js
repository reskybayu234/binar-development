function calculate(angka1, angka2, callback) {
  result = angka1 + angka2;

  if (typeof callback == "function") {
    result = callback(angka1, angka2);
  }
  return result;
}

const tambah = (x, y) => {
  return `hasil $ ${x + y}`;
};

const kali = (x, y) => {
  return `hasil $ ${x * y}`;
};

const hasil = calculate(2000, 4000, tambah);
const hasilKali = calculate(1000, 2, kali);

console.log(hasil);
console.log(hasilKali);
