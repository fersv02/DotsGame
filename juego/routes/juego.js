var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('juego', { title: 'Juego Agarra Bolas' });
});

module.exports = router;
