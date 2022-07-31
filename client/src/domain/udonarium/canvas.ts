import { MimeType } from '../image/mimeType'
import { calcSHA256Async } from './FileReaderUtil'

export const getCanvasBlob = (canvas: HTMLCanvasElement): Promise<Blob> =>
  new Promise((resolve, reject) =>
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject())),
  )

export const canvasToFile = async (canvas: HTMLCanvasElement) => {
  const blob = await getCanvasBlob(canvas)
  const identifier = await calcSHA256Async(blob)
  return {
    file: new File([blob], identifier + '.' + MimeType.extension(blob.type), {
      type: blob.type,
    }),
    identifier,
  }
}
