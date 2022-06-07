const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const posts = require("./db/posts.json");
const foodList = require("./db/food-list.json");
// app.get("/sabrina.jpg", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "sabrina.jpg"));
// });
app.use(express.static("public/image"));

app.get("/api/v1/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/api/v1/foods", (req, res) => {
  res.status(200).json(foodList);
});

app.get("/api/v1/foods/:name", (req, res) => {
  const food = foodList.find((food) => food.name == req.params.name);
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

app.listen(port, () => {
  console.log("Server Berjalan");
});
