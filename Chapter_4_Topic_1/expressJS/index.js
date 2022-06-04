const express = require("express");
const app = express();
const port = 3000;

// ======================
// CODING PERTAMA
// ======================

// app.get("/", (req, res) => {
//   res.send("<h1> hallo bayu </h1>");
// });
// app.listen(port, () => {
//   console.log(`Example app listen at http://localhost:${port}`);
// });

// =======================
// CODING KEDUA
// =======================

// app.get("/bingle.id", function (req, res) {
//   res.send("<h1>Selamat Datang di Bingle</h1>");
// });
// app.listen(port, function () {
//   console.log("Server berjalan di port : " + port);
// });

// =======================
// CODING KETIGA
// =======================

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.get("/product", (req, res) => {
//   let array = ["apple", "redmi", "One Plus One"];
//   res.send(array);
// });

// app.get("/order", function (req, res) {
//   let json = [
//     {
//       id: 1,
//       paid: false,
//       user_id: 1,
//     },
//     {
//       id: 2,
//       paid: false,
//       user_id: 1,
//     },
//   ];
//   res.send(json);
// });

// app.listen(port, () => {
//   console.log("Server Berjalan di port : " + port);
// });

// =============================
// APPLICATION LEVEL MIDDLEWARE
// =============================

// const longer = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };

// app.use(longer).listen(port);

// ==============================
// BUILT-IN MIDDLEWARE
// ==============================

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.listen(port);

// ===============================
// ERROR HANDLER MIDDLEWARE
// ===============================

app.get("/iniError", (err, data) => {
  iniError;
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
});

app.listen(port, () => {
  console.log("Server sedang berjalan");
});
