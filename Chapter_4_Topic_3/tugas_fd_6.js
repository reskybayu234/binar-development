const express = require("express");
const app = express();
const port = 3000;

app.get("/api/v1/hitungTotal", (req, res) => {
  const angka1 = req.query.angka1 || 0;
  const angka2 = req.query.angka2 || 0;
  const total = parseInt(angka1) + parseInt(angka2);
  console.log(req.query);
  res.status(200).json({ total: total });
});

app.listen(port, () => {
  console.log("server berjalan");
});
