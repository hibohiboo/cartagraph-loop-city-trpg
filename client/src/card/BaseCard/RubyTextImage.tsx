import React, { useEffect, useState } from 'react'
import { Image } from 'react-konva'
import html2canvas from 'html2canvas'
import { useImage } from '@/domain/konva/useImage'
import { textToIncludeRubyTagsTextSnitized } from '@/domain/ruby'
import type { ImageConfig } from 'konva/lib/shapes/Image'

const RubyTextImage: React.FC<Partial<ImageConfig> & { flavor: string }> = (
  props,
) => {
  const flavor = props.flavor
  const [url, setUrl] = useState('')
  const [image] = useImage(url)

  useEffect(() => {
    const divElm = document.getElementById('forHtml2CanvasElementContainer')
    if (!divElm) return
    const htmlArea = document.createElement('div')
    htmlArea.innerHTML = textToIncludeRubyTagsTextSnitized(flavor)
    divElm.appendChild(htmlArea)
    ;(async () => {
      // そのままだとぼやけるので、2倍に出力して0.5に縮小する
      const canvas = await html2canvas(htmlArea, {
        width: 210,
        scale: 2,
      })
      setUrl(canvas.toDataURL('img/png'))
      htmlArea.remove()
    })()
  }, [flavor])

  return <Image {...props} image={image} />
}

export default RubyTextImage
