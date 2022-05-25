function kuadrat(x, callback) {
  setTimeout(() => callback(x * x), 1000);
}
kuadrat(5, console.log);
