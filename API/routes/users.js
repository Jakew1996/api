var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'supermarketitems'
})
/* GET users listing. */
router.get('/', function (req, res, next) {
  if (!connection._connectCalled) {
    connection.connect();
  }

  connection.query('SELECT * FROM items', (err, rows, fields) => {
    if (err) throw err

    res.send(rows);
  })


});

module.exports = router;




