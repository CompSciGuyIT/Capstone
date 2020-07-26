const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const mariadb = require('mariadb')

const connection = mariadb.createPool({
    host: '127.0.0.1', 
    user: 'root', 
    password: '', 
    database: 'team',
    connectionLimit: 5 
});

function createWindow() {
    // Create the browser window.
    let mainWindow = new BrowserWindow ({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    mainWindow.loadURL(url.format ({
        pathname: path.join(__dirname, 'views', 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    mainWindow.webContents.on("new-window",function(event,url){
        event.preventDefault();
        shell.openExternal(url);
    })

    // or Ctrl-Shift-I when app is running
    mainWindow.webContents.openDevTools()
} 

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Connect to and query database
connection.getConnection()
    .then(conn => {
        console.log("connected ! connection id is " + conn.threadId);
        conn.release(); //release to pool
        console.log("released connection to pool");
    })
    .catch(err => {
        console.log("not connected due to error: " + err);
    });

ipcMain.on('createSend', (event, args) => {
    // console.log(args);
    // event.sender.send('createReply','Main: message received!'); 

    connection.query('INSERT INTO bluelight (familyName, firstName, email, phone) VALUES (?, ?, ?, ?)', args, function (error, results, fields) {
        if (error) {
            console.log(error);
            throw error;
        }
        console.log(results); 
    });
});

