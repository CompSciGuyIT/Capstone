const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createWindow() {
    // Create the browser window.
    let mainWindow = new BrowserWindow ({
        width: 640,
        height: 480,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    mainWindow.loadURL(url.format ({
        pathname: path.join(__dirname, 'views', 'app.html'),
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