const {app, BrowserWindow} = require('electron')

const server = require('./app');

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    minWidth: 768,
    minHeight: 568,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL('http://localhost:3000')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('resize', function(e,x,y){
  mainWindow.setSize(x, y);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
