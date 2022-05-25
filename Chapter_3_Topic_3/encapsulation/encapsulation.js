class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

  static isEating(food) {
    let foods = ["plant", "animal"];
  }
}

let mj = new Human("mikel jekson", "Isekai");
console.log(mj);

console.log(mj.introduce());
console.log(Human.isEating("Plant"));
console.log(Human.isEating("Human"));
