// fungsi yang mereturn promise
function isPasswordCorrect(password) {
  return new Promise((resolve, reject) => {
    if (password !== "123456") {
      return reject("wrong password");
    }
    return resolve("Password is correct");
  });
}

// cara panggil dengan .then dan .catch
isPasswordCorrect("12345")
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.error(reject));

// cara panggil dengan async-await & catch
// async function checkPassword() {
//   try {
//     let result = await isPasswordCorrect("123456");
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// cara panggil dengan async-awat dan catch (versi arrow)
const checkPassword = async () => {
  try {
    let result = await isPasswordCorrect("123444");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

checkPassword();
