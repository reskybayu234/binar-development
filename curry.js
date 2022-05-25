function hitungVolume(p) {
  return function (l) {
    return function (t) {
      return p * l * t;
    };
  };
}

console.log(hitungVolume(1)(2)(3));
