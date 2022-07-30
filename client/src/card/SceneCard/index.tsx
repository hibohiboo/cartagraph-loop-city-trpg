import React, { useRef } from 'react'
import BaseCard from '../BaseCard'
// 基本フォントサイズ
const fontSize = 14
import { Stage, Layer, Rect, Image } from 'react-konva'
import { FaTag } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { useIconImage } from '@/domain/konva/useIconImage'

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
const SceneCard: React.FC = ({ children }) => {
  const [image] = useIconImage('FaTag', 50)

  return (
    <>
      <BaseCard>
        <Rect
          x={leftGap}
          y={pictTop}
          width={cellSize}
          height={cellSize}
          stroke={'black'}
          strokeWidth={1}
          size={50}
        />
        <Image x={leftGap} y={pictTop} image={image} size={50} />
      </BaseCard>
    </>
  )
}
export default SceneCard
