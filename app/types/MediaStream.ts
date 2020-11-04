export enum MediaStreamEventChannel {
  ON_MEDIA_STREAM_READY = 'ON_MEDIA_STREAM_READY',
  ON_REQUEST_MEDIA_STREAM = 'ON_REQUEST_MEDIA_STREAM',
  ON_REQUEST_MEDIA_STREAM_REPLY = 'ON_REQUEST_MEDIA_STREAM_REPLY',
}

export interface MediaStreamMessage {
  stream: MediaStream | null
}
