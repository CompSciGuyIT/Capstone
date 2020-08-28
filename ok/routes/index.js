const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Revilo551gna5V',
  database: 'ducanhtest',
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!!!');
});

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page' });
});

// table 1
router.get('/table1', function (req, res) {
  res.render('table1');
});
router.get('/get-data-table1', function (req, res) {
  con.query("SELECT * FROM table1", function (err, result) {
    if (err) throw err;
    res.send({
      data: result,
    })
  });
});
router.get('/create1', function (req, res) {
  res.render('create1', { title: 'Create' });
});
router.post('/create1', function (req, res) {
  let colArray = []
  let dataArray = []
  for (const key in req.body) {
    const element = req.body[key];
    colArray = [
      ...colArray,
      key
    ]
    dataArray = [
      ...dataArray,
      `'${element}'`
    ]
  }
  const sql = "INSERT INTO table1 (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted");
    res.redirect('/table1')
  });
});
router.get('/update1/:id', function (req, res) {
  const sql = "SELECT * FROM table1 WHERE ID = '" + req.params.id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.render('update1', { title: 'Update', data: result[0] });
  });
});
router.post('/update1', function (req, res) {
  let colArray = []
  for (const key in req.body) {
    const element = req.body[key];
    colArray = [
      ...colArray,
      `${key} = '${element}'`
    ]
  }
  const sql = "UPDATE table1 SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table1')
  });
});
router.post('/delete1', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM table1 WHERE ID = '" + id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
    res.send('deleted')
  });
});

// table 2

// table 3

// table 4

// table 5

module.exports = router;
