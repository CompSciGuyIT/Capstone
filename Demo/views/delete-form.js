// const fs = require('fs-extra');
const FormData = require('form-data');

document.getElementById("save-btn").addEventListener("click", () => {

    conn.query('DELETE FROM bluelight * WHERE firstname="Amy"')
    .then(res => {
        console.log(res);
    });       
}, false);