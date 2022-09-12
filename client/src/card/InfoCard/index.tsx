import React from 'react'
import { ActionCardProp } from '@/domain/card/actionCard'
import { placeCardTemplate } from '@/domain/card/placeCard'
import BaseCard from '../BaseCard'
import {
  CardName,
  CardType,
  IconImage,
  KeyWords,
  RightBottom,
  SceneMainContent,
} from '../BaseCard/components'

const PlaceCardFront: React.FC<{
  card?: ActionCardProp
  callback?: (canvas: HTMLCanvasElement) => void
}> = ({ card = placeCardTemplate, callback }) => {
  return (
    <BaseCard callback={callback}>
      <CardName name={card.name} ruby={card.nameRuby} />

      <IconImage iconKey="MdPlace" />
      <CardType text={`場所`} />
      <KeyWords items={card.keywords} />

      <SceneMainContent effect={card.effect} flavor={card.flavor} />
      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
export default PlaceCardFront
