class Human {
  constructor(name, address) {
    if (this.constructor === Human) {
      throw new Error("Cannot instantiate from Abstract Class");
    }
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

  work() {
    throw new Error(`Cannot call abstract method`);
  }
}

class Police extends Human {
  constructor(name, address, rank) {
    super(name, address);
    this.rank = rank;
  }

  work() {
    console.log("Enforcing law");
  }
}

class Doctor extends Human {
  constructor(name, address, specialist) {
    super(name, address);
    this.specialist = specialist;
  }

  work() {
    console.log("Treat Patient");
  }
}

function goToWork(human) {
  return human.work();
}

let binarian = new Police("Binarian", "jogja", "Captain");
let sabrina = new Doctor("Sabrina", "Tangerang", "General");

goToWork(binarian);
goToWork(sabrina);
