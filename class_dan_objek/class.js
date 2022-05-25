class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

const mobil = {
  merk: "Toyota",
  model: "Avanza",
  warna: "hitam",
};

console.log(mobil.merk);
console.log(mobil["model"]);
console.log(mobil.warna);

const userID = {
  firstName: "Resky",
  lastName: "Bayu",
  birthDay: Date("1995-04-23"),
  sex: "Male",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(userID.fullName());
