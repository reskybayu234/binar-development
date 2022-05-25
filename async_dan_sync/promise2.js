function isPasswordCorrect(password) {
  return new Promise((resolve, rejected) => {
    console.log("Password: ", password);
    if (password !== "123456") {
      return rejected("Wrong Password");
    }
    resolve("Password is correct");
  });
}

isPasswordCorrect("123456")
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((rejected) => {
    console.error(rejected);
  });

isPasswordCorrect("123333")
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((rejected) => {
    console.error(rejected);
  });
