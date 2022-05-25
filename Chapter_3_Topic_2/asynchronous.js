// Tanpa Callback
function kuadratAsync(x) {
  setTimeout(() => x * x, 100);
}
console.log(kuadratAsync(5));

console.log("==========================================");

// Dengan Callback
function kuadratAsyncCallback(x, callback) {
  return callback(x);
}

const items = (item) => {
  return item * item;
};

console.log(kuadratAsyncCallback(5, items));
