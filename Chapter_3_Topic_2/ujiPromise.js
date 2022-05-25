function kondisiHujan(cuaca) {
  return new Promise((resolve, reject) => {
    console.log("Cuaca : ", cuaca);
    if (cuaca !== "Hujan") {
      return reject("Gak ada PR");
    } else {
      resolve("Besok ada PR");
    }
  });
}

kondisiHujan("Hujan")
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.error(reject));
