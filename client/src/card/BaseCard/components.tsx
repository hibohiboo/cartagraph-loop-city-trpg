import React from 'react'
import { Rect, Image, Group, Text } from 'react-konva'
import { useIconImage, UseIconsKey } from '@/domain/konva/useIconImage'
const family = {
  gothic:
    '"Hiragino Maru Gothic ProN", "BIZ UDGothic", "Meiryo", "YuKyokasho Yoko", "M PLUS Rounded 1c",' + // 丸ゴシック
    '"Hiragino Sans W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif', // 角ゴシック
  serif:
    '"游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif',
  fontawesome: '"Font Awesome 5 Free", "Font Awesome 5 Brands"',
}
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

export const IconImage: React.FC<{ iconKey: UseIconsKey }> = ({
  iconKey: key,
}) => {
  const pad = 5
  const imageSize = cellSize - pad * 2
  const [image] = useIconImage(key, imageSize)
  return (
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
        strokeWidth={2}
      />
    </Group>
  )
}
export const CardName: React.FC<{ ruby: string; name: string }> = ({
  ruby,
  name,
}) => (
  <Group>
    <Text
      x={leftGap}
      y={innerTop}
      fontSize={fontSize * 0.7}
      fontFamily={family.gothic}
      text={ruby}
      shadowEnabled={false}
    />
    <Text
      x={leftGap}
      y={cardName}
      fontSize={fontSize * 1.5}
      fontFamily={family.gothic}
      text={`${name}`}
      shadowEnabled={false}
    />
  </Group>
)
