import React, {useEffect, useRef, useState} from 'react'
import {useInterval} from 'react-use'

export const Camera: React.FC = () => {
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useInterval(() => {}, 1000)

  useEffect(() => {
    if (videoRef.current != null) {
      videoRef.current.srcObject = mediaStream
    }
  }, [mediaStream])

  return (
    <div>
      <video autoPlay ref={videoRef}></video>
    </div>
  )
}
