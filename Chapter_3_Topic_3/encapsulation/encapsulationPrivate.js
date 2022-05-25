class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  #doGossip() {
    console.log(`My address will become virala ${this.address}`);
  }

  #cekTandaLahir = (punyaTandaLahir) => {
    let hasil = punyaTandaLahir == "tomboy";
    return hasil;
  };

  apakahUnik = (jenisTanda) => {
    let unik = this.#cekTandaLahir(jenisTanda);
    return unik;
  };

  talk() {
    this.#doGossip();
  }

  static #isHidingArea = true;
}

let mj = new Human("mikel", "isekai");
console.log(mj.talk());
console.log(mj.apakahUnik("tomboy"));
mj.talk();
