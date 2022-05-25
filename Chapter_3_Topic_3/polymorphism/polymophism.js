class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  introduce() {
    console.log(`Hello my name is ${this.name}`);
  }

  work() {
    console.log(`${this.name} is working`);
  }
}
