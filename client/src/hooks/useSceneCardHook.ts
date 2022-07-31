import { useCallback, useState } from 'react'
import {
  createCard,
  createCardRoot,
  createCardStack,
} from '@/domain/card/udonariumZip'
import { canvasToFile } from '@/domain/udonarium/canvas'
import { createZip, getDoc } from '@/domain/udonarium/common'

export const useSceneCardHook = () => {
  const [frontCanvas, setFront] = useState<HTMLCanvasElement | null>(null)
  const [backCanvas, setBack] = useState<HTMLCanvasElement | null>(null)
  const createZipHandler = async () => {
    if (!frontCanvas) return
    if (!backCanvas) return
    const doc = getDoc()
    const front = await canvasToFile(frontCanvas)
    const back = await canvasToFile(backCanvas)

    const card = await createCard(
      doc,
      'シーン',
      front.identifier,
      back.identifier,
    )
    // const stack = await createCardStackElment(doc, 'シーン')
    const root = await createCardRoot(doc, [card])
    const s = await createCardStack('シーン', doc, [root])
    await createZip([s, front.file, back.file])
  }
  return {
    frontProp: {
      callback: useCallback((canvas: HTMLCanvasElement) => {
        setFront(canvas)
      }, []),
    },
    backProp: {
      callback: useCallback((canvas: HTMLCanvasElement) => {
        setBack(canvas)
      }, []),
    },
    createZipHandler: createZipHandler,
  }
}
