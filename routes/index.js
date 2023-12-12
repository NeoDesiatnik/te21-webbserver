const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index.njk', { title: 'Welcome to Los Pollos Hermanos' })
})

module.exports = router
