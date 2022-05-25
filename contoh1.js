function validity(nama, age) {
  if (age < 13) {
    return "Maaf, usia Anda dibawah ketentuan pengguna";
  } else if (age >= 13) {
    return `Silahkan lanjutkan registrasi,${age}`;
  } else {
    return "Mohon masukkan angka usia Anda";
  }
}

console.log(validity("didi", "adadaadasda"));
