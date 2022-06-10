const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const posts = require("./db/posts.json");
const mahasiswa = require("./db/mahasiswa.json");
const foodList = require("./db/food-list.json");
// app.get("/sabrina.jpg", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "sabrina.jpg"));
// });
app.use(express.static("public/image"));

app.get("/api/v1/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/api/v1/mahasiswa", (req, res) => {
  res.status(200).json(mahasiswa);
});

app.get("/api/v1/foods", (req, res) => {
  res.status(200).json(foodList);
});

app.get("/api/v1/mahasiswa/:id", (req, res) => {
  const data = mahasiswa.find((mh) => mh.id == req.params.id);
  console.log(req.params);
  res.status(200).json(data);
});

app.get("/api/v1/foods/:name", (req, res) => {
  const food = foodList.find((food) => food.name == req.params.name);
  console.log(req.params);
  res.status(200).json(food);
});

app.get("/ambil", (req, res) => {
  res.json({ nama: "bayu" });
});

app.get("/api/v1/posts/:id", (req, res) => {
  const post_id = posts.find((i) => i.id == req.params.id);
  // console.log(req.params);
  res.status(200).json(post_id);
});

// ===============================
// POST
// ===============================

app.use(express.json());

app.post("/api/v1/posts", (req, res) => {
  /* 
  untuk menghandle request body, kita bisa memanggilnya dengan
  menggunakan req.body
  */
  //  destruct req.body
  const { title, body } = req.body;

  // untuk dapetin id
  const id = posts[posts.length - 1].id + 1;
  console.log(posts.length);
  console.log(id);
  const post = {
    id,
    title,
    body,
  };
  console.log(post);
  // simpan ke dalam posts array
  posts.push(post);

  // response harus 201 karena kita menambahkan entry baru ke dalam suatu resource
  res.status(201).json(post);
});

app.post("/api/v1/mahasiswa", (req, res) => {
  const id = mahasiswa[mahasiswa.length - 1].id + 1;
  const { nama, NIM } = req.body;
  const data = {
    id,
    nama,
    NIM,
  };
  mahasiswa.push(data);
  res.status(201).json(mahasiswa);
});

// ===========================
// PUT
// ===========================

// app.put("/api/v1/posts/:id", (req, res) => {
//   let post = posts.find((p) => p.id == req.params.id);

//   // untuk menghindari parameter yang tidak kita inginkan
//   const params = { title: req.body.title, Body: req.body.body };
//   post = { ...post, ...params };
//   posts = posts.map((i) => (i.id === post.id ? post : i));
//   res.status(200).json(post);
// });

app.put("/api/v1/foods/:id", (req, res) => {
  const { name, type, price } = req.body;
  const id = req.params.id;
  let food = foodList.find((food) => food.id == req.params.id);
  console.log(food);
  food.name = name;
  food.type = type;
  food.price = price;

  foodList.map((index) => (index.id == food.id ? food : index));
  res.status(200).json(food);
});

app.listen(port, () => {
  console.log("Server Berjalan");
});
