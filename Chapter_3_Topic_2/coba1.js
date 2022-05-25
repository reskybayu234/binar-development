function nama(name) {
  setTimeout(() => {
    return name;
  }, 3000);
}
console.log(nama("Resky Bayu Andhika"));

// ====================================================

// function nama(name, callback) {
//   callback(name);
// }

// function hallo(nama) {
//   console.log(nama);
// }
// const callb = (namee) => {
//   setTimeout(() => {
//     hallo(namee);
//   }, 1000);
// };

// nama("resky", callb);
