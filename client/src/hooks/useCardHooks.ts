import { useCallback, useState } from 'react'
import { createCard, createXML } from '@/domain/card/udonariumZip'
import { canvasToFile } from '@/domain/udonarium/canvas'
import { createZip, getDoc } from '@/domain/udonarium/common'

export const useSceneCardHook = (cardName: string) => {
  const [frontCanvas, setFront] = useState<HTMLCanvasElement | null>(null)
  const [backCanvas, setBack] = useState<HTMLCanvasElement | null>(null)
  const createZipHandler = async () => {
    if (!frontCanvas) return
    if (!backCanvas) return
    const doc = getDoc()
    const front = await canvasToFile(frontCanvas)
    const back = await canvasToFile(backCanvas)

    const card = createCard(doc, cardName, front.identifier, back.identifier)
    // const stackElement = await createCardStackElment(doc, 'シーン')
    // const root = createCardRoot(doc, [card])
    // const stack = createCardStackXML('シーンカード', doc, [root])
    const xml = createXML(cardName, doc, card)
    await createZip([xml, front.file, back.file])
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
