class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hi my name is ${this.name}`);
  }

  work() {
    console.log("work!");
  }
}
// ==================== EXTENDS ====================
class Programmer extends Human {
  constructor(name, address, programmingLanguage) {
    super(name, address);
    this.programmingLanguage = programmingLanguage;
  }

  introduce() {
    super.introduce();
    console.log("I can write", this.programmingLanguage);
  }

  code() {
    console.log("Code some", this.programmingLanguage[Math.floor(Math.random() * this.programmingLanguage.length)]);
  }
}

let obama = new Human("Barrack Obama", "Washington DC");

obama.introduce();

let isyana = new Programmer("Isyana", "Jakarta", ["Javascript", "Kotlin", "Python"]);

isyana.introduce();

isyana.code();

// try {
//   obama.code();
// } catch (err) {
//   console.log(err);
// }

console.log(isyana instanceof Human);

console.log(obama instanceof Programmer);
