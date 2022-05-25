class myClass {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  static iniMethodStatic(nama) {
    console.log(`Hallo ${nama}`);
  }

  panggilStaticMethod(nama) {
    let staticMethod = myClass.iniMethodStatic(nama);
    return staticMethod;
  }
}

let myclass = new myClass("Bayu", "Mataram");
let nama = myclass.name;
myclass.panggilStaticMethod(nama);
