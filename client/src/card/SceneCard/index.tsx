import React from 'react'
import { cardTemplate, SceneCardProp } from '@/domain/card/sceneCard'
import BaseCard from '../BaseCard'
import {
  CardBackImage,
  CardName,
  CardType,
  IconImage,
  KeyWords,
  LocationProperty,
  RightBottom,
  SceneMainContent,
  TimingProperty,
} from '../BaseCard/components'

const SceneCardFront: React.FC<{
  card?: SceneCardProp
  callback?: (canvas: HTMLCanvasElement) => void
}> = ({ card = cardTemplate, callback }) => {
  return (
    <BaseCard callback={callback}>
      <CardName name={card.name} ruby={card.nameRuby} />
      <IconImage iconKey="MdOndemandVideo" />
      <CardType text="シーン" />
      <KeyWords items={card.keywords} />
      <TimingProperty value={card.timing} />
      <LocationProperty value={card.location} />
      <SceneMainContent effect={card.effect} flavor={card.flavor} />
      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
export default SceneCardFront
export const SceneCardBack: React.FC<{
  callback?: (canvas: HTMLCanvasElement) => void
}> = ({ callback }) => {
  return (
    <BaseCard callback={callback}>
      <CardType text="シーン" />
      <CardBackImage iconKey="MdOndemandVideo" />
      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
