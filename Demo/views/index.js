// const mariadb = require('mariadb')

// mariadb.createConnection({
//     host: '127.0.0.1', 
//     user: 'root', 
//     password: '', 
//     database: 'team'
// })
// .then((conn) => {
//     console.log('Connection Established!');

//     console.log(conn.serverVersion());

//     document.getElementById("create-btn").addEventListener("click", () => {
//         conn.query('INSERT INTO bluelight (familyName, firstName, email, phone) VALUES ("Marshall", "Amy", "marshall@email.com", "0412345678")')
//         .then(res => {
//             console.log(res);
//         });       
//     }, false);

//     document.getElementById("retrieve-btn").addEventListener("click", () => {
//         conn.query('SELECT * FROM bluelight WHERE phone="0409452976"')
//         .then(res => {
//             console.log(res);
//         });
//     }, false);
    
//     document.getElementById("update-btn").addEventListener("click", () => {
//         conn.query('UPDATE bluelight SET email="amy@email.com" WHERE firstName="Amy"')
//         .then(res => {
//             console.log(res);
//         });
//     }, false);
    
//     document.getElementById("delete-btn").addEventListener("click", () => {
//         conn.query('DELETE FROM bluelight WHERE firstName="Amy"')
//         .then(res => {
//             console.log(res);
//         });
//     }, false);

// }).catch((err) => {
// 	return console.log('Connection Failure: ' + err)
// });