class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  _call() {
    console.log(`Call me as a ${this.name}`);
  }
}

class Programmer extends Human {
  constructor(name, address, task, salary) {
    super(name, address);
    this.task = task;
    this.salary = salary;
  }

  doCall() {
    super._call();
  }
}

let sb = new Human("Sabrina", "Jakarta");
let job = new Programmer("Developer", "$1000");

console.log(sb._call());
console.log(job.doCall());
