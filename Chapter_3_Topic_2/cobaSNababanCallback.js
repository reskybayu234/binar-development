function main(param1, param2, callback) {
  console.log(param1, param2);
  callback();
}

function myCallback() {
  console.log("Hello callback");
}

main(1, 2, myCallback);

// ==========================================
// ====== callback pada synchronous =========
// ==========================================
console.log("==========================================");
console.log("====== callback pada synchronous =========");
console.log("==========================================");

function calculate(x, y) {
  result = x + y;
  return result;
}
const hasil = calculate(3, 4);
console.log(hasil);
