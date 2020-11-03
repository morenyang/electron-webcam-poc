import {app, BrowserWindow} from 'electron'

const isDevelopment = process.env.NODE_ENV === 'development'

const uiUrl = isDevelopment
  ? 'http://localhost:3010'
  : `file://${__dirname}/ui/dist/index.html`

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow()
  mainWindow.loadURL(uiUrl)
  mainWindow.show()
})
