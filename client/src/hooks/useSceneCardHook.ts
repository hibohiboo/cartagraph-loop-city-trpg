import { useCallback, useState } from 'react'
import { createSceneCard, SceneCardProp } from '@/domain/card/sceneCard'
import { createXML } from '@/domain/card/udonariumZip'
import { canvasToFile } from '@/domain/udonarium/canvas'
import { createZip, getDoc } from '@/domain/udonarium/common'

export const useSceneCardHook = (sceneCard: SceneCardProp) => {
  const [frontCanvas, setFront] = useState<HTMLCanvasElement | null>(null)
  const [backCanvas, setBack] = useState<HTMLCanvasElement | null>(null)
  const createZipHandler = async () => {
    if (!frontCanvas) return
    if (!backCanvas) return
    const doc = getDoc()
    const front = await canvasToFile(frontCanvas)
    const back = await canvasToFile(backCanvas)

    const card = createSceneCard(
      doc,
      sceneCard.name,
      front.identifier,
      back.identifier,
      sceneCard,
    )

    const xml = createXML(sceneCard.name, doc, card)
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
