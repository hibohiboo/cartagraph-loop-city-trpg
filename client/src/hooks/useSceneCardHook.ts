import { useCallback, useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { createSceneCard, SceneCardProp } from '@/domain/card/sceneCard'
import { createXML } from '@/domain/card/udonariumZip'
import { useImage } from '@/domain/konva/useImage'
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

  const ref = useRef<HTMLDivElement>(null)
  const [url, setUrl] = useState('')
  const [image] = useImage(url)
  useEffect(() => {
    ;(async () => {
      if (ref.current == null) return
      // そのままだとぼやけるので、2倍に出力して0.5に縮小する
      const canvas = await html2canvas(ref.current, { width: 210, scale: 2 })
      setUrl(canvas.toDataURL('img/png'))
    })()
  }, [sceneCard.flavor])
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
    flavor: {
      image,
      ref,
    },
  }
}
