import React, { useRef } from 'react'
import BaseCard from '../BaseCard'
import { Stage, Layer, Rect, Image } from 'react-konva'
import { useIconImage } from '@/domain/konva/useIconImage'
import { CardName, IconImage } from '../BaseCard/components'
type SceneCard = {
  name: string
  nameRuby: string
}
const card: SceneCard = {
  name: 'テスト',
  nameRuby: ' て す と',
}
const SceneCard: React.FC = ({ children }) => {
  return (
    <BaseCard>
      <CardName name={card.name} ruby={card.nameRuby} />
      <IconImage iconKey="MdOndemandVideo" />
    </BaseCard>
  )
}
export default SceneCard
