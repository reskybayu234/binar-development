const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const url = require("url");

// app
//   .get("/", (req, res) => {
//     res.send("resky bayu andhika");
//   })
//   .listen(port, () => {
//     console.log("Server Berjalan dengan baik");
//   });

// =======================================
// KEDUA
// =======================================

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/product", (req, res) => {
//   res.json(["apple", "redmi", "one plus one"]);
// });

// app.get("/users", (req, res) => {
//   res.json([
//     { id: 1, paid: false, user_id: 1 },
//     {
//       id: 2,
//       paid: false,
//       user_id: 2,
//     },
//   ]);
// });

// app.listen(port, () => {
//   console.log("Server Berjalan dengan baik");
// });

// ==================================
// APPLICATION LEVEL MIDDLEWARE
// ==================================

// const longger = (req, res, next) => {
//   //   con;
//   console.log(`${req.method} ${req.url} bayu`);
//   next("error masszeh");
// };

// app.use(longger);

// app.listen(3000);

// =======================
// ROUTER LEVEL MIDDLEWARE
// =======================

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// const router = require("./router");
// app.use(router);

// app.get("/endpointlain", (req, res) => {});

// app.listen(port, () => [console.log("Server Berjalan")]);
// ==============================
// ERROR HANDLING
// INTERNAR SERVER ERROR
// ==============================

// app.get("/iniEror", function (req, res) {
//   iniEror;
// });

// app.use(function (err, req, res, next) {=
//   res.status(500).json({
//     status: "fail",
//     errors: err.message,
//   });
// });

// app.listen(port, function () {
//   console.log("Server Berjalan");
// });

// =============================
// ERROR HANDLING
// 404 HANDLER ERROR
// ==============================

// app.get("/iniEror", function (req, res) {
//   iniEror;
// });

// Internal server Error Handler
// app.use(function (err, req, res, next) {
//   console.log(err);
//   res.status(500).json({
//     status: "fail",
//     errorBay: err.message,
//   });
// });

// app.get("/coba404", function (req, res) {
//   serverErrormen();
// });

// 404 Handler
// app.use(function (err, req, res, next) {
//   console.log(err);
//   res.status(404).json({
//     status: "fail",
//     errornya: "Page not found",
//   });
// });

// app.listen(port, function () {
//   console.log("Server Berjalan");
// });

// =======================================
// VIEW ENGINE (EJS)
// =======================================

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("about");
// });

// app.get("/about/", function (req, res) {
//   const q = url.parse(req.url, true).query.nama;
// });

// app.use(function (err, req, res, next) {
//   console.log(err);
//   res.status(500).json({
//     status: "fail",
//     errors: err.message,
//   });
// });

// app.get("/about/", function (req, res) {
//   res.render("./views/about");
// });

// app.listen(port, () => {
//   console.log("Server Berjalan");
// });

// ===============================
// VIEW ENGINE DINAMIS
// ===============================

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/greet", (req, res) => {
//   const name = req.query.name || "void";
//   res.render("greet", { name });
// });

// app.use(function (err, req, res, next) {
//   res.status(404).json({
//     status: "fails",
//     error: err.message,
//   });
// });

// app.listen(port, () => {
//   console.log("Server Berjalan");
// });

// ====================================
//  VIEW ENGINE LATIHAN
// ====================================

// app.set("view engine", "ejs");

// app.get("/greet", function (req, res) {
//   const name = req.query.name || "bayu";
//   res.render("greet", { name });
// });

// app.listen(port, () => {
//   console.log("Server Berjalan");
// });

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  res.json([email, password]);
});

app.use(function (err, req, res, next) {
  res.status(500).json({
    status: "fails",
    error: err.message,
  });
});

app.listen(port, () => {
  console.log("Server Berjalan");
});
