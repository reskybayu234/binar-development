const express = require("express");
const mahasiswa = require("./db/mahasiswa.json");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/v1/mahasiswa/:id", (req, res) => {
  const mh = mahasiswa.find((m) => m.id == req.params.id);
  res.status(200).json(mh);
});

app.get("/api/v1/mahasiswa", (req, res) => {
  res.status(200).json(mahasiswa);
});

app.post("/api/v1/mahasiswa", (req, res) => {
  const { nama, NIM } = req.body;
  const id = mahasiswa[mahasiswa.length - 1].id + 1;
  const mh = {
    id,
    nama,
    NIM,
  };
  mahasiswa.push(mh);
  res.status(201).json(mahasiswa);
});

app.listen(port, () => console.log("Server Berjalan"));
