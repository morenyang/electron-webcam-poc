import {app, BrowserWindow} from 'electron'

const isDevelopment = process.env.NODE_ENV === 'development'

console.log(process.env.NODE_ENV)

const uiUrl = isDevelopment
  ? 'http://localhost:3010'
  : `file://${__dirname}/ui/dist/index.html`

const shadowUrl = isDevelopment
  ? 'http://localhost:3011'
  : `file://${__dirname}/shadow/dist/index.html`

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {nodeIntegration: true},
  })

  const shadowWindow = new BrowserWindow({
    webPreferences: {nodeIntegration: true},
    closable: isDevelopment,
    resizable: isDevelopment,
    frame: isDevelopment,
    show: isDevelopment,
  })

  mainWindow.loadURL(uiUrl)
  mainWindow.show()
  shadowWindow.loadURL(shadowUrl)
  if (isDevelopment) {
    shadowWindow.show()
  }
})
