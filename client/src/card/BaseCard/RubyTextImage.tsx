import React, { useEffect, useState } from 'react'
import { Image } from 'react-konva'
import html2canvas from 'html2canvas'
import { useImage } from '@/domain/konva/useImage'
import { textToIncludeRubyTagsTextSnitized } from '@/domain/ruby'
import type { ImageConfig } from 'konva/lib/shapes/Image'
const createRubyTextDivElement = (flavor: string, width: number) => {
  const htmlArea = document.createElement('div')
  htmlArea.innerHTML = textToIncludeRubyTagsTextSnitized(flavor)
  htmlArea.style.whiteSpace = 'pre-line'
  htmlArea.style.backgroundColor = 'white'
  htmlArea.style.width = `${width}px`
  htmlArea.style.color = 'black'
  htmlArea.style.fontSize = '11.5px'
  htmlArea.style.fontFamily = `'游明朝', YuMincho, 'Hiragino Mincho ProN W3','ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'HG明朝E','ＭＳ Ｐ明朝', 'ＭＳ 明朝', serif`

  return htmlArea
}
// そのままだとぼやけるので、2倍に出力して0.5に縮小する
const SCALE = 2
const SCALE_RESTORE = 1 / SCALE
const RubyTextImage: React.FC<
  Partial<ImageConfig> & { flavor: string; width: number }
> = (props) => {
  const flavor = props.flavor
  const [url, setUrl] = useState('')
  const [image] = useImage(url)

  useEffect(() => {
    const divElm = document.getElementById('forHtml2CanvasElementContainer')
    if (!divElm) return
    const htmlArea = createRubyTextDivElement(flavor, props.width)
    divElm.appendChild(htmlArea)
    ;(async () => {
      const canvas = await html2canvas(htmlArea, {
        width: props.width,
        scale: SCALE,
      })
      setUrl(canvas.toDataURL('img/png'))
      htmlArea.remove()
    })()
  }, [flavor])

  return (
    <Image
      {...props}
      width={undefined}
      image={image}
      scaleX={SCALE_RESTORE}
      scaleY={SCALE_RESTORE}
    />
  )
}

export default RubyTextImage
