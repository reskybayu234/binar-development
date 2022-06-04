const fs = require("fs");

fs.readFile("tem1p.txt", "utf-8", (err, buf) => {
  if (err) {
    console.log(err);
  } else {
    console.log(buf);
  }
});
