import {app, BrowserWindow} from 'electron'

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow()
  mainWindow.loadURL('https://github.com')
  mainWindow.show()
})
