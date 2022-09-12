import React from 'react'
import { InfoCardProp, infoCardTemplate } from '@/domain/card/infoCard'
import BaseCard from '../BaseCard'
import {
  CardName,
  CardType,
  IconImage,
  KeyWords,
  RightBottom,
  SceneMainContent,
} from '../BaseCard/components'

const InfoCardFront: React.FC<{
  card?: InfoCardProp
  callback?: (canvas: HTMLCanvasElement) => void
}> = ({ card = infoCardTemplate, callback }) => {
  return (
    <BaseCard callback={callback}>
      <CardName name={card.name} ruby={card.nameRuby} />

      <IconImage iconKey="MdOutlineDescription" />
      <CardType text={`情報/${card.subType}`} />
      <KeyWords items={card.keywords} />

      <SceneMainContent effect={card.effect} flavor={card.flavor} />
      <RightBottom value="icon: Material Design icons" />
    </BaseCard>
  )
}
export default InfoCardFront
