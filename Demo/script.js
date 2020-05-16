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

    // Only for demo
    // conn.query('DROP TABLE bluelight')

    // conn.query('CREATE TABLE IF NOT EXISTS bluelight (familyName CHAR(50), firstName CHAR(50), email CHAR(50), phone CHAR(50))')
    
    // conn.query('INSERT INTO bluelight (familyName, firstName, email, phone) VALUES ("Brown", "Baxter", "bbrown@email.com", "0405987654")')
    // conn.query('INSERT INTO bluelight (familyName, firstName, email, phone) VALUES ("Cliff", "Susan", "cliffy@email.com", "0409452976")')
    // conn.query('INSERT INTO bluelight (familyName, firstName, email, phone) VALUES ("McInnes", "Steve", "mcinn@email.com", "0424057295")')
    // conn.query('INSERT INTO bluelight (familyName, firstName, email, phone) VALUES ("Duncan", "Wendy", "wendy@email.com", "0433683023")')
    // conn.query('INSERT INTO bluelight (familyName, firstName, email, phone) VALUES ("Harrap", "Nicole", "nicky@email.com", "0405967231")')
    // conn.query('INSERT INTO bluelight (familyName, firstName, email, phone) VALUES ("Cruz", "David", "dcruz@email.com", "0408673970")')

    document.getElementById("create-btn").addEventListener("click", () => {
        conn.query('INSERT INTO bluelight (familyName, firstName, email, phone) VALUES ("Marshall", "Amy", "marshall@email.com", "0412345678")')
        .then(res => {
            console.log(res);
        });       
    }, false);

    document.getElementById("retrieve-btn").addEventListener("click", () => {
        conn.query('SELECT * FROM bluelight WHERE phone="0409452976"')
        .then(res => {
            console.log(res);
        });
    }, false);
    
    document.getElementById("update-btn").addEventListener("click", () => {
        conn.query('UPDATE bluelight SET email="amy@email.com" WHERE firstName="Amy"')
        .then(res => {
            console.log(res);
        });
    }, false);
    
    document.getElementById("delete-btn").addEventListener("click", () => {
        conn.query('DELETE FROM bluelight WHERE firstName="Amy"')
        .then(res => {
            console.log(res);
        });
    }, false);
    
    // document.getElementById("save-btn").addEventListener("click", () => {
    //     const fam_name = document.getElementById( "theText" );
    //     const fir_name = document.getElementById( "theText" );
    //     const Mid_name = document.getElementById( "theText" );
    //     const email = document.getElementById( "theText" );
    //     const password = document.getElementById( "theText" );
    //     const address = document.getElementById( "theText" );
    //     const address2 = document.getElementById( "theText" );
    //     const city = document.getElementById( "theText" );
    //     const state = document.getElementById( "theText" );
    //     const zip = document.getElementById( "theText" );
    //     const check = document.getElementById( "theText" );
    // }, false);

}).catch((err) => {
	return console.log('Connection Failure: ' + err)
});