const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index.njk', { title: 'Los Pollos Hermanos' })
})

router.get('/about', function (req, res) {
  res.render('about.njk', { title: 'About Los Pollos Hermanos' })
})

router.get('/menu', function (req, res) {
  res.render('menu.njk', { title: 'Los Pollos Hermanos Menu' })
})

module.exports = router
