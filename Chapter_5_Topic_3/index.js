const express = require('express');
const app = express();
const { Article } = require('./models');
const port = 3000;

app.use(express.json())

// GET all articles
app.get("/article",(req,res)=>{
    Article.findAll().then(articles=>{res.status(200).json(articles)})
})

// GET article by ID
app.get("/article/:id",(req,res)=>{
    Article.findOne({
        where: { id: req.params.id}
    }). then(articles =>{res.status(200).json(articles)});
});

// POST an article
app.post("/article", (req,res)=>{
    Article.create({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    }).then(article => {
        res.status(201).json(article)
    }).catch(err => {res.status(500).json("Can't create article")})
})

// PUT an article
app.put("/article/:id",(req,res)=>{
    Article.update({
        title : req.body.title,
        body : req.body.body,
        approved : req.body.approved
    }, {
        where : { id : req.params.id }
    }).then(()=> {
        res.status(200).json("Article updated");
    }).catch(err => {
        res.status(500).json("Can't update article");
    });
})

// DELETE an article
app.delete('/article/:id',(req,res)=>{
    Article.destroy({
        where : { id : req.params.id }
    }).then(()=>{res.status(200).json("Article deleted")}).catch(err => {res.status(500).json("Can't delete article")})
})

app.listen(port,function(){
    console.log("Server Berjalan");
})