const myPromise = new Promise((resolve) => {
  resolve("Hello World");
});

myPromise.then((result) => {
  console.log(result);
});
