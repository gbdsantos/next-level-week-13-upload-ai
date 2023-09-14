import { FFmpeg } from '@ffmpeg/ffmpeg'

import coreURL from '../ffmpeg/ffmpeg/ffmepeg-core.js?url'
import wasmURL from '../ffmpeg/ffmpeg/ffmepeg-core.wasm?url'
import workerURL from '../ffmpeg/ffmpeg/ffmepeg-worker.js?url'

let ffmepeg: FFmpeg | null

export async function getFFmpeg() {
  if (ffmepeg) {
    return ffmepeg
  }

  ffmepeg = new FFmpeg()

  if(!ffmepeg.loaded) {
    await ffmepeg.load({
      coreURL,
      wasmURL,
      workerURL
    })
  }

  return ffmepeg
}
