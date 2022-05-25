class MyClass {
  static warnaMata = "hitam";

  //   methodWarnaMata() {
  //     return MyClass.warnaMata;
  //   }

  constructor(nama, address, ttl) {
    this.nama = nama;
    this.address = address;
    this.ttl = ttl;
    // this.warnaMata = this.methodWarnaMata();
    this.warna = MyClass.warnaMata;
  }
}

let jojo = new MyClass("bayu", "Mataram", "1995-04-23");
console.log(jojo);
