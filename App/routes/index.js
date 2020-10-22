const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'bluelightqld.org',
  user: 'blbl1529_DucAnh',
  password: 'DucAnh',
  database: 'blbl1529_QBLAIDB',
});
setInterval(function () {
  con.query('SELECT 1');
}, 5000);
const moment = require('moment')

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
  con.query("SELECT * FROM Volunteers", function (err, result) {
    if (err) throw err;
    res.send({
      data: result,
    })
  });
});


router.get('/expires1', function (req, res) {
  res.render('expires1');
});
router.get('/get-data-expires1', function (req, res) {
  con.query("SELECT * FROM Volunteers", function (err, result) {
    if (err) throw err;
    //const data = result.filter(item => Math.abs(moment(item.B_C_Expiry_Date).diff(moment(), 'days')) <= 7)
    const data = result.filter(item => ((moment(item.B_C_Expiry_Date).diff(moment(), 'days') <= 30) && (moment(item.B_C_Expiry_Date).diff(moment(), 'days') > 0)))
        res.send({
        data,
    })
  });
});
router.get('/a', function (req, res) {
  con.query("SELECT * FROM Volunteers", function (err, result) {
    if (err) throw err;
    const text = result.filter(item => ((moment(item.B_C_Expiry_Date).diff(moment(), 'days') <= 7) && (moment(item.B_C_Expiry_Date).diff(moment(), 'days') > 0)))
    console.log(text)
    //res.send(text);
    //console.log(text.Blue_Light_Branch);
    ;
  });
});


router.get('/get-data-table1', function (req, res) {
  con.query("SELECT * FROM Volunteers", function (err, result) {
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
  const sql = "INSERT INTO Volunteers (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted into volunteerr table");
    res.redirect('/table1')
  });
});
router.get('/update1/:id', function (req, res) {
  const sql = "SELECT * FROM Volunteers WHERE ID = '" + req.params.id + "'";
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
  const sql = "UPDATE Volunteers SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table1')
  });
});
router.post('/delete1', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM Volunteers WHERE ID = '" + id + "'";
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
  con.query("SELECT * FROM Affiliate_Members", function (err, result) {
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
  const sql = "INSERT INTO Affiliate_Members (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted into affiliate table");
    res.redirect('/table2')
  });
});
router.get('/update2/:id', function (req, res) {
  const sql = "SELECT * FROM Affiliate_Members WHERE ID = '" + req.params.id + "'";
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
  const sql = "UPDATE Affiliate_Members SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table2')
  });
});
router.post('/delete2', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM Affiliate_Members WHERE ID = '" + id + "'";
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
  con.query("SELECT * FROM Associate_Members", function (err, result) {
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
  const sql = "INSERT INTO Associate_Members (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted into associate table");
    res.redirect('/table3')
  });
});
router.get('/update3/:id', function (req, res) {
  const sql = "SELECT * FROM Associate_Members WHERE ID = '" + req.params.id + "'";
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
  const sql = "UPDATE Associate_Members SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table3')
  });
});
router.post('/delete3', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM Associate_Members WHERE ID = '" + id + "'";
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
  con.query("SELECT * FROM Award_Recipients", function (err, result) {
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
  const sql = "INSERT INTO Award_Recipients (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted into award_recipients table");
    res.redirect('/table4')
  });
});
router.get('/update4/:id', function (req, res) {
  const sql = "SELECT * FROM Award_Recipients WHERE ID = '" + req.params.id + "'";
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
  const sql = "UPDATE Award_Recipients SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table4')
  });
});
router.post('/delete4', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM Award_Recipients WHERE ID = '" + id + "'";
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
  con.query("SELECT * FROM QPS_AGM_Invites", function (err, result) {
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
  const sql = "INSERT INTO QPS_AGM_Invites (" + colArray.join(', ') + ") VALUES (" + dataArray.join(', ') + ")";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("1 record inserted into qps_agm_invites table");
    res.redirect('/table5')
  });
});
router.get('/update5/:id', function (req, res) {
  const sql = "SELECT * FROM QPS_AGM_Invites WHERE ID = '" + req.params.id + "'";
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
  const sql = "UPDATE QPS_AGM_Invites SET " + colArray.join(', ') + " WHERE ID = '" + req.body['ID'] + "'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.redirect('/table5')
  });
});
router.post('/delete5', function (req, res) {
  const { id } = req.body
  const sql = "DELETE FROM QPS_AGM_Invites WHERE ID = '" + id + "'";
  con.query(sql, function (err, result) {
    if (err) throw err; 
    console.log("Number of records deleted in qps_agm_invites table : " + result.affectedRows);
    res.send('deleted')
  });
});

module.exports = router;
