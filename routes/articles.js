const express = require('express')
const router = express()

router.get('/new',(req,res) => {
    res.render('articles/new')
})


module.exports = router