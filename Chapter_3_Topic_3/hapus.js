class myClass {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    console.log("ini constructor");
  }

  static iniMethodStatic() {
    console.log(`Hallo ${this.name}`);
  }

  panggilStaticMethod() {
    let staticMethod = MyClass.iniMethodStatic;
    return staticMethod;
  }
}

let myclasaas = new myClass("Bayu", "Mataram");

myclass.panggilStaticMethod();
