const { Article } = require('../../models');

Article.create({
    title : 'Hello World',
    body : 'Lorem Ipsum Dolor sit amet',
    approved: true
}).then(article => {
    console.log(article);
});