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

// table 111111111111111111111
router.get('/table1', function (req, res) {
  res.render('table1');
});
router.get('/get-data-table1', function (req, res) {
  con.query("SELECT * FROM volunteerr", function (err, result) {
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
  const sql = "INSERT INTO volunteerr (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted into volunteerr table");
    res.redirect('/table1')
  });
});
router.get('/update1/:id', function (req, res) {
  const sql = "SELECT * FROM volunteerr WHERE ID = '" + req.params.id + "'";
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
  const sql = "UPDATE volunteerr SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table1')
  });
});
router.post('/delete1', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM volunteerr WHERE ID = '" + id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted in volunteer table: " + result.affectedRows);
    res.send('deleted')
  });
});








// table 222222222222222222222
router.get('/table2', function (req, res) {
  res.render('table2');
});
router.get('/get-data-table2', function (req, res) {
  con.query("SELECT * FROM affiliate", function (err, result) {
    if (err) throw err;
    res.send({
      data: result,
    })
  });
});
router.get('/create2', function (req, res) {
  res.render('create2', { title: 'Create' });
});
router.post('/create2', function (req, res) {
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
  const sql = "INSERT INTO affiliate (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted into affiliate table");
    res.redirect('/table2')
  });
});
router.get('/update2/:id', function (req, res) {
  const sql = "SELECT * FROM affiliate WHERE ID = '" + req.params.id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.render('update2', { title: 'Update', data: result[0] });
  });
});
router.post('/update2', function (req, res) {
  let colArray = []
  for (const key in req.body) {
    const element = req.body[key];
    colArray = [
      ...colArray,
      `${key} = '${element}'`
    ]
  }
  const sql = "UPDATE affiliate SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table2')
  });
});
router.post('/delete2', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM affiliate WHERE ID = '" + id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err; 
    console.log("Number of records deleted in affiliate table : " + result.affectedRows);
    res.send('deleted')
  });
});










///////////////////////// table 3
router.get('/table3', function (req, res) {
  res.render('table3');
});
router.get('/get-data-table3', function (req, res) {
  con.query("SELECT * FROM associate", function (err, result) {
    if (err) throw err;
    res.send({
      data: result,
    })
  });
});
router.get('/create3', function (req, res) {
  res.render('create3', { title: 'Create' });
});
router.post('/create3', function (req, res) {
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
  const sql = "INSERT INTO associate (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted into associate table");
    res.redirect('/table3')
  });
});
router.get('/update3/:id', function (req, res) {
  const sql = "SELECT * FROM associate WHERE ID = '" + req.params.id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.render('update3', { title: 'Update', data: result[0] });
  });
});
router.post('/update3', function (req, res) {
  let colArray = []
  for (const key in req.body) {
    const element = req.body[key];
    colArray = [
      ...colArray,
      `${key} = '${element}'`
    ]
  }
  const sql = "UPDATE associate SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table3')
  });
});
router.post('/delete3', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM associate WHERE ID = '" + id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err; 
    console.log("Number of records deleted in associate table : " + result.affectedRows);
    res.send('deleted')
  });
});











/////////////// TABLE 4
router.get('/table4', function (req, res) {
  res.render('table4');
});
router.get('/get-data-table4', function (req, res) {
  con.query("SELECT * FROM award_recipients", function (err, result) {
    if (err) throw err;
    res.send({
      data: result,
    })
  });
});
router.get('/create4', function (req, res) {
  res.render('create4', { title: 'Create' });
});
router.post('/create4', function (req, res) {
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
  const sql = "INSERT INTO award_recipients (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted into award_recipients table");
    res.redirect('/table4')
  });
});
router.get('/update4/:id', function (req, res) {
  const sql = "SELECT * FROM award_recipients WHERE ID = '" + req.params.id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.render('update4', { title: 'Update', data: result[0] });
  });
});
router.post('/update4', function (req, res) {
  let colArray = []
  for (const key in req.body) {
    const element = req.body[key];
    colArray = [
      ...colArray,
      `${key} = '${element}'`
    ]
  }
  const sql = "UPDATE award_recipients SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table4')
  });
});
router.post('/delete4', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM award_recipients WHERE ID = '" + id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err; 
    console.log("Number of records deleted in award_recipients table : " + result.affectedRows);
    res.send('deleted')
  });
});








//////////////////TABLE5

router.get('/table5', function (req, res) {
  res.render('table5');
});
router.get('/get-data-table5', function (req, res) {
  con.query("SELECT * FROM qps_agm_invites", function (err, result) {
    if (err) throw err;
    res.send({
      data: result,
    })
  });
});
router.get('/create5', function (req, res) {
  res.render('create5', { title: 'Create' });
});
router.post('/create5', function (req, res) {
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
  const sql = "INSERT INTO qps_agm_invites (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted into qps_agm_invites table");
    res.redirect('/table4')
  });
});
router.get('/update5/:id', function (req, res) {
  const sql = "SELECT * FROM qps_agm_invites WHERE ID = '" + req.params.id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.render('update5', { title: 'Update', data: result[0] });
  });
});
router.post('/update5', function (req, res) {
  let colArray = []
  for (const key in req.body) {
    const element = req.body[key];
    colArray = [
      ...colArray,
      `${key} = '${element}'`
    ]
  }
  const sql = "UPDATE qps_agm_invites SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table5')
  });
});
router.post('/delete5', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM qps_agm_invites WHERE ID = '" + id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err; 
    console.log("Number of records deleted in qps_agm_invites table : " + result.affectedRows);
    res.send('deleted')
  });
});

module.exports = router;
