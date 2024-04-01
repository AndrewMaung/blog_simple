const express = require('express')
const app = express()
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')

mongoose.connect("mongodb://localhost/blog")

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : false }))


app.get('/', (req,res) =>{
    const articles = [{
        title: "Test article",
        createdAt: new Date,
        description: "Test description"
    },
    {
        title: "Test article2",
        createdAt: new Date,
        description: "Test description2"
    }]
    res.render("articles/index", { articles : articles })
})

app.listen(5000)

app.use('/articles',articleRouter)