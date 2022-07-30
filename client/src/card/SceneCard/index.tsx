import React, { useRef } from 'react'
import BaseCard from '../BaseCard'
import { Stage, Layer, Rect, Image } from 'react-konva'
import { useIconImage } from '@/domain/konva/useIconImage'
import {
  CardName,
  CardType,
  IconImage,
  KeyWords,
  TimingProperty,
} from '../BaseCard/components'
type SceneCard = {
  name: string
  nameRuby: string
  keywords: string[]
}
const card: SceneCard = {
  name: '捜査の基本は脚',
  nameRuby: ' そうさ       きほん      あし',
  keywords: ['情報', '攻撃', '防御', '活劇'],
}
const SceneCard: React.FC = ({ children }) => {
  return (
    <BaseCard>
      <CardName name={card.name} ruby={card.nameRuby} />
      <IconImage iconKey="MdOndemandVideo" />
      <CardType text="シーン" />
      <KeyWords items={card.keywords} />
      <TimingProperty />
    </BaseCard>
  )
}
export default SceneCard
