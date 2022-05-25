class Human {
  constructor(nama, address) {
    this.nama = nama;
    this.address = address;
  }

  // menambahkan static property
  static isLivingOnEarth = true;

  // menambahkan instance methode

  introduce() {
    console.log(`Hi, nama saya ${this.nama}`);
  }
}

const bayu = new Human("bayu", "pagutan");
console.log(bayu.nama);

// menambahkan property / instance method
Human.prototype.greet = function (name) {
  console.log(`Hi ${name}, Saya ${this.nama}`);
};

// menambahkan static method
Human.destroy = function (janggo) {
  console.log(`Human is destroying ${thing}`);
};

// membuat objek dengan class Human
let mj = new Human("Mikael jeksen", "wakanda");

console.log(mj);
