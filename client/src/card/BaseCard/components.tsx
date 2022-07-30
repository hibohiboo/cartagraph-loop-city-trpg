import React from 'react'
import { Rect, Image, Group } from 'react-konva'
import { useIconImage } from '@/domain/konva/useIconImage'

// 基本フォントサイズ
const fontSize = 14
const textPagging = 6
// カードの横幅ガイド src\styles\kakuriyogarden\card\index.scssより
const leftGap = 5
const innerLeft = 60 + leftGap
const innerLeftLabel = innerLeft + textPagging
const attrLabel = 60 + innerLeftLabel + textPagging

// カードの縦幅ガイド
const innerTop = 20 - 5
const cardName = 26 + innerTop - 15
const tagsY = 24 + cardName
const pictTop = 20 + tagsY
const range_ = 20 + pictTop + textPagging
const target_ = 20 + range_
const count = 20 + target_
const exp = 20 + count
const mainContent = 20 + exp
const cellSize = 50

export const IconImage: React.FC = () => {
  const pad = 2
  const imageSize = cellSize - pad * 2
  const [image] = useIconImage('FaTag', imageSize)
  return (
    <>
      <Group width={imageSize}>
        <Image
          x={leftGap + pad}
          y={pictTop + pad}
          image={image}
          size={cellSize}
        />
        <Rect
          x={leftGap}
          y={pictTop}
          width={cellSize}
          height={cellSize}
          stroke={'black'}
          strokeWidth={1}
        />
      </Group>
    </>
  )
}
