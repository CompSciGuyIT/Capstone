const mariadb = require('mariadb')

mariadb.createConnection({
    host: '127.0.0.1', 
    user: 'root', 
    password: '', 
    database: 'team'
})
.then((conn) => {
    console.log('Connection Established!');

    console.log(conn.serverVersion());

    conn.query('CREATE TABLE IF NOT EXISTS members (firstName CHAR(50), lastName CHAR(50), email CHAR(50))');

    document.getElementById("create-btn").addEventListener("click", () => {
        conn.query('INSERT INTO members (firstName, lastName, email) VALUES ("Suzie", "Q", "suzie@email.com")')
        .then(res => {
            console.log(res);
        });       
    }, false);

    document.getElementById("retrieve-btn").addEventListener("click", () => {
        conn.query('SELECT * FROM members WHERE firstName="Suzie"')
        .then(res => {
            console.log(res);
        });
    }, false);
    
    document.getElementById("update-btn").addEventListener("click", () => {
        conn.query('UPDATE members SET email="q.suz@email.com" WHERE firstName="Suzie"')
        .then(res => {
            console.log(res);
        });
    }, false);
    
    document.getElementById("delete-btn").addEventListener("click", () => {
        conn.query('DELETE FROM members WHERE firstName="Suzie"')
        .then(res => {
            console.log(res);
        });
    }, false);

}).catch((err) => {
	return console.log('Connection Failure: ' + err)
});