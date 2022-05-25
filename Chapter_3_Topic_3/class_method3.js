class Human {
  constructor(name, address, ttl) {
    this.warnaMata = "hitam";
    this.name = name;
    this.address = address;
    this.ttl = ttl;
  }

  static isLivingOnEarth = "hitam";

  introduce() {
    console.log(`Hi, nama saya adalah ${this.name}`);
  }
}

console.log(Human.isLivingOnEarth);

Human.prototype.greet = function (name) {
  console.log(`Hi, ${name}, saya ${this.name}`);
};

Human.destroy = function (thing) {
  console.log(`Human is destroying ${thing}`);
};

let mj = new Human("mikael jeksen", "Isekai");

console.log(mj);

console.log(mj instanceof Human);

mj.greet("Donal kram");

Human.destroy("AMazon");

Human.greet = function () {
  console.log("");
};
