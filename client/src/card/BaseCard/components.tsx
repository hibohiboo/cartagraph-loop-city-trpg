import React from 'react'
import { Rect, Image, Group, Text, Line } from 'react-konva'
import { useIconImage, UseIconsKey } from '@/domain/konva/useIconImage'
export const canvasWidth = 242
export const canvasHight = 342

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
const leftGap = 10
const innerLeft = 60 + leftGap

const innerLeftIcon = innerLeft
const innerLeftLabel = innerLeftIcon + fontSize + textPagging
const attrLabel = 60 + innerLeftLabel + textPagging

// カードの縦幅ガイド
const innerTop = 10
const rubyTop = innerTop + 15
const cardName = 13 + rubyTop
const tagsY = 26 + cardName
const pictTop = 25 + tagsY
const timing_ = pictTop + 5
const range_ = 20 + pictTop + textPagging
const target_ = 20 + range_
const count = 20 + target_
const exp = 20 + count
const mainContent = 20 + exp

// カード内コンポーネント情報
const cellSize = 50
const dataAreaHeight = 100

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
      y={rubyTop}
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
{
  /* 右上 */
}
export const CardType: React.FC<{ text: string }> = ({ text }) => (
  <Text
    x={innerLeft}
    y={innerTop}
    fontSize={fontSize}
    fontFamily={family.gothic}
    text={`${text}`}
    shadowEnabled={false}
    align={'right'}
    width={canvasWidth - innerLeft - 10}
  />
)

const TagText: React.FC<{ text: string; y: number; x: number }> = ({
  text,
  y,
  x,
}) => {
  const tagFontSize = 14
  return (
    <Group>
      <Rect
        x={x}
        y={y}
        width={text.length * (tagFontSize + 4) + 7}
        height={tagFontSize + 7}
        fill={'teal'}
        stroke={'teal'}
        strokeWidth={1}
        cornerRadius={5}
      />
      <Text
        x={x + 5}
        y={y + 5}
        text={text}
        letterSpacing={4}
        fill={'white'}
        fontSize={tagFontSize}
        // lineHeight={2.1}
        // cornerRadius={5}
      />
    </Group>
  )
}

export const KeyWords: React.FC<{ items: string[] }> = ({ items: tags }) => {
  return (
    <Group>
      {/* tag */}
      {tags.map((t, i) =>
        i === 0 ? (
          <TagText key={i} text={t} y={tagsY} x={leftGap} />
        ) : (
          <TagText
            key={i}
            text={t}
            y={tagsY}
            x={
              leftGap +
              tags
                .filter((_, j) => j < i)
                .reduce((a, b) => a + b.length * fontSize + 18, 0)
            }
          />
        ),
      )}
    </Group>
  )
}

const PropertyUnderLine: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <Line
    x={x}
    y={y}
    strokeWidth={1}
    points={[0, 0, 160, 0]}
    stroke={'black'}
    tension={1}
  />
)

const PropetyWithLabel: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  const [image] = useIconImage('MdAccessTime')
  return (
    <Group>
      <Image x={innerLeftIcon} y={timing_} image={image} />
      <Text
        x={innerLeftLabel}
        y={timing_}
        fontSize={fontSize * 0.8}
        fontFamily={family.gothic}
        text={label}
        shadowEnabled={false}
      />
      <Text
        x={attrLabel}
        y={pictTop + 5}
        fontSize={fontSize * 0.8}
        fontFamily={family.gothic}
        text={value}
        shadowEnabled={false}
      />
      <PropertyUnderLine
        x={innerLeft}
        y={range_ - Math.ceil(textPagging / 2)}
      />
    </Group>
  )
}

export const TimingProperty: React.FC<{}> = () => {
  return <PropetyWithLabel label="タイミング" value="幕間" />
}
