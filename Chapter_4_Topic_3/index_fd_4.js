const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;

// ============
// VIEW ENGINE
// ============
app.set("view engine", "ejs");
app.get("/cobaejs", (req, res) => {
  res.render("index");
});
// ============================
// MIDDLEWARE        MIDDLEWARE
// ============================
// Application level Middleware
// ============================
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
// dipakai disemua instance app
app.use(logger);

// ======================
// Built-in Middleware
// ======================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// =======================
// Router Middleware
// =======================
app.use(router);

// =======================
// THIRD PARTY MIDDLEWARE
// =======================

// =========================
// ERROR HANDLING MIDDLEWARE
// =========================

app.get("/iniError", (req, res) => {
  iniError;
});

const errorHandler = function (err, req, res, next) {
  console.log(err);
  res.status(500).json([
    {
      status: "fails",
      error: err.message,
    },
  ]);
};
app.use(errorHandler);
// ===========================
// GET GET GET GET GET GET GET
// ===========================

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/greeting", (req, res) => {
  res.send("Hello Bingle");
});
app.get("/product", (req, res) => {
  res.json(["apple", "Redmi", "One Plus One"]);
});
app.get("/orders", (req, res) => {
  res.json([
    {
      id: 1,
      paid: false,
      user_id: 1,
    },
    {
      id: 2,
      paid: false,
      user_id: 1,
    },
  ]);
});
app.get("/users", (req, res) => {
  res.json([
    {
      nama: "Resky Bayu Andhika",
      ttl: "sulawesi selatan",
      jk: L,
    },
  ]);
});
app.get("/greet", (req, res) => {
  const name = req.query.name || "bayu";
  res.render("greet", { name });
});

app.get("/welcome", (req, res) => {
  const name = req.query.name;
  res.render("welcome", { name });
});

app.get("/register", (req, res) => {
  res.render("register");
});

// =============================
// POST POST POST POST POST POST
// =============================
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  res.json([email, password]);
});

app.listen(port, () => {
  console.log("Server Berjalan");
});
