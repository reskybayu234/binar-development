const express = require('express');
const app = express();
const port = 3000;
const { Registrasi } = require('./models');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// VIEW ENGINE
app.set("view engine", "ejs");
app.get("/api/v1/registrasi", (req,res) => {
    res.render("registrasi_form");
})

app.get("/api/v1/registrasi/:id", (req,res) => {
    Registrasi.findOne({
        where : { id : req.params.id}
    }).then(registers => {
        // res.render("find_one", { registers })
        res.status(200).json(registers);
    })
})

app.post("/api/v1/registrasi", (req,res) => {
    Registrasi.create({
        nama: req.body.nama,
        tanggal_lahir : req.body.ttl,
        pekerjaan : req.body.pekerjaan,
        email : req.body.email,
        password : req.body.password
    }).then(regist => {
        res.status(201).json(regist);
    }).catch(err => {res.status(500).json("Can't post data")})
})

app.post("/api/v1/registrasi", (req,res) => {
    const { nama, ttl, email, password } = req.body;

    const post = {
        nama,
        ttl,
        email,
        password
    }

    res.status(200).json(post);
})

app.listen(port, () => {
    console.log("Server Berjalan");
})