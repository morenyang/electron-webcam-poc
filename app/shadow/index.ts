import {ipcRenderer} from 'electron'
import {MediaStreamEventChannel} from '../types/MediaStream'

let mediaStream: MediaStream | null = null
let cameraElement: HTMLVideoElement | null = null

function enableMediaStream() {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
    })
    .then(stream => {
      mediaStream = stream
      cameraElement = document.getElementById('camera') as HTMLVideoElement
      cameraElement.srcObject = stream
      ipcRenderer.send(MediaStreamEventChannel.ON_MEDIA_STREAM_READY)
    })
}

enableMediaStream()
