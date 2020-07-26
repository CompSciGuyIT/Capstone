const {ipcRenderer} = require('electron');

let saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
    let famName = document.forms["myForm"]["family_name"].value;
    let fstName = document.forms["myForm"]["first_name"].value;
    let vol_email = document.forms["myForm"]["vol_email"].value;
    let vol_phone = document.forms["myForm"]["vol_phone"].value;

    let returns = [
        famName,
        fstName,
        vol_email,
        vol_phone
    ]

    ipcRenderer.send('createSend', returns)
}, false);

ipcRenderer.on('createReply', (event, args) => {
    console.log(args);
});